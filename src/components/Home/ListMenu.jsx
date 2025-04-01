"use client";
import { Menu } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";

const DesktopMenu = ({ pathname }) => {
  return (
    <div className="hidden md:flex space-x-8 text-[16px]">
      {Menu.map((item) => {
        const cleanSourceLink = item.sourceLink.split("?")[0];
        const isActive =
          pathname === cleanSourceLink ||
          (cleanSourceLink !== "/" && pathname.startsWith(cleanSourceLink));

        return (
          <div key={item.id} className="relative pb-1 group">
            <Link
              href={item.sourceLink}
              className={`font-utm-avo relative block md:inline-block p-2 ${
                isActive ? "border-b pb-0.5" : ""
              }`}
            >
              {item.text}
            </Link>

            {item.hiddenList && (
              <div className="absolute left-0 top-8 mt-2 hidden group-hover:block bg-[#33525C] shadow-lg rounded-b-lg rounded-r-lg w-50">
                {item.hiddenList.map((subItem, index) => (
                  <div key={index}>
                    <Link
                      href={subItem.link}
                      className="block px-4 py-3 text-white hover:bg-[#487381] rounded-b-lg rounded-r-lg text-[16px] font-utm-avo"
                    >
                      {subItem.text}
                    </Link>
                    {index !== item.hiddenList.length - 1 && (
                      <div className="px-5 border-b border-[#09303D]"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, pathname }) => {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-[#09303d] bg-opacity-90 z-100 transition-transform ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className=" w-64 bg-[#0c3d4a] text-white h-full shadow-lg p-5 fixed right-0 top-0">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="mb-4 text-gray-300 flex justify-end w-full"
        >
          <FiX size={24} color="white" />
        </button>
        {Menu.map((item) => {
          const cleanSourceLink = item.sourceLink.split("?")[0];
          const isActive =
            pathname === cleanSourceLink ||
            (cleanSourceLink !== "/" && pathname.startsWith(cleanSourceLink));

          return (
            <div key={item.id} className="mb-3">
              <Link
                href={item.sourceLink}
                className={`block px-4 py-2 rounded-lg text-lg ${
                  isActive
                    ? "bg-[#12728a] text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.text}
              </Link>
              {item.hiddenList && (
                <div className="ml-4 border-l-2 border-gray-500 pl-2 mt-1 space-y-2">
                  {item.hiddenList.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.link}
                      className="block py-1 text-gray-300 text-sm hover:underline"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ListMenu = () => {
  let pathname = usePathname();
  pathname = pathname.split("?")[0]; // Loại bỏ query params
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full flex justify-center">
      {/* Nút menu cho mobile */}
      <button
        className="md:hidden absolute right-4 top-2 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu Desktop */}
      <DesktopMenu pathname={pathname} />
      {/* Menu Mobile */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        pathname={pathname}
      />

      {/* Nút gọi điện */}
      <div className="absolute md:-bottom-14 -bottom-20 right-4 md:right-0 flex items-center space-x-2">
        <div className="relative group">
          <a
            href="tel:0901234567"
            className="absolute right-0 text-[14px] border h-10 w-[170px] pl-4 flex items-center rounded-full opacity-0 group-hover:opacity-100"
          >
            <p>090.9999.619</p>
          </a>
          <a
            href="tel:0909999619"
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
