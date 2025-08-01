import Background from "@/components/Lang-Omm/Background";
import ChuDauTu from "@/components/Lang-Omm/ChuDauTu";
import LienHe from "@/components/Lang-Omm/LienHe";
import TienIch from "@/components/Lang-Omm/TienIch";
import TongQuan from "@/components/Lang-Omm/TongQuan";
import ViTri from "@/components/Lang-Omm/ViTri";
import ViTriChiTiet from "@/components/Lang-Omm/ViTriChiTiet";
import React from "react";

const LangOmm = () => {
  return (
    <div className="bg-[#FFFFFF] h-full w-full text-black">
      <Background />
      <ChuDauTu />
      <TongQuan />
      <ViTri />
      <ViTriChiTiet />
      <TienIch />
      <LienHe />
    </div>
  );
};

export default LangOmm;
