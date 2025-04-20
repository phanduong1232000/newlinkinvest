"use client"
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import React from "react";

const FooterProvider = () => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return <div> {!isDashboard && <Footer />}</div>;
};

export default FooterProvider;
