import { r as reactExports, V as jsxRuntimeExports } from "./server-BH1w2mYm.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$8 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$6);
const __iconNode$5 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }],
  ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }],
  ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }],
  ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]
];
const Trophy = createLucideIcon("trophy", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const heroImg = "/assets/hero-CdJIP9_b.jpg";
const instagramPreview = "/assets/insta-DCa1ds5G.jpg";
const linkedinPreview = "/assets/linkedin-_Rt2rJS-.png";
const tags = ["IA", "AUTOMAÇÃO", "DADOS", "APIs", "PYTHON"];
const links = [{
  name: "GITHUB",
  Icon: Github,
  desc: "Projetos, automações e soluções desenvolvidas na prática.",
  cta: "ACESSAR GITHUB",
  href: "https://github.com",
  preview: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-[#0d0d0d] border border-border/40 p-3 font-mono text-[10px] leading-relaxed overflow-hidden h-[130px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-red-500/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-yellow-500/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-500/80" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "text-gold/90 scale-[0.76] origin-top-left w-[140%]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-400", children: "import" }),
      " pandas",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-400", children: "as" }),
      " pd",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-400", children: "from" }),
      " sklearn.ensemble",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-400", children: "import" }),
      " RandomForest",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-400", children: "from" }),
      " sklearn.metrics",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-400", children: "import" }),
      " accuracy",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "# Carrega os dados" }),
      "\n",
      "df = pd.read_csv(",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: '"dados.csv"' }),
      ")",
      "\n",
      "X = df.drop(",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: '"target"' }),
      ", axis=1)",
      "\n",
      "y = df[",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: '"target"' }),
      "]",
      "\n",
      "model = RandomForest()",
      "\n",
      "model.fit(X_train, y_train)",
      "\n",
      "print(",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: '"Acurácia:"' }),
      ", score)"
    ] }) })
  ] })
}, {
  name: "INSTAGRAM",
  Icon: Instagram,
  desc: "Conteúdos sobre tecnologia, IA, automação e bastidores dos projetos.",
  cta: "IR PARA O INSTAGRAM",
  href: "https://instagram.com",
  preview: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: instagramPreview, alt: "Instagram Profile", className: "rounded-xl w-[140px] h-auto object-cover" })
}, {
  name: "WHATSAPP",
  Icon: MessageCircle,
  desc: "Contato direto para projetos, parcerias e oportunidades.",
  cta: "FALAR COMIGO",
  href: "https://wa.me/5564999210126",
  preview: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[#0d0d0d] border border-border/40 p-3 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-gradient-to-br from-gold to-gold-bright/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold", children: "Marcos Roberto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8px] text-green-400 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" }),
          "Online"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/60 rounded-lg rounded-tl-none p-2 text-[10px] max-w-[85%]", children: [
      "Olá! Como posso ajudar no seu projeto?",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-muted-foreground text-right mt-1", children: "17:30" })
    ] })
  ] })
}, {
  name: "LINKEDIN",
  Icon: Linkedin,
  desc: "Conecte-se e acompanhe minha jornada profissional.",
  cta: "VER PERFIL",
  href: "https://linkedin.com",
  preview: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: linkedinPreview, alt: "LinkedIn Profile", className: "rounded-xl w-[170px] h-[160px] scale-down" })
}];
const socialLinks = [{
  Icon: Github,
  href: "https://github.com"
}, {
  Icon: Instagram,
  href: "https://instagram.com"
}, {
  Icon: Linkedin,
  href: "https://linkedin.com"
}, {
  Icon: MessageCircle,
  href: "https://wa.me/5564999210126"
}];
const techs = ["Python", "IA & Machine Learning", "Automação", "APIs", "SQL", "Data Analytics", "Linux", "Git", "Docker", "FastAPI"];
const stats = [{
  Icon: Rocket,
  value: "+50",
  label: "Projetos\nDesenvolvidos"
}, {
  Icon: CodeXml,
  value: "Python & AI Projects",
  label: " Building with Data"
}, {
  Icon: Users,
  value: "",
  label: "Soluções\nReais"
}, {
  Icon: Trophy,
  value: "",
  label: "Foco em\nResultados"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap", rel: "stylesheet" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-b-3xl overflow-hidden aspect-[3/4] sm:aspect-[2/1]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Marcos Roberto", width: 1418, height: 752, className: "w-full h-full object-cover object-top" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
            background: "var(--gradient-hero-fade)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 px-6 pb-6 text-center animate-fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-gradient-gold text-5xl sm:text-6xl font-semibold leading-[0.95]", children: [
              "MARCOS",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "ROBERTO"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gold text-[11px] tracking-[0.3em] font-medium", children: "DESENVOLVEDOR DE IA E AUTOMAÇÃO" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-4 pt-6 animate-fade-up", style: {
          animationDelay: "0.2s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/90 text-base", children: [
            "Transformo ideias em soluções reais com código,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "dados e inteligência."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[11px] tracking-widest font-semibold", children: tags.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-gold animate-pulse-dot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t })
          ] }, t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-10 space-y-5", children: links.map(({
        name,
        Icon: Icon2,
        desc,
        cta,
        href,
        preview
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", className: "card-premium block rounded-2xl p-5 animate-fade-up", style: {
        animationDelay: `${0.1 * i}s`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_140px] gap-4 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-8 h-8 text-gold", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-gold font-bold tracking-wider text-lg", children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1 leading-snug", children: desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cta }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block w-[140px]", children: preview })
      ] }) }, name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "card-premium mt-8 rounded-2xl p-6 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-gold font-bold tracking-widest text-sm mb-5", children: "TECNOLOGIAS E ESPECIALIDADES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: techs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 rounded-full border border-gold/40 text-gold text-xs hover:bg-gold hover:text-background transition-all duration-300 cursor-default", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "card-premium mt-6 rounded-2xl p-6 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 text-center", children: stats.map(({
        Icon: Icon2,
        value,
        label
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-7 h-7 text-gold", strokeWidth: 1.5 }),
        value && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold font-bold text-sm", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs text-foreground whitespace-pre-line leading-tight", children: label })
      ] }, label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-10 pt-6 text-center text-sm text-muted-foreground space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Todos os direitos reservados ao MR Oliveira ©." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Contato: marcos@devdatascience.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 mt-4 pt-4 flex justify-center gap-6", children: socialLinks.map(({
          Icon: I,
          href
        }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-gold transition-colors hover:scale-110 inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "w-5 h-5" }) }, i)) })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
