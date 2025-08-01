"use client";
import React, { useRef } from "react";
import icon1 from "@/assets/langomm/icon1.png";
import icon2 from "@/assets/langomm/icon2.png";
import icon3 from "@/assets/langomm/icon3.png";
import icon4 from "@/assets/langomm/icon4.png";
import icon5 from "@/assets/langomm/icon5.png";
import icon6 from "@/assets/langomm/icon6.png";
import icon7 from "@/assets/langomm/icon7.png";
import icon8 from "@/assets/langomm/icon8.png";
import met from "@/assets/langomm/met.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TongQuan = () => {
  const containerRef = useRef(null);

  const data = [
    {
      title:
        "Hạ tầng: Đường nội khu 6–8m, điện nước đầy đủ, cổng vào riêng biệt",
      icon: icon1,
    },
    {
      title: "Tiến độ thanh toán: Linh hoạt, chia làm 3–4 đợt",
      icon: icon2,
    },
    {
      title: "Pháp lý: Sổ hồng riêng từng nền (đất ở nông thôn – ONT)",
      icon: icon3,
    },
    {
      title: "Diện tích nền: từ 200m² – 500m² (đa dạng lựa chọn)",
      icon: icon4,
    },
    {
      title: "Vị trí: Xã Lộc Tân, huyện Bảo Lâm, TP. Bảo Lộc, tỉnh Lâm Đồng",
      icon: icon5,
    },
    {
      title: "Loại hình: Đất nền nghỉ dưỡng – villa second home",
      icon: icon6,
    },
    {
      title: "Tổng quy mô: 2,2 ha",
      icon: icon7,
    },
    {
      title: "Số lượng sản phẩm: ~35 nền",
      icon: icon8,
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.from(".title", {
        opacity: 0,
        y: 50,
        duration: 0.8,
      })
        .from(
          ".description",
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".grid-item",
          {
            opacity: 0,
            x: -50,
            duration: 0.6,
            stagger: 0.2,
          },
          "-=0.4"
        )
        .from(
          ".bottom-section",
          {
            opacity: 0,
            scale: 0, // Bắt đầu từ scale 0
            duration: 0.5,
          },
          "-=0.2"
        )
        .to(
          containerRef.current,
          {
            borderBottomLeftRadius: "3rem",
            borderBottomRightRadius: "3rem",
            borderTopLeftRadius: "3rem",
            borderTopRightRadius: "3rem",
            duration: 1,
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <div className="w-full py-10 text-white">
      <div
        className="w-full h-screen bg-[#3C6B33] relative overflow-hidden "
        ref={containerRef}
      >
        <div className="max-w-[1000px] mx-auto h-full p-2 md:p-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="title text-center font-ftv-blushing-rose text-[26px] md:text-[48px] pt-10">
              TỔNG QUAN VỀ LÀNG OMM
            </h2>
            <p className="description text-center text-[10px] md:text-[16px]">
              Giữa nhịp sống bộn bề, Làng Omm hiện lên như một chốn dừng chân lý
              tưởng – nơi bạn có thể thả lỏng cơ thể và để tâm trí được chữa
              lành trong không gian xanh mát của thiên nhiên nguyên sơ. Tọa lạc
              giữa núi rừng trập trùng, bên những con suối trong veo và đồi chè
              xanh ngát, Làng Omm không chỉ là một điểm đến nghỉ dưỡng mà còn là
              hành trình tìm về sự tĩnh tại bên trong.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 pt-5 md:pt-14">
            {data.map((item, index) => {
              const [boldPart, rest] = item.title.split(":");

              return (
                <div key={index} className="grid-item w-full flex md:space-x-2">
                  <div className="w-[15%] flex justify-center items-center">
                    <div className="rounded-full border-2 border-white w-[40px] h-[40px] md:w-[60px] md:h-[60px] p-1 flex justify-center items-center">
                      <Image
                        src={item.icon}
                        alt={`Làng Omm - Icon ${index + 1}`}
                      />
                    </div>
                  </div>
                  <div className="w-[80%] flex items-center">
                    <p className="text-[12px] md:text-[20px]">
                      <span className="font-bold">{boldPart}:</span>
                      {rest}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bottom-section absolute bottom-0 w-full py-3 flex">
          <div className="w-full flex flex-col items-center">
            <div className="flex">
              <Image
                src={met}
                alt="Làng Omm - Mặt tiền"
                className="image-1 w-[200px] md:w-[300px]"
              />
            </div>
            <p className="text-center text-[12px] md:text-[24px]">
              Tổng giá trị nền{" "}
              <span className="font-bold">từ 1,6 – 3,8 tỷ đồng/nền</span> tùy
              diện tích và vị trí
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TongQuan;
