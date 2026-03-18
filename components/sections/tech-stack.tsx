import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import TechnicalStackImage from '@/public/images/technicals/background.png'
import AWSImage from '@/public/icons/technicals/aws-icon.png'
import GoogleCloudImage from '@/public/icons/technicals/google-cloud-icon.png'
import OracleImage from '@/public/icons/technicals/oracle-icon.png'
import KubernetesImage from '@/public/icons/technicals/kubernetes-icon.png'
import DockerImage from '@/public/icons/technicals/docker-icon.png'
import JavaImage from '@/public/icons/technicals/java-icon.png'
import ReactJSImage from '@/public/icons/technicals/react-js-icon.png'
import NextJSImage from '@/public/icons/technicals/nextjs-icon.png'
import NodeJSImage from '@/public/icons/technicals/node-js-icon.png'
import PHPImage from '@/public/icons/technicals/php-icon.png'
import MySQLImage from '@/public/icons/technicals/mysql-icon.png'
import MongoDBImage from '@/public/icons/technicals/mongodb-icon.png'
import IOSImage from '@/public/icons/technicals/ios-icon.png'
import AndroidImage from '@/public/icons/technicals/android-icon.png'
import FlutterImage from '@/public/icons/technicals/flutter-icon.png'

const techs = [
  { name: 'AWS', icon: AWSImage },
  { name: 'Google', icon: GoogleCloudImage },
  { name: 'Oracle DB', icon: OracleImage },
  { name: 'Kubernetes', icon: KubernetesImage },
  { name: 'Docker', icon: DockerImage },
  { name: 'Java', icon: JavaImage },
  { name: 'ReactJS', icon: ReactJSImage },
  { name: 'NextJS', icon: NextJSImage },
  { name: 'NodeJS', icon: NodeJSImage },
  { name: 'PHP', icon: PHPImage },
  { name: 'MySQL', icon: MySQLImage },
  { name: 'MongoDB', icon: MongoDBImage },
  { name: 'IOS', icon: IOSImage },
  { name: 'Android', icon: AndroidImage },
  { name: 'Flutter', icon: FlutterImage }
]

export default function TechStack() {
  const [isShow, setIsShow] = useState(false)

  const sectionRef = React.useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsShow(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="capabilities" ref={sectionRef} className="bg-linear-to-b from-white via-blue-100 to-blue-50 relative overflow-hidden">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-[60px] text-center">Năng lực kỹ thuật</h2>
          <div className="">
            {/* <div className="mb-5 hidden md:block">
            <h3 className="text-3xl pl-8 text-primary">Công nghệ chúng tôi sử dụng</h3>
          </div> */}
            <div className="grid grid-cols-5 gap-4">
              {techs.map((tech, index) => (
                <div key={index} className="flex items-center justify-center md:col-span-1 p-2 group cursor-pointer">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="object-contain group-hover:scale-110 transition-all duration-300 "
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="p-[48px] rounded-[24px] custom-employee-box mb-4 lg:w-[80%] mt-6 w-full relative z-10 mx-auto">
            <h3 className="text-3xl text-center text-primary ">Nguồn lực của chúng tôi</h3>
            <div className={`grid md:grid-cols-3 grid-cols-1 gap-6 text-center mt-10 ${isShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-500`}>
              <div>
                <div className="md:text-6xl text-4xl custom-text-gradient align-top">
                  60+
                </div>
                <p className="text-primary mt-3">Talents<br />
                  & Contributors</p>
              </div>
              <div>
                <div className="md:text-6xl text-4xl custom-text-gradient align-top">
                  20+ Years
                </div>
                <p className="text-primary mt-3">Combined <br />
                  Cloud Expertise</p>
              </div>
              <div>
                <div className="md:text-6xl text-4xl custom-text-gradient align-top">
                  15+
                </div>
                <p className="text-primary mt-3">Certified <br />
                  Engineers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
