import Link from "next/link";
import { navLinks, siteConfig, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/8 bg-paper-warm/70">
      <div className="container-measure grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold text-ink">{siteConfig.shortName}</p>
          <p className="mt-3 max-w-sm font-body text-base leading-relaxed text-ink-soft">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 font-sans text-sm text-ink-muted">
            Extensão do conteúdo publicado no Instagram — aqui, com mais fôlego e organização.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navegação</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contato</p>
          <ul className="space-y-2 font-sans text-sm text-ink-soft">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} className="hover:text-ink" target="_blank" rel="noreferrer">
                WhatsApp {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.instagram}
                className="hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="pt-2 text-ink-muted">{siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/5 py-5">
        <p className="container-measure font-sans text-xs text-ink-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Conteúdo gratuito para aprofundar o
          conhecimento em psicanálise.
        </p>
      </div>
    </footer>
  );
}
