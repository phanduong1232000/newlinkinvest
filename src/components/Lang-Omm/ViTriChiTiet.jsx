"use client";
import React, { useRef } from "react";
import logonocolor from "@/assets/langomm/logonocolor.png";
import laban from "@/assets/langomm/laban.png";
import tongquan from "@/assets/langomm/tongquan.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once, outside the component
gsap.registerPlugin(ScrollTrigger);

const ViTriChiTiet = () => {
  const labanRef = useRef(null);

  useGSAP(() => {
    if (labanRef.current) {
      // Create a timeline for the pendulum effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: labanRef.current,
          start: "top 30%",
        },
      });

      // Pendulum animation: swing back and forth with damping
      tl.fromTo(
        labanRef.current,
        { opacity: 0, rotate: -30 }, // Start rotated left
        {
          opacity: 1,
          rotate: 30, // Swing to the right
          duration: 0.6,
          ease: "sine.inOut", // Smooth oscillation
          onComplete: () => {
            // Final settling animation
            gsap.to(labanRef.current, {
              rotate: 0, // Settle at 0 degrees
              duration: 1,
              ease: "power3.out",
            });
          },
        }
      );
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="w-full pt-10 ">
      <div className="max-w-[1440px] mx-auto relative ">
        <Image
          src={tongquan}
          alt="Làng Omm - Ảnh Tổng Quan"
          className="w-full h-auto"
          width={1440}
          height={800} // Adjust based on actual image dimensions
        />
        <div
          ref={labanRef}
          className="absolute top-2 left-2 md:top-5 md:left-5"
        >
          <Image
            src={laban}
            alt="Làng Omm - La Bàn"
            className="w-[60px] md:w-[150px]"
            width={150}
            height={150} // Adjust based on actual image dimensions
          />
        </div>
        <div className="absolute top-2 right-2 md:top-5 md:right-5">
          <Image
            src={logonocolor}
            alt="Làng Omm - Logo"
            className="w-[80px] md:w-[250px]"
            width={250}
            height={100} // Adjust based on actual image dimensions
          />
        </div>
      </div>
    </div>
  );
};

export default ViTriChiTiet;
