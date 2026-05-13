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
      { title: "Marcos Roberto — Desenvolvedor de IA e Automação" },
      {
        name: "description",
        content:
          "Transformo ideias em soluções reais com código, dados e inteligência. IA, Automação, APIs e Python.",
      },
    ],
  }),
});

const tags = ["IA", "AUTOMAÇÃO", "DADOS", "APIs", "PYTHON"];

const links = [
  {
    name: "GITHUB",
    Icon: Github,
    desc: "Projetos, automações e soluções desenvolvidas na prática.",
    cta: "ACESSAR GITHUB",
    href: "https://github.com",
  },
  {
    name: "INSTAGRAM",
    Icon: Instagram,
    desc: "Conteúdos sobre tecnologia, IA, automação e bastidores dos projetos.",
    cta: "IR PARA O INSTAGRAM",
    href: "https://instagram.com",
  },
  {
    name: "WHATSAPP",
    Icon: MessageCircle,
    desc: "Contato direto para projetos, parcerias e oportunidades.",
    cta: "FALAR COMIGO",
    href: "https://wa.me/",
  },
  {
    name: "LINKEDIN",
    Icon: Linkedin,
    desc: "Conecte-se e acompanhe minha jornada profissional.",
    cta: "VER PERFIL",
    href: "https://linkedin.com",
  },
];

const techs = [
  "Python",
  "IA & Machine Learning",
  "Automação",
  "APIs",
  "SQL",
  "Data Analytics",
  "Linux",
  "Git",
  "Docker",
  "FastAPI",
];

const stats = [
  { Icon: Rocket, value: "+50", label: "Projetos\nDesenvolvidos" },
  { Icon: Code2, value: "+5 ANOS", label: "de Experiência" },
  { Icon: Users, value: "", label: "Soluções\nReais" },
  { Icon: Trophy, value: "", label: "Foco em\nResultados" },
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
                DESENVOLVEDOR DE IA E AUTOMAÇÃO
              </p>
            </div>
          </div>

          <div className="text-center px-4 pt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-foreground/90 text-base">
              Transformo ideias em soluções reais com código,
              <br />
              dados e inteligência.
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
          {links.map(({ name, Icon, desc, cta, href }, i) => (
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
                <div>
                  <h3 className="text-gold font-bold tracking-wider text-lg">{name}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-snug">{desc}</p>
                  <button className="btn-gold mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-wider">
                    <span>{cta}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* GALERIA DE REDES */}
        <section className="mt-8 animate-fade-up">
          <h2 className="text-center text-gold font-bold tracking-widest text-sm mb-4">
            MINHAS REDES
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              <img src={instagramPreview} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-gold" />
                    <span className="text-white font-bold text-sm tracking-wider">INSTAGRAM</span>
                  </div>
                  <p className="text-white/60 text-[10px] mt-0.5">@marcosroberto.dev</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gold" />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              <img src={linkedinPreview} alt="LinkedIn" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-gold" />
                    <span className="text-white font-bold text-sm tracking-wider">LINKEDIN</span>
                  </div>
                  <p className="text-white/60 text-[10px] mt-0.5">Marcos Roberto</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gold" />
              </div>
            </a>
          </div>
        </section>

        {/* TECH */}
        <section className="card-premium mt-8 rounded-2xl p-6 animate-fade-up">
          <h2 className="text-center text-gold font-bold tracking-widest text-sm mb-5">
            TECNOLOGIAS E ESPECIALIDADES
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
          <p>Todos os direitos reservados ao MR Oliveira ©.</p>
          <p>Contato: marcos@devdatascience.com</p>
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
