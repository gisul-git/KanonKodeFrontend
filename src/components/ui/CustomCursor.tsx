'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [clicking, setClicking] = useState(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    document.body.classList.add('custom-cursor-active')

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement
      setHovered(Boolean(target.closest('a, button')))
    }
    const onDown = () => {
      setClicking(true)
      window.setTimeout(() => setClicking(false), 140)
    }
    const onUp = () => setClicking(false)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          backgroundColor: '#14B8A6',
          transform: 'translate(-100px, -100px)',
          transition: 'transform 0ms, opacity 150ms, scale 180ms cubic-bezier(0.22, 1, 0.36, 1)',
          scale: clicking ? '2' : hovered ? '0' : '1',
          opacity: hovered ? 0 : 1,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          border: `1.5px solid ${hovered ? '#14B8A6' : '#4F46E5'}`,
          backgroundColor: hovered ? 'rgba(20,184,166,0.08)' : 'transparent',
          transform: 'translate(-100px, -100px)',
          transition: 'border-color 200ms, background-color 200ms, scale 200ms',
          scale: hovered ? '2.2' : '1',
        }}
      />
    </>
  )
}
