// Draws the DRYAD as SVG from APER's published geometry table.
// Same module runs at build time (static SVG) and in the browser (size finder redraw).
// Units are millimetres; SVG y points down, so every "up" value is negated.

export interface Geo {
  headAngle: number;
  seatAngle: number;
  chainstay: number;
  stack: number;
  reach: number;
  bbDrop: number;
  seatTube: number;
  headTube: number;
  wheelbase: number;
}

type P = [number, number];
const rad = (d: number) => (d * Math.PI) / 180;
const add = (a: P, b: P): P => [a[0] + b[0], a[1] + b[1]];
const sub = (a: P, b: P): P => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const len = (a: P) => Math.hypot(a[0], a[1]);
const norm = (a: P): P => mul(a, 1 / len(a));
const f = (n: number) => Math.round(n * 10) / 10;
const pt = (p: P) => `${f(p[0])} ${f(p[1])}`;

/** Triangle with every corner rounded to radius r — the RibLogic pocket, the page's motif. */
export function pocket(a: P, b: P, c: P, r: number): string {
  const pts = [a, b, c];
  let d = "";
  for (let i = 0; i < 3; i++) {
    const p = pts[i];
    const prev = pts[(i + 2) % 3];
    const next = pts[(i + 1) % 3];
    const u1 = norm(sub(prev, p));
    const u2 = norm(sub(next, p));
    const ang = Math.acos(Math.max(-1, Math.min(1, u1[0] * u2[0] + u1[1] * u2[1])));
    const t = r / Math.tan(ang / 2);
    const p1 = add(p, mul(u1, t));
    const p2 = add(p, mul(u2, t));
    d += (i === 0 ? "M" : "L") + pt(p1) + ` Q${pt(p)} ${pt(p2)} `;
  }
  return d + "Z";
}

export const WHEEL_R = 356; // 622 bead seat / 2 + 45 mm tyre
export const VIEW = { x: -840, y: -770, w: 1960, h: 1110 };

export interface Drawing {
  pieces: { head: string; top: string; seat: string; down: string; shell: string };
  frame: string; // gold members
  stays: string;
  pockets: string; // knock-outs in the down tube
  fork: string;
  forkPockets: string;
  parts: string; // post, stem, bar, crank (dark)
  wheels: { rear: P; front: P };
  ground: number;
  points: { bb: P; htTop: P; rear: P; front: P; seatTop: P };
}

export function drawBike(g: Geo): Drawing {
  const bb: P = [0, 0];
  const rear: P = [-g.chainstay, -g.bbDrop];
  const front: P = [g.wheelbase - g.chainstay, -g.bbDrop];
  const htTop: P = [g.reach, -g.stack];
  const htDir: P = [Math.cos(rad(g.headAngle)), Math.sin(rad(g.headAngle))]; // down + forward
  const htBot = add(htTop, mul(htDir, g.headTube));
  const stDir: P = [-Math.cos(rad(g.seatAngle)), -Math.sin(rad(g.seatAngle))]; // up + back
  const seatTop = add(bb, mul(stDir, g.seatTube));
  const ttFront = add(htTop, mul(htDir, 22));
  const ttRear = add(bb, mul(stDir, g.seatTube - 28));
  const ssTop = add(bb, mul(stDir, g.seatTube - 70));
  const dtTop = add(htTop, mul(htDir, g.headTube - 26));

  // Members as closed polygons (a band of width w around a centreline), so they read as machined parts.
  const band = (a: P, b: P, w: number) => {
    const u = norm(sub(b, a));
    const n: P = [-u[1] * w, u[0] * w];
    return `M${pt(add(a, n))} L${pt(add(b, n))} L${pt(sub(b, n))} L${pt(sub(a, n))}Z `;
  };
  const headTube = band(add(htTop, mul(htDir, -8)), add(htBot, mul(htDir, 6)), 24);
  const pieces = {
    head: headTube,
    top: band(ttFront, ttRear, 15),
    seat: band(add(bb, mul(stDir, -10)), add(seatTop, mul(stDir, 6)), 16),
    down: band(dtTop, bb, 24),
    shell: `M${pt(add(bb, [-34, 0]))} a34 34 0 1 0 68 0 a34 34 0 1 0 -68 0Z`,
  };
  const frame = pieces.head + pieces.top + pieces.seat + pieces.down + pieces.shell;
  const stays = band(bb, rear, 10) + band(ssTop, rear, 8);

  // RibLogic pockets along the down tube: a warren-truss row of rounded triangles.
  const u = norm(sub(bb, dtTop));
  const n: P = [-u[1], u[0]];
  const L = len(sub(bb, dtTop));
  const count = 9;
  const start = 70, end = L - 70;
  const step = (end - start) / count;
  const hw = 14;
  let pockets = "";
  for (let i = 0; i < count; i++) {
    const s0 = start + i * step + 4, s1 = start + (i + 1) * step - 4, sm = (s0 + s1) / 2;
    const side = i % 2 === 0 ? 1 : -1;
    const base0 = add(add(dtTop, mul(u, s0)), mul(n, side * hw));
    const base1 = add(add(dtTop, mul(u, s1)), mul(n, side * hw));
    const apex = add(add(dtTop, mul(u, sm)), mul(n, -side * hw));
    pockets += pocket(base0, base1, apex, 3.2);
  }

  // Fork: one piece from crown to dropout.
  const crown = add(htBot, mul(htDir, 6));
  const fork = band(add(crown, mul(htDir, -4)), front, 15) + band(crown, add(crown, mul(htDir, 40)), 26);
  const fu = norm(sub(front, crown));
  const fn: P = [-fu[1], fu[0]];
  const fl = len(sub(front, crown));
  let forkPockets = "";
  const fc = 5;
  for (let i = 0; i < fc; i++) {
    const a0 = 60 + i * ((fl - 120) / fc) + 3, a1 = 60 + (i + 1) * ((fl - 120) / fc) - 3, am = (a0 + a1) / 2;
    const side = i % 2 === 0 ? 1 : -1;
    forkPockets += pocket(
      add(add(crown, mul(fu, a0)), mul(fn, side * 9)),
      add(add(crown, mul(fu, a1)), mul(fn, side * 9)),
      add(add(crown, mul(fu, am)), mul(fn, -side * 9)),
      2.4,
    );
  }

  // Contact points and components (dark).
  const postTop = add(seatTop, mul(stDir, 190));
  const saddleF = add(postTop, [70, -8]);
  const saddleR = add(postTop, [-120, -6]);
  const steerTop = add(htTop, mul(htDir, -38));
  const stemEnd = add(steerTop, [96, -10]);
  const barDrop: P = add(stemEnd, [40, 120]);
  const parts =
    band(seatTop, postTop, 9) +
    `M${pt(saddleR)} L${pt(saddleF)} L${pt(add(saddleF, [-6, 16]))} L${pt(add(saddleR, [4, 18]))}Z ` +
    band(add(htTop, mul(htDir, -8)), steerTop, 12) +
    band(steerTop, stemEnd, 11) +
    `M${pt(add(stemEnd, [0, -11]))} C${pt(add(stemEnd, [70, -14]))} ${pt(add(stemEnd, [78, 70]))} ${pt(barDrop)} L${pt(add(barDrop, [-14, 4]))} C${pt(add(stemEnd, [56, 60]))} ${pt(add(stemEnd, [52, 8]))} ${pt(add(stemEnd, [0, 11]))}Z ` +
    band(bb, add(bb, [Math.cos(rad(-62)) * 170, Math.sin(rad(-62)) * -170]), 9);

  return {
    pieces,
    frame,
    stays,
    pockets,
    fork,
    forkPockets,
    parts,
    wheels: { rear, front },
    ground: -g.bbDrop + WHEEL_R,
    points: { bb, htTop, rear, front, seatTop },
  };
}
