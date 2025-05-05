"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const MainTuyenDung = () => {
  useEffect(() => {
    // Animate all elements with the animate-line class
    gsap.from(".animate-line", {
      y: -30, // Start 30px above
      opacity: 0, // Start invisible
      duration: 0.6, // Duration per element
      stagger: 0.2, // 0.2s delay between each element
      ease: "power3.out", // Smooth easing
    });
  }, []);

  return (
    <div className="max-w-[650px] space-y-4 font-utm-avo">
      <div className="animate-line">
        <h1 className="text-[24px] md:text-[48px] font-utm-avo bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
          NEWLINK TUYỂN DỤNG
        </h1>
      </div>
      <div className="animate-line">
        <p className="font-utm-avo-bold text-[16px] md:text-[20px]">
          Tìm kiếm công việc mơ ước của bạn
        </p>
      </div>
      <div className="animate-line">
        <p className="text-[12px] md:text-[14px]">
          NewLink mang đến môi trường làm việc sáng tạo, năng động và đầy cơ hội
          thăng tiến. Chúng tôi cam kết phát triển nghề nghiệp bền vững cho nhân
          viên, cùng nhau xây dựng những dự án bất động sản thành công và tạo ra
          giá trị lâu dài.
        </p>
      </div>
      <div className="animate-line">
        <p className="text-[12px] md:text-[14px]">
          Hãy gia nhập đội ngũ của chúng tôi và phát triển cùng những thử thách
          mới!
        </p>
      </div>
    </div>
  );
};

export default MainTuyenDung;