import Link from 'next/link'
import React from 'react'

export default function NavLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <div className='relative flex px-2 justify-center items-center'>
      <Link href={href} className='inline-block'>
        <div className='w-full block'>{children}</div>
      </Link>
    </div>
  )
}
