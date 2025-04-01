import Image from "next/image";
import logo from "../../assets/images/logo.png";
import ListMenu from "../Home/ListMenu";
import SDMap from "./SDMap";


const SDComponent = () => {
  return (
    <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
      <div className="relative ">
        <div className="absolute left-2">
          <Image
            src={logo}
            alt="Logo"
            className="w-[40px] md:w-[80px] md:block border"
          />
        </div>
        <ListMenu />
      </div>

      <SDMap />


    </div>
  );
};

export default SDComponent;
