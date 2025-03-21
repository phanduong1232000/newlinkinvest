import Image from "next/image";
import React from "react";
import hinh1 from "../../assets/images/background.png";
import { TuyenDung } from "@/utils/data";

const ItemTuyenDung = () => {
  return (
    <div className="mt-10 md:mt-20 space-y-20 md:space-y-40 ">
      {TuyenDung.map((item, index) => (
        <div key={index} className="flex items-center space-x-4">
          {index % 2 === 0 ? (
            <>
              <Image
                src={item.image}
                alt={`Hình ${index + 1}`}
                className="hidden md:block"
              />
              <div className="w-[530px]  ">
                <p className="text-[14px] md:text-[20px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
                  VỊ TRÍ
                </p>
                <h3 className="-mt-2 text-[20px] md:text-[32px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
                  {item.role}
                </h3>
                <div className="w-full py-4 bg-[linear-gradient(128deg,#09303D,#0C5D75)] element space-y-2 text-[14px] relative">
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Yêu Cầu:</h4>
                    <p className="">{item.yc}</p>
                  </div>
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Quyền Lợi:</h4>
                    <p className="">{item.ql}</p>
                  </div>{" "}
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Chế Độ Đãi Ngộ:</h4>
                    <p className="">{item.cddn}</p>
                  </div>
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Môi Trường:</h4>
                    <p className="">{item.mt}</p>
                  </div>{" "}
                  <div className="absolute inset-0 -bottom-5 ">
                    <div className="flex justify-center items-end h-full ">
                      <button className="text-[#09303D] bg-gradient-to-r from-[#FAD48A] via-[#FFF5BE] to-[#FAD48A] px-3 md:px-5 py-2 rounded-[55px] font-utm-avo-bold text-[12px] md:text-[16px] cursor-pointer">
                        ỨNG TUYỂN NGAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-[530px] ">
                <p className="text-end text-[14px] md:text-[20px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
                  VỊ TRÍ
                </p>
                <h3 className="text-end -mt-2 text-[20px] md:text-[32px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
                  {item.role}
                </h3>
                <div className="w-full py-4 bg-[linear-gradient(128deg,#0C5D75,#09303D)] element-t space-y-2 text-[14px]">
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Yêu Cầu:</h4>
                    <p className="">{item.yc}</p>
                  </div>
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Quyền Lợi:</h4>
                    <p className="">{item.ql}</p>
                  </div>{" "}
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Chế Độ Đãi Ngộ:</h4>
                    <p className="">{item.cddn}</p>
                  </div>
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Môi Trường:</h4>
                    <p className="">{item.mt}</p>
                  </div>
                  <div className="absolute inset-0 -bottom-5 ">
                    <div className="flex justify-center items-end h-full ">
                      <button className="text-[#09303D] bg-gradient-to-r from-[#FAD48A] via-[#FFF5BE] to-[#FAD48A] px-3 md:px-5 py-2 rounded-[55px] font-utm-avo-bold text-[12px] md:text-[16px] cursor-pointer">
                        ỨNG TUYỂN NGAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={item.image}
                alt={`Hình ${index + 1}`}
                className="hidden md:block"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemTuyenDung;
