export const siteConfig = {
  name: "Clínica Psicanalítica Pezzott",
  shortName: "Pezzott",
  tagline: "Psicanálise para o cotidiano — com profundidade e acolhimento",
  description:
    "Plataforma de conhecimento em psicanálise. Temas da vida aprofundados com clareza, seriedade e acolhimento — extensão do conteúdo no Instagram.",
  url: "https://clinica-psicanalica-pezzott.vercel.app",
  locale: "pt-BR",
  contact: {
    email: "clinicapsicanaliticapezzott@gmail.com",
    phoneDisplay: "(11) 94464-5848",
    whatsapp: "5511944645848",
    whatsappMessage: "Olá! Vim pelo site e gostaria de falar com a clínica.",
    address: "R. Aldemar Pereira de Barros, 21 - Centro, Jundiaí - SP, 13201-796",
  },
  social: {
    instagram: "https://www.instagram.com/",
    instagramLabel: "Instagram",
  },
};

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/temas", label: "Temas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export function whatsappUrl(message = siteConfig.contact.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
