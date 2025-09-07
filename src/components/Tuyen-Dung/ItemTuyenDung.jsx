"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TuyenDung } from "@/utils/data";
import FormTD from "./FormTD";
import tuyendung1 from "../../assets/images/tuyendung1.png";

const ItemTuyenDung = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const job = {
    id: 4,
    role: "GIÁM ĐỐC QUAN HỆ KHÁCH HÀNG",
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="mt-10 md:mt-20 space-y-20 md:space-y-40 ">
      {TuyenDung.map((item, index) => (
        <div key={index} className="flex items-center space-x-4">
          {index % 2 === 0 ? (
            <>
              <Image src={item.image} alt="anh" className="hidden md:block" />
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
                    <h4 className="font-utm-avo-bold">
                      Quyền Lợi Và Chế Độ Đãi Ngộ:
                    </h4>
                    <p dangerouslySetInnerHTML={{ __html: item.ql }} />
                  </div>{" "}
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Môi Trường:</h4>
                    <p className="">{item.mt}</p>
                  </div>{" "}
                  <div className="absolute inset-0 -bottom-5 ">
                    <div className="flex justify-center items-end h-full ">
                      <button
                        onClick={() => openModal(item)}
                        className="text-[#09303D] bg-gradient-to-r from-[#FAD48A] via-[#FFF5BE] to-[#FAD48A] px-3 md:px-5 py-2 rounded-[55px] font-utm-avo-bold text-[12px] md:text-[16px] cursor-pointer"
                      >
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
                <p className="text-end text-[14px] md:text-[20px] font-utm-avo bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
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
                    <h4 className="font-utm-avo-bold">
                      Quyền Lợi Và Chế Độ Đãi Ngộ:
                    </h4>
                    <p dangerouslySetInnerHTML={{ __html: item.ql }} />
                  </div>{" "}
                  <div className="font-utm-avo">
                    <h4 className="font-utm-avo-bold">Môi Trường:</h4>
                    <p className="">{item.mt}</p>
                  </div>
                  <div className="absolute inset-0 -bottom-5 ">
                    <div className="flex justify-center items-end h-full ">
                      <button
                        onClick={() => openModal(item)}
                        className="text-[#09303D] bg-gradient-to-r from-[#FAD48A] via-[#FFF5BE] to-[#FAD48A] px-3 md:px-5 py-2 rounded-[55px] font-utm-avo-bold text-[12px] md:text-[16px] cursor-pointer"
                      >
                        ỨNG TUYỂN NGAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Image src={item.image} alt="anh" className="hidden md:block" />
            </>
          )}
        </div>
      ))}

      <div className="flex items-center space-x-4">
        <div className="w-full max-w-[530px] md:w-[530px]">
          <p className="text-end text-[14px] md:text-[20px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
            VỊ TRÍ
          </p>
          <h3 className="text-end -mt-2 text-[20px] md:text-[28px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
            GIÁM ĐỐC QUAN HỆ KHÁCH HÀNG
          </h3>
          <div className="w-full py-4 bg-[linear-gradient(128deg,#0C5D75,#09303D)] element-t space-y-2 text-[14px]">
            <div className="font-utm-avo">
              <h4 className="font-utm-avo-bold">Mô tả công việc:</h4>
              <ul className="">
                <li>
                  - Xây dựng & triển khai kế hoạch kinh doanh, đảm bảo doanh
                  thu.
                </li>
                <li>
                  - Tìm kiếm, phát triển & duy trì quan hệ với khách hàng, đối
                  tác, chủ đầu tư.
                </li>
                <li>
                  - Đại diện hình ảnh công ty trong các hoạt động kinh doanh &
                  sự kiện.
                </li>
                <li>
                  - Theo dõi tiến độ bán hàng, đề xuất giải pháp xử lý vướng
                  mắc.
                </li>
                <li>- Quản lý, báo cáo tình hình kinh doanh & thị trường.</li>
              </ul>
            </div>
            <div className="font-utm-avo">
              <h4 className="font-utm-avo-bold">Yêu cầu:</h4>
              <ul className="">
                <li>- Tốt nghiệp đại học trở lên</li>
                <li>
                  - Có ít nhất 5 năm kinh nghiệm trong lĩnh vực bất động sản
                </li>
                <li>
                  - Quan hệ rộng, am hiểu thị trường, kỹ năng giao tiếp & đàm
                  phán tốt.
                </li>
                <li>
                  - Có nhiều nguồn khách hàng tiềm năng cho các dự án/ sản phẩm
                  BĐS
                </li>
                <li>- Chịu áp lực doanh số tốt.</li>
              </ul>
            </div>
            <div className="font-utm-avo">
              <h4 className="font-utm-avo-bold">
                Quyền Lợi Và Chế Độ Đãi Ngộ:
              </h4>
              <ul className="">
                <li>- Tốt nghiệp đại học trở lên</li>
                <li>- Thu nhập hấp dẫn: lương cơ bản + hoa hồng + thưởng.</li>
                <li>- Đầy đủ BHXH, BHYT, BHTN theo luật.</li>
                <li>- Thưởng lễ, Tết, thưởng nóng theo hiệu quả.</li>
                <li>- Cơ hội thăng tiến & tham gia dự án lớn.</li>
                <li>- Môi trường chuyên nghiệp, năng động.</li>
              </ul>
            </div>{" "}
            <div className="absolute inset-0 -bottom-5 ">
              <div className="flex justify-center items-end h-full ">
                <button
                  onClick={() => openModal(job)}
                  className="text-[#09303D] bg-gradient-to-r from-[#FAD48A] via-[#FFF5BE] to-[#FAD48A] px-3 md:px-5 py-2 rounded-[55px] font-utm-avo-bold text-[12px] md:text-[16px] cursor-pointer"
                >
                  ỨNG TUYỂN NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image src={tuyendung1} alt="anh" className="hidden md:block" />
      </div>

      {isOpen && <FormTD closeModal={closeModal} selectedJob={selectedJob} />}
    </div>
  );
};

export default ItemTuyenDung;
