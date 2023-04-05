import React from 'react'
import { ExternalLinkIcon } from './icons'
import Link from 'next/link'

export default function ExternalLink({
  children,
  href,
  icon,
}: {
  children: React.ReactNode
  href: string
  icon?: JSX.Element
}) {
  return (
    <Link
      scroll={false}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group relative flex max-w-fit items-center justify-center gap-4 overflow-hidden rounded-full bg-light px-5 py-2 leading-5 text-dark md:bg-dark md:text-light"
    >
      <div className="mouse-hover-sm w-full">
        <div className="w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-12">
          <div className="flex items-center gap-2 whitespace-nowrap">
            {children}
          </div>
        </div>
        <div className="pointer-events-none absolute translate-y-2 select-none transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
          <div className="flex items-center gap-2">{children}</div>
        </div>
      </div>

      <div className="mouse-hover-sm w-full">
        <div className="w-full transition-transform duration-700 ease-in-out group-hover:-translate-y-12">
          {icon || <ExternalLinkIcon />}
        </div>
        <div className="pointer-events-none absolute translate-y-2 select-none transition-transform duration-700 ease-in-out group-hover:-translate-y-5">
          {icon || <ExternalLinkIcon />}
        </div>
      </div>
    </Link>
  )
}
