import Footer from "@/components/Footer";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";

export const metadata = {
  title: "NewLink Investment Company",
  description:
    "NewLink Investment là công ty chuyên đầu tư và phát triển bất động sản, với sứ mệnh mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng",
  keywords: [
    "NewLink",
    "NewLink Investment",
    "bất động sản",
    "đầu tư",
    "New Link",
    "phát triển dự án",
    "cơ hội đầu tư",
  ],
  authors: [{ name: "NewLink Investment" }],
  robots: "index, follow",
  charset: "utf-8",

  openGraph: {
    title: "NewLink Investment Company - Đầu tư và phát triển bất động sản",
    description:
      "NewLink Investment mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng.",
    images: ["https://newlinkinvest.com/web-app-manifest-192x192.png"],
    url: "https://newlinkinvest.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NewLink Company - Đầu tư và phát triển bất động sản",
    description:
      "NewLink mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng.",
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
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <ReduxProvider>{children}</ReduxProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
