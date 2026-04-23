'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-teal-main text-white hover:bg-teal-hover hover:shadow-teal hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border-[1.5px] border-indigo-main text-indigo-main bg-transparent hover:bg-bg-tinted hover:-translate-y-0.5',
  ghost: 'text-text-secondary underline underline-offset-4 hover:text-indigo-main',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-5 py-2.5 text-sm rounded-lg',
  md: 'px-7 py-3.5 text-[15px] rounded-xl',
  lg: 'px-9 py-4.5 text-base rounded-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center gap-2 cursor-pointer font-medium transition-all duration-200',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={base} type="button">
      {children}
    </button>
  )
}
