import Link from 'next/link'
import React, { useState } from 'react'
import RightArrowIcon from './icons/RightArrowIcon'

export default function MobileContactButton() {
  return (
    <Link
      href="/#contact"
      className="my-2 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-white px-5 py-3 text-2xl leading-5 text-black"
    >
      <div className="flex w-full gap-4">
        <div className="flex items-center gap-2">Contact</div>
        <RightArrowIcon />
      </div>
    </Link>
  )
}
