import React from "react";
import Image from "next/image";
import { TwoRowSlider } from "@/components/common/app-swipe-slider";

const certificates = [
  {
    name: "Amazon Associate",
    image: "/images/certificates/aws.png",
    description:
      "AWS Certified Associate – chứng nhận kiến thức nền tảng về thiết kế, triển khai và vận hành hệ thống trên Amazon Web Services",
    borderColor: "border-[#ff9a00]",
  },
  {
    name: "Professional Cloud Developer",
    image: "/images/certificates/google.png",
    description:
      "Google Cloud Professional Developer – chứng nhận kỹ năng xây dựng, triển khai và tối ưu ứng dụng trên Google Cloud",
    borderColor: "border-[#055FD1]",
  },
  {
    name: "OCA / OCP Java SE",
    image: "/images/certificates/java.png",
    description:
      "Oracle Certified Associate / Professional – chứng nhận năng lực lập trình Java SE từ cơ bản đến nâng cao",
    borderColor: "border-[#5396b1]",
  },
  {
    name: "COA",
    image: "/images/certificates/openstack.png",
    description:
      "Certified OpenStack Administrator – chứng nhận quản trị và vận hành hệ thống cloud OpenStack",
    borderColor: "border-[#ed1844]",
  },
  {
    name: "MongoDB",
    image: "/images/certificates/mongodb.png",
    description:
      "MongoDB Certification – chứng nhận kỹ năng làm việc với cơ sở dữ liệu NoSQL MongoDB",
    borderColor: "border-[#00684a]",
  },
  {
    name: "PMI-ACP",
    image: "/images/certificates/acp.png",
    description:
      "PMI Agile Certified Practitioner – chứng nhận quản lý dự án theo phương pháp Agile",
    borderColor: "border-[#4b3290]",
  },
  {
    name: "N2 Japanese",
    image: "/images/certificates/n2.png",
    description:
      "JLPT N2 – chứng nhận năng lực tiếng Nhật trình độ trung cao, có khả năng sử dụng trong công việc",
    borderColor: "border-[#5aa2d4]",
  },
  {
    name: "OCI",
    image: "/images/certificates/oci.png",
    description:
      "Oracle Cloud Infrastructure – Foundation / Solution Architect, chứng nhận kiến thức nền tảng và thiết kế giải pháp trên nền tảng cloud của Oracle",
    borderColor: "border-[#3377a7]",
  },
  {
    name: "ISTQB Foundation Level (CTFL)",
    image: "/images/certificates/istqb.jpg",
    description:
      "ISTQB Foundation Level (CTFL) – Chứng chỉ ISTQB® Certified Tester Foundation Level (CTFL) là nền tảng của kiến thức kiểm tra thiết yếu có thể được áp dụng cho các tình huống trong thế giới thực.",
    borderColor: "border-[#055FD1]",
  },
  {
    name: "ISTQB Advanced Level (CTAL)",
    image: "/images/certificates/istqb-advanced.jpg",
    description:
      "ISTQB Advanced Level (CTAL) - TM – Chứng chỉ Advanced Level Test Analyst cung cấp các kỹ năng cần thiết để thực hiện kiểm tra phần mềm có cấu trúc và kỹ lưỡng trong suốt vòng đời phát triển phần mềm",
    borderColor: "border-[#055FD1]",
  },
  {
    name: "UX - Research",
    image: "/images/certificates/ux.png",
    description:
      "UX - Research – Chứng chỉ UX Research cung cấp các kỹ năng cần thiết để thực hiện nghiên cứu UX có cấu trúc và kỹ lưỡng trong suốt vòng đời phát triển phần mềm",
    borderColor: "border-[#ed1844]",
  },
  {
    name: "UX Google Design",
    image: "/images/certificates/ux-google.png",
    description:
      "UX Google Design – Chứng chỉ UX Google Design cung cấp các kỹ năng cần thiết để thực hiện thiết kế UX có cấu trúc và kỹ lưỡng trong suốt vòng đời phát triển phần mềm",
    borderColor: "border-[#4285F4]",
  },
];

export default function Certificates() {
  const columns = React.useMemo(
    () =>
      Array.from(
        { length: Math.ceil(certificates.length / 2) },
        (_, index) =>
          certificates.slice(index * 2, index * 2 + 2).map((cert) => (
            <div
              key={cert.name}
              className={`bg-white cursor-pointer rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all border-b-2 custom-card-shadow-hover ${cert.borderColor || "border-[#055FD1]"
                }`}
              title={cert.description}
            >
              <div className="py-5 items-center justify-center flex h-[200px] pointer-events-none">
                <Image
                  src={cert.image}
                  alt={cert.description}
                  width={180}
                  height={100}
                  sizes="180px"
                  draggable={false}
                />
              </div>
              <div className="border-t border-gray-200 w-full p-3">
                <p className="font-semibold text-gray-900">{cert.name}</p>
              </div>
            </div>
          )),
      ),
    [],
  );

  return (
    <section id="certificates" className="bg-[#F6F7FB]">
      <div className="py-15">
        <div className="max-w-7xl mx-auto px-6 overflow-x-hidden">
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
                    sizes="160px"
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

          <div className="hidden md:block pt-16 overflow-x-hidden">
            <TwoRowSlider
              columns={columns}
              itemsPerRowConfig={{ sm: 1, md: 3, lg: 3, xl: 4 }}
              columnClassName="px-4 shrink-0"
              dotsAlign="center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
