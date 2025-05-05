"use client";
import { useParams } from "next/navigation";
import React from "react";
import { TinTucData } from "@/utils/tintuc";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = TinTucData.find((item) => item.slug === id);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-[50vh] text-xl text-red-500">
        Không tìm thấy bài viết.
      </div>
    );
  }

  return (
    <div className=" text-slate-200 min-h-screen px-4 md:px-8 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        {/* Tiêu đề */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {blog.title}
        </h1>

        {/* Ngày & tác giả */}
        <div className="flex items-center gap-3 text-sm text-slate-400 mb-6">
          <span>{blog.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-500"></span>
          <span>{blog.author || "NewLink Team"}</span>
        </div>

        {/* Ảnh */}
        {blog.image && (
          <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg mb-8">
            <img
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Trích dẫn ngắn */}
        <p className="text-lg text-slate-300 italic mb-6">
          {blog.excerpt}
        </p>

        {/* Nội dung chính */}
        <article
          className="prose prose-invert prose-lg max-w-none text-slate-100"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
