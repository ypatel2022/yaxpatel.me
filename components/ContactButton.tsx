import Link from 'next/link'
import React, { useState } from 'react'
import RightArrow from './icons/RightArrow'

const innerText = <div className='flex items-center gap-2'>Contact</div>

export default function ContactButton() {
  const [hover, setHover] = useState(false)

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-w-id='bfa746bb-bd94-d011-484b-676472e00a82'
      href='/#contact'
      className='overflow-hidden px-5 py-2 text-white flex items-center justify-center rounded-full bg-gray-950 leading-5'
    >
      <div className='w-full'>
        <div
          className={`transition-transform w-full ease-in-out duration-300 ${
            hover && '-translate-y-12'
          }`}
        >
          {innerText}
        </div>
        <div
          className={`absolute select-none pointer-events-none transition-transform ease-in-out duration-300 ${
            hover ? '-translate-y-5' : 'translate-y-2'
          }`}
        >
          {innerText}
        </div>
      </div>

      <div className='w-full'>
        <div
          className={`transition-transform w-full ease-in-out duration-700 ${
            hover && '-translate-y-12'
          }`}
        >
          <RightArrow />
        </div>
        <div
          className={`absolute select-none pointer-events-none transition-transform ease-in-out duration-700 ${
            hover ? '-translate-y-6' : 'translate-y-2'
          }`}
        >
          <RightArrow />
        </div>
      </div>
    </Link>
  )
}
