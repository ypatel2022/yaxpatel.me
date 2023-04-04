import Link from 'next/link'
import React from 'react'
import RightArrowIcon from './icons/RightArrowIcon'

export default function ContactButton() {
  return (
    <Link
      href="/#contact"
      className="group/contact relative flex items-center justify-center overflow-hidden rounded-full bg-dark px-5 py-2 leading-5 text-light"
    >
      <div className="w-full">
        <div className="w-full transition-transform duration-300 ease-in-out group-hover/contact:-translate-y-12">
          <div className="flex items-center gap-2">Contact</div>
        </div>
        <div className="pointer-events-none absolute translate-y-2 select-none transition-transform duration-300 ease-in-out group-hover/contact:-translate-y-5">
          <div className="flex items-center gap-2">Contact</div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full transition-transform duration-700 ease-in-out group-hover/contact:-translate-y-12">
          <RightArrowIcon />
        </div>
        <div className="pointer-events-none absolute translate-y-2 select-none transition-transform duration-700 ease-in-out group-hover/contact:-translate-y-6">
          <RightArrowIcon />
        </div>
      </div>
    </Link>
  )
}
