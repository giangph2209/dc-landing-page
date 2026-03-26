import React, { useEffect, useState } from "react";
import { TwoRowSlider } from "@/components/common/app-swipe-slider";

const techs = [
  { name: "AWS", icon: "/icons/technicals/aws-icon.png" },
  { name: "Google", icon: "/icons/technicals/google-cloud-icon.png" },
  { name: "Oracle DB", icon: "/icons/technicals/oracle-icon.png" },
  { name: "Kubernetes", icon: "/icons/technicals/kubernetes-icon.png" },
  { name: "Docker", icon: "/icons/technicals/docker-icon.png" },
  { name: "Java", icon: "/icons/technicals/java-icon.png" },
  { name: "ReactJS", icon: "/icons/technicals/react-js-icon.png" },
  { name: "NextJS", icon: "/icons/technicals/nextjs-icon.png" },
  { name: "NodeJS", icon: "/icons/technicals/node-js-icon.png" },
  { name: "PHP", icon: "/icons/technicals/php-icon.png" },
  { name: "MySQL", icon: "/icons/technicals/mysql-icon.png" },
  { name: "MongoDB", icon: "/icons/technicals/mongodb-icon.png" },
  { name: "IOS", icon: "/icons/technicals/ios-icon.png" },
  { name: "Android", icon: "/icons/technicals/android-icon.png" },
  { name: "Flutter", icon: "/icons/technicals/flutter-icon.png" },
];

export default function TechStack() {
  const [isShow, setIsShow] = useState(false);
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

  const columns = React.useMemo(
    () =>
      Array.from(
        { length: Math.ceil(techs.length / 2) },
        (_, index) =>
          techs.slice(index * 2, index * 2 + 2).map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center p-3 group cursor-pointer rounded-2xl bg-white/70 backdrop-blur shadow-custom hover:shadow-lg transition-all"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="object-contain group-hover:scale-110 transition-all duration-300"
              />
            </div>
          )),
      ),
    [],
  );

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="bg-linear-to-b from-white via-blue-100 to-blue-50 relative overflow-hidden"
    >
      <div className="pt-15 xl:pb-0 pb-15">
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
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="object-contain group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <img
                  src="/images/technicals/background.png"
                  alt="Năng lực kỹ thuật"
                  width={500}
                  height={100}
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                />
              </div>
              <div className="col-span-2 relative overflow-x-hidden">
                <h3 className="text-4xl text-primary mb-4 ml-2">
                  Công nghệ chúng tôi sử dụng
                </h3>
                <div className="py-4">
                  <TwoRowSlider
                    columns={columns}
                    itemsPerRowConfig={{ sm: 1, md: 3, lg: 3, xl: 4 }}
                    columnClassName="px-2 shrink-0"
                    dotsAlign="start"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-[48px] rounded-[24px] xl:translate-y-[-110px] custom-employee-box lg:w-[75%] xl:float-right mt-6 w-full relative z-10 mx-auto">
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
                  20+
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
