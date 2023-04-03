import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ContactButton from '@/components/ContactButton'
import MenuIcon from '@/components/icons/MenuIcon'
import LogoIcon from '@/components/icons/LogoIcon'
import React, { useState } from 'react'
import MobileNavLink from '@/components/MobileNavLink'
import MobileContactButton from '@/components/MobileContactButton'
import projects from './data/projects.json'
import Project from '@/components/Project'
import { ProjectType } from '@/types'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Yax Patel</title>
        <meta name="title" content="Yax Patel" />
        <meta name="description" content="My Portfolio Website" />
        <meta
          name="keywords"
          content="Portfolio, Web Developer, Software Engineer, McMaster University, McMaster University Engineering, McMaster University Software Engineering, Software Engineering, Yax Patel, Yax"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Yax Patel" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav
        className={`transition-ease-in-out fixed bottom-auto left-0 top-0 z-50 w-full py-5 text-[0.875em] md:bg-light md:text-black ${
          menuOpen ? 'bg-gray-950 text-white' : ''
        }`}
      >
        <div
          className={`ml-auto mr-auto flex max-w-7xl items-center justify-between px-10 xl:px-0 `}
        >
          <Link
            className="wght-600 group w-full flex-grow justify-between"
            href="/"
          >
            <div className="flex items-center gap-2">
              <div
                className={`-rotate-45 transition-transform duration-200 ease-in-out group-hover:rotate-45 ${
                  menuOpen && 'rotate-45'
                }`}
              >
                <LogoIcon />
              </div>
              Yax Patel
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-14 md:flex">
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#experience">Experience</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/Yax_Patel_Resume.pdf">Resume</NavLink>
            <ContactButton />
          </div>

          <div className="block md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
              title="Navigation Menu Toggle"
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`transition-ease-in-out mt-5 h-screen w-full border-t border-gray-500 bg-gray-950 px-10 text-white transition-all md:hidden ${
            menuOpen ? '-translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="pointer-events-none grid select-none grid-cols-1 gap-4 pt-4">
            <MobileNavLink setMenuOpen={setMenuOpen} href="/#about">
              about
            </MobileNavLink>
            <MobileNavLink setMenuOpen={setMenuOpen} href="/#experience">
              experience
            </MobileNavLink>
            <MobileNavLink setMenuOpen={setMenuOpen} href="/#projects">
              projects
            </MobileNavLink>
            <MobileNavLink
              setMenuOpen={setMenuOpen}
              href="/Yax_Patel_Resume.pdf"
            >
              resume
            </MobileNavLink>
            <MobileContactButton />
          </div>
        </div>
      </nav>

      <main className="">
        <section>
          <div className="mx-auto flex h-screen max-w-7xl flex-col justify-center">
            <h1 className="text-9xl">YAX PATEL</h1>
            <p className="text-4xl">
              A Software Engineering student at McMaster University.
              <br />
              I&apos;m passionate about creating innovative software solutions.
            </p>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 pt-4">
            {projects.map((project: ProjectType, index: number) => (
              <Project key={index} index={index} data={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
