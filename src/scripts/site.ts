// Shared behaviour: mobile menu, header hide-on-scroll, section entrances.
const bar = document.querySelector<HTMLElement>("[data-bar]");
const menuBtn = document.querySelector<HTMLButtonElement>("[data-menu]");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const open = menuBtn.getAttribute("aria-expanded") !== "true";
  menuBtn.setAttribute("aria-expanded", String(open));
  nav?.setAttribute("data-open", String(open));
});
nav?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) {
    menuBtn?.setAttribute("aria-expanded", "false");
    nav.setAttribute("data-open", "false");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav?.getAttribute("data-open") === "true") {
    nav.setAttribute("data-open", "false");
    menuBtn?.setAttribute("aria-expanded", "false");
    menuBtn?.focus();
  }
});

// Header slides away when reading down, returns on the first scroll up.
let lastY = scrollY;
let ticking = false;
addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = scrollY;
      const open = nav?.getAttribute("data-open") === "true";
      if (bar) {
        if (!open && y > 400 && y > lastY + 4) bar.dataset.hidden = "true";
        else if (y < lastY - 4 || y < 400) bar.dataset.hidden = "false";
        document.documentElement.dataset.barHidden = bar.dataset.hidden ?? "false";
      }
      lastY = y;
      ticking = false;
    });
  },
  { passive: true },
);

// Entrances: children of [data-reveal] rise in, staggered, once.
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target as HTMLElement;
      [...el.children].forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i)));
      el.classList.add("in");
      io.unobserve(el);
    }
  },
  { rootMargin: "0px 0px -12% 0px" },
);
document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

// Account popover: opens from its trigger, closes on outside click and Escape.
const acctBtn = document.querySelector<HTMLButtonElement>("[data-acct-btn]");
const acct = document.getElementById("acct");
const setAcct = (open: boolean) => {
  acct?.setAttribute("data-open", String(open));
  acctBtn?.setAttribute("aria-expanded", String(open));
};
acctBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  setAcct(acct?.getAttribute("data-open") !== "true");
});
document.addEventListener("click", (e) => {
  if (acct && !acct.contains(e.target as Node)) setAcct(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && acct?.getAttribute("data-open") === "true") {
    setAcct(false);
    acctBtn?.focus();
  }
});
