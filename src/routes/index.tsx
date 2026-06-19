import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Users, Fingerprint, CalendarDays, Palmtree, Wallet, LineChart, BarChart3,
  ShieldCheck, Clock, Eye, Sparkles, TrendingUp, ChevronLeft, ChevronRight,
  Check, X, Hotel, Stethoscope, HeartPulse, Utensils, Building2, Waves,
  Star, MapPin, Phone, Mail, Linkedin, Facebook, Instagram, ArrowRight, Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import heroHotel from "@/assets/hero-hotel.jpg";
import heroHospital from "@/assets/hero-hospital.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import mockupPayroll from "@/assets/mockup-payroll.jpg";
import mockupAttendance from "@/assets/mockup-attendance.jpg";
import mockupPlanning from "@/assets/mockup-planning.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DotNet Solutions — Gestion RH & Automatisation pour l'Hôtellerie et la Santé" },
      { name: "description", content: "Automatisez présences, plannings, paie et rapports RH pour hôtels, hôpitaux, cliniques, resorts, restaurants et entreprises." },
    ],
  }),
  component: Index,
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
const slides = [
  {
    img: heroHotel,
    title: "Gérez Votre Personnel Comme un Pro",
    eyebrow: "Hôtellerie & Resorts",
  },
  {
    img: heroHospital,
    title: "L'Automatisation RH pour l'Hôtellerie & la Santé",
    eyebrow: "Hôpitaux & Cliniques",
  },
  {
    img: heroOffice,
    title: "Paie, Présence et Plannings en Un Seul Clic",
    eyebrow: "Entreprises & Restaurants",
  },
];

function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 28 });
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

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="relative h-full min-w-0 flex-[0_0_100%]">
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
                <div className="max-w-3xl text-white">
                  <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90">
                    <Sparkles className="size-3.5 text-accent" /> {s.eyebrow}
                  </span>
                  <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                    {s.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
                    Automatisez la gestion des présences, plannings, paie, congés, évaluations
                    et rapports RH depuis une seule plateforme intelligente.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button variant="hero" size="xl" asChild>
                      <a href="#contact">Demander une Démo <ArrowRight className="size-5" /></a>
                    </Button>
                    <Button variant="heroOutline" size="xl">
                      <Play className="size-5" /> Voir la Présentation
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
          <p className="text-sm font-bold text-foreground">+500 entreprises</p>
          <p className="text-xs text-muted-foreground">nous font confiance</p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Navigation ------------------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Accueil", "#top"],
    ["Fonctionnalités", "#features"],
    ["Secteurs", "#secteurs"],
    ["Avantages", "#avantages"],
    ["Tarifs", "#tarifs"],
    ["Blog", "#blog"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[var(--shadow-card)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-12">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-deep text-white shadow-[var(--shadow-soft)]">
            <span className="text-lg font-extrabold">.N</span>
          </div>
          <span className={`text-lg font-extrabold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            DotNet <span className="text-accent">Solutions</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:bg-primary-soft hover:text-primary-deep"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        <Button variant="cta" asChild>
          <a href="#contact">Demander une Démo</a>
        </Button>
      </div>
    </header>
  );
}

/* --------------------------------- Counter --------------------------------- */
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
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
      {prefix}{val.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

/* ----------------------------------- Trust --------------------------------- */
function Trust() {
  const logos = ["Marriott", "Hilton", "Mayo Clinic", "Accor", "Sofitel", "Cleveland", "Four Seasons", "Hyatt"];
  return (
    <section className="relative border-y border-border bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 data-reveal className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Approuvé par des Organisations en Pleine Croissance
        </h2>

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-14">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="whitespace-nowrap text-2xl font-extrabold tracking-tight text-muted-foreground/60">
                {l}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {[
            { v: 500, suffix: "+", l: "Entreprises" },
            { v: 98, suffix: "%", l: "Précision Paie" },
            { v: 70, prefix: "-", suffix: "%", l: "Temps Administratif" },
            { v: 24, suffix: "/7", l: "Support" },
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
  const blocks = [
    {
      tag: "Paie",
      title: "Fini la Paie Approximative",
      text: "Les fiches de paie manuelles, les erreurs de calcul, le stress de fin de mois. DotNet Solutions calcule automatiquement salaires, heures sup et déductions — sans erreur, sans retard.",
      img: mockupPayroll,
    },
    {
      tag: "Présence",
      title: "Chaque Présence Comptée, Chaque Minute Tracée",
      text: "Connectez vos badgeuses biométriques et laissez la plateforme centraliser les présences en temps réel. Plus de feuilles Excel, plus de doutes.",
      img: mockupAttendance,
    },
    {
      tag: "Planning",
      title: "Intelligent Là Où Ça Compte",
      text: "On ne fait pas qu'automatiser, on anticipe. La plateforme apprend les rythmes de vos équipes et structure vos journées RH.",
      img: mockupPlanning,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-mesh py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">Clarté</Badge>
          <h2 data-reveal className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Conçu pour Ramener la <span className="text-primary-deep">Clarté</span>
          </h2>
          <p data-reveal className="mt-5 text-lg text-muted-foreground">
            Plus de plannings perdus, plus de stress de fin de mois. Juste de la fluidité,
            de la sérénité et la maîtrise totale de vos équipes.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {blocks.map((b, i) => (
            <div
              key={i}
              data-reveal
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <Badge className="bg-primary-soft text-primary-deep hover:bg-primary-soft">{b.tag}</Badge>
                <h3 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">{b.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{b.text}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button variant="cta" size="lg">En savoir plus <ArrowRight className="size-4" /></Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
                  <img src={b.img} alt={b.title} loading="lazy" width={1400} height={1000} className="block w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Avant / Après */}
        <div data-reveal className="mt-28 grid gap-6 lg:grid-cols-2">
          <Card className="rounded-3xl border-border/60 bg-muted/60 p-8">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Avant DotNet Solutions</h4>
            <ul className="mt-6 space-y-4">
              {["Plannings perdus", "Erreurs de paie", "Pointages manuels", "Suivi RH éparpillé", "Équipes frustrées", "Reporting impossible"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-foreground/80">
                    <span className="grid size-8 place-items-center rounded-full bg-destructive/15 text-destructive">
                      <X className="size-4" />
                    </span>
                    {i}
                  </li>
                ),
              )}
            </ul>
          </Card>
          <Card className="rounded-3xl border-primary/30 bg-primary-soft p-8 shadow-[var(--shadow-soft)]">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-deep">Après DotNet Solutions</h4>
            <ul className="mt-6 space-y-4">
              {["Plannings centralisés", "Paie automatique", "Présence en temps réel", "RH unifiée", "Équipes alignées", "Rapports instantanés"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-3 text-base font-medium text-primary-deep">
                    <span className="grid size-8 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-4" />
                    </span>
                    {i}
                  </li>
                ),
              )}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Features --------------------------------- */
const features = [
  { icon: Users, t: "Gestion des Employés", d: "Profils, contrats, départements et dossiers RH centralisés." },
  { icon: Fingerprint, t: "Présence & Biométrie", d: "Connectez vos pointeuses, suivi automatique des présences." },
  { icon: CalendarDays, t: "Planification des Shifts", d: "Créez les plannings, comparez heures prévues vs réelles." },
  { icon: Palmtree, t: "Gestion des Congés", d: "Congés payés, maladie, vacances gérés simplement." },
  { icon: Wallet, t: "Paie Automatisée", d: "Calcul auto des salaires, heures sup, primes et déductions." },
  { icon: LineChart, t: "Évaluation de Performance", d: "Suivi et notation des performances de vos employés." },
  { icon: BarChart3, t: "Rapports & Analytics", d: "Rapports de présence, paie, heures sup et insights RH." },
];

function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-primary-soft text-primary-deep hover:bg-primary-soft">Fonctionnalités</Badge>
          <h2 data-reveal className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Une Plateforme. <span className="text-primary-deep">Toutes Vos Opérations RH.</span>
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
  const items = [
    { icon: Clock, t: "Réduisez la charge administrative" },
    { icon: ShieldCheck, t: "Améliorez la précision de la paie" },
    { icon: TrendingUp, t: "Augmentez l'efficacité opérationnelle" },
    { icon: Eye, t: "Visibilité RH en temps réel" },
    { icon: Fingerprint, t: "Minimisez les erreurs de présence" },
    { icon: Sparkles, t: "Développez vos opérations avec confiance" },
  ];
  return (
    <section id="avantages" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">Avantages</Badge>
          <h2 data-reveal className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Pourquoi Choisir <span className="text-primary-deep">DotNet Solutions</span> ?
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
                <b.icon className="size-7 text-accent-foreground" style={{ color: "oklch(0.65 0.2 80)" }} />
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
  const list = [
    { icon: Hotel, t: "Hôtels" },
    { icon: Stethoscope, t: "Hôpitaux" },
    { icon: HeartPulse, t: "Cliniques" },
    { icon: Waves, t: "Resorts" },
    { icon: Utensils, t: "Restaurants" },
    { icon: Building2, t: "Entreprises" },
  ];
  return (
    <section id="secteurs" className="bg-primary-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-primary text-primary-foreground hover:bg-primary">Secteurs</Badge>
          <h2 data-reveal className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Conçu Pour Votre Secteur
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
              <p className="mt-2 text-muted-foreground">
                Une gestion RH adaptée aux contraintes opérationnelles spécifiques.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ How it works ------------------------------- */
function HowItWorks() {
  const steps = [
    "Ajoutez Vos Employés",
    "Connectez les Appareils de Présence",
    "Gérez les Plannings",
    "Générez Paie & Rapports",
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">Démarrage</Badge>
          <h2 data-reveal className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Comment Ça Marche
          </h2>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden border-t-2 border-dashed border-accent lg:block" />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={i} data-reveal className="relative flex flex-col items-center text-center">
                <div className="relative z-10 grid size-18 place-items-center rounded-full bg-primary text-2xl font-extrabold text-white shadow-[var(--shadow-soft)]" style={{ width: "4.5rem", height: "4.5rem" }}>
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
function Testimonials() {
  const items = [
    { n: "Sophie L.", r: "DRH, Resort Méditerranée", q: "En 3 semaines, fini les erreurs de paie. Mes équipes sont enfin alignées." },
    { n: "Dr. Karim B.", r: "Directeur Clinique El Salam", q: "Le suivi des présences en temps réel a transformé notre planification des gardes." },
    { n: "Mona F.", r: "Responsable RH, Hôtel Marina", q: "On a gagné 70% de temps administratif. Le ROI est immédiat." },
    { n: "Antoine R.", r: "Directeur, Groupe Restaurants Saveur", q: "Une interface limpide, des rapports prêts à la seconde. Indispensable." },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-primary-soft text-primary-deep hover:bg-primary-soft">Témoignages</Badge>
          <h2 data-reveal className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ce Que Disent Nos Clients
          </h2>
        </div>
        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {items.map((t, i) => (
              <Card
                key={i}
                className="min-w-0 flex-[0_0_85%] rounded-3xl border-border/60 bg-card p-8 shadow-[var(--shadow-card)] sm:flex-[0_0_45%] lg:flex-[0_0_31%]"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-foreground/90">“{t.q}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-full bg-primary-soft text-primary-deep font-bold">
                    {t.n.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{t.n}</p>
                    <p className="text-sm text-muted-foreground">{t.r}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Pricing -------------------------------- */
function Pricing() {
  const plans = [
    {
      n: "Starter",
      d: "Pour les petites équipes qui démarrent leur structuration RH.",
      f: ["Jusqu'à 25 employés", "Présence & badgeuse", "Gestion des congés", "Rapports de base", "Support email"],
    },
    {
      n: "Professional",
      d: "Le choix des hôtels, cliniques et restaurants en croissance.",
      popular: true,
      f: ["Jusqu'à 250 employés", "Paie automatisée complète", "Planification multi-sites", "Évaluations & performance", "Support prioritaire 24/7", "Intégrations biométriques"],
    },
    {
      n: "Enterprise",
      d: "Pour les groupes multi-sites avec besoins sur mesure.",
      f: ["Employés illimités", "Workflows personnalisés", "API & intégrations SI", "Manager dédié", "SLA contractuel", "Conformité avancée"],
    },
  ];
  return (
    <section id="tarifs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">Tarifs</Badge>
          <h2 data-reveal className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Une Offre Pour Chaque Étape
          </h2>
          <p data-reveal className="mt-4 text-lg text-muted-foreground">
            Des plans flexibles, sans engagement caché. Parlons de vos besoins.
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
                  Populaire
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
                <a href="#contact">Contactez les Ventes</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- Blog ---------------------------------- */
function Blog() {
  const posts = [
    { c: "RH", t: "Bonnes Pratiques de Gestion RH", d: "12 Juin 2026", img: heroOffice },
    { c: "Hôtellerie", t: "Guide d'Automatisation RH Hôtelière", d: "5 Juin 2026", img: heroHotel },
    { c: "Paie", t: "Stratégies d'Optimisation de la Paie", d: "28 Mai 2026", img: mockupPayroll },
    { c: "Santé", t: "Transformation Digitale pour la Santé", d: "20 Mai 2026", img: heroHospital },
  ];
  return (
    <section id="blog" className="bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Badge className="bg-primary-soft text-primary-deep hover:bg-primary-soft">Blog</Badge>
            <h2 data-reveal className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              Ressources & Insights
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-semibold text-primary-deep hover:underline sm:inline-flex">
            Voir tout →
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((p, i) => (
            <Card
              key={i}
              data-reveal
              className="group flex flex-col overflow-hidden rounded-3xl border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  {p.c}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{p.d}</p>
                <h3 className="mt-2 grow text-lg font-bold leading-snug">{p.t}</h3>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-deep">
                  Lire l'article <ArrowRight className="size-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-white to-accent-soft" />
      <div className="absolute -left-32 top-10 size-[28rem] rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -right-32 bottom-10 size-[28rem] rounded-full bg-accent/40 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <h2 data-reveal className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Prêt à Transformer Votre <span className="text-primary-deep">Gestion RH</span> ?
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Rejoignez les organisations qui simplifient leurs opérations RH et améliorent leur productivité.
        </p>
        <div className="mt-10">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Planifier une Démo <ArrowRight className="size-5" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact --------------------------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <Badge className="bg-accent-soft text-accent-foreground hover:bg-accent-soft">Contact</Badge>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              Parlons de Vos Équipes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un expert RH vous recontacte sous 24h pour planifier une démo personnalisée.
            </p>
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Nom complet" className="h-12 rounded-xl" required />
                <Input type="email" placeholder="Email professionnel" className="h-12 rounded-xl" required />
              </div>
              <Input placeholder="Téléphone" className="h-12 rounded-xl" />
              <Textarea placeholder="Parlez-nous de vos besoins RH..." rows={5} className="rounded-xl" />
              <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
                Envoyer la demande <ArrowRight className="size-4" />
              </Button>
            </form>
          </div>

          <div data-reveal className="space-y-6">
            <Card className="rounded-3xl border-border/60 bg-gradient-to-br from-primary-soft to-white p-8">
              <h3 className="text-xl font-bold">Nos Bureaux</h3>
              <ul className="mt-6 space-y-5">
                {[
                  { i: MapPin, t: "Miami, Alexandrie, Égypte" },
                  { i: Phone, t: "+20 122 426 4564" },
                  { i: Mail, t: "info@dotnetsolutions.com" },
                ].map((c, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                      <c.i className="size-5" />
                    </span>
                    <span className="font-medium">{c.t}</span>
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
                    <p className="mt-3 font-bold text-primary-deep">Miami District, Alexandrie</p>
                    <p className="text-sm text-muted-foreground">Égypte</p>
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
  return (
    <footer className="bg-primary-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                <span className="text-lg font-extrabold">.N</span>
              </div>
              <span className="text-lg font-extrabold">DotNet Solutions</span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Plateforme RH intelligente pour hôtels, hôpitaux, cliniques, resorts, restaurants et entreprises.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent">Entreprise</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-accent">À propos</a></li>
              <li><a href="#" className="hover:text-accent">Carrières</a></li>
              <li><a href="#blog" className="hover:text-accent">Blog</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent">Produit</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#features" className="hover:text-accent">Fonctionnalités</a></li>
              <li><a href="#tarifs" className="hover:text-accent">Tarifs</a></li>
              <li><a href="#secteurs" className="hover:text-accent">Secteurs</a></li>
              <li><a href="#contact" className="hover:text-accent">Démo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent">Restons en contact</h4>
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
                placeholder="Votre email"
                className="h-11 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/60"
              />
              <Button type="submit" variant="cta" className="h-11 shrink-0">OK</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2026 DotNet Solutions. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Index ---------------------------------- */
function Index() {
  useReveal();
  return (
    <div id="top" className="min-h-screen bg-background">
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
      <Blog />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}
