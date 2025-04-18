import React from "react";
import ListMenu from "./Home/ListMenu";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="relative ">
      <div className="absolute left-2">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="New Link Investment"
            className="w-[40px] md:w-[80px] md:block border"
          />
        </Link>
      </div>
      <ListMenu />
    </div>
  );
};

export default Menu;
