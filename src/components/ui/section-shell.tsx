import type { ReactNode } from 'react'

import { cn } from '../../lib/utils'
import { Container } from './container'

type SectionShellProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  children: ReactNode
  className?: string
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-20 border-t border-slate-800/80 py-16 sm:py-18 lg:py-20', className)}
    >
      <Container className="max-w-[860px]">
        <header>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-blue-200/80">{eyebrow}</p>
          <h2 className="mt-3 text-[1.9rem] leading-tight text-white sm:text-[2.15rem]">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
        </header>

        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}