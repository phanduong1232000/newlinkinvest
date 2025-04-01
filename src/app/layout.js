import "./globals.css";

export const metadata = {
  title: "New Link Company",
  description:
    "New Link là công ty chuyên đầu tư và phát triển bất động sản, với sứ mệnh mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng",
  keywords: [
    "bất động sản",
    "đầu tư",
    "New Link",
    "phát triển dự án",
    "cơ hội đầu tư",
  ],
  authors: [{ name: "New Link Company" }],
  robots: "index, follow",
  charset: "utf-8",

  openGraph: {
    title: "New Link Company - Đầu tư và phát triển bất động sản",
    description:
      "New Link mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng.",
    images: ["https://newlinkinvest.com/web-app-manifest-192x192.png"],
    url: "https://newlinkinvest.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Link Company - Đầu tư và phát triển bất động sản",
    description:
      "New Link mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng.",
    images: ["https://newlinkinvest.com/web-app-manifest-192x192.png"],
    site: "@NewLinkCompany",
  },
  alternates: {
    canonical: "https://newlinkinvest.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
