// Photos from APER's current website (aper-bikes.com), linked for the concept preview.
// They belong to APER Bikes; the KOMPace MY2026 shot is by Adam Gasson (Bespoked).
// Replace with new photography before any real launch.
const u = "https://aper-bikes.com/wp-content/uploads/";
export interface Img {
  src: string;
  width: number;
  height: number;
  credit?: string;
}
const img = (path: string, width: number, height: number, credit?: string): Img => ({ src: u + path, width, height, credit });

export const photos = {
  dryadWorkshop: img("2026/09/dryad-23-1000x1500.jpg", 1000, 1500),
  dryadOnMill: img("2026/09/dryad-hero.jpg", 1868, 1078),
  ribDetail: img("2026/09/dryad-riblogic-detail.jpg", 840, 260),
  kompaceForest: img("2023/11/compace1.jpg", 1500, 1000),
  kompaceWheelie: img("2023/11/compace2.jpg", 1524, 1016),
  kompaceSlope: img("2023/11/compace3.jpg", 1437, 958),
  kompaceDust: img("2023/11/pivot.jpg", 2461, 1641),
  kompaceDrivetrain: img("2023/11/p-4.jpg", 1400, 1750),
  kompaceBespoked: img("2025/11/kompace-my2026-full-bike-photo-by-adam-gasson_bespoked-1-1536x1152.jpg", 1536, 1152, "Photo: Adam Gasson / Bespoked"),
  kompaceStudio: img("2023/11/complete-bike_rh-side-1536x1024.jpg", 1536, 1024),
  frameGreen: img("2023/12/mim_3787_web.jpg", 2048, 1365),
  frameTeal: img("2023/12/mim_3762_web.jpg", 2048, 1365),
  frameGold: img("2023/12/mim_3744_web.jpg", 2048, 1365),
  framePurple: img("2023/12/mim_3682_web.jpg", 2048, 1365),
  lightPainting: img("2023/11/about-1.jpg", 2331, 1554),
  riderPortrait: img("2023/11/p1188822.jpg", 1638, 2048),
};
export type PhotoKey = keyof typeof photos;
export const logo = "https://aper-bikes.com/wp-content/uploads/2023/10/logo_fin-1.svg";
