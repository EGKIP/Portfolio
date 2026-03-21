import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[780px] px-6 sm:px-10', className)}
      {...props}
    />
  )
}