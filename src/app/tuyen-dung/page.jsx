import Footer from "@/components/Footer";
import BannerTD from "@/components/Tuyen-Dung/BannerTD";
import TuyenDungComponent from "@/components/Tuyen-Dung/TuyenDungComponent";
import React from "react";

export const metadata = {
  title: "Tuyển Dụng - NewLink",
  alternates: {
    canonical: "https://newlinkinvest.com/tuyen-dung",
  },
};

const TuyenDung = () => {
  return (
    <div>
      <TuyenDungComponent />
      <BannerTD />
      <Footer />
    </div>
  );
};

export default TuyenDung;
