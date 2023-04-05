import React, { useState } from 'react'
import type { ProjectType } from '@/types'
import { ExternalLinkIcon } from './icons'
import ExternalLink from './ExternalLink'

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
      className="project w-full bg-center px-10 text-white transition-all xl:px-0"
      style={{
        background: hover
          ? `url(/project-backgrounds/project-background-${index + 1}.png)`
          : `url(/project-backgrounds/project-background-default-dark.png)`,
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-8 items-center gap-4 py-8">
        <div className="wght-700 col-span-5 text-6xl">{data.title}</div>
        <div className="col-span-3">
          {data.description}

          <div className="mt-4 flex gap-4">
            {data.links.map((link) => (
              <ExternalLink key={link.name} href={link.link}>
                {link.name}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
