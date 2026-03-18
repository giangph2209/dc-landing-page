import React from 'react'
import Image from 'next/image'
import AWSImage from '@/public/images/certificates/aws.png'
import GoogleCloudImage from '@/public/images/certificates/google.png'
import JavaImage from '@/public/images/certificates/java.png'
import MongodbImage from '@/public/images/certificates/mongodb.png'
import OpenStackImage from '@/public/images/certificates/openstack.png'
import AcpImage from '@/public/images/certificates/acp.png'
import N2JapaneseImage from '@/public/images/certificates/n2.png'
import OciImage from '@/public/images/certificates/oci.png'

const certificates = [
  {
    name: 'Amazon Associate',
    image: AWSImage,
    description: 'AWS Certified Associate – chứng nhận kiến thức nền tảng về thiết kế, triển khai và vận hành hệ thống trên Amazon Web Services'
  },
  {
    name: 'Professional Cloud Developer',
    image: GoogleCloudImage,
    description: 'Google Cloud Professional Developer – chứng nhận kỹ năng xây dựng, triển khai và tối ưu ứng dụng trên Google Cloud'
  },
  {
    name: 'OCA / OCP Java SE',
    image: JavaImage,
    description: 'Oracle Certified Associate / Professional – chứng nhận năng lực lập trình Java SE từ cơ bản đến nâng cao'
  },
  {
    name: 'COA',
    image: OpenStackImage,
    description: 'Certified OpenStack Administrator – chứng nhận quản trị và vận hành hệ thống cloud OpenStack'
  },
  {
    name: 'MongoDB',
    image: MongodbImage,
    description: 'MongoDB Certification – chứng nhận kỹ năng làm việc với cơ sở dữ liệu NoSQL MongoDB'
  },
  {
    name: 'PMI-ACP',
    image: AcpImage,
    description: 'PMI Agile Certified Practitioner – chứng nhận quản lý dự án theo phương pháp Agile'
  },
  {
    name: 'N2 Japanese',
    image: N2JapaneseImage,
    description: 'JLPT N2 – chứng nhận năng lực tiếng Nhật trình độ trung cao, có khả năng sử dụng trong công việc'
  },
  {
    name: 'OCI',
    image: OciImage,
    description: 'Oracle Cloud Infrastructure – Foundation / Solution Architect, chứng nhận kiến thức nền tảng và thiết kế giải pháp trên nền tảng cloud của Oracle'
  }
]

export default function Certificates() {
  return (
    <section id="certificates" className=" bg-[#F6F7FB]">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary">Chứng chí chuyên môn</h2>
            <p className="text-gray-600 text-sm py-4">Chúng tôi được chứng nhận bởi các tổ chức hàng đầu</p>
            <div className="mx-auto w-[180px] h-[6px] bg-gradient-primary rounded-full"></div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-gray-100 custom-card-shadow-hover"
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
                  <p className="font-semibold text-gray-900">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
