import trantuananh from "../assets/images/trantuananh.png";
import tranquochuy from "../assets/images/tranquochuy.png";
import doduynghi from "../assets/images/doduynghi.png";

import dkra from "../assets/images/dkra.png";
import cbre from "../assets/images/cbre.png";
import xoan from "../assets/images/xoan.png";
import houze from "../assets/images/houze.png";
import rever from "../assets/images/rever.png";
import smartland from "../assets/images/smartland.png";
import salereal from "../assets/images/salereal.png";
import tm from "../assets/images/tm.png";

import linhvuc1 from "../assets/images/linhvuc1.png";
import linhvuc2 from "../assets/images/linhvuc2.png";

import tuyendung1 from "../assets/images/tuyendung1.png";
import tuyendung2 from "../assets/images/tuyendung2.png";
import tuyendung3 from "../assets/images/tuyendung3.png";

export const Menu = [
  { id: 1, text: "Tổng Quan", sourceLink: "/" },
  {
    id: 5,
    text: "Ban Lãnh Đạo",
    sourceLink: "/ban-lanh-dao?name=tran-quoc-huy",
  },
  { id: 6, text: "Tuyển Dụng", sourceLink: "/tuyen-dung" },
];

export const Copy = [
  { id: 1, text: "Tổng Quan", sourceLink: "/" },
  { id: 2, text: "Ý Nghĩa Thương Hiệu", sourceLink: "/y-nghia-thuong-hieu" },
  { id: 3, text: "Dự Án Phân Phối", sourceLink: "/du-an-phan-phoi" },
  { id: 4, text: "Phát Triển Và Đầu Tư", sourceLink: "/phat-trien-dau-tu" },
  {
    id: 5,
    text: "Ban Lãnh Đạo",
    sourceLink: "/ban-lanh-dao?name=tran-quoc-huy",
  },
  { id: 6, text: "Tuyển Dụng", sourceLink: "/tuyen-dung" },
  { id: 7, text: "Liên Hệ", sourceLink: "/lien-he" },
];

export const Field = [
  {
    id: 1,
    text: "Đầu Tư Phát Triển",
    desc: "NIC đầu tư và phát triển các dự án bất động sản.",
    image: linhvuc1,
  },
  {
    id: 2,
    text: "Phân Phối Độc Quyền",
    desc: "NIC phân phối độc quyền các dự án bất động sản của các đối tác uy tín.",
    image: linhvuc2,
  },
];

export const Directors = [
  {
    id: 1,
    name: "TRẦN TUẤN ANH",
    role: "Phó Tổng Giám Đốc",
    year: 10,
    image: trantuananh,
    link: "tran-tuan-anh",
    li: [
      "Kinh Nghiệm: Trên <span class='font-utm-avo-bold bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent'>10 năm</span> kinh nghiệm BĐS Úc và Việt Nam.",
      "Các dự án đã triển khai: Đô thị vệ tinh, đô thị nghỉ dưỡng, căn hộ cao cấp, trong TP.HCM, Đồng Nai, Phan Thiết,... tại tập đoàn Nova Group.",
      "Bên cạnh đó đã có 5 năm kinh nghiệp quản trị doanh nghiệp riêng triển khai đầu tư và phát triển các dự án.",
    ],
  },
  {
    id: 2,
    name: "TRẦN QUỐC HUY",
    role: "Tổng Giám Đốc",
    year: 15,
    image: tranquochuy,
    style: true,
    link: "tran-quoc-huy",
    li: [
      "Kinh Nghiệm: Trên <span class='font-utm-avo-bold bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent'>15 năm</span> kinh nghiệm bất động sản cho Nova Group.",
      "Các dự án đã triển khai: Đô thị vệ tinh, đô thị nghỉ dưỡng, căn hộ cao cấp, trong TP.HCM, Đồng Nai, Phan Thiết,...",
      "Ngoài ra, còn quản lý phòng kinh doanh với đội ngũ hơn 200 nhân sự bán hàng trực tiếp.",
    ],
  },
  {
    id: 3,
    name: "ĐỖ DUY NGHI",
    role: "Phó Tổng Giám Đốc",
    year: 20,
    image: doduynghi,
    link: "do-duy-nghi",
    li: [
      "Kinh Nghiệm: Trên <span class='font-utm-avo-bold bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent'>20 năm</span> kinh nghiệm ngành BĐS.",
      "Từng phụ trách kế toán trưởng công ty Vạn Phát Hưng, An Gia, Phó TGĐ Tập đoàn Seaholding, TGĐ NTC Group.. phụ trách triển khai môi giới độc quyền nhiều dựng án tại khu đông từ năm 2014 đến nay.",
    ],
  },
];

export const Partner = [
  { id: 1, name: "DKRA", image: dkra },
  { id: 2, name: "CBRE", image: cbre },
  { id: 3, name: "XOAN", image: xoan },
  { id: 4, name: "HOUSE", image: houze },
  { id: 5, name: "REVER", image: rever },
  { id: 6, name: "SMARTLAND", image: smartland },
  { id: 7, name: "SALEREAL", image: salereal },
  { id: 8, name: "TM", image: tm },
];

export const TuyenDung = [
  {
    id: 1,
    role: "GIÁM ĐỐC KINH DOANH",
    yc: "Ít nhất 3 năm kinh nghiệm trong ngành và khả năng xây dựng, quản lý đội ngũ sales tối thiểu 20 người.",
    ql: "Bạn sẽ có cơ hội nhận thu nhập cao với hoa hồng lũy tiến lên đến 70%, thưởng KPI cuối năm lên đến 1 tỷ đồng.",
    cddn: "Đãi ngộ hấp dẫn, hỗ trợ tối đa trong việc mở rộng đội ngũ và phát triển quy mô. Công ty cung cấp data khách hàng tiềm năng, ngân sách marketing mạnh mẽ và đào tạo chuyên sâu.",
    mt: "Môi trường làm việc chuyên nghiệp, năng động, tạo cơ hội thăng tiến rõ ràng.",
    image: tuyendung1,
  },
  {
    id: 2,
    role: "GIÁM ĐỐC KINH DOANH",
    yc: "Ít nhất 2 năm kinh nghiệm trong ngành bất động sản và khả năng quản lý đội ngũ sales từ 5-10 người.",
    ql: "Bạn sẽ nhận thu nhập cao với hoa hồng lũy tiến lên đến 70%, thưởng KPI cuối năm lên đến 1 tỷ đồng.",
    cddn: "Chế độ đãi ngộ hấp dẫn, cùng sự hỗ trợ mạnh mẽ về data khách hàng và ngân sách marketing.",
    mt: "Môi trường làm việc chuyên nghiệp, năng động, tạo cơ hội thăng tiến rõ ràng và phát triển sự nghiệp lâu dài.",
    image: tuyendung2,
  },
  {
    id: 3,
    role: "GIÁM ĐỐC KINH DOANH",
    yc: "không yêu cầu kinh nghiệm trong ngành bất động sản, nhưng kinh nghiệm trong lĩnh vực sales bảo hiểm, chứng khoán, ngân hàng là một lợi thế.",
    ql: "Bạn sẽ nhận thu nhập cao với hoa hồng lũy tiến lên đến 70%, thưởng doanh số hấp dẫn và có cơ hội phát triển nghề nghiệp.",
    cddn: "Công ty cung cấp data khách hàng tiềm năng, ngân sách marketing mạnh và đào tạo chuyên sâu để bạn có thể nhanh chóng nắm bắt công việc.",
    mt: "Môi trường làm việc chuyên nghiệp, năng động với cơ hội thăng tiến rõ ràng.",
    image: tuyendung3,
  },
];
