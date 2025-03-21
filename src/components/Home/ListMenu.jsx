"use client";
import { Menu } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiPhone } from "react-icons/fi";

const ListMenu = () => {
  let pathname = usePathname();
  pathname = pathname.split("?")[0]; // Loại bỏ query params

  return (
    <div className="relative w-full flex justify-center  ">
      <div className="space-x-2 md:space-x-8 text-[12px] md:text-[16px] ">
        {Menu.map((item) => {
          const cleanSourceLink = item.sourceLink.split("?")[0]; // Loại bỏ query trong menu
          const isActive =
            pathname === cleanSourceLink ||
            (cleanSourceLink !== "/" && pathname.startsWith(cleanSourceLink));

          return (
            <Link
              key={item.id}
              href={item.sourceLink}
              className={`font-utm-avo relative ${
                isActive ? "border-b pb-0.5" : ""
              }`}
            >
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className="absolute -bottom-14 right-0 flex items-center space-x-2">
        {/* Icon điện thoại */}
        <div className="relative group">
          {/* Hộp chứa số điện thoại */}
          <a
            href="tel:0901234567"
            className="absolute right-0 text-[14px] border h-10 w-[170px] pl-4 space-x-2 flex items-center rounded-full transition-all duration-200 opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-100"
          >
            <p>0901 234 567</p>
          </a>
          {/* Icon điện thoại */}
          <a
            href="tel:0901234567"
            className="relative border h-8 w-8 md:h-10 md:w-10 rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black"
          >
            <FiPhone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListMenu;
