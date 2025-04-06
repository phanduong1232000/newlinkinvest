import Image from "next/image";
import React from "react";
import linhvuc from "../../assets/images/linhvuc.png";
import ItemField from "./ItemField";

const ProjectNic = () => {
  return (
    <div className="bg-[#09303D] -mt-20 md:-mt-24 relative z-50">
      <div className="max-w-[1240px] mx-auto py-5 px-4">
        <div className="flex space-x-5">
          <Image src={linhvuc} alt="New Link Investment - Lĩnh Vực" className="hidden md:block" />
          <div className="space-y-3 flex flex-col justify-center">
            <h2 className="text-center md:text-start text-[20px] md:text-[32px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
              LĨNH VỰC
              <br className="hidden md:block" /> HOẠT ĐỘNG
            </h2>
            <Image src={linhvuc} alt="New Link Investment - Lĩnh Vực" className="block md:hidden" />
            <ItemField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNic;
