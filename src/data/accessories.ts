// APER's spares and accessories. Names, prices, descriptions and options from aper-bikes.com (9 Nov 2026).
const u = "https://aper-bikes.com/wp-content/uploads/";
export const anodised = [
  { name: "Black", hex: "#1d1d1f" },
  { name: "Deep Magenta", hex: "#8a1f5c" },
  { name: "Mediterranean Blue", hex: "#1f4f9c" },
  { name: "Raw Aluminium", hex: "#c9cbcd" },
  { name: "Rebound Red", hex: "#c0262d" },
];
export interface Option {
  name: string;
  kind: "colour" | "text";
  values: string[];
}
export interface Accessory {
  slug: string;
  name: string;
  price: number;
  fits: string;
  cat: "Components" | "Protection" | "Apparel";
  tags: string[]; // filter tags
  img: string;
  gallery: string[];
  lead: string;
  body: string[];
  details: [string, string][];
  options: Option[];
}
const colour: Option = { name: "Colour", kind: "colour", values: anodised.map((c) => c.name) };

export const accessories: Accessory[] = [
  {
    slug: "thru-axle", name: "APER Thru Axle", price: 34, fits: "DRYAD and KOMPace", cat: "Components", tags: ["DRYAD", "KOMPace"],
    img: u + "2023/11/20240411_67_edit.jpg", gallery: [u + "2023/11/20240411_67_edit.jpg"],
    lead: "Our signature 12 mm APER thru axle.",
    body: ["The same 12 mm thru axle that ships with every APER frameset. Keep one as a spare for the trip, or replace a worn one."],
    details: [["Diameter", "12 mm"], ["Fits", "DRYAD, KOMPace"], ["Made by", "APER, Patras"]], options: [],
  },
  {
    slug: "rd-hanger", name: "RD Hanger (UDH)", price: 20, fits: "DRYAD and KOMPace", cat: "Components", tags: ["DRYAD", "KOMPace"],
    img: u + "2023/11/udh2.png", gallery: [u + "2023/11/udh2.png"],
    lead: "The SRAM Universal Derailleur Hanger.",
    body: ["Both APER frames use the SRAM Universal Derailleur Hanger, so a replacement is easy to find on the road and quick to fit at home. Worth carrying on any long trip."],
    details: [["Standard", "SRAM UDH"], ["Fits", "DRYAD, KOMPace"]], options: [],
  },
  {
    slug: "headset-end-caps", name: "Headset End-Cap", price: 16, fits: "Most 1 1/8\" steerers", cat: "Components", tags: ["DRYAD", "KOMPace"],
    img: u + "2025/01/end-cap.jpg", gallery: [u + "2025/01/end-cap.jpg"],
    lead: "CNC-machined from 7075-T6 aluminium, with a laser-etched logo.",
    body: ["Beautifully CNC-machined from 7075-T6 aluminium, this headset top cap is the finishing touch for your bike. The laser-etched logo adds a detail of precision, and the anodised colours let you match or contrast the rest of the build."],
    details: [["Material", "7075-T6 aluminium, anodised"], ["Weight", "14 g, bolt included"], ["Marking", "Laser-etched APER logo"]], options: [colour],
  },
  {
    slug: "pulley-set", name: "Rear Derailleur Pulley Set", price: 55, fits: "Shimano and SRAM 12-speed", cat: "Components", tags: ["DRYAD", "KOMPace"],
    img: u + "2025/01/shimano-pulleys-set.jpg", gallery: [u + "2025/01/shimano-pulleys-set.jpg"],
    lead: "Machined from 7075-T6 billet for Shimano and SRAM 12-speed derailleurs.",
    body: [
      "Each pulley is CNC-machined from 7075-T6 aluminium billet for precision and durability, then anodised in the colour you choose.",
      "Designed for smooth, precise shifting and built to keep wear low, so the drivetrain stays in good condition for longer.",
    ],
    details: [["Material", "7075-T6 aluminium billet, anodised"], ["Compatibility", "Shimano 12-speed or SRAM 12-speed rear derailleurs"], ["Weight", "28 g"]],
    options: [{ name: "Derailleur", kind: "text", values: ["Shimano 12-speed", "SRAM 12-speed"] }, colour],
  },
  {
    slug: "idler", name: "Idler", price: 34, fits: "KOMPace", cat: "Components", tags: ["KOMPace"],
    img: u + "2023/11/20240411_46_edit.jpg", gallery: [u + "2023/11/20240411_46_edit.jpg"],
    lead: "Designed by us, machined for you. Bearing pre-installed.",
    body: ["The KOMPace idler is machined from lightweight 7075 aluminium sourced within the EU, on the same CNC machines as the frames. The bearing comes pre-installed, so fitting it takes minutes."],
    details: [["Material", "7075-T4-T6 aluminium, EU-sourced"], ["Bearing", "Pre-installed"], ["Fits", "KOMPace"]], options: [],
  },
  {
    slug: "rail-bearings", name: "Rail Bearings with Rail", price: 187, fits: "KOMPace", cat: "Components", tags: ["KOMPace"],
    img: u + "2023/11/placeh-1.jpg", gallery: [u + "2023/11/placeh-1.jpg", u + "2023/11/b06b3968_hq.jpg"],
    lead: "The HIWIN rail with its heavy-duty linear guideway and dust wipers.",
    body: ["The heart of the Rising Pivot: a HIWIN rail and heavy-duty linear guideway with dust wipers. A complete replacement set for a KOMPace that has seen a lot of seasons."],
    details: [["Manufacturer", "HIWIN"], ["Includes", "Rail, linear guideway, dust wipers"], ["Fits", "KOMPace Rising Pivot"], ["Care", "Lubricate the rail after every ride or wash"]], options: [],
  },
  {
    slug: "shock-mud-cover", name: "Rear Shock Mud Cover", price: 15, fits: "KOMPace", cat: "Protection", tags: ["KOMPace", "Protection"],
    img: u + "2023/11/20240411_61_edit.jpg", gallery: [u + "2023/11/20240411_61_edit.jpg"],
    lead: "Made from a tough elastic material. Designed and made by APER.",
    body: ["Keeps mud and grit off the rear shock on wet days. Cut from a tough, elastic material that follows the frame."],
    details: [["Material", "Tough elastic material"], ["Fits", "KOMPace"], ["Made by", "APER"]], options: [],
  },
  {
    slug: "stay-protection", name: "Chainstay and Seatstay Protection", price: 24, fits: "KOMPace", cat: "Protection", tags: ["KOMPace", "Protection"],
    img: u + "2023/11/20240411_52_edit-1.jpg", gallery: [u + "2023/11/20240411_52_edit-1.jpg"],
    lead: "APER stay protectors, with 3M adhesive tape included.",
    body: ["Protects the stays from chain slap and stone strikes. Shaped to the KOMPace stays and supplied with 3M adhesive tape."],
    details: [["Includes", "Chainstay and seatstay protectors, 3M tape"], ["Fits", "KOMPace"]], options: [],
  },
  {
    slug: "downtube-protection", name: "Downtube Protection and Lower Access Cover", price: 25, fits: "KOMPace", cat: "Protection", tags: ["KOMPace", "Protection"],
    img: u + "2023/02/20240411_56_edit.jpg", gallery: [u + "2023/02/20240411_56_edit.jpg"],
    lead: "Elastic material reinforced with Kevlar textile.",
    body: ["Down tube protection and lower access cover made from elastic material reinforced with Kevlar textile. Built to take hard impacts and to last."],
    details: [["Material", "Elastic, Kevlar-reinforced"], ["Fits", "KOMPace"], ["Made by", "APER"]], options: [],
  },
  {
    slug: "t-shirt", name: "APER T-Shirt, WRL", price: 35, fits: "Unisex", cat: "Apparel", tags: ["Apparel"],
    img: u + "2024/07/20240625_100__.jpg", gallery: [u + "2024/07/20240625_100__.jpg"],
    lead: "The wild boar, on soft white cotton. Made in Greece by WRL.",
    body: ["The APER logo tee keeps the spirit of the Erymanthian boar alive when you are away from the mountains. Made from soft fabric by We Ride Local, a clothing company based in Athens."],
    details: [["Material", "100% cotton"], ["Fit", "Unisex"], ["Print", "Silkscreen"], ["Label", "HD woven tag"], ["Made in", "Greece"]],
    options: [{ name: "Size", kind: "text", values: ["Small", "Medium", "Large"] }],
  },
];
export const accessoryBySlug = (s: string) => accessories.find((a) => a.slug === s)!;
