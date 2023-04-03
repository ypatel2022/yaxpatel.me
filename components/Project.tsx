import React, { useState } from 'react'
import type { ProjectType } from '@/types'

function randomBackground() {
  const colors = [
    'bg-gradient-to-br from-black to-indigo-950',
    'bg-gradient-to-br from-teal-400 via-teal-300 to-teal-400',
  ]

  return ''
  return colors[Math.floor(Math.random() * colors.length)]
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
      className={`box bg-project-image w-full text-neutral-900 transition-all hover:text-white ${randomBackground()}`}
      style={{
        background: hover
          ? `url(/project-background-${index + 1}.png)`
          : `url(/project-background-default.png)`,
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-8 items-center gap-4 py-8">
        <div className="wght-700 col-span-5 text-6xl">{data.title}</div>
        <div className="col-span-3">{data.description}</div>
      </div>
    </div>
  )
}
