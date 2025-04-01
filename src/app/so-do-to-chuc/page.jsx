import Footer from "@/components/Footer";
import SDComponent from "@/components/So-Do/SDComponent";
import React from "react";

export const metadata = {
  title: "Sơ Đồ - NewLink",
  alternates: {
    canonical: "https://newlinkinvest.com/so-do-to-chuc",
  },
};

const SoDo = () => {
  return (
    <div>
      <SDComponent /> <Footer />
    </div>
  );
};

export default SoDo;
