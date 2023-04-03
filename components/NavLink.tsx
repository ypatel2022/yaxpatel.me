import Link from 'next/link'
import React, { useState } from 'react'

export default function NavLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  const [hover, setHover] = useState(false)

  return (
    <div className="relative inline-block items-center justify-center px-2 text-center">
      <Link
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        href={href}
        className="inline-block text-center"
      >
        <div className="invisible relative left-0 top-0 w-full text-center">
          {children}
        </div>
        <div className="absolute left-0 top-0 w-full transition-all duration-100 ease-in-out hover:font-bold">
          {children}
        </div>
      </Link>
    </div>
  )
}
