import React, { useEffect, useState } from "react";
import Image from "next/image";
import TechnicalStackImage from "@/public/images/technicals/background.png";
import AWSImage from "@/public/icons/technicals/aws-icon.png";
import GoogleCloudImage from "@/public/icons/technicals/google-cloud-icon.png";
import OracleImage from "@/public/icons/technicals/oracle-icon.png";
import KubernetesImage from "@/public/icons/technicals/kubernetes-icon.png";
import DockerImage from "@/public/icons/technicals/docker-icon.png";
import JavaImage from "@/public/icons/technicals/java-icon.png";
import ReactJSImage from "@/public/icons/technicals/react-js-icon.png";
import NextJSImage from "@/public/icons/technicals/nextjs-icon.png";
import NodeJSImage from "@/public/icons/technicals/node-js-icon.png";
import PHPImage from "@/public/icons/technicals/php-icon.png";
import MySQLImage from "@/public/icons/technicals/mysql-icon.png";
import MongoDBImage from "@/public/icons/technicals/mongodb-icon.png";
import IOSImage from "@/public/icons/technicals/ios-icon.png";
import AndroidImage from "@/public/icons/technicals/android-icon.png";
import FlutterImage from "@/public/icons/technicals/flutter-icon.png";

const techs = [
  { name: "AWS", icon: AWSImage },
  { name: "Google", icon: GoogleCloudImage },
  { name: "Oracle DB", icon: OracleImage },
  { name: "Kubernetes", icon: KubernetesImage },
  { name: "Docker", icon: DockerImage },
  { name: "Java", icon: JavaImage },
  { name: "ReactJS", icon: ReactJSImage },
  { name: "NextJS", icon: NextJSImage },
  { name: "NodeJS", icon: NodeJSImage },
  { name: "PHP", icon: PHPImage },
  { name: "MySQL", icon: MySQLImage },
  { name: "MongoDB", icon: MongoDBImage },
  { name: "IOS", icon: IOSImage },
  { name: "Android", icon: AndroidImage },
  { name: "Flutter", icon: FlutterImage },
];

const techColumns = Array.from(
  { length: Math.ceil(techs.length / 2) },
  (_, index) => techs.slice(index * 2, index * 2 + 2),
);

export default function TechStack() {
  const [isShow, setIsShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(5);

  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerRow(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerRow(3);
      } else {
        setItemsPerRow(4);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, techColumns.length - itemsPerRow);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const cardWidthPercent = 100 / itemsPerRow;
  const totalDots = maxIndex + 1;

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="bg-linear-to-b from-white via-blue-100 to-blue-50 relative overflow-hidden"
    >
      <div className="pt-15 lg:pb-0 pb-15">
        <div className="max-w-7xl mx-auto px-6 clear-both">
          <h2 className="text-4xl font-bold text-primary lg:mb-[60px] mb-10 text-center">
            Năng lực kỹ thuật
          </h2>
          <div className="md:hidden">
            <div className="grid grid-cols-3 gap-4">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2 group cursor-pointer"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="object-contain group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <Image
                  src={TechnicalStackImage}
                  alt="Năng lực kỹ thuật"
                  width={500}
                  height={100}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div className="col-span-2 relative">
                <h3 className="text-4xl text-primary mb-4 ml-2">
                  Công nghệ chúng tôi sử dụng
                </h3>
                <div className="overflow-hidden py-4">
                  <div
                    className="will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: `translate3d(-${currentIndex * cardWidthPercent}%, 0, 0)`,
                    }}
                  >
                    <div className="flex">
                      {techColumns.map((column, colIndex) => (
                        <div
                          key={colIndex}
                          className="px-2 flex-shrink-0"
                          style={{ width: `${cardWidthPercent}%` }}
                        >
                          <div className="flex flex-col gap-4">
                            {column.map((tech, rowIdx) => (
                              <div
                                key={`${colIndex}-${rowIdx}-${tech.name}`}
                                className="flex items-center justify-center p-3 group cursor-pointer rounded-2xl bg-white/70 backdrop-blur shadow-custom hover:shadow-lg transition-all"
                              >
                                <Image
                                  src={tech.icon}
                                  alt={tech.name}
                                  width={80}
                                  height={80}
                                  loading="lazy"
                                  className="object-contain group-hover:scale-110 transition-all duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-start gap-3 mt-4 ml-4">
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
          <div className="py-[48px] rounded-[24px] lg:translate-y-[-110px] custom-employee-box lg:w-[75%] lg:float-right mt-6 w-full relative z-10 mx-auto">
            <h3 className="md:text-4xl text-3xl text-center text-primary ">
              Nguồn lực của chúng tôi
            </h3>
            <div
              className={`grid md:grid-cols-3 grid-cols-1 gap-6 text-center mt-10 ${isShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-500`}
            >
              <div>
                <div className="md:text-6xl text-4xl custom-text-gradient align-top">
                  60+
                </div>
                <p className="text-primary mt-3">
                  Talents
                  <br />& Contributors
                </p>
              </div>
              <div>
                <div className="md:text-6xl text-4xl custom-text-gradient align-top">
                  20+ Years
                </div>
                <p className="text-primary mt-3">
                  Combined <br />
                  Cloud Expertise
                </p>
              </div>
              <div>
                <div className="md:text-6xl text-4xl custom-text-gradient align-top">
                  15+
                </div>
                <p className="text-primary mt-3">
                  Certified <br />
                  Engineers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
