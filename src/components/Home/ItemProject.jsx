"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import các module cần thiết của Swiper
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { DuAn } from "@/utils/data";

// Danh sách ảnh (thay thế bằng ảnh của bạn)



const ImageSlider = () => {
  const [activeProjectName, setActiveProjectName] = useState(DuAn[0].name); // Default to first project name

  const [stretchValue, setStretchValue] = useState(-200);
  const swiperRef = useRef(null); // Ref để truy cập Swiper instance

  // Hàm cập nhật stretch dựa trên kích thước màn hình
  const updateStretch = () => {
    if (window.innerWidth >= 768) {
      setStretchValue(-150);
    } else {
      setStretchValue(-80);
    }
  };

  // Cập nhật stretch khi mount và resize
  useEffect(() => {
    updateStretch(); // Cập nhật ban đầu
    window.addEventListener("resize", () => {
      updateStretch();
      if (swiperRef.current) {
        swiperRef.current.update(); // Cập nhật Swiper khi resize
      }
    });

    return () => window.removeEventListener("resize", updateStretch);
  }, []);

  // Cập nhật Swiper khi stretchValue thay đổi
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update(); // Cập nhật Swiper khi stretchValue thay đổi
    }
  }, [stretchValue]);

  return (
    <div>
      <div className="max-w-[1240px] mx-auto mt-6 md:pt-20">
        <h2 className="py-2 md:py-4 text-center text-[24px] md:text-[48px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
          Dự Án
        </h2>
        <div className="py-2 bg-[linear-gradient(to_right,#09303D_0%,#09303D_20%,#0C5E77_50%,#09303D_80%,#09303D_100%)] text-center">
          <p className="font-bold text-[16px] md:text-[24px] bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">{activeProjectName.name}</p>
          <p className="font-medium text-[12px] md:font-[16px]">{activeProjectName.desc}</p>
        </div>
      </div>
      <Swiper
        key={stretchValue} // Thay đổi key để tái tạo Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: -20,
          stretch: stretchValue,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow]}
        style={{ width: "100%", padding: "20px" }}
        onSlideChange={(swiper) => {
          const activeIndex = swiper.activeIndex;
          setActiveProjectName(DuAn[activeIndex]);
        }}
        onInit={(swiper) => {
          setActiveProjectName(DuAn[swiper.activeIndex]);
        }}
      >
        {DuAn.map((image, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide-custom" // Responsive với Tailwind
            style={{
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Image
              src={image.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
