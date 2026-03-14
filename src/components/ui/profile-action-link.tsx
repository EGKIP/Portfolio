import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'

import type { ProfileAction } from '../../data/site'
import { cn } from '../../lib/utils'

const actionIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  resume: FileText,
} as const

function getActionProps(action: ProfileAction) {
  if (action.external) {
    return { rel: 'noreferrer', target: '_blank' as const }
  }

  if (action.download) {
    return { download: true }
  }

  return {}
}

type ProfileActionLinkProps = {
  action: ProfileAction
  emphasized?: boolean
  className?: string
}

export function ProfileActionLink({ action, emphasized = false, className }: ProfileActionLinkProps) {
  const Icon = actionIcons[action.kind]

  return (
    <a
      href={action.href}
      {...getActionProps(action)}
      className={cn(
        'inline-flex items-center gap-2 py-1 text-sm transition',
        emphasized
          ? 'text-blue-100 hover:text-white'
          : 'text-slate-300 hover:text-blue-100',
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>{action.label}</span>
      <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
    </a>
  )
}