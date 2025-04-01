import { DuAn } from "@/utils/data";
import Image from "next/image";
import React from "react";

const ProjectItem = () => {
  return (
    <div className="relative z-50 py-5 md:py-10 px-2 mt-20  lg:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
        {DuAn.map((project) => {
          return (
            <div key={project.id}>
              <div className=" shadow-2xl  ">
                <Image src={project.image} alt={project.name} />
                <div className="bg-white rounded-b-lg p-4 text-black font-utm-avo ">
                  <h2 className="text-[16px] md:text-[20px] font-utm-avo-bold">{project.name}</h2>
                  <p className="text-[#2B2B2B] text-[12px] md:text-[16px]">{project.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
