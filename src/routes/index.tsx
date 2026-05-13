import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Rocket,
  Code2,
  Users,
  Trophy,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import instagramPreview from "@/assets/insta.jpg";
import linkedinPreview from "@/assets/linkedin.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Marcos Roberto — AI & Automation Developer" },
      {
        name: "description",
        content:
          "I turn ideas into real solutions with code, data and intelligence. AI, Automation, APIs and Python.",
      },
    ],
  }),
});

const tags = ["AI", "AUTOMATION", "DATA", "APIs", "PYTHON"];

const links = [
  {
    name: "GITHUB",
    Icon: Github,
    desc: "Projects, automations and solutions built in practice.",
    cta: "ACCESS GITHUB",
    href: "https://github.com",
    preview: (
      <div className="rounded-md bg-[#0d0d0d] border border-border/40 p-3 font-mono text-[10px] leading-relaxed overflow-hidden h-[130px]">
        <div className="flex gap-1.5 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="overflow-hidden">
          <pre className="text-gold/90 scale-[0.76] origin-top-left w-[140%]">
            <span className="text-pink-400">import</span> pandas{" "}
            <span className="text-pink-400">as</span> pd{"\n"}
            <span className="text-pink-400">from</span> sklearn.ensemble{" "}
            <span className="text-pink-400">import</span> RandomForest{"\n"}
            <span className="text-pink-400">from</span> sklearn.metrics{" "}
            <span className="text-pink-400">import</span> accuracy{"\n"}
            <span className="text-muted-foreground"># Load data</span>
            {"\n"}
            df = pd.read_csv(<span className="text-green-400">"dados.csv"</span>){"\n"}X = df.drop(
            <span className="text-green-400">"target"</span>, axis=1){"\n"}y = df[
            <span className="text-green-400">"target"</span>]{"\n"}
            model = RandomForest(){"\n"}
            model.fit(X_train, y_train){"\n"}
            print(<span className="text-green-400">"Acurácia:"</span>, score)
          </pre>
        </div>
      </div>
    ),
  },
  {
    name: "INSTAGRAM",
    Icon: Instagram,
    desc: "Content about technology, AI, automation and behind the scenes.",
    cta: "GO TO INSTAGRAM",
    href: "https://instagram.com",
    preview: null,
  },
  {
    name: "WHATSAPP",
    Icon: MessageCircle,
    desc: "Direct contact for projects, partnerships and opportunities.",
    cta: "TALK TO ME",
    href: "https://wa.me/",
    preview: (
      <div className="rounded-xl bg-[#0d0d0d] border border-border/40 p-3 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-12 rounded-full bg-gradient-to-br from-gold to-gold-bright/60" />
          <div>
            <div className="text-[10px] font-semibold">Marcos Roberto</div>
            <div className="text-[8px] text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
              Online
            </div>
          </div>
        </div>
        <div className="bg-secondary/60 rounded-lg rounded-tl-none p-2 text-[10px] max-w-[85%]">
          Hello! How can I help with your project?
          <div className="text-[8px] text-muted-foreground text-right mt-1">17:30</div>
        </div>
      </div>
    ),
  },
  {
    name: "LINKEDIN",
    Icon: Linkedin,
    desc: "Connect and follow my professional journey.",
    cta: "VIEW PROFILE",
    href: "https://linkedin.com",
    preview: null,
  },
];

const techs = [
  "Python",
  "AI & Machine Learning",
  "Automation",
  "APIs",
  "SQL",
  "Data Analytics",
  "Linux",
  "Git",
  "Docker",
  "FastAPI",
];

const stats = [
  { Icon: Rocket, value: "+50", label: "Projects\nDeveloped" },
  { Icon: Code2, value: "", label: "IA + Machine\nLearning" },
  { Icon: Users, value: "", label: "Real\nSolutions" },
  { Icon: Trophy, value: "", label: "Focus on\nResults" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background pb-12">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-xl mx-auto px-4">
        {/* HERO */}
        <header className="relative pt-6">
          <div className="relative rounded-b-3xl overflow-hidden aspect-[3/4] sm:aspect-[2/1]">
            <img
              src={heroImg}
              alt="Marcos Roberto"
              width={1418}
              height={752}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero-fade)" }} />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 text-center animate-fade-up">
              <h1 className="font-display text-gradient-gold text-5xl sm:text-6xl font-semibold leading-[0.95]">
                MARCOS
                <br />
                ROBERTO
              </h1>
              <p className="mt-3 text-gold text-[11px] tracking-[0.3em] font-medium">
                AI & AUTOMATION DEVELOPER
              </p>
            </div>
          </div>

          <div className="text-center px-4 pt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-foreground/90 text-base">
              I turn ideas into real solutions with code,
              <br />
              data and intelligence.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[11px] tracking-widest font-semibold">
              {tags.map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gold animate-pulse-dot" />}
                  <span className="text-foreground">{t}</span>
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* LINK CARDS */}
        <section className="mt-10 space-y-5">
          {links.map(({ name, Icon, desc, cta, href, preview }, i) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium block rounded-2xl p-5 animate-fade-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 animate-float shrink-0">
                  <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gold font-bold tracking-wider text-lg">{name}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-snug">{desc}</p>
                  <button className="btn-gold mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-wider">
                    <span>{cta}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                {preview && <div className="hidden sm:block w-[140px] shrink-0">{preview}</div>}
              </div>
              {preview && <div className="sm:hidden mt-4">{preview}</div>}
            </a>
          ))}
        </section>

        {/* GALERIA DE REDES */}
        <section className="mt-8 animate-fade-up space-y-4">
          <h2 className="text-center text-gold font-bold tracking-widest text-sm">MY NETWORKS</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-2xl overflow-hidden block w-full h-400 sm:h-[320px] group object-cover"
          >
            <img
              src={instagramPreview}
              alt="Instagram"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-between px-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Instagram className="w-5 h-5 text-gold" />
                  <span className="text-white font-bold text-base tracking-wider">INSTAGRAM</span>
                </div>
                <p className="text-white/60 text-xs">@marcosroberto.dev</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gold" />
            </div>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-2xl overflow-hidden block h-48 group"
          >
            <img
              src={linkedinPreview}
              alt="LinkedIn"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-between px-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Linkedin className="w-5 h-5 text-gold" />
                  <span className="text-white font-bold text-base tracking-wider">LINKEDIN</span>
                </div>
                <p className="text-white/60 text-xs">Marcos Roberto</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gold" />
            </div>
          </a>
        </section>

        {/* TECH */}
        <section className="card-premium mt-8 rounded-2xl p-6 animate-fade-up">
          <h2 className="text-center text-gold font-bold tracking-widest text-sm mb-5">
            TECHNOLOGIES & SPECIALTIES
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full border border-gold/40 text-gold text-xs hover:bg-gold hover:text-background transition-all duration-300 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="card-premium mt-6 rounded-2xl p-6 animate-fade-up">
          <div className="grid grid-cols-4 gap-2 text-center">
            {stats.map(({ Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                {value && <div className="text-gold font-bold text-sm">{value}</div>}
                <div className="text-[10px] sm:text-xs text-foreground whitespace-pre-line leading-tight">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 pt-6 text-center text-sm text-muted-foreground space-y-1">
          <p>All rights reserved to MR Oliveira ©.</p>
          <p>Contact: marcos@devdatascience.com</p>
          <div className="border-t border-border/40 mt-4 pt-4 flex justify-center gap-6">
            {[Github, Instagram, Linkedin, MessageCircle].map((I, i) => (
              <a
                key={i}
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors hover:scale-110 inline-block"
              >
                <I className="w-5 h-5" />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
