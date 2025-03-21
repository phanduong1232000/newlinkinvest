import "./globals.css";

export const metadata = {
  title: "NIC",
  description: "NIC là công ty chuyên đầu tư và phát triển bất động sản, với sứ mệnh mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
