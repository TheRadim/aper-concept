// The two bikes and their builds, as APER sells them today (aper-bikes.com, 8 Nov 2026).
import { builds as dryadBuilds, deposit } from "./dryad";
import type { PhotoKey } from "./media";

export interface CatalogBuild {
  id: string;
  name: string; // full product name
  short: string;
  group: string; // filter chip
  summary: string;
  bullets: string[];
  price: number;
  was?: number;
  status: string;
  img: PhotoKey;
  pos?: string;
  sizes: string[];
  shop: string; // current product URL at APER
  specs?: [string, string][];
}
export interface Bike {
  slug: "dryad" | "kompace";
  name: string;
  tagline: string;
  chips: [string, string][];
  from: number;
  hero: PhotoKey;
  heroPos: string;
  card: PhotoKey;
  cardPos: string;
  builds: CatalogBuild[];
}

const dSizes = ["XS", "S", "M", "L", "XL"];
const dShop = "https://aper-bikes.com/product/dryad/";
const dryadSpecs: Record<string, [string, string][]> = {
  frameset: [["Frame", "7075-T6, CNC-machined, RibLogic"], ["Fork", "One-piece machined 7075-T6"], ["Included", "Headset, seat clamp, UDH hanger, 12 mm thru axles"]],
  "2-11": [["Groupset", "Shimano GRX 2×11, mechanical"], ["Cassette", "11–34T"], ["Brakes", "GRX BR-RX400, 180/160"], ["Wheels", "Novatec Jefty alloy"], ["Tyres", "Vittoria Terreno T90 45 mm"], ["Cockpit", "DEDA Gera alloy bar, Zero100 stem and post"], ["Saddle", "Pro Stealth Offroad"]],
  "1-12": [["Groupset", "Shimano GRX 1×12, mechanical"], ["Gearing", "40T × 10–51T"], ["Brakes", "GRX BR-RX820, 180/160"], ["Wheels", "Industry Nine Revive alloy"], ["Tyres", "Vittoria Terreno T90 45 mm"], ["Cockpit", "DEDA Gera alloy, Zero100"], ["Saddle", "SQlab 614 Ergowave"]],
  "1-13-rival": [["Groupset", "SRAM Rival XPLR AXS 1×13"], ["Gearing", "42T × 10–46T"], ["Brakes", "Rival HRD, 160/160"], ["Wheels", "Industry Nine Revive alloy"], ["Tyres", "Vittoria Terreno T90 45 mm"], ["Cockpit", "DEDA Gera alloy, Zero100"], ["Saddle", "SQlab 614 Ergowave"]],
  "1-13-force": [["Groupset", "SRAM Force XPLR AXS 1×13"], ["Gearing", "42T carbon × 10–46T"], ["Brakes", "Force HRD, 160/160"], ["Wheels", "Industry Nine Revive alloy"], ["Tyres", "Vittoria Terreno T90 45 mm"], ["Cockpit", "DEDA Gera alloy, Zero100"], ["Saddle", "SQlab 614 Ergowave"]],
  "1-12-di2": [["Groupset", "Shimano GRX Di2 1×12"], ["Gearing", "40T × 10–51T"], ["Brakes", "GRX BR-RX820, 180/160"], ["Wheels", "Industry Nine Revive 2.0 carbon"], ["Tyres", "Vittoria Terreno T90 45 mm"], ["Cockpit", "DEDA Superzero carbon bar, carbon post"], ["Saddle", "SQlab 614 Ergowave"]],
  "1-13-red": [["Groupset", "SRAM Red XPLR AXS 1×13"], ["Power meter", "Red XPLR crank, 42T"], ["Brakes", "Red HRD, 160/160"], ["Wheels", "Industry Nine Revive 2.0 carbon"], ["Tyres", "Vittoria Terreno T90 45 mm"], ["Cockpit", "DEDA Superzero carbon bar, carbon post"], ["Saddle", "SQlab 614 Ergowave"]],
};

export const bikes: Bike[] = [
  {
    slug: "dryad",
    name: "DRYAD",
    tagline: "Gravel and bikepacking, machined from 7075-T6 aluminium.",
    chips: [["Frame", "7075-T6 machined"], ["Fork", "One-piece billet"], ["Wheel", "700C"], ["Sizes", "XS–XL"]],
    from: 1245,
    hero: "dryadWorkshop",
    heroPos: "50% 64%",
    card: "dryadWorkshop",
    cardPos: "50% 70%",
    builds: dryadBuilds.map((b) => ({
      id: b.id,
      name: b.id === "frameset" ? "DRYAD Frameset" : `DRYAD ${b.name}`,
      short: b.name,
      group: b.family,
      summary: b.note,
      bullets: b.id === "frameset" ? ["Frame and one-piece fork", "Headset, clamp, UDH hanger", "12 mm thru axles"] : [b.groupset, b.wheels, b.gearing],
      price: b.preorder,
      was: b.standard,
      status: "Pre-order",
      img: b.id === "frameset" ? "dryadOnMill" : "dryadWorkshop",
      pos: b.id === "frameset" ? "50% 60%" : "50% 70%",
      sizes: dSizes,
      shop: dShop,
      specs: dryadSpecs[b.id],
    })),
  },
  {
    slug: "kompace",
    name: "KOMPace",
    tagline: "29-inch enduro, built around the patented Rising Pivot.",
    chips: [["Travel", "170 / 160 mm"], ["Wheel", "29 in"], ["Suspension", "Rising Pivot"], ["Sizes", "S1–S3"]],
    from: 3969,
    hero: "kompaceWheelie",
    heroPos: "50% 50%",
    card: "kompaceForest",
    cardPos: "50% 60%",
    builds: [
      {
        id: "frameset", name: "KOMPace Frameset", short: "Frameset", group: "Frameset",
        summary: "The machined frame with Rising Pivot, ready for your own build. Shock not included.",
        bullets: ["7075 machined frame", "Rising Pivot rail and carriage", "Shock not included"],
        price: 3969, status: "Available", img: "kompaceStudio", pos: "50% 55%", sizes: ["S1", "S2", "S3"],
        shop: "https://aper-bikes.com/product/kompace/",
        specs: [["Frame", "CNC-machined 7075 aluminium"], ["Suspension", "Rising Pivot, 160 mm rear"], ["Fork", "Designed for 160–170 mm"], ["Shock", "Not included"]],
      },
      {
        id: "complete", name: "KOMPace Complete", short: "Complete", group: "Complete",
        summary: "The complete KOMPace, ready to ride.",
        bullets: ["170 / 160 mm travel", "29 in wheels", "Complete build"],
        price: 7769, status: "Available", img: "kompaceForest", pos: "50% 60%", sizes: ["S1", "S2", "S3"],
        shop: "https://aper-bikes.com/product/complete-bike/",
        specs: [["Frame", "CNC-machined 7075 aluminium"], ["Suspension", "Rising Pivot, 170 / 160 mm"], ["Wheels", "29 in"], ["Build", "See aper-bikes.com for components"]],
      },
      {
        id: "se-2026", name: "KOMPace MY2026 Special Edition", short: "MY2026 SE", group: "Complete",
        summary: "Shown at Bespoked 2026: Fox Podium fork, Hope parts and Alugear details.",
        bullets: ["Fox Podium fork", "Hope components", "Special Edition finish"],
        price: 12969, status: "Limited", img: "kompaceBespoked", pos: "50% 55%", sizes: ["S1", "S2", "S3"],
        shop: "https://aper-bikes.com/product/aper-kompace-my2026-special-edition/",
        specs: [["Frame", "CNC-machined 7075 aluminium"], ["Fork", "Fox Podium"], ["Components", "Hope, Alugear"], ["Suspension", "Rising Pivot"]],
      },
    ],
  },
];
export { deposit };
export const bikeBySlug = (s: string) => bikes.find((b) => b.slug === s)!;
