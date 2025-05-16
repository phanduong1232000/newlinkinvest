import BackgroundLaHome from "@/components/La-Home/BackgroundLaHome";
import GiaoDiem from "@/components/La-Home/GiaoDiem";
import ItemDuAn from "@/components/La-Home/ItemDuAn";
import LienHe from "@/components/La-Home/LienHe";
import NhaDauTu from "@/components/La-Home/NhaDauTu";
import SanPham from "@/components/La-Home/SanPham";
import TienIch from "@/components/La-Home/TienIch";
import TongQuan from "@/components/La-Home/TongQuan";
import TongThe from "@/components/La-Home/TongThe";
import React from "react";

const LaHome = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
      }}
      className="relative"
    >
      <BackgroundLaHome />
      <NhaDauTu />
      <TongQuan />
      <TongThe />
      <ItemDuAn />
      <GiaoDiem />
      <TienIch />
      <SanPham />
      <LienHe />
      
    </div>
  );
};

export default LaHome;
