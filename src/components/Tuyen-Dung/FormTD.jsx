import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorEmail(false);
    if (formData.email !== formData.confirmEmail) {
      setErrorEmail(true);
      return;
    }

    let cvLink = "";

    try {
      // Upload CV lên server
      const uploadForm = new FormData();
      uploadForm.append("cvFile", formData.cvFile);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadForm,
      });
      console.log(res)
      const data = await res.json();
      cvLink = `${window.location.origin}${data.url}`;
    } catch (err) {
      Swal.fire("Lỗi", "Không thể upload CV", "error");
      return;
    }

    const emailParams = {
      fullName: formData.fullName,
      gender: formData.gender,
      email: formData.email,
      birthYear: formData.birthYear,
      coverLetter: formData.coverLetter,
      cvLink: cvLink,
      role: selectedJob?.role,
    };

    try {
      // Gửi email qua EmailJS
      await emailjs.send(
        "service_8tkc1cj",      // Thay bằng Service ID của bạn
        "template_37wmeec",     // Thay bằng Template ID của bạn
        emailParams,
        "Wmb7d8CfYB41xZPvz"       // Thay bằng Public Key của bạn
      );

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Đơn tuyển dụng đã được gửi",
        showConfirmButton: false,
        timer: 1500,
      });

      // Đóng modal sau khi gửi thành công
      closeModal();
    } catch (error) {
      console.error("EmailJS error:", error);
      Swal.fire("Lỗi", "Không thể gửi email", "error");
    }

   
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 text-black flex justify-center items-center px-4 overflow-y-auto">
      <div className="bg-white p-4 rounded-lg max-w-[100%] md:max-w-[500px] w-full relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
          &times;
        </button>
        <h2 className="text-xl text-center mb-4 ">
          Vị trí {selectedJob?.role.toLowerCase()}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-bold">
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
            <label className="font-bold">
              Giới Tính <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4 mt-2">
              {["Nam", "Nữ"].map((gender) => (
                <label
                  key={gender}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={gender.toLowerCase()}
                    checked={formData.gender === gender.toLowerCase()}
                    onChange={handleChange}
                    className="w-4 h-4"
                    required
                  />
                  <span className="text-[16px]">{gender}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="font-bold">
              Email <span className="text-red-500">*</span>
            </label>
            {errorEmail && (
              <div className="text-[12px] text-red-500">
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
            <label className="font-bold">
              Nhập lại Email <span className="text-red-500">*</span>
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
            <label className="font-bold">
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
            <label className="font-bold">
              Thư ứng tuyển <span className="text-red-500">*</span>
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full h-[100px] py-2 border rounded-lg px-3"
              required
            />
          </div>
          <div>
            <label className="font-bold">
              Tải CV <span className="text-red-500">*</span>
            </label>
            <div className="text-[12px] text-gray-500 mb-2">
              Vui lòng tải lên CV có định dạng (.PDF)
            </div>
            <label className="flex justify-center items-center border border-dashed p-3 cursor-pointer rounded-lg text-center">
              <span className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm">
                {formData.cvFile ? formData.cvFile.name : "Tải CV"}
              </span>
              <input
                type="file"
                name="cvFile"
                accept=".pdf"
                onChange={handleChange}
                className="hidden"
                required={!formData.cvFile}
              />
            </label>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTD;
