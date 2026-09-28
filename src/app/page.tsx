import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { ThemeCard } from "@/components/ThemeCard";
import { JsonLd } from "@/components/JsonLd";
import { getFeaturedArticles } from "@/lib/articles";
import { websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { themes } from "@/lib/themes";

export default function HomePage() {
  const featured = getFeaturedArticles(3);

  return (
    <>
      <JsonLd data={websiteJsonLd()} />

      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/img/foto-principal.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/78 via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-ink/20" />

        <div className="container-measure relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 lg:pb-24 lg:pt-32">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-sage-soft">
            {siteConfig.name}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper-white sm:text-5xl lg:text-6xl xl:text-[4.15rem]">
            Clareza sobre o que você vive — com profundidade psicanalítica.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-paper-white/88 sm:text-xl">
            Conceitos com densidade. Situações do cotidiano. Uma biblioteca para reconhecer
            a própria vida — e saber o que fazer com o que se entendeu.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/artigos">Explorar artigos</ButtonLink>
            <ButtonLink href="/temas" variant="secondaryLight">
              Ver temas
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/8 bg-paper-white/50 py-16 lg:py-24">
        <div className="container-measure">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Em destaque</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Leituras para começar
                </h2>
              </div>
              <Link
                href="/artigos"
                className="link-underline font-sans text-sm font-semibold text-sage-deep"
              >
                Todos os artigos
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featured.map((article, index) => (
              <Reveal key={article.slug} delayMs={index * 90}>
                <ArticleCard article={article} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-measure py-16 lg:py-24">
        <Reveal>
          <p className="eyebrow">Mapa de leitura</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
            Temas do cotidiano, organizados para aprofundar.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-lg text-ink-soft">
            Cada eixo reúne textos que partem de uma cena viva e chegam a um conceito —
            para que a leitura gere identificação e aplicação.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, index) => (
            <Reveal key={theme.slug} delayMs={(index % 3) * 70}>
              <ThemeCard theme={theme} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-ink/8 bg-sage-mist/40 py-16 lg:py-24">
        <div className="container-measure grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Do Instagram para cá</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Descoberta nas redes. Aprofundamento no site.
            </h2>
            <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-soft">
              No Instagram, o gancho. Aqui, o texto com fôlego: caminhos de leitura, temas
              claros e uma biblioteca que cresce com intenção — para quem busca sentido no
              cotidiano e para quem também estuda a clínica.
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="flex lg:justify-end">
              <ButtonLink href={siteConfig.social.instagram} external variant="secondary">
                Seguir no Instagram
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-measure grid gap-12 py-18 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-24">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden">
            <Image
              src="/img/blog/Foto-Perfil.jpg"
              alt="Retrato institucional"
              fill
              className="object-cover"
              sizes="420px"
            />
          </div>
        </Reveal>
        <Reveal delayMs={100}>
          <div>
            <p className="eyebrow">Sobre</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Conhecimento com identidade própria.
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink-soft">
              A {siteConfig.name} nasce da escuta clínica e da vontade de compartilhar
              psicanálise com excelência acessível. O centro é o conteúdo — reflexão,
              profundidade e aplicação na vida real — sem transformar o site em vitrine de
              agendamento.
            </p>
            <div className="mt-7">
              <ButtonLink href="/sobre" variant="ghost">
                Conhecer a abordagem
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
