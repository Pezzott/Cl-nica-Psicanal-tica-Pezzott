import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { ThemeCard } from "@/components/ThemeCard";
import { getFeaturedArticles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";
import { themes } from "@/lib/themes";

export default function HomePage() {
  const featured = getFeaturedArticles(3);

  return (
    <>
      <section className="container-measure grid items-end gap-10 pb-16 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="eyebrow">Clínica Psicanalítica Pezzott</p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Clareza sobre o que você vive — com profundidade psicanalítica.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft sm:text-xl">
            Uma plataforma de conhecimento: temas do cotidiano aprofundados com acolhimento e
            seriedade. O Instagram abre a porta; aqui você encontra o texto com fôlego.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/conteudos">Explorar conteúdos</ButtonLink>
            <ButtonLink href="/temas" variant="secondary">
              Ver temas
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden border border-ink/8 bg-sage-mist/40 sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/img/foto-principal.jpg"
            alt="Espaço de reflexão e escuta"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </section>

      <section className="border-y border-ink/8 bg-paper-white/40 py-16 lg:py-20">
        <div className="container-measure">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Em destaque</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Leituras para começar
              </h2>
            </div>
            <Link
              href="/conteudos"
              className="font-sans text-sm font-semibold text-sage-deep underline-offset-4 hover:underline"
            >
              Todos os conteúdos
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featured.map((article, index) => (
              <ArticleCard key={article.slug} article={article} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-measure py-16 lg:py-20">
        <p className="eyebrow">Temas do cotidiano</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
          O que você enfrenta na vida — organizado para aprofundar.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>
      </section>

      <section className="border-y border-ink/8 bg-sage-mist/35 py-16 lg:py-20">
        <div className="container-measure grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Do Instagram para cá</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Descoberta nas redes. Aprofundamento no site.
            </h2>
            <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-soft">
              Publicamos ganchos e reflexões no Instagram. Neste espaço, os temas ganham texto
              completo, caminhos de leitura e uma biblioteca que cresce com o tempo — para quem
              busca sentido no cotidiano e para quem também estuda a clínica.
            </p>
          </div>
          <ButtonLink href={siteConfig.social.instagram} external variant="secondary">
            Seguir no Instagram
          </ButtonLink>
        </div>
      </section>

      <section className="container-measure grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden border border-ink/8">
          <Image
            src="/img/blog/Foto-Perfil.jpg"
            alt="Retrato institucional"
            fill
            className="object-cover"
            sizes="320px"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Conhecimento com identidade própria.
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink-soft">
            A {siteConfig.name} nasce da escuta clínica e da vontade de compartilhar
            psicanálise de forma acessível — sem transformar o site em vitrine de agendamento.
            Aqui o centro é o conteúdo, a reflexão e a construção de uma comunidade de leitura.
          </p>
          <div className="mt-6">
            <ButtonLink href="/sobre" variant="ghost">
              Conhecer a abordagem
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
