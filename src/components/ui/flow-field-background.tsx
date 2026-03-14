import { motion, useReducedMotion } from 'framer-motion'

import { cn } from '../../lib/utils'

const flowPaths = [
  'M -80 220 C 120 110, 260 140, 430 250 S 760 430, 980 300 S 1320 120, 1520 220',
  'M -40 520 C 180 420, 320 430, 500 520 S 840 720, 1110 580 S 1370 360, 1540 470',
] as const

const nodes = [
  { cx: 130, cy: 160, r: 3, delay: 0 },
  { cx: 430, cy: 250, r: 3, delay: 0.8 },
  { cx: 880, cy: 330, r: 3, delay: 1.6 },
  { cx: 1110, cy: 510, r: 2.5, delay: 2 },
] as const

type FlowFieldBackgroundProps = {
  className?: string
}

export function FlowFieldBackground({ className }: FlowFieldBackgroundProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(30,64,175,0.12),transparent_30%),linear-gradient(180deg,#05070b_0%,#07101b_44%,#09111a_100%)]" />
      <div className="absolute inset-0 opacity-12 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] bg-[linear-gradient(to_right,rgba(96,165,250,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:120px_120px]" />

      <motion.svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-28"
        animate={prefersReducedMotion ? undefined : { x: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="flow-field-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(96,165,250,0.24)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.18)" />
            <stop offset="100%" stopColor="rgba(147,197,253,0.1)" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#flow-field-gradient)" strokeWidth="1">
          {flowPaths.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              strokeLinecap="round"
              initial={{ pathLength: 0.9, opacity: 0.1 }}
              animate={
                prefersReducedMotion
                  ? { opacity: 0.12 }
                  : { pathLength: [0.88, 1, 0.9], opacity: [0.08, 0.14, 0.1] }
              }
              transition={{ duration: 20 + index * 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </g>

        <g className="hidden sm:block" fill="rgba(191,219,254,0.34)">
          {nodes.map((node) => (
            <motion.circle
              key={`${node.cx}-${node.cy}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              animate={prefersReducedMotion ? undefined : { opacity: [0.14, 0.28, 0.14], scale: [1, 1.18, 1] }}
              transition={{ duration: 9.5, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </g>
      </motion.svg>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#05070b] via-[#07101b]/80 to-transparent" />
    </div>
  )
}