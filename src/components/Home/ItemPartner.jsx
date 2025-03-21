import { Partner } from "@/utils/data";
import Image from "next/image";
import React from "react";
import dtcl from "../../assets/images/dtcl.png";
const ItemPartner = () => {
  return (
    <div className="border border-[#FAD48A]/60 rounded-[20px] py-4 md:py-10 w-full p-5 flex justify-center">
      <Image src={dtcl} alt="dtcl" />
    </div>
  );
};

export default ItemPartner;
