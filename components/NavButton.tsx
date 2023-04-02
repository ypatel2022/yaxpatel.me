import Link from 'next/link'
import React, { useState } from 'react'

export default function NavButton({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false)

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='overflow-hidden px-5 py-2 text-white justify-center rounded-full bg-gray-950 leading-5'
      href='/'
    >
      {children}
    </Link>
  )
}
