import React, { useState } from "react";
import { ArrowRightIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Landing Page Customizable",
    description:
      "Cấu hình giao diện landing page động thông qua hệ thống CMS quản trị",
    tags: ["Landing Page", "Configuration", "Website"],
    image: "/images/projects/image-1.jpg",
  },
  {
    id: 2,
    title: "Code Artifact Tool for Developer",
    description:
      "Xây dựng hệ thống lưu trữ và quản lý artifact (pull/push) cho developer và DevOps",
    tags: ["Code Artifact", "DevOps", "Technical"],
    image: "/images/projects/image-2.jpg",
  },
  {
    id: 3,
    title: "Code Deployment Tool for Developer",
    description:
      "Xây dựng hệ thống deployment tự động hỗ trợ developer và DevOps",
    tags: ["Code Deploy", "DevOps Tool", "Technical"],
    image: "/images/projects/image-3.png",
  },
  {
    id: 4,
    title: "Lambda System for Developers",
    description:
      "Phát triển hệ thống cho phép chạy function tương tự AWS Lambda",
    tags: ["Lambda Function", "Serverless", "DevOps"],
    image: "/images/projects/image-4.jpg",
  },
  {
    id: 5,
    title: "Website bán hàng viễn thông",
    description:
      "Xây dựng website bán SIM, gói data và thiết bị viễn thông, tích hợp thanh toán ví điện tử",
    tags: ["E-commerce", "Telecom", "E-wallet"],
    image: "/images/projects/image-5.jpg",
  },
  {
    id: 6,
    title: "Monitoring System",
    description: "Hệ thống giám sát và cảnh báo cho hạ tầng và ứng dụng",
    tags: ["Monitoring", "Infrastructure", "Maintenance"],
    image: "/images/projects/image-6.jpg",
  },
  {
    id: 7,
    title: "CI/CD Pipeline Tool",
    description: "Xây dựng công cụ pipeline hỗ trợ CI/CD tự động cho developer",
    tags: ["CI/CD", "DevOps Tool", "Automation"],
    image: "/images/projects/image-7.jpg",
  },
  {
    id: 8,
    title: "Face Recognition System",
    description:
      "Xây dựng module nhận diện khuôn mặt cho nhân viên trong công ty",
    tags: ["AI", "Face Recognition", "Automation"],
    image: "/images/projects/image-8.jpg",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  React.useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  React.useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const nextSlide = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const totalDots = maxIndex + 1;

  return (
    <section
      id="projects"
      className="relative bg-linear-to-b from-white via-blue-50 to-white"
    >
      <div className="py-15">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h3 className="text-xl text-center text-primary pb-4">
              Dự án đã thực hiện
            </h3>
            <h2 className="text-4xl font-bold text-primary">
              Một số dự án tiêu biểu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto py-4">
              Các dự án tiêu biểu trong sự nghiệp của chúng tôi
            </p>
            <div className="mx-auto w-[180px] h-[6px] bg-gradient-primary rounded-full"></div>
          </div>
          <div className="relative">
            <div className="px-2 overflow-hidden">
              <div
                className="flex pb-8 pt-16 will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translate3d(-${(currentIndex * 100) / itemsPerView}%, 0, 0)`,
                }}
                onTransitionEnd={() => setIsAnimating(false)}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="rounded-2xl cursor-pointer transition-all p-4 h-full group shadow-custom custom-card-shadow custom-card-shadow-hover">
                      <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          loading="lazy"
                          className="object-cover border border-gray-200 group-hover:scale-110 transition-transform"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-primary my-4">
                        <Link
                          href={`#`}
                          className=" group-hover:text-cyan-400 transition-all duration-300"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 pb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pb-4">
                        {project.tags.map((category: string) => (
                          <span
                            key={category}
                            className="text-xs py-1 px-2 bg-[#EDF3FF] text-[#2946B7] rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <button className="custom-btn-bg-gradient mt-2 px-8 h-[40px] text-white font-semibold rounded-full flex items-center gap-2">
                        View Case study <ArrowRightIcon size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {currentIndex > 0 && (
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className={`absolute lg:left-[15px] left-[30px] top-1/2 -translate-y-1/2 -translate-x-6 z-10 text-white rounded-full p-3 custom-btn-bg-gradient ${
                  isAnimating
                    ? "opacity-60 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className={`absolute lg:right-[15px] right-[30px] top-1/2 -translate-y-1/2 translate-x-6 z-10 text-white rounded-full p-3 custom-btn-bg-gradient ${
                  isAnimating
                    ? "opacity-60 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-4">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
