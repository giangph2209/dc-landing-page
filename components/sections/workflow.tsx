import React from 'react'
import getRequirementsIcon from '@/public/icons/workflow/get-requirement.png'
import studyCaseIcon from '@/public/icons/workflow/study.png'
import sprintIcon from '@/public/icons/workflow/sprint-design.png'
import developIcon from '@/public/icons/workflow/develop.png'
import qaIcon from '@/public/icons/workflow/qa.png'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'

const steps = [
  {
    icon: getRequirementsIcon,
    title: 'Tiếp nhận yêu cầu',
    description: 'Tiếp nhận và làm rõ yêu cầu từ khách hàng',
    borderColor: 'border-[#6AA2F6]'
  },
  {
    icon: studyCaseIcon,
    title: 'Phân tích, thiết kế',
    description: 'Phân tích và thiết kế tài liệu srs, UI/.UX & technical design',
    borderColor: 'border-[#6AA2F6]'
  },
  {
    icon: sprintIcon,
    title: 'Lập kế hoạch',
    description: 'Tạo plan với các loại hình watterfall, agile hoặc hyberid và confirm khách hàng',
    borderColor: 'border-[#3CF2FF]'
  },
  {
    icon: developIcon,
    title: 'Implements',
    description: 'Code, Testing  và tạo documents',
    borderColor: 'border-[#6AA2F6]'
  },
  {
    icon: qaIcon,
    title: 'Deploy & Maitnainance',
    description: 'Triển khai code lên môi trường và bảo trì hệ thống',
    borderColor: 'border-[#6AA2F6]'
  }
]

export default function Workflow() {
  return (
    <section id="workflow" className="bg-[#F6F7FB] relative">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              WORKFLOW
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Quy trình làm việc</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quy trình rõ ràng giúp dự án minh bạch, kiểm soát tiến độ và đảm bảo chất lượng sản phẩm.
            </p>
            <div className="mt-4 mx-auto w-[180px] h-[6px] bg-gradient-primary rounded-full"></div>
          </div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className={`bg-white w-full relative h-full rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all border-b-2 ${step.borderColor}`}>
                  <span className="text-primary text-xl font-semibold">{index + 1}</span>
                  <div className="inline-block p-5 group-hover:scale-110 transition-transform">
                    <Image src={Icon} alt={step.title} width={100} height={100} />
                  </div>
                  <h3 className="font-bold text-primary mb-4 text-[18px]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                  {
                    index < steps.length - 1 && (
                      <div className="absolute top-[103%] rotate-90 md:rotate-0 md:top-1/2 -translate-y-1/2 md:left-[94%] bg-[#F6F7FB] z-1 p-3 rounded-full ">
                        <ArrowRightIcon
                          size={20}
                          className="text-primary"
                        />
                      </div>
                    )
                  }
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  )
}
