import { AiFillStar, AiOutlineFileDone } from "react-icons/ai";

const data = [
  {
    img: "https://kinsleyconstruction.com/wp-content/uploads/2017/05/MGL4607FS-copy-edited-resized-e1496242288955.jpg",
    title: "Starbucks York Roasting Plant",
    auditRequests: "202402-COC-02467",
    auditType: "Food Safety GMP Audit",
    auditCompany: "DNV",
    auditDepartment: "Food Safety Audits",
    status: "In Progress",
    company: "Starbucks",
  },
  {
    img: "https://i0.wp.com/www.nessancleary.co.uk/wp-content/uploads/2020/03/Epson_Nagano_L1004699_WQ.jpg",
    title: "Epson Precision (Philippines) Inc",
    auditRequests: "202402-COC-03784",
    auditType: "Other Certificate/Outside Audit",
    auditCompany: "",
    auditDepartment: "CoC USA",
    status: "In Progress",
    company: "Epson",
  },

  {
    img: "https://metafields-manager-by-hulkapps.s3.amazonaws.com/uploads/643-volk.myshopify.com/1593224216-facilities.jpg",
    title: "Volk Enterprises, Inc. - Turlock, CA",
    auditRequests: "202402-FGMP-03526",
    auditType: "Food Safety GMP Audit",
    auditCompany: "",
    auditDepartment: "Food Safety Audits",
    status: "Completed",
    company: "Volk Enterprises",
  },

  {
    img: "https://images.squarespace-cdn.com/content/v1/54079066e4b00b9e179d04f5/1435371523083-561EKLDQ68P0LNN7TIMB/DSC_0004.JPG",
    title: "Oregon Spice Company (NE 148th Ave)",
    auditRequests: "202402-FGMP-03920",
    auditType: "GFSI",
    auditCompany: "DNV",
    auditDepartment: "Food Safety Audits",
    status: "Initiated",
    company: "Montana Alpine Touch, Inc.",
  },
  {
    img: "https://1.bp.blogspot.com/-956XuN5ngqs/YUbAID4QP2I/AAAAAAAAADY/tNtiil5zCxA9Tm1CgtoF_i63fEqX9SHcgCLcBGAsYHQ/w1600/garment%2Bexport%2Bhouses%2Bin%2BIndia.PNG",
    title: "Ashley Chase Estate Ltd.",
    auditRequests: "202402-FGMP-03913",
    auditType: "GFSI",
    auditCompany: "FoodChain ID",
    auditDepartment: "Food Safety Audits",
    status: "In Progress",
    company: "Floyd Peterson Company",
  },
  {
    img: "https://www.amtranet.group/img/logo/maa_tower.jpg",
    title: "Garment Export Village Ltd",
    auditRequests: "202402-COC-03918",
    auditType: "WRAP Certificate",
    auditCompany: "",
    auditDepartment: "CoC USA",
    status: "Initiated",
    company: "Tharanco Lifestyles LLC",
  },
  {
    img: "https://www.rrd.com/uploads/locations/images/intro/rr-donnelley-liaobu_20221208.jpg",
    title: "Guangdong Baili Food Co Ltd",
    auditRequests: "202311-COC-24634",
    auditType: "COC",
    auditCompany: "Arche Advisors",
    auditDepartment: "CoC USA",
    status: "Cancelled",
    company: "Guangdong Baili Food Co Ltd",
  },
  {
    img: "https://www.semissourian.com/photos/39/21/24/3921248-B.jpg",
    title: "Tyson Foods - St. Joseph",
    auditRequests: "202401-FGMP-00753",
    auditType: "Food Safety GMP Audit",
    auditCompany: "FSNS",
    auditDepartment: "Food Safety Audits USA",
    status: "Cancelled",
    company: "Tyson Foods, Inc.",
  },
  {
    img: "https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/5a1311cfa28921d22d82c3532e12e7cab2623d21-1-large.jpeg",
    title: "Johnston Reasearch & Performance Inc",
    auditRequests: "202402-NFGMP-04174",
    auditType: "GMP",
    auditCompany: "BV (GMP) Canada and USA",
    auditDepartment: "Non-Foods GMP",
    status: "Completed",
    company: "Johnston Reasearch & Performance Inc",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/00/Huangpu_Library_%28HoengSyut%29.jpg",
    title: "Guangzhou Rodman Plastic Co Ltd - Cooler Factory",
    auditRequests: "202402-NFGMP-04170",
    auditType: "GMP",
    auditCompany: "BV (GMP) China",
    auditDepartment: "Non-Foods GMP",
    status: "In Progress",
    company: "Igloo Products Corporation",
  },
  {
    img: "https://cdn.commercialcafe.com/images/9D67B98D-A1F5-4F84-91BD-476484D2BE5D/1089742.jpg",
    title: "Ludford's Inc.",
    auditRequests: "202402-COC-04168",
    auditType: "COC",
    auditCompany: "Arche Advisors",
    auditDepartment: "CoC USA",
    status: "Completed",
    company: "LeVecke Corporation",
  },
  {
    img: "https://s3.amazonaws.com/buildout-production/datas/21878328/e03c7a52924360c245883ae6ce29cf2c8f8465b5/full.jpg",
    title: "Pizapie Inc",
    auditRequests: "202402-FGMP-04166",
    auditType: "Food Safety GMP Audit",
    auditCompany: "NSF",
    auditDepartment: "Food Safety Audits CAN",
    status: "In Progress",
    company: "Pizapie Inc",
  },
  {
    img: "https://ei.marketwatch.com/Multimedia/2018/09/20/Photos/ZH/MW-GQ381_Cargil_20180920085156_ZH.jpg",
    title: "Cargill - Ft. Morgan - Est. 86R",
    auditRequests: "202402-FGMP-04163",
    auditType: "Animal Welfare Slaughter",
    auditCompany: "FSNS",
    auditDepartment: "Food Safety Audits USA",
    status: "New",
    company: "Cargill Meat Solutions dba Cargill Protein",
  },
  {
    img: "https://www.shahkam.com/wp-content/uploads/virtualtour_fi-650x415.jpg",
    title: "Shahkam Industries (PVT) Ltd",
    auditRequests: "202402-NFGMP-04161",
    auditType: "GMP",
    auditCompany: "SGS (GMP) Other",
    auditDepartment: "Non-Foods GMP",
    status: "In Progress",
    company: "Authentic Lifestyle Products LLC",
  },
  {
    img: "https://www.a-pack.be/IMG/Spieveldstraat2.jpg",
    title: "ChocDecor BVBA",
    auditRequests: "202402-FGMP-04158",
    auditType: "GFSI",
    auditCompany: "SGS - Foods",
    auditDepartment: "Food Safety Audits USA",
    status: "New",
    company: "Advantage Sales & Marketing LLC dba IBC",
  },
  
];

export default data;