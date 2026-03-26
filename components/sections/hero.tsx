import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { scrollToSection } from '@/components/utils/scrollToSection'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center xl:h-screen h-[500px] md:h-[800px] overflow-hidden custom-blur"
    >
      <Image
        src="/images/hero-banner.jpg"
        alt="Vn Software - Đối tác triển khai phần mềm tin cậy"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover md:blur-none"
      />

      <div className="px-6 z-10 text-center xl:w-1/2 w-full absolute left-1/2 -translate-x-1/2 top-1/5">
        <div className="text-white w-full">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight text-balance">
            Đối tác triển khai
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
              Phần mềm tin cậy
            </span>
          </h1>
          <p className="text-gray-300 md:text-lg mb-6 leading-relaxed">
            Quy trình rõ ràng - Trải nghiệm khách hàng - Hỗ trợ tận tâm
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button
              type="button"
              onClick={() => scrollToSection('contact', 80)}
              className="custom-btn-bg-gradient transition-all transform hover:scale-105 px-8 h-[54px] text-white font-semibold rounded-full flex items-center justify-center gap-2 cursor-pointer"
            >
              Nhận báo giá dự án
              <ArrowRight size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('workflow', 80)}
              className="px-8 py-3 border-2 cursor-pointer border-cyan-400 text-cyan-300 font-semibold rounded-full hover:bg-cyan-400/10 transition-colors flex items-center justify-center gap-2"
            >
              <Play size={20} /> Xem quy trình
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
