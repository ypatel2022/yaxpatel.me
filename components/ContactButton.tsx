import React from 'react'
import Link from 'next/link'
import { RightArrowIcon } from './icons'

export default function ContactButton({ className }: { className?: string }) {
  return (
    <Link
      scroll={false}
      href="/#contact"
      className={`group/contact mouse-hover-sm relative flex items-center justify-center overflow-hidden rounded-full bg-light px-5 py-2 leading-5 text-dark ${className}`}
    >
      <div className="mouse-hover-sm w-full">
        <div className="w-full transition-transform duration-300 ease-in-out group-hover/contact:-translate-y-12">
          <div className="flex items-center gap-2">Contact</div>
        </div>
        <div className="pointer-events-none absolute translate-y-2 select-none transition-transform duration-300 ease-in-out group-hover/contact:-translate-y-5">
          <div className="flex items-center gap-2">Contact</div>
        </div>
      </div>

      <div className="mouse-hover-sm w-full">
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
