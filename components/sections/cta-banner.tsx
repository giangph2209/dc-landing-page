import React from 'react'
import { ArrowRight } from 'lucide-react'
import CTABannerImage from '@/public/images/cta.png'
import Image from 'next/image'

export default function CTABanner() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto xl:px-6">
        {/* Main CTA Banner */}
        <div className="relative bg-[#4A65CD] p-12 rounded-3xl">
          {/* Content */}
          <div className="relative">
            <div className="relative z-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
                Tư vấn miễn phí
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl text-balance text-shadow">
                Chia sẻ nhu cầu của bạn, chúng tôi sẽ đề xuất giải pháp và lộ trình triển khai phù hợp.
              </p>

              <button className="inline-flex items-center cursor-pointer gap-2 px-8 py-4 bg-gradient-to-r from-cyan-300 to-teal-300 text-blue-900 font-bold rounded-full hover:shadow-xl hover:shadow-cyan-400/50 transition-all transform hover:scale-105">
                <span>Nhận tư vấn ngay</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="absolute top-0 right-0 opacity-10 h-full w-[250px] md:block hidden">
              <Image
                src={CTABannerImage}
                alt="CTA Banner"
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
