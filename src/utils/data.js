import trantuananh from "../assets/images/trantuananh.png";
import tranquochuy from "../assets/images/tranquochuy.png";
import doduynghi from "../assets/images/doduynghi.png";

import gamuda from "../assets/images/gamuda.png";
import capitaland from "../assets/images/capitaland.png";
import sungroup from "../assets/images/sungroup.png";
import namlong from "../assets/images/namlong.png";
import keppel from "../assets/images/keppel.png";
import vins from "../assets/images/vins.png";
import khangdien from "../assets/images/khangdien.png";
import masterise from "../assets/images/masterise.png";
import kita from "../assets/images/kita.png";
import prodezi from "../assets/images/prodezi.png";

import linhvuc1 from "../assets/images/linhvuc1.png";
import linhvuc2 from "../assets/images/linhvuc2.png";

import tuyendung1 from "../assets/images/tuyendung1.png";
import tuyendung2 from "../assets/images/tuyendung2.png";
import tuyendung3 from "../assets/images/tuyendung3.png";

import lahome from "../assets/images/lahome.png";
import kitahome from "../assets/images/kitahome.png";
import mt from "../assets/images/mt eastmark.jpg";
import lancaster from "../assets/images/lancaster Legacy.png";
import delasol from "../assets/images/delasol.png";
import eaton from "../assets/images/eaton park.png";
import glocal from "../assets/images/glocal city.png";
import celadon from "../assets/images/celadon city.png";
import greenHill from '../assets/images/greenhill.jpg'

export const Menu = [
  {
    id: 1,
    text: "Tổng Quan",
    sourceLink: "/",
    hiddenList: [{ text: "Sơ Đồ Tổ Chức", link: "/so-do-to-chuc" }],
  },
  {
    id: 2,
    text: "Dự Án",
    sourceLink: "/du-an",
  },
  { id: 3, text: "Tin Tức", sourceLink: "/tin-tuc" },
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
    desc: "đầu tư và phát triển các dự án bất động sản.",
    alt: "New Link Investment đầu tư và phát triển các dự án bất động sản.",
    image: linhvuc1,
  },
  {
    id: 2,
    text: "Phân Phối Độc Quyền",
    desc: "phân phối độc quyền các dự án bất động sản của các đối tác uy tín.",
    alt: "New Link Investment phân phối độc quyền các dự án bất động sản của các đối tác uy tín.",
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
    alt: "New Link Investment - Trần Tuấn Anh",
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
    alt: "New Link Investment - Trân Quốc Huy",
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
    alt: "New Link Investment - Đỗ Duy Nghi",
    li: [
      "Kinh Nghiệm: Trên <span class='font-utm-avo-bold bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent'>20 năm</span> kinh nghiệm ngành BĐS.",
      "Từng phụ trách kế toán trưởng công ty Vạn Phát Hưng, An Gia, Phó TGĐ Tập đoàn Seaholding, TGĐ NTC Group.. phụ trách triển khai môi giới độc quyền nhiều dựng án tại khu đông từ năm 2014 đến nay.",
    ],
  },
];

export const Partner = [
  {
    id: 1,
    name: "gamuda",
    image: gamuda,
    alt: "New Link Investment - Gamuda",
    className: "w-[50px] md:w-[150px] md:h-[40px] ",
  },
  {
    id: 2,
    name: "capitaland",
    image: capitaland,
    alt: "New Link Investment - Capitaland",
    className: "w-[50px] md:w-[120px] md:h-[55px] ",
  },
  {
    id: 3,
    name: "sungroup",
    image: sungroup,
    alt: "New Link Investment - Sung Group",
    className: "w-[50px] md:w-[130px] md:h-[44px] ",
  },
  {
    id: 4,
    name: "namlong",
    image: namlong,
    alt: "New Link Investment - Nam Long",
    className: "w-[50px] md:w-[134px] md:h-[39px] ",
  },
  {
    id: 5,
    name: "keppel",
    image: keppel,
    alt: "New Link Investment - Keppel",
    className: "w-[50px] md:w-[134px] md:h-[28px] ",
  },
  {
    id: 6,
    name: "vins",
    image: vins,
    alt: "New Link Investment - VinGroup",
    className: "w-[50px] md:w-[134px] md:h-[59px] ",
  },
  {
    id: 7,
    name: "khangdien",
    image: khangdien,
    alt: "New Link Investment - Khang Điền",
    className: "w-[55px] md:w-[180px] md:h-[29px] ",
  },
  {
    id: 8,
    name: "masterise",
    image: masterise,
    alt: "New Link Investment - Masterise",
    className: "w-[35px] md:w-[95px] md:h-[65px] ",
  },
  {
    id: 9,
    name: "kita",
    image: kita,
    alt: "New Link Investment - Kita",
    className: "w-[50px] md:w-[124px] md:h-[41px] ",
  },
  {
    id: 10,
    name: "prodezi",
    image: prodezi,
    alt: "New Link Investment - Prodezi",
    className: "w-[50px] md:w-[130px] md:h-[34px] ",
  },
];

export const TuyenDung = [
  {
    id: 1,
    role: "NHÂN VIÊN KINH DOANH",
    yc: "không yêu cầu kinh nghiệm trong ngành bất động sản, nhưng kinh nghiệm trong lĩnh vực sales bảo hiểm, chứng khoán, ngân hàng là một lợi thế.",
    ql: "Lương Cơ bản 7 triệu/tháng. <br /> - Hoa hồng lên đến 70% + thưởng nóng hấp dẫn. <br /> - Thưởng KPI cuối năm lên đến 1 tỷ. <br /> - Thưởng hoa hồng trên doanh thu đem về. <br /> - Đào tạo bài bản, hỗ trợ data khách hàng tiềm năng. <br /> - Thu nhập cao, không giới hạn. <br /> - Cơ hội thăng tiến lên cấp quản lý.",
    cddn: "Công ty cung cấp data khách hàng tiềm năng, ngân sách marketing mạnh và đào tạo chuyên sâu để bạn có thể nhanh chóng nắm bắt công việc.",
    mt: "Môi trường làm việc chuyên nghiệp, năng động với cơ hội thăng tiến rõ ràng.",
    image: tuyendung3,
  },
  {
    id: 2,
    role: "TRƯỞNG PHÒNG KINH DOANH",
    yc: "Hơn 5 năm kinh nghiệm trong ngành bất động sản và có sẵn ngũ sales tối thiểu 5 người.",
    ql: "Lương cơ bản từ 15 triệu/ tháng. <br /> - Hoa hồng bán lên đến 70% + thưởng nóng hấp dẫn. <br /> - Hoa hồng team cực kỳ hấp dẫn. <br /> - Thưởng KPI cuối năm lên đến 2 tỷ. <br /> - Đào tạo bài bản, hỗ trợ data khách hàng tiềm năng. <br /> - Thu nhập cao, không giới hạn. <br /> - Cơ hội thăng tiến lên quản ký cấp cao. ",
    cddn: "Hấp dẫn nhất thị trường",
    mt: "Môi trường làm việc chuyên nghiệp, năng động, tạo cơ hội thăng tiến rõ ràng và phát triển sự nghiệp lâu dài.",
    image: tuyendung2,
  },

  {
    id: 3,
    role: "GIÁM ĐỐC SÀN",
    yc: "Hơn 5 năm kinh nghiệm trong ngành bất động sản và có sẵn ngũ sales tối thiểu 15 người.",
    ql: "Lương cơ bản từ 25 triệu/ tháng. <br /> - Hoa hồng bán lên đến 70% + thưởng nóng hấp dẫn. <br /> - Hoa hồng team cực kỳ hấp dẫn. <br /> - Thưởng KPI cuối năm lên đến 5 tỷ. <br /> - Thưởng hoa hồng trên doanh thu đem về. <br /> - Thu nhập cao, không giới hạn. <br /> - Cơ hội thăng tiến và hỗ trợ mở sàn và chi nhánh riêng trong tương lai. ",
    cddn: "Hấp dẫn nhất thị trường",
    mt: "Môi trường làm việc chuyên nghiệp, năng động, tạo cơ hội thăng tiến rõ ràng và phát triển sự nghiệp lâu dài.",
    image: tuyendung2,
  },
];

export const DuAn = [
  {
    id: 1,
    name: "LaHome ",
    desc: "Khu đô thị - công nghiệp xanh cách TP.HCM 5km, tiện ích nội khu đầy đủ",
    alt: "New Link - Khu đô thị - công nghiệp xanh cách TP.HCM 5km, tiện ích nội khu đầy đủ ",
    image: lahome,
    da: "longan",
  },
  {
    id: 2,
    name: "Kiều By Kita",
    desc: "Tầm view đẹp trung tâm TP.HCM, tiện ích 5 sao, vị trí kim cương, phong cách sống riêng tư",
    alt: "New Link - Tầm view đẹp trung tâm TP.HCM, tiện ích 5 sao, vị trí kim cương, phong cách sống riêng tư",
    image: kitahome,
    da: "hcm",
  },
  {
    id: 3,
    name: "MT Eastmark",
    desc: "Vị trí chiến lược, gần cao tốc Long Thành - Dầu Giây, tiện ích resort, tiềm năng tăng giá cao",
    alt: "New Link - Vị trí chiến lược, gần cao tốc Long Thành - Dầu Giây, tiện ích resort, tiềm năng tăng giá cao",
    image: mt,
    da: "hcm",
  },
  {
    id: 4,
    name: "Lancaster Legacy",
    desc: "",
    alt: "New Link",
    image: lancaster,
    da: "hcm",
  },
  {
    id: 5,
    name: "DE LA SOL",
    desc: "",
    alt: "New Link",
    image: delasol,
    da: "hcm",
  },
  {
    id: 6,
    name: "Eaton Park",
    desc: "",
    alt: "New Link",
    image: eaton,
    da: "hcm",
  },
  {
    id: 7,
    name: "Global City",
    desc: "Tiện ích trung tâm thương mại, khu nhạc nước lớn nhất ĐNA, công viên, trường học quốc tế, bênh viện",
    alt: "New Link - Tiện ích trung tâm thương mại, khu nhạc nước lớn nhất ĐNA, công viên, trường học quốc tế, bênh viện",
    image: glocal,
    da: "hcm",
  },
  {
    id: 8,
    name: "Celadon City",
    desc: "Công viên 16,4 ha, câu lạc bộ thể thao, trung tâm thương mại, trường học quốc tế",
    alt: "New Link - Công viên 16,4 ha, câu lạc bộ thể thao, trung tâm thương mại, trường học quốc tế",
    image: celadon,
    da: "hcm",
  },
  {
    id: 9,
    name: "Green Hill Retreat",
    desc: "Nhà dưới tán rừng retreat đầu tiên tại Việt Nam, nơi mỗi mái ấm là một hành trình chữa lành giữa thiên nhiên thuần khiết",
    alt: "New Link - Nhà dưới tán rừng retreat đầu tiên tại Việt Nam, nơi mỗi mái ấm là một hành trình chữa lành giữa thiên nhiên thuần khiết",
    image: greenHill,
    da: "baoloc",
  },
];
