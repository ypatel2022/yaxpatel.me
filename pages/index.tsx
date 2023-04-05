import React, { useState } from 'react'
import Head from 'next/head'

import {
  NavLink,
  ContactButton,
  MobileNavLink,
  ExternalLink,
  Project,
  Cursor,
} from '@/components'

import { ProjectType } from '@/types'

import projects from './data/projects.json'

import {
  GitHubIcon,
  LogoIcon,
  MenuIcon,
  RightArrowIcon,
  LinkedInIcon,
  InfoIcon,
} from '@/components/icons'
import Link from 'next/link'

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
        className={`transition-ease-in-out fixed bottom-auto left-0 top-0 z-50 w-full bg-dark py-5 text-sm md:bg-dark md:text-light ${''}`}
      >
        <div
          className={`ml-auto mr-auto flex max-w-7xl items-center justify-between px-10 xl:px-0`}
        >
          <Link
            className="wght-600 mouse-hover-sm group w-full flex-grow justify-between"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            <div className="mouse-hover-sm flex items-center gap-2">
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

          <div className="hidden flex-1 items-center justify-end gap-10 md:flex lg:gap-14">
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
      </nav>
      {/* mobile menu */}
      <div
        className={`transition-ease-in-out fixed z-50 mt-[4.25rem] h-screen w-full border-t border-[#2f2f32] bg-dark px-10 text-white transition-all md:hidden ${
          menuOpen ? '-translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="grid select-none grid-cols-1 gap-4 pt-4">
          <MobileNavLink setMenuOpen={setMenuOpen} href="/#about">
            about
          </MobileNavLink>
          <MobileNavLink setMenuOpen={setMenuOpen} href="/#experience">
            experience
          </MobileNavLink>
          <MobileNavLink setMenuOpen={setMenuOpen} href="/#projects">
            projects
          </MobileNavLink>
          <MobileNavLink setMenuOpen={setMenuOpen} href="/Yax_Patel_Resume.pdf">
            resume
          </MobileNavLink>

          <Link
            scroll={false}
            onClick={() => setMenuOpen(false)}
            href="/#contact"
            className="my-2 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-light px-5 py-3 text-2xl leading-5 text-dark"
          >
            <div className="flex w-full gap-4">
              <div className="flex items-center gap-2">Contact</div>
              <RightArrowIcon />
            </div>
          </Link>
        </div>
      </div>

      <Cursor />

      <main className="">
        <section id="hero" className="mb-24 w-full">
          <div className="mx-auto flex h-screen max-w-7xl flex-col justify-center px-10 xl:px-0">
            <video
              autoPlay
              muted
              loop
              className="absolute left-0 top-0 h-full w-full object-cover"
              src="/bg.webm"
              style={{ filter: 'blur(30px) brightness(90%)' }}
            />

            <div className="hero-bg absolute left-0 top-0 z-20 h-full w-full object-cover opacity-0"></div>

            <div className="z-10">
              <h1 className="wght-600 pointer-events-none select-none items-center text-center text-7xl font-bold leading-snug sm:leading-relaxed md:text-[10rem] lg:text-[13rem] lg:leading-loose xl:text-[15rem] 2xl:text-[17rem]">
                Yax Patel
              </h1>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24">
          <div className="wght-700 md:project mx-auto max-w-7xl px-5 text-6xl md:px-10 xl:px-0">
            <div className="pb-8">About</div>
          </div>
          <div className="mx-auto max-w-7xl px-5 text-6xl md:px-10 xl:px-0">
            <p className="wght-500 text-2xl sm:text-3xl md:mt-16 lg:text-4xl">
              Hey, I&apos;m A Software Engineering student at McMaster
              University.
              <br />
              I&apos;m passionate about creating innovative software solutions.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-24">
          <div className="wght-700 md:project mx-auto max-w-7xl px-5 text-6xl md:px-10 xl:px-0">
            <div className="pb-8">Projects</div>
          </div>

          <div className="hidden grid-cols-1 md:grid">
            {projects.map((project: ProjectType, index: number) => (
              <Project key={index} index={index} data={project} />
            ))}
          </div>

          {/* mobile version */}
          <div className="grid grid-cols-1 gap-5 md:hidden">
            {projects.map((project, index) => (
              <div
                key={index}
                className="mx-5 max-h-fit rounded-xl p-4 text-white"
                style={{
                  background: `url(/project-backgrounds/project-background-${
                    index + 1
                  }.png)`,
                }}
              >
                <div className="wght-600 text-4xl">{project.title}</div>
                <div className="text-xl">{project.description}</div>
                <div className="mt-4 flex flex-col gap-2">
                  {project.links.map((link, index) => (
                    <ExternalLink key={index} href={link.link}>
                      {link.name}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="">
          <div className="wght-700 md:project mx-auto max-w-7xl px-5 text-6xl md:px-10 xl:px-0">
            <div className="pb-8">Contact</div>
          </div>

          <div className="mx-auto max-w-7xl px-5 md:px-10 xl:px-0">
            <p className="wght-500 text-2xl sm:text-3xl md:mt-16 lg:text-4xl">
              Thanks for checking out my website!
              <br />
              <br />
              Feel free to reach out to me at{' '}
              <a href="mailto:yaxpatel2004@gmail.com">
                yaxpatel2004@gmail.com
              </a>{' '}
              if you have any questions.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 md:flex">
              <ExternalLink
                icon={LinkedInIcon()}
                href="https://www.linkedin.com/in/yaxpatel2004/"
              >
                LinkedIn
              </ExternalLink>

              <ExternalLink
                icon={GitHubIcon()}
                href="https://github.com/ypatel2022"
              >
                GitHub
              </ExternalLink>

              <ExternalLink icon={InfoIcon()} href="/Yax_Patel_Resume.pdf">
                Resume
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="wght-500 w-full pb-6 pt-16">
        <div className="ml-auto mr-auto flex max-w-7xl items-center px-5 md:px-10 xl:px-0">
          <div className="flex-grow">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </div>

          <div className="">
            <Link
              scroll={false}
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href="https://github.com/ypatel2022/yaxpatel.me"
            >
              <div className="text-center transition-all hover:scale-110">
                <GitHubIcon />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
