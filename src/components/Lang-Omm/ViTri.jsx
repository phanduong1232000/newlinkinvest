"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import map from "@/assets/langomm/map.png";
import dongho from "@/assets/langomm/dongho.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ViTri = () => {
  const titleRef = useRef(null);
  const mapRef = useRef(null);
  const itemsRef = useRef([]);
  const sectionRef = useRef(null);

  const data = [
    { title: "Đồi chè Tâm Châu Hồ đồi chè Tâm Châu", time: 1 },
    { title: "Chùa Di Đà", time: 3 },
    { title: "Ngã 5 Damb’ri", time: 5 },
    { title: "Nút giao cao tốc Dầu Giây - Liên Khương", time: 10 },
    { title: "Khu du lịch Thác Damb’ri", time: 12 },
    { title: "Trung tâm TP. Bảo Lộc Vincom Bảo Lộc", time: 20 },
  ];

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Map animation
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Items staggered animation
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full h-full pt-10">
      <h2
        ref={titleRef}
        className="text-center font-ftv-blushing-rose text-[28px] md:text-[48px] text-[#3C6B33]"
      >
        VỊ TRÍ ĐẮC ĐỊA
      </h2>
      <div className="max-w-[1440px] mx-auto px-2 md:px-5 h-full flex flex-col md:flex-row">
        <div className="w-full md:w-4/6">
          <Image
            ref={mapRef}
            src={map}
            alt="Làng Omm - Map"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full md:w-2/6 border-4 rounded-[16px] flex justify-center items-center border-[#3C6B33]">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-6 p-2">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="group transition-all duration-300 hover:bg-[#3C6B33]/10 p-2 rounded-md "
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Image
                      src={dongho}
                      alt="dong ho"
                      className="w-[30px] md:w-[50px] group-hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-[14px] md:text-[24px] font-bold">
                      {item.time} Phút
                    </p>
                  </div>
                  <div className="text-[10px] md:text-[16px]">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViTri;
