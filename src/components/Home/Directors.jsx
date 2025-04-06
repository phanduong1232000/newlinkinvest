import React from "react";

import ItemDirectors from "./ItemDirectors";
const Directors = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-5 mt-8 md:mt-20 pb-20">
      <h2 className="text-center text-[24px] md:text-[40px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
        BAN LÃNH ĐẠO
      </h2>
      <div className="mt-2 w-[350px] md:w-[600px] mx-auto">
        <h3 className="text-center text-[12px] md:text-[14px]">
          Với đội ngũ lãnh đạo giàu kinh nghiệm, NIC luôn nỗ lực không ngừng để
          mang lại những giá trị bền vững cho các nhà đầu tư, khách hàng và cộng
          đồng.
        </h3>
      </div>

      <ItemDirectors />
    </div>
  );
};

export default Directors;
