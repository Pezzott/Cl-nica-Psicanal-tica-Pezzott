export type Theme = {
  slug: string;
  title: string;
  description: string;
  blurb: string;
};

export const themes: Theme[] = [
  {
    slug: "ansiedade-e-cotidiano",
    title: "Ansiedade e cotidiano",
    description:
      "O ritmo da vida contemporânea, a hiperconexão e o que a psicanálise ajuda a compreender no dia a dia.",
    blurb: "Quando a mente não desliga",
  },
  {
    slug: "relacoes",
    title: "Relações",
    description:
      "Vínculos, encontros e desencontros — o que se repete entre nós e o que pode ser elaborado.",
    blurb: "Entre o eu e o outro",
  },
  {
    slug: "desenvolvimento-emocional",
    title: "Desenvolvimento emocional",
    description:
      "Cuidado, holding e o ambiente suficientemente bom: bases para crescer com mais integração.",
    blurb: "Amadurecer com sustentação",
  },
  {
    slug: "trabalho-e-vida",
    title: "Trabalho e vida",
    description:
      "Exigências, identidade e sofrimento no mundo do trabalho — sem fórmulas prontas.",
    blurb: "O que o trabalho exige de nós",
  },
  {
    slug: "conceitos",
    title: "Conceitos",
    description:
      "Ideias da psicanálise (como holding) traduzidas com clareza, para quem quer aprofundar.",
    blurb: "Palavras que abrem caminhos",
  },
];

export function getTheme(slug: string) {
  return themes.find((theme) => theme.slug === slug);
}
