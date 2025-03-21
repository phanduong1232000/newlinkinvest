import BanLanhDao from "@/components/Ban-Lanh-Dao/BanLanhDao";
import Footer from "@/components/Footer";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BanLanhDao />
      </Suspense>
      <Footer />
    </div>
  );
};

export default page;
