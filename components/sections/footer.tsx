import { MailIcon, PhoneIcon } from 'lucide-react'
import { MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import { FooterMap } from '@/components/sections/footer-map'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F5F7FF] pt-10">
      <div className="max-w-7xl mx-auto px-6 pb-8 border-b border-[#E2E8F0]">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {/* Company */}
          <div className="space-y-3 col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-black.png"
                alt="DC Software logo"
                width={130}
                height={130}
                sizes="160px"
                className="w-40 h-auto"
              />
            </div>
            <p className="text-sm text-[#334155] leading-relaxed">
              DCSoftware cung cấp giải pháp phần mềm, outsourcing và dịch vụ số cho doanh nghiệp.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/dcsoftware.vn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border hover:border-primary-2"
              >
                <Image
                  src="/icons/media/facebook.png"
                  alt="Facebook"
                  width={18}
                  height={18}
                  sizes="18px"
                  className="object-contain"
                />
              </a>
              <a
                href="https://zalo.me/3829922982069770498"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border hover:border-primary-2"
              >
                <span className="text-black font-bold text-sm">Zalo</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 col-span-1">
            <h4 className="text-sm font-semibold text-[#0B1F4A] uppercase tracking-wide">
              Dịch vụ
            </h4>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>Web Development</li>
              <li>Mobile App</li>
              <li>Backend API</li>
              <li>Tạo Landing Page</li>
              <li>Hệ thống chuyển đổi số</li>
              <li>Ứng dụng 360/3D</li>
              <li>UI/UX Design</li>
              <li>Others</li>
            </ul>
          </div>

          <div className="space-y-3 col-span-1">
            <h4 className="text-sm font-semibold text-[#0B1F4A] uppercase tracking-wide">
              Mô hình hợp tác
            </h4>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>Triển khai toàn bộ dự án</li>
              <li>Nhân sự theo tháng/dự án</li>
              <li>Kết hợp kinh doanh</li>
              <li>Tư vấn</li>
            </ul>
          </div>

          {/* Digital services */}
          <div className="space-y-3 col-span-1">
            <h4 className="text-sm font-semibold text-[#0B1F4A] uppercase tracking-wide">
              Dịch vụ số
            </h4>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>Cloud &amp; DevOps</li>
              <li>Bảo trì &amp; nâng cấp</li>
            </ul>
          </div>

          {/* Contact + Map */}
          <div className="space-y-3 col-span-2">
            <h4 className="text-sm font-semibold text-[#0B1F4A] uppercase tracking-wide">
              Liên hệ
            </h4>
            <ul className="space-y-3 text-sm text-[#475569]">
              <li className="flex items-start gap-2">
                <span className="mt-[3px] text-[#0B63E5]">
                  <MailIcon size={16} />
                </span>
                <span>digitalcenturysoftware@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] text-[#0B63E5]">
                  <PhoneIcon size={16} />
                </span>
                <span>034.996.4332</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] text-[#0B63E5]">
                  <MapPinIcon size={16} />
                </span>
                <span>
                  Tầng 18 Tòa nhà CEO Lô HH2-1 KĐT Mễ Trì Hạ, Đường Phạm Hùng, Phường Từ Liêm, TP Hà Nội, Việt Nam
                </span>
              </li>
            </ul>

            <FooterMap />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-[#475569]">
        <p>© {currentYear} DC Software</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="/privacy-policy" className="hover:text-[#0B63E5] transition-colors">
            Quyền riêng tư
          </a>
          <button className="hover:text-[#0B63E5] transition-colors">Điều khoản dịch vụ</button>
          <a
            href="/sitemap.xml"
            className="hover:text-[#0B63E5] transition-colors"
          >
            Sơ đồ website
          </a>
          {/* <button className="hover:text-[#0B63E5] transition-colors">...</button> */}
        </div>
      </div>
    </footer>
  )
}
