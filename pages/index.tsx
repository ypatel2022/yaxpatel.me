import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import NavLink from '@/components/NavLink'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className='fixed w-full left-0 top-0 bottom-auto z-50 py-6'>
        <div className='flex max-w-7xl mr-auto ml-auto px-10 justify-between border-r-4'>
          <Link className='w-full' href='/'>
            Yax Patel
          </Link>

          <div className='static flex w-full justify-between items-stretch float-right'>
            <div className='flex w-full justify-between'>
              <div className='flex nav-center pl-24 justify-start items-center flex-1'>
                <NavLink href='/#about'>About</NavLink>
                <NavLink href='/#experience'>Experience</NavLink>
                <NavLink href='/#projects'>Projects</NavLink>
                <NavLink href='/Yax_Patel_Resume.pdf'>Resume</NavLink>
                <Link
                  className='overflow-hidden px-5 py-2 text-white justify-center rounded-full bg-gray-950 leading-5'
                  href='/'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className='mt-56'>
        <h1 className='text-9xl'>YAX PATEL</h1>A Software Engineering student at
        McMaster University. I&apos;m passionate about creating innovative
        software solutions.
      </main>
    </>
  )
}
