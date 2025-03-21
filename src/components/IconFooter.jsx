import React from "react";
import fb from "../assets/images/fb.png";
import tiktok from "../assets/images/tiktok.png";
import zalo from "../assets/images/zalo.png";
import Image from "next/image";

const IconFooter = () => {
  return (
    <div className="flex space-x-3">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image src={zalo} alt="Zalo" className="w-6 md:w-8 h-6 md:h-8" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image src={fb} alt="Facebook" className="w-6 md:w-8 h-6 md:h-8" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image src={tiktok} alt="TikTok" className="w-6 md:w-8 h-6 md:h-8" />
      </a>
    </div>
  );
};

export default IconFooter;
