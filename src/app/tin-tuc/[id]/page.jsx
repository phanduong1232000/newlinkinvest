import Menu from "@/components/Menu";
import BlogDetail from "@/components/TinTuc/BlogDetail";
import { TinTucData } from "@/utils/tintuc";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = TinTucData.find((item) => item.slug === id);

  if (!blog) {
    return {
      title: "Bài viết không tìm thấy",
      description: "Không tìm thấy bài viết bạn yêu cầu.",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://newlinkinvest.com/tin-tuc/${blog.slug}`,
      images: [
        {
          url: "https://newlinkinvest.com" + blog.image, // Đường dẫn tĩnh: /images/delasol.png
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [`https://newlinkinvest.com` + blog.image],
    },
  };
}

const DetailNewsPage = () => {
  return (
    <div className="relative  md:h-full ">
      {/* Nội Dung */}
      <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
        <Menu />
        <BlogDetail />
      </div>
    </div>
  );
};

export default DetailNewsPage;
