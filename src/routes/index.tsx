import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Users,
  Fingerprint,
  CalendarDays,
  Palmtree,
  Wallet,
  LineChart,
  BarChart3,
  ShieldCheck,
  Clock,
  Eye,
  Sparkles,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Hotel,
  Stethoscope,
  HeartPulse,
  Utensils,
  Building2,
  Waves,
  Star,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
  Play,
  Menu,
  X as XIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { I18nProvider, useI18n, type Lang } from "@/lib/i18n";

import heroHotel from "@/assets/hero-hotel.jpg";
import heroHospital from "@/assets/hero-hospital.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import reemajHotelAsset from "@/assets/reemaj-hotel.jpeg.asset.json";
import moduleStocksAsset from "@/assets/module-stocks.jpeg.asset.json";
import moduleAccountsAsset from "@/assets/module-accounts.jpeg.asset.json";
import modulePosAsset from "@/assets/module-pos.jpeg.asset.json";
import moduleFinanceAsset from "@/assets/module-finance.png.asset.json";
import moduleHrAsset from "@/assets/module-hr.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Retex Solution — Gestion RH & Automatisation | DotNet" },
      {
        name: "description",
        content:
          "Automatisez présences, plannings, paie et rapports RH pour hôtels, hôpitaux, cliniques, resorts, restaurants et entreprises.",
      },
    ],
  }),
  component: IndexPage,
});

/* ----------------------------- Reveal on scroll ---------------------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700", "ease-out");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/* ------------------------------- Hero slider ------------------------------- */
const slideImages = [heroHotel, heroHospital, heroOffice];

function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const { lang, setLang } = useI18n();
  const options: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];
  return (
    <div
      className={`flex items-center rounded-full p-0.5 ${
        scrolled ? "border border-border/60 bg-card" : "border border-white/25 bg-white/10"
      }`}
      role="group"
      aria-label="Language"
    >
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
            lang === o.code
              ? scrolled
                ? "bg-primary text-white"
                : "bg-white text-primary-deep"
              : scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Hero() {
  const { t, lang, dir: pageDir } = useI18n();
  const slides = t.hero.slides.map((s, i) => ({ ...s, img: slideImages[i] }));
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 28, direction: "ltr" });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => embla.scrollNext(), 6000);
    return () => {
      clearInterval(id);
      embla.off("select", onSelect);
    };
  }, [embla]);

  useEffect(() => {
    embla?.reInit();
  }, [embla, lang]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="h-full" ref={emblaRef} dir="ltr">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={slideImages[i]} className="relative h-full min-w-0 flex-[0_0_100%]">
              <img
                src={s.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/85 via-primary-deep/55 to-primary/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-12">
                <div
                  className={`max-w-3xl text-white ${pageDir === "rtl" ? "ms-auto text-right" : ""}`}
                  dir={pageDir}
                >
                  <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90">
                    <Sparkles className="size-3.5 text-accent" /> {s.eyebrow}
                  </span>
                  <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                    {s.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">{t.hero.subtitle}</p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button variant="hero" size="xl" asChild>
                      <a href="#contact">
                        {t.nav.demo}{" "}
                        <ArrowRight className={`size-5 ${pageDir === "rtl" ? "rotate-180" : ""}`} />
                      </a>
                    </Button>
                    <Button variant="heroOutline" size="xl">
                      <Play className="size-5" /> {t.hero.presentation}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        aria-label="Précédent"
        onClick={() => embla?.scrollPrev()}
        className="absolute left-4 top-1/2 z-20 grid -translate-y-1/2 place-items-center rounded-full glass-dark p-3 text-white transition hover:bg-white/30 lg:left-8"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        aria-label="Suivant"
        onClick={() => embla?.scrollNext()}
        className="absolute right-4 top-1/2 z-20 grid -translate-y-1/2 place-items-center rounded-full glass-dark p-3 text-white transition hover:bg-white/30 lg:right-8"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => embla?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-10 bg-accent" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* trust badge */}
      <div className="absolute bottom-8 right-4 z-20 hidden items-center gap-3 rounded-2xl glass px-5 py-3 shadow-[var(--shadow-card)] md:flex lg:right-12">
        <div className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
          <TrendingUp className="size-5" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{t.hero.trustCount}</p>
          <p className="text-xs text-muted-foreground">{t.hero.trustLabel}</p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Navigation ------------------------------- */
function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    [t.nav.home, "#top"],
    [t.nav.features, "#features"],
    [t.nav.industries, "#secteurs"],
    [t.nav.benefits, "#avantages"],
    [t.nav.pricing, "#tarifs"],
    [t.nav.contact, "#contact"],
  ] as const;

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "glass shadow-[var(--shadow-card)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12 lg:py-4">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-deep text-white shadow-[var(--shadow-soft)]">
            <span className="text-lg font-extrabold">R</span>
          </div>
          <span
            className={`text-base font-extrabold tracking-tight sm:text-lg ${solid ? "text-foreground" : "text-white"}`}
          >
            Retex <span className="text-accent">Solution</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                solid
                  ? "text-foreground/80 hover:bg-primary-soft hover:text-primary-deep"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher scrolled={solid} />
          <Button variant="cta" asChild className="hidden sm:inline-flex">
            <a href="#contact">{t.nav.demo}</a>
          </Button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`grid size-10 place-items-center rounded-lg lg:hidden ${
              solid ? "text-foreground hover:bg-primary-soft" : "text-white hover:bg-white/15"
            }`}
          >
            {open ? <XIcon className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map(([l, h]) => (
              <a
                key={l}
                href={h}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary-deep"
              >
                {l}
              </a>
            ))}
            <Button variant="cta" asChild className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                {t.nav.demo}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

/* --------------------------------- Counter --------------------------------- */
function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

/* ----------------------------------- Trust --------------------------------- */
function Trust() {
  const { t } = useI18n();
  const logos = [
    "Reemaj Hotel — Arabie Saoudite",
    "Société Radi Trans",
    "Ministère de l'Intérieur",
    "Alex Market",
    "Grand Mall",
    "Qasr Al-Salam",
    "Coopératives de Consommation",
    "Investissement Immobilier",
  ];
  return (
    <section className="relative border-y border-border bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 data-reveal className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t.trust.title}
        </h2>

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-14">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-2xl font-extrabold tracking-tight text-muted-foreground/60"
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {[
            { v: 50, suffix: "+", l: t.trust.stats[0].l },
            { v: 98, suffix: "%", l: t.trust.stats[1].l },
            { v: 70, prefix: "-", suffix: "%", l: t.trust.stats[2].l },
            { v: 24, suffix: "/7", l: t.trust.stats[3].l },
          ].map((s, i) => (
            <Card
              key={i}
              data-reveal
              className="rounded-2xl border-border/60 bg-card p-6 text-center shadow-[var(--shadow-card)]"
            >
              <div className="text-4xl font-extrabold tracking-tight text-primary-deep sm:text-5xl">
                <Counter to={s.v} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.l}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Clarity blocks ---------------------------- */
function Clarity() {
  const { t } = useI18n();
  const icons = [BarChart3, Wallet, ShieldCheck, LineChart, Users];
  const images = [
    moduleStocksAsset.url,
    moduleAccountsAsset.url,
    modulePosAsset.url,
    moduleFinanceAsset.url,
    moduleHrAsset.url,
  ];
  const blocks = t.clarity.blocks.map((b, i) => ({
    ...b,
    Icon: icons[i] ?? Sparkles,
    image: images[i],
  }));
  return (
    <section className="relative overflow-hidden bg-mesh py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">
            {t.clarity.badge}
          </Badge>
          <h2
            data-reveal
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.clarity.title}{" "}
            <span className="text-primary-deep">{t.clarity.titleHighlight}</span>
          </h2>
          <p data-reveal className="mt-5 text-lg text-muted-foreground">
            {t.clarity.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {blocks.map((b, i) => {
            const Icon = b.Icon;
            const isLast = i === blocks.length - 1;
            return (
              <Card
                key={i}
                data-reveal
                className={`group relative overflow-hidden rounded-3xl border-border/60 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${
                  isLast ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary-soft to-accent-soft">
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/0 to-background/0" />
                  <Badge className="absolute left-4 top-4 bg-white/90 text-primary-deep shadow-sm hover:bg-white">
                    {b.tag}
                  </Badge>
                </div>
                <div className="relative flex flex-col gap-5 p-8">
                  <div className="absolute -right-12 -top-12 size-44 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-2xl transition-opacity group-hover:opacity-80" />
                  <div className="relative flex items-center gap-3">
                    <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-deep text-white shadow-[var(--shadow-soft)]">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                      {b.title}
                    </h3>
                  </div>
                  <p className="relative text-base leading-relaxed text-muted-foreground">{b.text}</p>
                  <div className="relative pt-1">
                    <Button variant="cta" size="lg">
                      {t.clarity.learnMore} <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>


        {/* Avant / Après */}
        <div id="avantages" className="mt-28 scroll-mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h3
              data-reveal
              className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              {t.benefits.title}{" "}
              <span className="text-primary-deep">{t.benefits.titleHighlight}</span>
              {t.benefits.titleSuffix}
            </h3>
          </div>
          <div data-reveal className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="rounded-3xl border-border/60 bg-muted/60 p-8">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {t.clarity.before}
            </h4>
            <ul className="mt-6 space-y-4">
              {t.clarity.beforeItems.map((i) => (
                <li key={i} className="flex items-center gap-3 text-base text-foreground/80">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-destructive/15 text-destructive">
                    <X className="size-4" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="rounded-3xl border-primary/30 bg-primary-soft p-8 shadow-[var(--shadow-soft)]">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-deep">
              {t.clarity.after}
            </h4>
            <ul className="mt-6 space-y-4">
              {t.clarity.afterItems.map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-base font-medium text-primary-deep"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-4" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}


/* -------------------------------- Features --------------------------------- */
const featureIcons = [
  Users,
  Fingerprint,
  CalendarDays,
  Palmtree,
  Wallet,
  LineChart,
  BarChart3,
];

function Features() {
  const { t } = useI18n();
  const features = t.features.items.map((f, i) => ({ ...f, icon: featureIcons[i] }));
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-primary-soft text-primary-deep hover:bg-primary-soft">
            {t.features.badge}
          </Badge>
          <h2
            data-reveal
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            {t.features.title}
            <br />
            <span className="text-primary-deep">{t.features.titleHighlight}</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Card
              key={i}
              data-reveal
              className="group relative overflow-hidden rounded-3xl border-border/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-soft)]"
            >
              <div className="absolute -right-12 -top-12 size-32 rounded-full bg-accent-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <f.icon className="size-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{f.t}</h3>
                <p className="mt-2 text-muted-foreground">{f.d}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Benefits -------------------------------- */
function Benefits() {
  const { t } = useI18n();
  const benefitIcons = [Clock, ShieldCheck, TrendingUp, Eye, Fingerprint, Sparkles];
  const items = t.benefits.items.map((label, i) => ({ icon: benefitIcons[i], t: label }));
  return (
    <section id="avantages" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">
            {t.benefits.badge}
          </Badge>
          <h2
            data-reveal
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            {t.benefits.title} <span className="text-primary-deep">{t.benefits.titleHighlight}</span>
            {t.benefits.titleSuffix}
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b, i) => (
            <Card
              key={i}
              data-reveal
              className="flex items-start gap-5 rounded-3xl border-border/60 bg-card/80 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid size-14 shrink-0 place-items-center rounded-full bg-primary-soft">
                <b.icon
                  className="size-7 text-accent-foreground"
                  style={{ color: "oklch(0.65 0.2 80)" }}
                />
              </div>
              <p className="pt-2 text-lg font-semibold text-foreground">{b.t}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Industries ------------------------------- */
function Industries() {
  const { t } = useI18n();
  const industryIcons = [Hotel, Stethoscope, HeartPulse, Waves, Utensils, Building2];
  const list = t.industries.items.map((label, i) => ({ icon: industryIcons[i], t: label }));
  return (
    <section id="secteurs" className="bg-primary-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-primary text-primary-foreground hover:bg-primary">{t.industries.badge}</Badge>
          <h2
            data-reveal
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            {t.industries.title}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Card
              key={i}
              data-reveal
              className="group relative overflow-hidden rounded-3xl border-transparent bg-gradient-to-br from-white to-primary-soft p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid size-16 place-items-center rounded-2xl bg-primary text-white transition-transform group-hover:scale-110">
                <s.icon className="size-8" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{t.industries.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ How it works ------------------------------- */
function HowItWorks() {
  const { t } = useI18n();
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">
            {t.howItWorks.badge}
          </Badge>
          <h2
            data-reveal
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            {t.howItWorks.title}
          </h2>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden border-t-2 border-dashed border-accent lg:block" />
          <div className="grid gap-10 lg:grid-cols-4">
            {t.howItWorks.steps.map((s, i) => (
              <div key={i} data-reveal className="relative flex flex-col items-center text-center">
                <div
                  className="relative z-10 grid size-18 place-items-center rounded-full bg-primary text-2xl font-extrabold text-white shadow-[var(--shadow-soft)]"
                  style={{ width: "4.5rem", height: "4.5rem" }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-6 text-lg font-bold">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------- */
const TEMOIGNAGE_COMPLET = "/videos/temoignages/tem-summary.mp4";

const testimonialNames = [
  "Rami Adel",
  "Général Hisham Lotfy",
  "Mohamed Sedky",
  "Sameh Fahmy",
  "Qasr Al-Salam",
  "Reemaj Hotel",
] as const;

const testimonialSources: readonly (string | null)[] = [
  "/videos/temoignages/tem1.mp4",
  "/videos/temoignages/tem2.mp4",
  "/videos/temoignages/tem3.mp4",
  "/videos/temoignages/tem4.mp4",
  "/videos/temoignages/tem5.mp4",
  null,
] as const;

const testimonialImages: readonly (string | null)[] = [
  null,
  null,
  null,
  null,
  null,
  reemajHotelAsset.url,
] as const;

function TestimonialVideoCard({
  name,
  role,
  src,
  image,
  featured = false,
}: {
  name: string;
  role: string;
  src?: string | null;
  image?: string | null;
  featured?: boolean;
}) {
  return (
    <Card className="overflow-hidden rounded-3xl border-border/60 bg-card p-0 shadow-[var(--shadow-card)]">
      <div className="relative aspect-video w-full bg-primary-deep/10">
        {src ? (
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            playsInline
            aria-label={`Témoignage vidéo de ${name}`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" />
        ) : null}
      </div>
      <div className={`flex items-center gap-3 ${featured ? "p-6 sm:p-8" : "p-5"}`}>
        <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep font-bold">
          {name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-bold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <div className="ml-auto hidden gap-0.5 text-accent sm:flex">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="size-4 fill-current" />
          ))}
        </div>
      </div>
    </Card>
  );
}

function Testimonials() {
  const { t, lang } = useI18n();
  const testimonialVideos = testimonialNames.map((name, i) => ({
    name,
    role: t.testimonials.roles[i],
    src: testimonialSources[i],
    image: testimonialImages[i],
  }));
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", direction: "ltr" });

  useEffect(() => {
    embla?.reInit();
  }, [embla, lang]);
  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-primary-soft text-primary-deep hover:bg-primary-soft">
            {t.testimonials.badge}
          </Badge>
          <h2
            data-reveal
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            {t.testimonials.title}
          </h2>
          <p data-reveal className="mt-4 text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div data-reveal className="mt-14">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-deep">
            <Play className="size-4" />
            {t.testimonials.all}
          </div>
          <TestimonialVideoCard
            featured
            name={t.testimonials.featuredName}
            role={t.testimonials.featuredRole}
            src={TEMOIGNAGE_COMPLET}
          />
        </div>

        <div className="relative mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t.testimonials.individual}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label={t.testimonials.prev}
                onClick={() => embla?.scrollPrev()}
                className="grid size-10 place-items-center rounded-full border border-border/60 bg-card text-foreground transition hover:bg-secondary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label={t.testimonials.next}
                onClick={() => embla?.scrollNext()}
                className="grid size-10 place-items-center rounded-full border border-border/60 bg-card text-foreground transition hover:bg-secondary"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden" ref={emblaRef} dir="ltr">
            <div className="flex gap-6">
              {testimonialVideos.map((tv) => (
                <div
                  key={tv.name}
                  className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
                >
                  <TestimonialVideoCard name={tv.name} role={tv.role} src={tv.src} image={tv.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Pricing -------------------------------- */
function Pricing() {
  const { t } = useI18n();
  const plans = t.pricing.plans.map((p, i) => ({ ...p, popular: i === 1 }));
  return (
    <section id="tarifs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">
            {t.pricing.badge}
          </Badge>
          <h2
            data-reveal
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            {t.pricing.title}
          </h2>
          <p data-reveal className="mt-4 text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Card
              key={i}
              data-reveal
              className={`relative flex flex-col rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                p.popular
                  ? "border-2 border-accent bg-gradient-to-b from-accent-soft/40 to-card shadow-[var(--shadow-glow-accent)]"
                  : "border-border/60 bg-card shadow-[var(--shadow-card)]"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow">
                  {t.pricing.popular}
                </span>
              )}
              <h3 className="text-2xl font-extrabold tracking-tight">{p.n}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <ul className="mt-8 space-y-3">
                {p.f.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep">
                      <Check className="size-3.5" />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grow" />
              <Button variant={p.popular ? "cta" : "default"} size="lg" className="w-full" asChild>
                <a href="#contact">{t.pricing.cta}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */
function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-white to-accent-soft" />
      <div className="absolute -left-32 top-10 size-[28rem] rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -right-32 bottom-10 size-[28rem] rounded-full bg-accent/40 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <h2
          data-reveal
          className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {t.finalCta.title}{" "}
          <span className="text-primary-deep">{t.finalCta.titleHighlight}</span>
          {t.finalCta.titleEnd}
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {t.finalCta.subtitle}
        </p>
        <div className="mt-10">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">
              {t.finalCta.cta} <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact --------------------------------- */
function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">
              {t.contact.badge}
            </Badge>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.contact.subtitle}</p>
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder={t.contact.name} className="h-12 rounded-xl" required />
                <Input
                  type="email"
                  placeholder={t.contact.email}
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              <Input placeholder={t.contact.phone} className="h-12 rounded-xl" />
              <Textarea placeholder={t.contact.message} rows={5} className="rounded-xl" />
              <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
                {t.contact.send} <ArrowRight className="size-4" />
              </Button>
            </form>
          </div>

          <div data-reveal className="space-y-6">
            <Card className="rounded-3xl border-border/60 bg-gradient-to-br from-primary-soft to-white p-8">
              <h3 className="text-xl font-bold">{t.contact.offices}</h3>
              <ul className="mt-6 space-y-5">
                {[
                  { i: MapPin, text: t.contact.location },
                  { i: Phone, text: t.contact.phoneNum },
                  { i: Mail, text: t.contact.mail },
                ].map((c, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                      <c.i className="size-5" />
                    </span>
                    <span className="font-medium">{c.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="overflow-hidden rounded-3xl border-border/60">
              <div className="relative aspect-[16/10] bg-primary-soft">
                <div className="absolute inset-0 bg-mesh opacity-80" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-glow-accent)]">
                      <MapPin className="size-7" />
                    </div>
                    <p className="mt-3 font-bold text-primary-deep">{t.contact.mapTitle}</p>
                    <p className="text-sm text-muted-foreground">{t.contact.mapCountry}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer --------------------------------- */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                <span className="text-lg font-extrabold">R</span>
              </div>
              <div>
                <span className="text-lg font-extrabold">{t.brand.solution}</span>
                <p className="text-xs text-white/60">{t.brand.company}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent">
              {t.footer.company}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-accent">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  {t.footer.careers}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent">
              {t.footer.product}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="#features" className="hover:text-accent">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-accent">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#secteurs" className="hover:text-accent">
                  {t.nav.industries}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  {t.footer.demo}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent">
              {t.footer.stayInTouch}
            </h4>
            <div className="mt-4 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-accent-foreground"
                >
                  <I className="size-5" />
                </a>
              ))}
            </div>
            <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="h-11 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/60"
              />
              <Button type="submit" variant="cta" className="h-11 shrink-0">
                OK
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Index ---------------------------------- */
function Index() {
  useReveal();
  const { dir } = useI18n();
  return (
    <div id="top" className="min-h-screen bg-background" dir={dir}>
      <Nav />
      <Hero />
      <Trust />
      <Clarity />
      <Features />
      <Benefits />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}

function IndexPage() {
  return (
    <I18nProvider>
      <Index />
    </I18nProvider>
  );
}
