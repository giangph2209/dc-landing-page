import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: "/icons/services/web-develop.png",
    title: "Web Development",
    description: "Thiết kế, xây dựng & triển khai website hiệu suất cao",
    tags: ["Website", "CMS", "Thương mại điện tử"],
  },
  {
    icon: "/icons/services/mobile-app.png",
    title: "Mobile App",
    description: "Phát triển ứng dụng di động mượt mà, tối ưu trải nghiệm",
    tags: ["iOS", "Android", "Đa nền tảng"],
  },
  {
    icon: "/icons/services/backend-api.png",
    title: "Backend & API",
    description: "Xây dựng hệ thống backend & API bảo mật, ổn định",
    tags: ["API", "Cơ sở dữ liệu", "Máy chủ"],
  },
  {
    icon: "/icons/services/cloud.png",
    title: "DevOps & Cloud",
    description: "Tối ưu hạ tầng, triển khai cloud linh hoạt, tự động hóa",
    tags: ["Cloud", "CI/CD", "Tự động hóa"],
  },
  {
    icon: "/icons/services/ui-ux.png",
    title: "UI/UX Design",
    description: "Thiết kế giao diện đẹp, trải nghiệm người dùng tối ưu",
    tags: ["Wireframe", "Prototype", "UX/ UI"],
  },
  {
    icon: "/icons/services/360.png",
    title: "360/3D",
    description: "Tạo nội dung 3D, trải nghiệm trực quan, sống động",
    tags: ["3D", "Animation", "Visualization"],
  },
  {
    icon: "/icons/services/landing-page.png",
    title: "Landing Pages",
    description: "Thiết kế landing page tối ưu chuyển đổi, thu hút",
    tags: ["Chuyển đổi", "Marketing", "SEO"],
  },
  {
    icon: "/icons/services/maintainer.png",
    title: "Maintenance",
    description: "Bảo trì hệ thống, cập nhật & hỗ trợ vận hành ổn định",
    tags: ["Hỗ trợ", "Cập nhật", "Vận hành"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
    >
      <Image
        src="/images/service-bg.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        quality={60}
        className="object-cover"
      />
      <div className="py-15">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp các giải pháp toàn diện cho mọi nhu cầu công
              nghệ của bạn, từ phát triển phần mềm đến hỗ trợ kỹ thuật
            </p>
            <div className="mt-4 mx-auto w-[180px] h-[6px] bg-gradient-primary rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              return (
                <div key={index} className="relative">
                  <div className="absolute top-1 left-0 w-full h-full rounded-[24px] bg-linear-to-r from-[#055FD1] to-[#00DBF2]" />
                  {/* Icon container with gradient */}
                  <div className="group flex flex-col justify-between cursor-pointer h-full relative custom-card-shadow custom-card-shadow-hover">
                    <div className="inline-block p-3">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={70}
                        height={70}
                        sizes="120px"
                      />
                    </div>
                    <div className="">
                      <h3 className="text-lg font-bold text-[#122D95] mb-2 px-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm px-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom accent dot */}
                    <div className="mt-4 flex items-center gap-2 justify-end">
                      <div className="bg-linear-to-r from-[#0057FB] to-[#00DCE5] rounded-full p-2 flex items-center justify-center hover:scale-110 transition-transform">
                        <ArrowRightIcon
                          size={18}
                          className="text-white font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
