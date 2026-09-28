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
      "O ritmo da vida contemporânea, a hiperconexão e o que a psicanálise ajuda a compreender quando a mente não desliga.",
    blurb: "Quando a mente não desliga",
  },
  {
    slug: "relacoes",
    title: "Relações",
    description:
      "Vínculos, encontros e desencontros — o que se repete entre nós e o que pode ser elaborado com mais consciência.",
    blurb: "Entre o eu e o outro",
  },
  {
    slug: "desenvolvimento-emocional",
    title: "Desenvolvimento emocional",
    description:
      "Cuidado, holding e o ambiente suficientemente bom: bases para crescer com mais integração psíquica.",
    blurb: "Amadurecer com sustentação",
  },
  {
    slug: "trabalho-e-vida",
    title: "Trabalho e vida",
    description:
      "Exigências, identidade e sofrimento no mundo do trabalho — sem fórmulas prontas, com escuta do que dói.",
    blurb: "O que o trabalho exige de nós",
  },
  {
    slug: "conceitos",
    title: "Conceitos",
    description:
      "Ideias da psicanálise traduzidas com clareza — para reconhecer na vida o que às vezes só aparece como jargão.",
    blurb: "Palavras que abrem caminhos",
  },
  {
    slug: "sono-e-ritmo",
    title: "Sono e ritmo",
    description:
      "Noites inquietas, hiperatividade mental e o corpo que não encontra pausa — o ritmo psíquico no cotidiano.",
    blurb: "Quando a noite não descansa",
  },
  {
    slug: "corpo-e-sintoma",
    title: "Corpo e sintoma",
    description:
      "O corpo que fala quando as palavras faltam: tensões, somatizações e o sentido possível do sintoma.",
    blurb: "O que o corpo insiste em dizer",
  },
  {
    slug: "limites-e-cuidado",
    title: "Limites e cuidado",
    description:
      "Dizer não, lidar com a culpa e cuidar de si sem abandonar o outro — a ética do limite na vida comum.",
    blurb: "O direito de ter contorno",
  },
  {
    slug: "luto-e-perdas",
    title: "Luto e perdas",
    description:
      "Perdas visíveis e invisíveis: separações, mudanças e o tempo necessário para elaborar o que se foi.",
    blurb: "O que se perde e o que permanece",
  },
  {
    slug: "familia-e-origem",
    title: "Família e origem",
    description:
      "Papéis, lealdades e repetições familiares — compreender de onde viemos para escolher como seguir.",
    blurb: "As heranças que habitamos",
  },
  {
    slug: "intimidade-e-desejo",
    title: "Intimidade e desejo",
    description:
      "Proximidade, evitação e desejo: o que se move quando dois mundos internos tentam se encontrar.",
    blurb: "Chegar perto sem se perder",
  },
  {
    slug: "autoestima-e-olhar",
    title: "Autoestima e olhar",
    description:
      "Vergonha, valor próprio e o olhar do outro — como a imagem de si se constrói e pode ser revista.",
    blurb: "Como nos vemos e somos vistos",
  },
  {
    slug: "infancia-e-cuidado",
    title: "Infância e cuidado",
    description:
      "Parentalidade, holding e o adulto que ainda carrega a criança: cuidar sem repetir o que doeu.",
    blurb: "Cuidar como quem sustenta",
  },
];

export function getTheme(slug: string) {
  return themes.find((theme) => theme.slug === slug);
}
