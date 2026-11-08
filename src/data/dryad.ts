// All figures from aper-bikes.com/dryad/ (page modified 23 Sep 2026, read 8 Nov 2026)
// unless marked `press` (BIKE / TOUR magazine, Sep 2026) or `verify`.

export const sizes = ["XS", "S", "M", "L", "XL"] as const;
export type Size = (typeof sizes)[number];

export interface GeoSize {
  size: Size;
  rider: [number, number | null]; // cm
  headAngle: number;
  seatAngle: number;
  chainstay: number;
  stack: number;
  reach: number;
  bbDrop: number;
  seatTube: number;
  headTube: number;
  offset: number;
  topTube: number;
  wheelbase: number;
}

export const geometry: GeoSize[] = [
  { size: "XS", rider: [155, 165], headAngle: 68.5, seatAngle: 73.6, chainstay: 435, stack: 563, reach: 373, bbDrop: 75, seatTube: 420, headTube: 108, offset: 50, topTube: 538.7, wheelbase: 1054.0 },
  { size: "S", rider: [163, 173], headAngle: 68.7, seatAngle: 73.3, chainstay: 435, stack: 577, reach: 384, bbDrop: 75, seatTube: 450, headTube: 122, offset: 50, topTube: 557.1, wheelbase: 1068.4 },
  { size: "M", rider: [171, 181], headAngle: 69.2, seatAngle: 73.0, chainstay: 440, stack: 592, reach: 395, bbDrop: 75, seatTube: 480, headTube: 135, offset: 50, topTube: 576.0, wheelbase: 1084.9 },
  { size: "L", rider: [179, 190], headAngle: 70.25, seatAngle: 72.7, chainstay: 440, stack: 623, reach: 402, bbDrop: 72.5, seatTube: 510, headTube: 164, offset: 45, topTube: 596.0, wheelbase: 1087.5 },
  { size: "XL", rider: [188, null], headAngle: 70.5, seatAngle: 72.4, chainstay: 440, stack: 649, reach: 408, bbDrop: 70, seatTube: 540, headTube: 194, offset: 45, topTube: 613.9, wheelbase: 1093.4 },
];

export const geoRows: { key: keyof GeoSize; label: string; unit: string }[] = [
  { key: "stack", label: "Stack", unit: "mm" },
  { key: "reach", label: "Reach", unit: "mm" },
  { key: "headAngle", label: "Head angle", unit: "°" },
  { key: "seatAngle", label: "Seat angle", unit: "°" },
  { key: "topTube", label: "Effective top tube", unit: "mm" },
  { key: "headTube", label: "Head tube", unit: "mm" },
  { key: "seatTube", label: "Seat tube", unit: "mm" },
  { key: "chainstay", label: "Chainstay", unit: "mm" },
  { key: "bbDrop", label: "BB drop", unit: "mm" },
  { key: "offset", label: "Fork offset", unit: "mm" },
  { key: "wheelbase", label: "Wheelbase", unit: "mm" },
];

export interface Build {
  id: string;
  name: string;
  family: "Frameset" | "Shimano" | "SRAM";
  groupset: string;
  preorder: number;
  standard: number;
  wheels: string;
  cockpit: string;
  gearing: string;
  note: string;
}

export const builds: Build[] = [
  { id: "frameset", name: "Frameset", family: "Frameset", groupset: "Build it your way", preorder: 1245, standard: 1494, wheels: "—", cockpit: "—", gearing: "—", note: "Frame, monolithic fork, headset, seat clamp, UDH hanger and APER 12 mm thru axles." },
  { id: "2-11", name: "2.11", family: "Shimano", groupset: "Shimano GRX 2×11, mechanical", preorder: 2520, standard: 2962, wheels: "Novatec Jefty alloy", cockpit: "DEDA alloy bar, stem, post", gearing: "11–34T cassette", note: "The most affordable complete DRYAD. Two chainrings for long road links between gravel." },
  { id: "1-12", name: "1.12", family: "Shimano", groupset: "Shimano GRX 1×12, mechanical", preorder: 3250, standard: 3822, wheels: "Industry Nine Revive alloy", cockpit: "DEDA alloy", gearing: "40T × 10–51T", note: "One chainring, a 51-tooth bail-out gear for loaded climbs." },
  { id: "1-13-rival", name: "1.13 Rival", family: "SRAM", groupset: "SRAM Rival XPLR AXS 1×13", preorder: 3657, standard: 4302, wheels: "Industry Nine Revive alloy", cockpit: "DEDA alloy", gearing: "42T × 10–46T", note: "Wireless 13-speed at the lowest SRAM price point." },
  { id: "1-13-force", name: "1.13 Force", family: "SRAM", groupset: "SRAM Force XPLR AXS 1×13", preorder: 3930, standard: 4610, wheels: "Industry Nine Revive alloy", cockpit: "DEDA alloy", gearing: "42T × 10–46T", note: "Force shifting and carbon cranks on the same alloy wheelset." },
  { id: "1-12-di2", name: "1.12 Di2", family: "Shimano", groupset: "Shimano GRX Di2 1×12", preorder: 4463, standard: 5251, wheels: "Industry Nine Revive 2.0 carbon", cockpit: "DEDA carbon bar and post", gearing: "40T × 10–51T", note: "Electronic Shimano, carbon wheels and a carbon cockpit." },
  { id: "1-13-red", name: "1.13 Red Power", family: "SRAM", groupset: "SRAM Red XPLR AXS 1×13 + power meter", preorder: 5920, standard: 6970, wheels: "Industry Nine Revive 2.0 carbon", cockpit: "DEDA carbon", gearing: "42T × 10–46T", note: "The top build, with a crank power meter." },
];

export const deposit = 400;

export const facts = {
  frameWeight: "About 1,700 g", // press — verify
  forkWeight: "about 740 g", // press — verify
  tyres: "Vittoria Terreno T90, 45 mm",
  delivery: "December 2026",
};

export const eur = (n: number) => "€" + n.toLocaleString("en-GB");
