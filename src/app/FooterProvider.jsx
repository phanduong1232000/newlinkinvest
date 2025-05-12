"use client";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import React from "react";

const FooterProvider = () => {
  const pathname = usePathname();
  const isExcluded = pathname.startsWith("/dashboard") || pathname.startsWith("/kieu-by-kita");

  return <div> {!isExcluded && <Footer />}</div>;
};

export default FooterProvider;