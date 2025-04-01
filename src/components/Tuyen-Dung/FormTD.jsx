import React, { useState } from "react";
import Swal from "sweetalert2";

const FormTD = ({ closeModal, selectedJob }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    confirmEmail: "",
    birthYear: "",
    coverLetter: "",
    cvFile: null,
  });
  const [errorEmail, setErrorEmail] = useState(false);
  console.log(errorEmail);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorEmail(false);
    if (formData.email !== formData.confirmEmail) {
      setErrorEmail(true);

      return;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Đơn tuyển dụng đã được gửi",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-100 text-black flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[500px] relative">
        <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
          &times;
        </button>
        <h2 className="text-xl text-center mb-4 ">
          Vị trí {selectedJob?.role.toLowerCase()}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="font-utm-avo-bold">
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <input
              value={formData.fullName}
              name="fullName"
              onChange={handleChange}
              type="text"
              className="w-full py-2 border rounded-lg px-3"
              required
            />
          </div>
          <div>
            <label className="font-utm-avo-bold">
              Giới Tính <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4 mt-2">
              {["Nam", "Nữ"].map((gender) => {
                const value = gender.toLowerCase(); // Đảm bảo giá trị hợp lệ
                return (
                  <label
                    key={gender}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={value}
                      checked={formData.gender === value} // Kiểm soát trạng thái checked
                      onChange={handleChange}
                      className="accent-blue-500"
                      required
                    />
                    <span className="text-[18px]">{gender}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <label className="font-utm-avo-bold">
              Email <span className="text-red-500">*</span>
            </label>
            {errorEmail && (
              <div className="text-[12px] text-red-500 ">
                Email không trùng khớp - Vui lòng nhập lại!!!
              </div>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 border rounded-lg px-3"
              required
            />
          </div>
          <div>
            <label className="font-utm-avo-bold">
              Nhập lại Email của bạn <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              className="w-full py-2 border rounded-lg px-3"
              required
            />
          </div>
          <div>
            <label className="font-utm-avo-bold">
              Năm Sinh <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
              className="w-full py-2 border rounded-lg px-3"
              required
            />
          </div>
          <div>
            <label className="font-utm-avo-bold">
              Thư ứng tuyển <span className="text-red-500">*</span>
            </label>
            <div className="text-[12px] text-[#808080] ">
              Vui lòng giới thiệu sơ về bản thân ứng viên, kinh nghiệm làm
              việc,...
            </div>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full h-[90px] py-2 border rounded-lg px-3"
              required
            />
          </div>
          <div>
            <label className="font-utm-avo-bold">
              Tải CV <span className="text-red-500">*</span>
            </label>
            <div className="text-[12px] text-[#808080] mb-2">
              Vui lòng tải lên CV có định dạng (.PDF)
            </div>
            {formData.cvFile === null ? (
              <label className="flex justify-center border border-dashed p-5">
                <div className=" bg-[#09303D] p-2 px-4 text-white font-utm-avo text-[14px] rounded-lg">
                  Tải CV
                </div>
                <input
                  type="file"
                  name="cvFile"
                  accept=".pdf"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
              </label>
            ) : (
              <label className="flex justify-center border border-dashed p-5">
                <div className=" bg-[#09303D] p-2 px-4 text-white font-utm-avo text-[14px] rounded-lg">
                  {formData.cvFile.name}
                </div>
                <input
                  type="file"
                  name="cvFile"
                  accept=".pdf"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <button className="w-full mt-4 bg-[#09303D] text-white px-4 py-2 rounded">
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTD;
