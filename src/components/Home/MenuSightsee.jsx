import React from "react";

const MenuSightsee = ({onExploreClick}) => {
  return (
    <div className="relative px-2 ">
      <div className="flex h-full items-end">
        <button onClick={onExploreClick} className="bg-gradient-to-r from-[#FAD48A] via-[#FFF5BE] to-[#FAD48A] px-3 md:px-5 py-2 text-black rounded-[55px] font-utm-avo-bold text-[12px] md:text-[16px] cursor-pointer">
          THAM QUAN DỰ ÁN
        </button>
      </div>
    </div>
  );
};

export default MenuSightsee;
