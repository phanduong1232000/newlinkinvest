"use client";
import React from "react";
import pc1 from "../../assets/kieubykita/thuvien.png";
import pc2 from "../../assets/kieubykita/gym.png";
import pc3 from "../../assets/kieubykita/kid.png";
import pc4 from "../../assets/kieubykita/sky.png";
import pc5 from "../../assets/kieubykita/pool.png";
import pc6 from "../../assets/kieubykita/partyroom.png";
import pc7 from "../../assets/kieubykita/cigarroom.png";
import Image from "next/image";

const TienIch = () => {
  const data = [
    { title: "THƯ VIỆN", image: pc1 },
    { title: "GYM - YOGA", image: pc2 },
    { title: "KHU VUI CHƠI TRẺ EM", image: pc3 },
    { title: "SKY GARDEN", image: pc4 },
    { title: "HỒ BƠI SKY VIEW", image: pc5 },
    { title: "PHÒNG YẾN TIỆC", image: pc6 },
  ];

  return (
    <div
      style={{
        background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
      }}
      className="p-2 py-16 md:py-20 w-full h-full md:h-full flex flex-col items-center text-black"
    >
      <div
        style={{
          background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
        }}
      >
        <h2 className=" py-7 border-y-4 border-[#3A0606] w-[99vw]  font-pd-bold text-[24px] md:text-[32px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent">
          TIỆN ÍCH CAO CẤP <br /> CHO CUỘC SỐNG CÂN BẰNG
        </h2>
      </div>

      <div
        className={`max-w-[1000px] mt-20 mx-auto px-4  space-y-5 grid grid-cols-1 md:grid-cols-2 gap-4 `}
      >
        {data.map((item, index) => (
          <div key={index} className="flex justify-center  ">
            <div
              className={`w-[350px] md:w-[400px] h-[300px]  relative border`}
            >
              <Image
                src={item.image}
                alt={`${item.title} - Kieu By Kita - NewLink Investment`}
                className={`w-[350px] md:w-[400px] h-[300px] object-cover `}
              />
              <div
                className={`absolute px-4 bottom-0 py-3 left-0 text-white z-50 w-[250px] rounded-tr-3xl backdrop-blur-lg font-bold`}
              >
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`w-[350px] mt-10 md:w-[810px] h-[300px]  relative`}>
        <Image
          src={pc7}
          alt={"CIGAR LOUNGE - Kieu By Kita - NewLink Investment"}
          className={`w-[350px] md:w-[810px] h-[300px] object-cover`}
        />
        <div
          className={`absolute px-4 bottom-0 py-3 left-0 text-white z-50 w-[250px] rounded-tr-3xl backdrop-blur-lg font-bold`}
        >
          CIGAR LOUNGE
        </div>
      </div>
    </div>
  );
};

export default TienIch;
