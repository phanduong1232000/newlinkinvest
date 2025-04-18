"use client";

import { DuAn } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";

const ProjectItem = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  // Lọc dữ án theo location
  const filteredProjects = selectedLocation
    ? DuAn.filter((project) => project.da === selectedLocation)
    : DuAn;

  return (
    <div className="relative z-50 py-5 md:py-10 px-2 mt-20 lg:px-0">
      <div className="flex justify-end">
        <div className="max-w-[400px] ">
          <select
            value={selectedLocation}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          >
            <option className="text-black" value="">
              Tất cả khu vực
            </option>
            <option className="text-black" value="hcm">
              Hồ Chí Minh
            </option>
            <option className="text-black" value="baoloc">
              Bảo Lộc
            </option>
            <option className="text-black" value="longan">
              Long An
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 px-2 mt-6">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <div className="shadow-2xl">
              <Image
                src={project.image}
                alt={project.alt}
                width={500}
                height={300}
                className="h-[200px] object-cover w-full"
              />
              <div className="bg-white rounded-b-lg p-4 text-black font-utm-avo">
                <h2 className="text-[16px] md:text-[20px] font-utm-avo-bold">
                  {project.name}
                </h2>
                <p className="text-[#2B2B2B] text-[12px] md:text-[16px]">
                  {project.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
