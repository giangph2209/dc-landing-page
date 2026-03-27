'use client'
import React from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { scrollToSection } from '@/components/utils/scrollToSection'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string>('hero')
  const visibleRatiosRef = React.useRef<Record<string, number>>({})

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const sectionIds = ['hero', 'services', 'workflow', 'capabilities', 'projects', 'certificates', 'contact']
    const elements = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((item): item is { id: string; el: HTMLElement } => Boolean(item.el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          visibleRatiosRef.current[id] = entry.isIntersecting ? entry.intersectionRatio : 0
        }

        let bestSection = 'hero'
        let bestRatio = 0

        for (const id of sectionIds) {
          const ratio = visibleRatiosRef.current[id] ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestSection = id
          }
        }

        setActiveSection(bestSection)
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-20% 0px -35% 0px' },
    )

    for (const { el } of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  const handleScrollTo = (id: string) => {
    scrollToSection(id, 80)
    setIsOpen(false)
  }

  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const getActiveSection = (id: string) => {
    if (isScrolled) {
      return activeSection === id ? 'text-[#03acdb]' : 'text-[#0B1F4A] hover:text-[#03acdb]'
    } else {
      return activeSection === id ? 'text-white' : 'text-gray-300 hover:text-white'
    }
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${isScrolled ? 'bg-white border-blue-100 shadow-sm' : 'bg-transparent border-blue-800/30'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-[18px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2" onClick={() => handleScrollTo('hero')}>
          <Image
            src={isScrolled ? '/images/logo-black.png' : '/images/logo.png'}
            alt="Logo"
            width={100}
            height={100}
            loading="eager"
            priority
            fetchPriority="high"
            sizes="180px"
            className="w-45"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            type="button"
            onClick={() => handleScrollTo('services')}
            className={`text-[16px] cursor-pointer font-semibold transition-colors ${getActiveSection('services')}`}
          >
            Dịch Vụ
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('workflow')}
            className={`text-[16px] font-semibold cursor-pointer transition-colors flex items-center gap-1 ${getActiveSection('workflow')}`}
          >
            Quy Trình
            {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg> */}
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('capabilities')}
            className={`text-[16px] font-semibold cursor-pointer transition-colors flex items-center gap-1 ${getActiveSection('capabilities')}`}
          >
            Năng lực kỹ thuật
            {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg> */}
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('projects')}
            className={`text-[16px] font-semibold cursor-pointer transition-colors ${getActiveSection('projects')}`}
          >
            Dự án tiêu biểu
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('certificates')}
            className={`text-[16px] font-semibold cursor-pointer transition-colors ${getActiveSection('certificates')}`}
          >
            Chứng chỉ
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3 w-[180px] justify-end">
          <button
            type="button"
            onClick={() => handleScrollTo('contact')}
            className={`bg-gradient-to-r transition-all transform hover:scale-105 text-white font-semibold from-[#6BF2C6] to-[#279AE7] px-6 py-2 cursor-pointer text-[16px] rounded-full`}
          >
            Liên hệ
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
          className={`lg:hidden ${isScrolled ? 'text-[#0B1F4A]' : 'text-white'
            }`}
          onClick={isOpen ? closeMenu : openMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu as right drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu}
          />
          {/* Drawer */}
          <div
            className={`absolute right-0 top-0 h-full w-full lg:max-w-xs bg-white shadow-2xl flex flex-col animate-duration-300}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo-black.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  sizes="180px"
                  className="w-45"
                />
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="text-[#0B1F4A]"
              >
                <X size={22} />
              </button>
            </div>

            {/* Menu items */}
            <div className="flex-1 px-6 py-6 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo('services')}
                className="text-left text-sm font-medium text-[#0B1F4A] hover:text-primary-2 transition-colors"
              >
                Dịch Vụ
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('workflow')}
                className="text-left text-sm font-medium text-[#0B1F4A] hover:text-primary-2 transition-colors"
              >
                Quy Trình
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('capabilities')}
                className="text-left text-sm font-medium text-[#0B1F4A] hover:text-primary-2 transition-colors"
              >
                Năng lực kỹ thuật
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="text-left text-sm font-medium text-[#0B1F4A] hover:text-primary-2 transition-colors"
              >
                Dự án tiêu biểu
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('certificates')}
                className="text-left text-sm font-medium text-[#0B1F4A] hover:text-primary-2 transition-colors"
              >
                Chứng chỉ
              </button>
            </div>

            {/* CTA in drawer */}
            <div className="px-6 pb-6">
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="w-full px-6 py-3 cursor-pointer bg-[#0B3AA9] text-white text-sm font-semibold rounded-full hover:bg-primary-2 transition-colors"
              >
                Liên hệ
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
