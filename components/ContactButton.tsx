import Link from 'next/link'
import React, { useState } from 'react'
import RightArrowIcon from './icons/RightArrowIcon'

export default function ContactButton() {
  const [hover, setHover] = useState(false)

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href="/#contact"
      className="relative flex items-center justify-center overflow-hidden rounded-full bg-dark px-5 py-2 leading-5 text-light"
    >
      <div className="w-full">
        <div
          className={`w-full transition-transform duration-300 ease-in-out ${
            hover && '-translate-y-12'
          }`}
        >
          <div className="flex items-center gap-2">Contact</div>
        </div>
        <div
          className={`pointer-events-none absolute select-none transition-transform duration-300 ease-in-out ${
            hover ? '-translate-y-5' : 'translate-y-2'
          }`}
        >
          <div className="flex items-center gap-2">Contact</div>
        </div>
      </div>

      <div className="w-full">
        <div
          className={`w-full transition-transform duration-700 ease-in-out ${
            hover && '-translate-y-12'
          }`}
        >
          <RightArrowIcon />
        </div>
        <div
          className={`pointer-events-none absolute select-none transition-transform duration-700 ease-in-out ${
            hover ? '-translate-y-6' : 'translate-y-2'
          }`}
        >
          <RightArrowIcon />
        </div>
      </div>
    </Link>
  )
}
