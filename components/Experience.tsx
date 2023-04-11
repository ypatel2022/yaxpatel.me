import React from 'react'
import { ExperienceType } from '@/types'
import { RightArrowIcon } from './icons'

const gradients = [
  'linear-gradient(to bottom right, #5433FF 25%, #20BDFF 50%, #A5FECB 75%)',
  'linear-gradient(75deg, #8e52a1 0%, #1015e4 60%, #020770 95%)',
  'linear-gradient(to bottom right, #26293f 25%, #304758 50%, #37777d 75%)',
  'linear-gradient(to bottom right, #020004 25%, #0d001b 50%, #100020 75%)',
]

export default function Experiences({
  data,
  index,
}: {
  data: ExperienceType
  index: number
}) {
  return (
    <div className="grid md:grid-cols-2 md:gap-5">
      <a
        className="mouse-hover-sm group block h-full w-full select-none rounded-t-xl bg-dark-accent p-4 transition-all hover:bg-dark-hover hover:pl-6 md:rounded-xl"
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative hidden md:block">
          <RightArrowIcon className="mouse-hover-sm absolute right-0 top-0 transition-all group-hover:right-2" />
        </div>

        <div className="mouse-hover-sm grid gap-4">
          <div className="md:wght-700 mouse-hover-sm wght-600 text-4xl leading-tight md:text-3xl">
            {data.position}
          </div>
          <div className="md:wght-700 mouse-hover-sm wght-600 text-4xl leading-tight md:text-3xl">
            {data.company}
          </div>

          <div className="mouse-hover-sm max-w-fit rounded-full bg-light px-5 py-2 text-sm uppercase leading-5 text-dark">
            {data.timeline}
          </div>
        </div>
      </a>
      <div
        className="animate-background rounded-b-xl md:rounded-xl"
        style={{
          background: gradients[index],
          backgroundSize: '200% 200%',
          animationDelay: `${index}s`,
        }}
      >
        <div className="wght-500 p-4 lg:text-xl">{data.description}</div>
      </div>
    </div>
  )
}
