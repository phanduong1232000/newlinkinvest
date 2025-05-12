import BackgroundKieu from "@/components/Kieu-By-Kita/BackgroundKieu";
import React from "react";
import Link from "next/link";
import TongQuanKieu from "@/components/Kieu-By-Kita/TongQuanKieu";
import ViTriKieu from "@/components/Kieu-By-Kita/ViTriKieu";
import SoDoDiChuyen from "@/components/Kieu-By-Kita/SoDoDiChuyen";
import SoDoMatBang from "@/components/Kieu-By-Kita/SoDoMatBang";
import BoSuuTap from "@/components/Kieu-By-Kita/BoSuuTap";
import TienIch from "@/components/Kieu-By-Kita/TienIch";
import LienHe from "@/components/Kieu-By-Kita/LienHe";
import BackNic from "@/components/BackNic";
import CauChuyen from "@/components/Kieu-By-Kita/CauChuyen";

const KieuByKita = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #3D0303, #821212, #3D0303)",
        minHeight: "100vh",
      }}
    >
      <div className="fixed w-screen h-[60px] bg-[#3A0000] text-white rounded z-50">
        <Link href="#">Home</Link>
      </div>

      <BackgroundKieu />
      <CauChuyen />
      <TongQuanKieu />
      <ViTriKieu />
      <SoDoDiChuyen />
      <SoDoMatBang />
      <BoSuuTap />
      <TienIch />
      <LienHe />

      <BackNic />
    </div>
  );
};

export default KieuByKita;
