import React from "react";
import logo from "../../assets/images/logo.png";
import ListMenu from "@/components/Home/ListMenu";
import Image from "next/image";
import ProjectItem from "@/components/Du-An/ProjectItem";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dự Án Đầu Tư - NewLink",
  alternates: {
    canonical: "https://newlinkinvest.com/du-an",
  },
};

const Project = () => {
  return (
    <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
      <div className="relative ">
        <div className="absolute left-2">
          <Image
            src={logo}
            alt="NewLink Investment Logo"
            className="w-[40px] md:w-[80px] md:block border"
          />
        </div>
        <ListMenu />
      </div>
      <h1 className="hidden">Dự Án Của NewLink Investment</h1>
      <ProjectItem />
      <Footer />
    </div>
  );
};

export default Project;
