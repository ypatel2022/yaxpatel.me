import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { DownArrowIcon } from './icons'

export default function Test() {
  const [size, setSize] = useState(22)

  const [hide, setHide] = useState(true)

  const normalSize = 22
  const hoveredSize = 10

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      gsap.ticker.fps(200)
      gsap.set('.follower', { xPercent: -50, yPercent: -50 })
      gsap.to('.follower', { duration: 0.1, x: e.clientX, y: e.clientY })
    }

    const mouseOverHandler = (event: any) => {
      if (
        event.target.href ||
        event.target.classList.contains('mouse-hover-sm')
      ) {
        setSize(hoveredSize)
      }

      if (event.target.classList.contains('hero-bg')) {
        setHide(false)
      }
    }

    const mouseOutHandler = (event: any) => {
      if (event.target.href) {
        setSize(normalSize)
      }

      if (event.target.classList.contains('mouse-hover-sm')) {
        setSize(normalSize)
      }

      if (event.target.classList.contains('hero-bg')) {
        setHide(true)
      }
    }

    const mouseClickHandler = (event: any) => {
      if (event.target.classList.contains('hero-bg')) {
        window.location.href = '/#about'
        setHide(true)
      }
    }

    window.addEventListener('mousemove', mouseMoveHandler)
    window.addEventListener('mouseover', mouseOverHandler)
    window.addEventListener('mouseout', mouseOutHandler)
    window.addEventListener('click', mouseClickHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
      window.removeEventListener('mouseover', mouseOverHandler)
      window.removeEventListener('mouseout', mouseOutHandler)
      window.removeEventListener('click', mouseClickHandler)
    }
  }, [])

  return (
    <div
      className="follower cursor hidden h-24 w-24 items-center text-center md:flex"
      style={{
        height: size,
        width: size,
      }}
    >
      <DownArrowIcon
        className={`transition-all duration-300 ${
          hide ? 'scale-0' : 'scale-100'
        }`}
      />
    </div>
  )
}
