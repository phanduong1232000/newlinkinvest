"use client";
import { setBlogId } from "@/redux/feature/blogSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NewsList = () => {
  const [blog, setBlog] = useState([]);

  const dataBlog = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cập nhật blog state khi dataBlog thay đổi
    if (dataBlog?.blog) {
      setBlog(dataBlog.blog);
    }
  });

  const handleOnChange = async (item) => {
    await dispatch(setBlogId(item));
  };

  return (
    <div className="relative z-50 py-8 md:py-12 px-4 mt-20 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 mt-8 max-w-7xl mx-auto">
        {blog.map((item) => (
          <div
            key={item._id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            onMouseEnter={(e) => handleOnChange(item)}
          >
            <div className="relative w-full h-[220px] md:h-[250px]">
              <Image
                src={item.image.url}
                alt={item.imageAlt || item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5 text-black font-utm-avo space-y-3">
              <h2 className="text-base md:text-lg font-utm-avo-bold line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                {item.title}
              </h2>
              <p className="text-gray-600 text-xs md:text-sm line-clamp-3">
                {item.metaDescription}
              </p>
              <Link
                href={`/tin-tuc/${item.slug}`}
                className="inline-block text-blue-500 text-xs font-medium hover:underline"
              >
                Đọc thêm
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
