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
    <div className='relative inline-block px-2 justify-center items-center text-center'>
      <Link href={href} className='inline-block text-center'>
        <div className='relative top-0 left-0 w-full hover:wgt-600 inline-block text-center'>
          {children}
        </div>
      </Link>
    </div>
  )
}
