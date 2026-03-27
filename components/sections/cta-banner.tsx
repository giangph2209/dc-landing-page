import { CheckCircle, ChevronRight } from "lucide-react";
import ImageCTA from "@/public/images/cta/cta.png";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="py-15 px-6 relative overflow-hidden" >
      <div className="max-w-7xl mx-auto xl:px-6">
        {/* Main CTA Banner */}
        <div className="relative p-12" style={{
          backgroundImage: `url('/images/cta/background.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
          {/* Content */}
          <div className="relative">
            <div className="relative z-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
                Tư vấn miễn phí
              </h2>
              <div className="text-white/90 text-lg mb-8 max-w-xl text-balance text-shadow">
                <p>Chia sẻ nhu cầu của bạn, chúng tôi sẽ</p>
                <b>đề xuất giải pháp và lộ trình triển khai phù hợp.</b>
              </div>
              <div className="text-white/90 text-lg mb-8 max-w-xl text-balance text-shadow mt-4">
                <p className="flex items-center gap-2"><CheckCircle size={20} /> Phân tích nhu cầu</p>
                <p className="py-3 flex items-center gap-2"><CheckCircle size={20} /> Đề xuất giải pháp phù hợp</p>
                <p className="flex items-center gap-2"><CheckCircle size={20} /> Uớc lượng thời gian triển khai</p>
              </div>

              <a href="#contact" className="inline-flex items-center cursor-pointer gap-2 px-8 py-4 bg-linear-to-r from-cyan-300 to-teal-300 text-blue-900 font-bold rounded-full hover:shadow-xl hover:shadow-cyan-400/50 transition-all transform hover:scale-105">
                <span>Nhận tư vấn ngay</span>
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="absolute top-1/3 -translate-y-1/2 right-0 opacity-80 w-[300px] md:block hidden">
              <Image
                src={ImageCTA}
                alt="CTA Banner"
                width={300}
                height={253}
                loading="eager"
                sizes="(min-width: 768px) 300px, 0px"
                className="h-auto w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
