import React, { useState } from 'react'
import type { ProjectType } from '@/types'
import Link from 'next/link'
import ExternalLinkIcon from './icons/ExternalLinkIcon'

function ExternalLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="group relative flex max-w-fit items-center justify-center gap-4 overflow-hidden rounded-full bg-light px-5 py-2 leading-5 text-dark"
    >
      <div className="w-full">
        <div className="w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-12">
          <div className="flex items-center gap-2 whitespace-nowrap">
            {children}
          </div>
        </div>
        <div className="pointer-events-none absolute translate-y-2 select-none transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
          <div className="flex items-center gap-2">{children}</div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full transition-transform duration-700 ease-in-out group-hover:-translate-y-12">
          <ExternalLinkIcon />
        </div>
        <div className="pointer-events-none absolute translate-y-2 select-none transition-transform duration-700 ease-in-out group-hover:-translate-y-6">
          <ExternalLinkIcon />
        </div>
      </div>
    </Link>
  )
}

export default function Project({
  data,
  index,
}: {
  data: ProjectType
  index: number
}) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-full px-10 text-neutral-900 transition-all hover:text-white xl:px-0"
      style={{
        background: hover
          ? `url(/project-backgrounds/project-background-${index + 1}.png)`
          : `url(/project-backgrounds/project-background-default.png)`,
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-8 items-center gap-4 py-8">
        <div className="wght-700 col-span-5 text-6xl">{data.title}</div>
        <div className="col-span-3">
          {data.description}

          <div className="mt-4 flex gap-4">
            {data.links.map((link) => (
              <ExternalLink href={link.link}>{link.name}</ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
