// A small client-side bag kept in localStorage. Nothing is sent anywhere.
export interface Line {
  key: string; // product + options
  name: string;
  meta: string; // chosen options
  price: number; // unit price
  due?: number; // unit amount due today (DRYAD pre-order deposit)
  qty: number;
  img: string;
  kind: "bike" | "frameset" | "accessory";
  href: string;
}
const KEY = "aper-bag-v1";
const eur = (n: number) => "€" + n.toLocaleString("en-GB");
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export const read = (): Line[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};
const write = (lines: Line[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* storage blocked: the bag lives for this page only */
  }
  memory = lines;
  document.dispatchEvent(new CustomEvent("bag:change"));
};
let memory: Line[] = read();
const lines = () => memory;

export const totals = (ls: Line[] = lines()) => {
  const subtotal = ls.reduce((s, l) => s + l.price * l.qty, 0);
  const due = ls.reduce((s, l) => s + (l.due ?? l.price) * l.qty, 0);
  const hasBike = ls.some((l) => l.kind !== "accessory");
  const count = ls.reduce((s, l) => s + l.qty, 0);
  return { subtotal, due, hasBike, count, later: subtotal - due };
};

export const add = (line: Omit<Line, "qty">, qty = 1) => {
  const ls = [...lines()];
  const found = ls.find((l) => l.key === line.key);
  if (found) found.qty += qty;
  else ls.push({ ...line, qty });
  write(ls);
  bump();
  open();
};
export const setQty = (key: string, qty: number) => write(lines().flatMap((l) => (l.key !== key ? [l] : qty > 0 ? [{ ...l, qty }] : [])));
export const clear = () => write([]);

// ---- Rendering shared by the sheet and the bag page ----
export const lineHTML = (l: Line) => `
  <div class="line" data-key="${esc(l.key)}">
    <a href="${esc(l.href)}"><img src="${esc(l.img)}" alt="" /></a>
    <div>
      <h3>${esc(l.name)}</h3>
      <p class="meta">${esc(l.meta)}</p>
      <span class="qty"><button type="button" data-dec aria-label="Fewer">−</button><span>${l.qty}</span><button type="button" data-inc aria-label="More">+</button></span>
    </div>
    <div>
      <p class="price num">${eur(l.price * l.qty)}</p>
      <button type="button" class="remove" data-remove>Remove</button>
    </div>
  </div>`;
export const totalsHTML = () => {
  const t = totals();
  return `
    <div><span>Subtotal</span><span class="num">${eur(t.subtotal)}</span></div>
    <div><span>Shipping</span><span>${t.hasBike ? "Free" : t.count ? "From €7" : "—"}</span></div>
    ${t.later ? `<div><span>Due later (pre-order balance)</span><span class="num">${eur(t.later)}</span></div>` : ""}
    <div class="grand"><span>Due today</span><span class="num">${eur(t.due)}</span></div>`;
};
export const bindLines = (root: HTMLElement) => {
  root.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    const row = t.closest<HTMLElement>("[data-key]");
    if (!row) return;
    const l = lines().find((x) => x.key === row.dataset.key);
    if (!l) return;
    if (t.closest("[data-inc]")) setQty(l.key, l.qty + 1);
    if (t.closest("[data-dec]")) setQty(l.key, l.qty - 1);
    if (t.closest("[data-remove]")) setQty(l.key, 0);
  });
};

// ---- Header badge and sheet ----
const badge = document.querySelector<HTMLElement>("[data-cart-count]");
const sheet = document.querySelector<HTMLElement>("[data-sheet]");
const scrim = document.querySelector<HTMLElement>("[data-scrim]");
const body = document.querySelector<HTMLElement>("[data-cart-lines]");
const tot = document.querySelector<HTMLElement>("[data-cart-totals]");
const checkout = document.querySelector<HTMLAnchorElement>("[data-cart-checkout]");
let lastFocus: Element | null = null;

const render = () => {
  const ls = lines();
  const t = totals();
  if (badge) {
    badge.textContent = String(t.count);
    badge.hidden = t.count === 0;
  }
  if (body) body.innerHTML = ls.length ? ls.map(lineHTML).join("") : `<p class="empty">Your bag is empty.</p>`;
  if (tot) tot.innerHTML = ls.length ? totalsHTML() : "";
  checkout?.toggleAttribute("hidden", !ls.length);
};
const bump = () => {
  if (!badge) return;
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
};
export const open = () => {
  lastFocus = document.activeElement;
  sheet?.setAttribute("data-open", "true");
  sheet?.setAttribute("aria-hidden", "false");
  scrim?.setAttribute("data-open", "true");
  sheet?.querySelector<HTMLElement>("[data-cart-close]")?.focus();
};
const close = () => {
  sheet?.setAttribute("data-open", "false");
  sheet?.setAttribute("aria-hidden", "true");
  scrim?.setAttribute("data-open", "false");
  (lastFocus as HTMLElement | null)?.focus?.();
};
document.querySelectorAll("[data-cart-open]").forEach((b) => b.addEventListener("click", open));
sheet?.querySelector("[data-cart-close]")?.addEventListener("click", close);
scrim?.addEventListener("click", close);
document.addEventListener("keydown", (e) => e.key === "Escape" && sheet?.getAttribute("data-open") === "true" && close());
if (body) bindLines(body);
document.addEventListener("bag:change", render);
addEventListener("storage", (e) => {
  if (e.key === KEY) {
    memory = read();
    render();
  }
});
render();
