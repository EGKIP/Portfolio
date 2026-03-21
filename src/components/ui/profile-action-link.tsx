import { Github, Linkedin, Mail } from 'lucide-react'
import type { ProfileAction } from '../../data/site'
import { cn } from '../../lib/utils'

const actionIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const

type ProfileActionLinkProps = {
  action: ProfileAction
  className?: string
}

export function ProfileActionLink({ action, className }: ProfileActionLinkProps) {
  const Icon = actionIcons[action.kind]
  const linkProps = action.external ? { target: '_blank', rel: 'noreferrer' } : {}

  return (
    <a
      href={action.href}
      {...linkProps}
      className={cn(
        'inline-flex items-center gap-2 text-sm transition-colors duration-150',
        'text-[var(--fg-muted)] hover:text-[var(--accent)]',
        className,
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span>{action.label}</span>
    </a>
  )
}