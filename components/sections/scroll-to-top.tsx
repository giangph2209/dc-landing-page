'use client'

import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      setIsVisible(scrollY > 200)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 cursor-pointer right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#6BF2C6] to-[#279AE7] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
      aria-label="Cuộn lên đầu trang"
    >
      <ArrowUp size={20} />
    </button>
  )
}

