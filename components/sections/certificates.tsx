import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AWSImage from "@/public/images/certificates/aws.png";
import GoogleCloudImage from "@/public/images/certificates/google.png";
import JavaImage from "@/public/images/certificates/java.png";
import MongodbImage from "@/public/images/certificates/mongodb.png";
import OpenStackImage from "@/public/images/certificates/openstack.png";
import AcpImage from "@/public/images/certificates/acp.png";
import N2JapaneseImage from "@/public/images/certificates/n2.png";
import OciImage from "@/public/images/certificates/oci.png";
import IistqbImage from "@/public/images/certificates/istqb.jpg";
import IistqbAdvancedImage from "@/public/images/certificates/istqb-advanced.jpg";

const certificates = [
  {
    name: "Amazon Associate",
    image: AWSImage,
    description:
      "AWS Certified Associate – chứng nhận kiến thức nền tảng về thiết kế, triển khai và vận hành hệ thống trên Amazon Web Services",
    borderColor: "border-[#ff9a00]",
  },
  {
    name: "Professional Cloud Developer",
    image: GoogleCloudImage,
    description:
      "Google Cloud Professional Developer – chứng nhận kỹ năng xây dựng, triển khai và tối ưu ứng dụng trên Google Cloud",
    borderColor: "border-[#055FD1]",
  },
  {
    name: "OCA / OCP Java SE",
    image: JavaImage,
    description:
      "Oracle Certified Associate / Professional – chứng nhận năng lực lập trình Java SE từ cơ bản đến nâng cao",
    borderColor: "border-[#5396b1]",
  },
  {
    name: "COA",
    image: OpenStackImage,
    description:
      "Certified OpenStack Administrator – chứng nhận quản trị và vận hành hệ thống cloud OpenStack",
    borderColor: "border-[#ed1844]",
  },
  {
    name: "MongoDB",
    image: MongodbImage,
    description:
      "MongoDB Certification – chứng nhận kỹ năng làm việc với cơ sở dữ liệu NoSQL MongoDB",
    borderColor: "border-[#00684a]",
  },
  {
    name: "PMI-ACP",
    image: AcpImage,
    description:
      "PMI Agile Certified Practitioner – chứng nhận quản lý dự án theo phương pháp Agile",
    borderColor: "border-[#4b3290]",
  },
  {
    name: "N2 Japanese",
    image: N2JapaneseImage,
    description:
      "JLPT N2 – chứng nhận năng lực tiếng Nhật trình độ trung cao, có khả năng sử dụng trong công việc",
    borderColor: "border-[#5aa2d4]",
  },
  {
    name: "OCI",
    image: OciImage,
    description:
      "Oracle Cloud Infrastructure – Foundation / Solution Architect, chứng nhận kiến thức nền tảng và thiết kế giải pháp trên nền tảng cloud của Oracle",
    borderColor: "border-[#3377a7]",
  },
  {
    name: "ISTQB Foundation Level (CTFL)",
    image: IistqbImage,
    description:
      "ISTQB Foundation Level (CTFL) – Chứng chỉ ISTQB® Certified Tester Foundation Level (CTFL) là nền tảng của kiến thức kiểm tra thiết yếu có thể được áp dụng cho các tình huống trong thế giới thực.",
    borderColor: "border-[#055FD1]",
  },
  {
    name: "ISTQB Advanced Level (CTAL)",
    image: IistqbAdvancedImage,
    description:
      "ISTQB Advanced Level (CTAL) - TM – Chứng chỉ Advanced Level Test Analyst cung cấp các kỹ năng cần thiết để thực hiện kiểm tra phần mềm có cấu trúc và kỹ lưỡng trong suốt vòng đời phát triển phần mềm",
    borderColor: "border-[#055FD1]",
  },
];

const certificateColumns = Array.from(
  { length: Math.ceil(certificates.length / 2) },
  (_, index) => certificates.slice(index * 2, index * 2 + 2),
);

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerRow, setItemsPerRow] = React.useState(4);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth <= 768) {
        setItemsPerRow(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerRow(3);
      } else {
        setItemsPerRow(4);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, certificateColumns.length - itemsPerRow);

  React.useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const cardWidthPercent = 100 / itemsPerRow;
  const totalDots = maxIndex + 1;
  return (
    <section id="certificates" className="bg-[#F6F7FB]">
      <div className="pt-15 lg:pb-0 pb-15">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary">
              Chứng chỉ chuyên môn
            </h2>
            <p className="text-gray-600 text-sm py-4">
              Chúng tôi được chứng nhận bởi các tổ chức hàng đầu
            </p>
            <div className="mx-auto w-[180px] h-[6px] bg-gradient-primary rounded-full"></div>
          </div>

          <div className="md:hidden grid grid-cols-2 gap-4 mt-16">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`bg-white cursor-pointer rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all border-b-2 custom-card-shadow-hover ${cert.borderColor || "border-[#055FD1]"}`}
                title={cert.description}
              >
                <div className="py-5 items-center justify-center flex h-[180px]">
                  <Image
                    src={cert.image}
                    alt={cert.description}
                    width={160}
                    height={90}
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-gray-200 w-full p-3">
                  <p className="font-semibold text-gray-900 text-xs">
                    {cert.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="overflow-hidden pt-16 pb-15">
                <div
                  className="space-y-4 will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translate3d(-${currentIndex * cardWidthPercent}%, 0, 0)`,
                  }}
                  onTransitionEnd={() => setIsAnimating(false)}
                >
                  <div className="flex">
                    {certificateColumns.map((column, colIndex) => (
                      <div
                        key={colIndex}
                        className="px-3 flex-shrink-0"
                        style={{ width: `${cardWidthPercent}%` }}
                      >
                        <div className="flex flex-col gap-4 h-full">
                          {column.map((cert, rowIdx) => (
                            <div
                              key={`${colIndex}-${rowIdx}-${cert.name}`}
                              className={`bg-white cursor-pointer rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all border-b-2 custom-card-shadow-hover ${cert.borderColor || "border-[#055FD1]"}`}
                              title={cert.description}
                            >
                              <div className="py-5 items-center justify-center flex h-[200px]">
                                <Image
                                  src={cert.image}
                                  alt={cert.description}
                                  width={180}
                                  height={100}
                                  loading="lazy"
                                />
                              </div>
                              <div className="border-t border-gray-200 w-full p-3">
                                <p className="font-semibold text-gray-900">
                                  {cert.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-3 mt-8">
                  {Array.from({ length: totalDots }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                          ? "bg-blue-500 w-8"
                          : "bg-gray-300 hover:bg-gray-400 w-3"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
