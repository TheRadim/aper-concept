// APER's spares and accessories (aper-bikes.com/shop, 8 Nov 2026). "fits" is inferred from product names; confirm with APER.
const u = "https://aper-bikes.com/wp-content/uploads/";
const p = "https://aper-bikes.com/product/";
export interface Accessory {
  name: string;
  price: number;
  fits: "DRYAD" | "KOMPace" | "DRYAD + KOMPace" | "Apparel";
  cat: "Spares" | "Protection" | "Apparel";
  img: string;
  url: string;
}
export const accessories: Accessory[] = [
  { name: "APER Thru Axle", price: 34, fits: "DRYAD + KOMPace", cat: "Spares", img: u + "2023/11/20240411_67_edit-768x512.jpg", url: p + "aper-thru-axle/" },
  { name: "RD Hanger (UDH)", price: 20, fits: "DRYAD + KOMPace", cat: "Spares", img: u + "2023/11/udh2.png", url: p + "rd-hanger/" },
  { name: "Headset End-Caps", price: 16, fits: "DRYAD + KOMPace", cat: "Spares", img: u + "2025/01/end-cap-768x377.jpg", url: p + "headset-end-caps/" },
  { name: "Rear Derailleur Pulley Set", price: 55, fits: "DRYAD + KOMPace", cat: "Spares", img: u + "2025/01/shimano-pulleys-set-768x492.jpg", url: p + "rear-derailleurs-pulleys-set/" },
  { name: "Idler", price: 34, fits: "KOMPace", cat: "Spares", img: u + "2023/11/20240411_46_edit-768x512.jpg", url: p + "idler/" },
  { name: "Rail Bearings with Rail", price: 187, fits: "KOMPace", cat: "Spares", img: u + "2023/11/placeh-1-768x512.jpg", url: p + "rail-bearings-w-rail/" },
  { name: "Rear Shock Mud Cover", price: 15, fits: "KOMPace", cat: "Protection", img: u + "2023/11/20240411_61_edit-768x512.jpg", url: p + "mud-cover/" },
  { name: "Chain Stay and Seat Stay Protection", price: 24, fits: "KOMPace", cat: "Protection", img: u + "2023/11/20240411_52_edit-1-768x512.jpg", url: p + "chain-stay-and-seat-stay-protection/" },
  { name: "Downtube Protection and Lower Access Cover", price: 25, fits: "KOMPace", cat: "Protection", img: u + "2023/02/20240411_56_edit-768x512.jpg", url: p + "downtube-protection/" },
  { name: "APER Bikes T-Shirt", price: 35, fits: "Apparel", cat: "Apparel", img: u + "2024/07/20240625_100__-768x512.jpg", url: p + "aper-bikes-t-shirt-wrl/" },
];
