import MainTuyenDung from "./MainTuyenDung";
import ItemTuyenDung from "./ItemTuyenDung";
import Menu from "../Menu";

const TuyenDungComponent = () => {
  return (
    <div className="relative pb-10 md:pb-0">
      {/* Nội Dung */}
      <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
      <Menu />
      </div>
      <div className="max-w-[1240px] mx-auto  pt-10 md:pt-20 px-4">
        <MainTuyenDung />
        <ItemTuyenDung />
      </div>
    </div>
  );
};

export default TuyenDungComponent;
