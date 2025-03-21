import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.png";
import ListMenu from "../Home/ListMenu";
import MainTuyenDung from "./MainTuyenDung";
import ItemTuyenDung from "./ItemTuyenDung";

const TuyenDungComponent = () => {
  return (
    <div className="relative pb-10 md:pb-0">
      {/* Nội Dung */}
      <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
        <div className="relative ">
          <div className="absolute left-0">
            <Image
              src={logo}
              alt="Logo"
              className="w-[40px] md:w-[80px] md:block"
            />
          </div>
          <ListMenu />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto  pt-10 md:pt-20 px-4">
        <MainTuyenDung />
        <ItemTuyenDung />
      </div>
    </div>
  );
};

export default TuyenDungComponent;
