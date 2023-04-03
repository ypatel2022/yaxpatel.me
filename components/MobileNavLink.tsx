import Link from 'next/link'
import React, { useState } from 'react'

export default function MobileNavLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  const [hover, setHover] = useState(false)

  return (
    <div className="relative inline-block items-center justify-center px-2 py-2 text-2xl">
      <Link
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        href={href}
        className="inline-block"
      >
        <div className="relative left-0 top-0 w-full">{children}</div>
      </Link>
    </div>
  )
}
