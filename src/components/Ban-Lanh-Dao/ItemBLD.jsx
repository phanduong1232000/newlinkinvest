"use client";
import React from "react";
import Image from "next/image";
import { Directors } from "@/utils/data";
import clippath from "../../assets/images/clippath.png";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ItemBLD = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const checkBLD = Directors.find((item) => item.link === name);

  return (
    <div className=" h-[70vh] flex md:items-center w-full pt-20 md:pt-0 px-2 ">
      <div className="w-[50%] hidden md:block">
        <div className="flex justify-center relative">
          <div className="relative w-[300px]">
            <Image src={checkBLD?.image} alt={checkBLD.alt} className="" />
            <div className="absolute inset-0 -bottom-8">
              <div className="flex items-end justify-center -mb-2 md:-mb-4 h-full">
                <div className="bg-gradient-to-r from-[#0C6985] to-[#09303D] px-8 md:px-4 py-2 rounded-2xl  flex flex-col items-center justify-center border border-[#E7CE8D]">
                  <p className="text-[14px] md:text-[16px] font-utm-avo-bold w-[200px] text-center">
                    {checkBLD?.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -z-50 ">
            <Image src={clippath} alt="clippath" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%] ">
        <div className="md:w-[90%] flex flex-col space-y-5 md:space-y-10">
          <div>
            <h1 className="font-utm-avo text-[24px] md:text-[32px] bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
              Ban Lãnh Đạo NewLink
            </h1>
            <h2 className="font-utm-avo text-[12px] md:text-[14px]">
              Với đội ngũ lãnh đạo tại giàu kinh nghiệm, NewLink luôn nỗ lực không ngừng
              để mang lại những giá trị bền vững cho các nhà đầu tư, khách hàng
              và cộng đồng.
            </h2>
          </div>
          <div className=" font-utm-avo  flex space-x-2 md:space-x-5 border-b-[0.1px] border-[#536E77] pb-4">
            {Directors.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    href={`/ban-lanh-dao?name=${item.link}`}
                    className={`text-[12px] md:text-[16px] ${
                      item.link === checkBLD.link ? "font-utm-avo-bold" : ""
                    }`}
                  >
                    {item.role}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="space-y-5">
            <p className="font-utm-avo text-center md:text-start text-[32px] md:text-[48px] bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
              {checkBLD?.name}
            </p>
            <div className="w-[70%] mx-auto pb-10 block md:hidden">
              <div className="flex justify-center relative">
                <div className="relative w">
                  <Image
                    src={checkBLD?.image}
                    alt={checkBLD.alt}
                    className=""
                  />
                  <div className="absolute inset-0 -bottom-8">
                    <div className="flex items-end justify-center -mb-2 md:-mb-4 h-full">
                      <div className="bg-gradient-to-r from-[#0C6985] to-[#09303D] px-8 md:px-4 py-2 rounded-2xl  flex flex-col items-center justify-center border border-[#E7CE8D]">
                        <p className="text-[14px] md:text-[16px] font-utm-avo-bold w-[200px] text-center">
                          {checkBLD?.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-50 ">
                  <Image src={clippath} alt="NewLink Investment" />
                </div>
              </div>
            </div>
            <ul className="space-y-3 font-utm-avo text-[14px] list-image-[url('/li.png')] pl-4">
              {checkBLD?.li.map((techstack) => {
                return (
                  <li
                    key={techstack}
                    dangerouslySetInnerHTML={{ __html: techstack }}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBLD;
