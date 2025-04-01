import React from "react";
import logo from "../../assets/images/logo.png";
import ListMenu from "@/components/Home/ListMenu";
import Image from "next/image";
import ProjectItem from "@/components/Du-An/ProjectItem";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dự án - NewLink",
  alternates: {
    canonical: "https://newlinkinvest.com/du-an",
  },
};

const Project = () => {
  return (
    <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
      <div className="relative ">
        <div className="absolute left-0">
          <Image
            src={logo}
            alt="Logo"
            className="w-[40px] md:w-[80px] md:block border"
          />
        </div>
        <ListMenu />
      </div>
      <ProjectItem /> <Footer />
    </div>
  );
};

export default Project;
