import Image from 'next/image'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { MapPinIcon } from 'lucide-react'

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
                loading="lazy"
                className="w-40 h-auto"
              />
            </div>
            <p className="text-sm text-[#64748B] leading-relaxed">
              DCSoftware cung cấp giải pháp phần mềm, outsourcing và dịch vụ số cho doanh nghiệp.
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed pr-2">
              Mã số doanh nghiệp: 0110917293 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 18/12/2024.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border hover:border-primary-2"
              >
                <Image
                  src="/icons/media/facebook.png"
                  alt="Facebook"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
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
              Phát triển ứng dụng
            </h4>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>Web Development</li>
              <li>Mobile App</li>
              <li>DevOps & Cloud</li>
              <li>360/3D</li>
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

            <div className="mt-3 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
              <div className="relative w-full pt-[40%]">
                <iframe
                  title="DCSoftware Location"
                  src="https://www.google.com/maps?q=Tầng%2018%20Tòa%20nhà%20CEO%20Lô%20HH2-1%20KĐT%20Mễ%20Trì%20Hạ,%20Đường%20Phạm%20Hùng,%20Phường%20Từ%20Liêm,%20Hà%20Nội,%20Việt%20Nam&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-[#94A3B8]">
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
