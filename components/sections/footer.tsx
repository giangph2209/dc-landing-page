import React from 'react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left: Logo + copyright */}
        <div className="flex flex-col gap-1">
          <Image
            src="/images/logo-black.png"
            alt="DC Software logo"
            width={100}
            height={100}
            loading="lazy"
            className="w-45"
          />

          <p className="text-xs text-[#64748B] mt-4">
            © {currentYear} DC SoftWare. All rights reserved.
          </p>
        </div>

        {/* Center: Navigation links */}
        <nav className=" flex lg:justify-center justify-start">
          <ul className="flex flex-wrap items-center text-left gap-6 text-sm text-[#0B1F4A]">
            <li>
              <a href="#services" className="hover:text-primary-2 transition-colors">
                Dịch Vụ
              </a>
            </li>
            <li>
              <a href="#workflow" className="hover:text-primary-2 transition-colors">
                Quy Trình
              </a>
            </li>
            <li>
              <a href="#capabilities" className="hover:text-primary-2 transition-colors">
                Năng lực kỹ thuật
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary-2 transition-colors">
                Dự án tiêu biểu
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-primary-2 transition-colors">
                Chứng chỉ
              </a>
            </li>
          </ul>
        </nav>

        {/* Right: Social icons (tạm dùng ảnh placeholder) */}
        <div className="flex items-center lg:justify-center justify-start gap-3">
          {[
            { alt: 'Facebook', src: '/icons/media/facebook.png' },
            { alt: 'Zalo', src: 'zalo' },
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              aria-label={item.alt}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black hover:border-primary-2 hover:bg-gray-100 transition-colors"
            >
              {item.alt === 'Zalo' ? (
                <span className="text-black font-bold text-sm">Zalo</span>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                  loading="lazy"
                  className="object-contain"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
