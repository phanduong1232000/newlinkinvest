"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import nic from "@/assets/images/NICmini.png";
import Link from "next/link";

const BackNic = () => {
  return (
    <Link href="/du-an">
      <motion.button
        className="fixed text-[12px] md:text-[16px] w-[60px] h-[60px] rounded-full bottom-2 right-2 bg-white text-black px-4 py-1 shadow-lg cursor-pointer z-50"
        whileHover={{ scale: 1.1 }} // Tăng kích thước và đổi màu khi hover
        whileTap={{ scale: 0.95 }} // Nhỏ lại khi bấm
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image src={nic} alt="nic" className="w-[30px] md:w-[50px]" />
      </motion.button>
    </Link>
  );
};

export default BackNic;
