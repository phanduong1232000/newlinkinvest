import Image from "next/image";
import logo from "../../assets/images/logo.png";
import ListMenu from "../Home/ListMenu";
import ItemBLD from "./ItemBLD";

const BanLanhDao = () => {
  return (
    <div className="relative h-[950px] md:h-full ">
      {/* Nội Dung */}
      <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
        <div className="relative ">
          <div className="absolute left-2">
            <Image
              src={logo}
              alt="Logo"
              className="w-[40px] md:w-[80px] md:block"
            />
          </div>
          <ListMenu />
        </div>
      
        <ItemBLD />
      </div>
    </div>
  );
};

export default BanLanhDao;
