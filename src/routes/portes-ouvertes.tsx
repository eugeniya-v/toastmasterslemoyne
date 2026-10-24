import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  MapPin,
  Mic,
  Sparkles,
  Users,
  Check,
  Navigation,
  Mail,
} from "lucide-react";

import groupe from "@/assets/club/groupe.jpg.asset.json";
import president from "@/assets/club/president.jpg.asset.json";
import logo from "@/assets/club/toastmasters-logo.svg.asset.json";
import rencontre from "@/assets/club/rencontre.jpg.asset.json";
import remiseCertificat from "@/assets/club/remise-certificat.jpg.asset.json";
import presentation from "@/assets/club/presentation.jpg.asset.json";
import membresEvenement from "@/assets/club/membres-evenement.jpg.asset.json";
import discoursExplorer from "@/assets/club/discours-explorer.jpg.asset.json";
import discoursInfluence from "@/assets/club/discours-influence.jpg.asset.json";
import concours2 from "@/assets/club/concours-2.jpg.asset.json";
import socialPreview from "@/assets/club/portes-ouvertes-social.jpg.asset.json";

const FB_EVENT = "https://www.facebook.com/share/1DreDgYzMS/";
const MAPS =
  "https://www.google.com/maps/dir/?api=1&destination=Complexe+Rom%C3%A9o-V.-Patenaude%2C+135+chemin+Haendel%2C+Candiac%2C+QC+J5R+1R7";
const FB_PAGE = "https://www.facebook.com/ToastmastersLemoyneCandiac";
const LINKEDIN = "https://www.linkedin.com/company/club-toastmasters-lemoyne-candiac";
const EMAIL = "info@toastmasterslemoyne.org";

const TITLE = "Portes ouvertes | Toastmasters Lemoyne de Candiac";
const DESC =
  "Découvrez le Club Toastmasters Lemoyne de Candiac lors de notre soirée portes ouvertes le 9 novembre 2026. Développez votre confiance, votre communication et votre leadership. Aucune expérience nécessaire.";

export const Route = createFileRoute("/portes-ouvertes")({
  component: PortesOuvertes,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `https://toastmasterslemoyne.lovable.app${socialPreview.url}` },
      { name: "twitter:image", content: `https://toastmasterslemoyne.lovable.app${socialPreview.url}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Portes ouvertes du Club Toastmasters Lemoyne de Candiac, le 9 novembre 2026, avec le président du club." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Soirée portes ouvertes — Club Toastmasters Lemoyne de Candiac",
          startDate: "2026-11-09T18:45:00-05:00",
          endDate: "2026-11-09T21:00:00-05:00",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          inLanguage: "fr-CA",
          location: {
            "@type": "Place",
            name: "Complexe Roméo-V.-Patenaude",
            address: {
              "@type": "PostalAddress",
              streetAddress: "135, chemin Haendel",
              addressLocality: "Candiac",
              addressRegion: "QC",
              postalCode: "J5R 1R7",
              addressCountry: "CA",
            },
          },
          organizer: { "@type": "Organization", name: "Club Toastmasters Lemoyne de Candiac", email: EMAIL },
        }),
      },
    ],
  }),
});

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={FB_EVENT}
      {...ext}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      Je participe à la soirée
      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      <span className="sr-only">(ouvre l'événement Facebook dans un nouvel onglet)</span>
    </a>
  );
}

function MapsCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={MAPS}
      {...ext}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Navigation className="h-4 w-4" aria-hidden />
      Obtenir l'itinéraire
      <span className="sr-only">(ouvre Google Maps dans un nouvel onglet)</span>
    </a>
  );
}

function EventDetails({ compact = false }: { compact?: boolean }) {
  const rows: { icon: ReactNode; label: string; value: ReactNode }[] = [
    { icon: <CalendarDays className="h-5 w-5" />, label: "Date", value: "Lundi 9 novembre 2026" },
    { icon: <Clock className="h-5 w-5" />, label: "Heure", value: "18 h 45 à 21 h 00" },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Lieu",
      value: (
        <>
          Complexe Roméo-V.-Patenaude
          <span className="block text-sm font-medium text-muted-foreground">
            135, chemin Haendel, Candiac, QC, J5R 1R7
          </span>
        </>
      ),
    },
  ];
  return (
    <dl className={compact ? "space-y-4" : "space-y-5"}>
      {rows.map((r) => (
        <div key={r.label} className="flex gap-4">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent" aria-hidden>
            {r.icon}
          </span>
          <div>
            <dt className="eyebrow text-muted-foreground">{r.label}</dt>
            <dd className="mt-1 text-lg font-semibold leading-snug">{r.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow flex items-center gap-3 text-accent">
        <span className="h-px w-10 bg-line" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">{title}</h2>
      {children && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}

function PortesOuvertes() {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Toastmasters International" className="h-14 w-16 rounded bg-paper p-1 object-contain sm:h-16 sm:w-20" />
          <p className="font-display text-sm font-bold leading-tight sm:text-base">
            Toastmasters
            <span className="block font-sans text-xs font-medium text-muted-foreground">Lemoyne de Candiac</span>
          </p>
          </div>
          <a
            href={FB_EVENT}
            {...ext}
            className="hidden rounded-full border border-foreground/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground/10 sm:inline-flex"
          >
            Événement Facebook
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-hero" aria-labelledby="hero-title">
          <div className="grid-lines absolute inset-0 -z-10" aria-hidden />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-36">
            <div className="animate-rise lg:col-span-7 lg:pr-6">
              <p className="eyebrow text-accent">Soirée portes ouvertes · Candiac</p>
              <h1 id="hero-title" className="mt-6 text-[2.6rem] font-extrabold leading-[0.98] sm:text-6xl lg:text-[5.2rem]">
                Et si vous découvriez{" "}
                <span className="text-gradient">tout ce que vous êtes capable d'exprimer?</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Découvrez Toastmasters lors d'une soirée où vous pourrez explorer l'art de prendre la parole,
                développer votre confiance et rencontrer des personnes qui souhaitent elles aussi progresser.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta />
                <MapsCta />
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative ml-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-card lg:max-w-none">
                <img
                  src={president.url}
                  alt="Le président du Club Toastmasters Lemoyne de Candiac prend la parole"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              </div>
              <div className="mt-6 border-t border-border pt-6">
                <p className="eyebrow mb-5 text-accent">Infos pratiques</p>
                <EventDetails compact />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-paper py-24 text-ink sm:py-32" aria-labelledby="intro-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <h2 id="intro-title" className="text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:col-span-6 lg:text-6xl">
                Bien plus que parler en public.
              </h2>
              <p className="text-lg leading-relaxed text-ink/75 lg:col-span-5 lg:col-start-8 lg:pt-3">
                Toastmasters est une organisation éducative à but non lucratif qui aide les gens à développer leurs
                compétences en communication et en leadership grâce à la pratique, à la rétroaction et à l'entraide.
              </p>
            </div>
            <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ink/10 md:grid-cols-3">
              {[
                { n: "01", icon: Mic, t: "Prendre la parole", d: "Apprenez à structurer vos idées, à vous exprimer avec clarté et à capter l'attention de votre auditoire.", tone: "text-tm-blue" },
                { n: "02", icon: Sparkles, t: "Gagner en confiance", d: "Apprivoisez le stress, osez vous exprimer et progressez à votre rythme.", tone: "text-tm-burgundy" },
                { n: "03", icon: Users, t: "Développer son leadership", d: "Apprenez à écouter, à collaborer, à guider et à mobiliser les autres.", tone: "text-tm-blue" },
              ].map(({ n, icon: Icon, t, d, tone }) => (
                <li key={n} className="group bg-paper p-8 transition-colors hover:bg-background/[0.03] sm:p-10">
                  <div className="flex items-center justify-between">
                    <Icon className={`h-8 w-8 ${tone}`} aria-hidden />
                    <span className="font-display text-sm font-bold text-ink/30">{n}</span>
                  </div>
                  <h3 className={`mt-10 eyebrow text-sm ${tone}`}>{t}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink/80">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="exp-title">
          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-tm-burgundy/40 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="La vie du club" title={<span id="exp-title">Apprendre en pratiquant. <span className="text-gradient">Progresser ensemble.</span></span>}>
              Chez Toastmasters, on apprend en passant à l'action. Les rencontres offrent un espace pour pratiquer,
              expérimenter, recevoir de la rétroaction constructive et apprendre les uns des autres.
            </SectionHeading>

            <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12 lg:grid-rows-[24rem_28rem]">
              <Figure
                src={discoursExplorer.url}
                alt="Un membre prononce un discours au lutrin, à côté de la bannière du club"
                caption="Des discours pour apprendre à s'exprimer."
                className="col-span-2 aspect-[4/5] lg:col-span-5 lg:row-span-2 lg:aspect-auto"
              />
              <Figure
                src={concours2.url}
                alt="Une participante reçoit un certificat de premier prix au concours d'expression orale"
                caption="Des progrès qui se célèbrent."
                className="col-span-2 aspect-[16/10] lg:col-span-7 lg:aspect-auto"
              />
              <Figure
                src={discoursInfluence.url}
                alt="Une membre souriante prend la parole au lutrin, avec le mot du jour « Influence »"
                caption="Oser prendre la parole, à son rythme."
                className="aspect-[3/4] lg:col-span-3 lg:aspect-auto"
              />
              <Figure
                src={remiseCertificat.url}
                alt="Deux membres du club lors de la remise d'un certificat"
                caption="Un esprit d'entraide pour avancer ensemble."
                className="aspect-[3/4] lg:col-span-4 lg:aspect-auto"
              />
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Figure src={presentation.url} alt="Un membre présente son discours devant un écran" caption="Partager ses idées avec clarté." className="aspect-[4/3]" />
              <Figure src={membresEvenement.url} alt="Cinq membres réunis lors d'un événement" caption="Se retrouver et progresser ensemble." className="aspect-[3/4] sm:aspect-[4/3] [&_img]:object-bottom" />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="border-y border-border bg-navy py-24 sm:py-32" aria-labelledby="skills-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Compétences" title={<span id="skills-title">Des compétences qui vous servent partout.</span>}>
              Au travail, dans vos projets ou dans la vie quotidienne, une communication plus claire et une confiance
              accrue peuvent ouvrir de nouvelles possibilités.
            </SectionHeading>
            <ul className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Prise de parole en public", "S'exprimer devant un groupe avec plus d'aisance."],
                ["Confiance en soi", "Oser, essayer, et mesurer ses progrès."],
                ["Communication persuasive", "Structurer un message qui convainc."],
                ["Leadership", "Guider, organiser et mobiliser."],
                ["Écoute active", "Comprendre avant de répondre."],
                ["Gestion du stress", "Apprivoiser le trac, pas à pas."],
                ["Animation de réunions", "Mener des échanges clairs et dynamiques."],
                ["Rétroaction constructive", "Donner et recevoir des commentaires utiles."],
              ].map(([t, d], i) => (
                <li key={t} className="group border-b border-border p-6 transition-colors hover:bg-foreground/[0.04] sm:p-8 sm:odd:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0">
                  <span className="font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-xl font-bold leading-tight sm:text-2xl">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BEGINNERS */}
        <section className="bg-navy" aria-labelledby="beg-title">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="eyebrow text-accent">Débutants bienvenus</p>
              <h2 id="beg-title" className="mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl">
                Vous n'avez pas besoin d'être déjà un bon orateur.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Vous êtes ici pour apprendre, pas pour être parfait. Découvrez le fonctionnement du club, observez une
                rencontre et avancez à votre rythme dans un environnement bienveillant.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Aucune expérience nécessaire.",
                  "Vos trois premières visites sont gratuites.",
                  "Un environnement d'apprentissage fondé sur l'entraide.",
                  "Des occasions de pratiquer et de progresser à votre rythme.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-lg font-medium">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground" aria-hidden>
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={rencontre.url}
              alt="Les membres du club réunis autour des tables pendant une rencontre Toastmasters"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-lg object-cover shadow-card"
            />
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="py-24 sm:py-32" aria-labelledby="com-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <h2 id="com-title" className="text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:col-span-6 lg:text-6xl">
                Grandir ensemble, <span className="text-gradient">aller plus loin.</span>
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
                Le Club Toastmasters Lemoyne de Candiac rassemble des personnes qui souhaitent apprendre, partager leurs
                expériences et progresser ensemble. Dans un esprit d'entraide, chacun peut développer ses compétences et
                découvrir de nouvelles façons de s'exprimer.
              </p>
            </div>
            <figure className="mt-14 overflow-hidden rounded-2xl shadow-card">
              <img
                src={groupe.url}
                alt="Photo de groupe des membres du Club Toastmasters Lemoyne de Candiac"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>
          </div>
        </section>

        {/* FINAL */}
        <section className="relative isolate overflow-hidden bg-final py-24 sm:py-32" aria-labelledby="final-title">
          <div className="grid-lines absolute inset-0 -z-10" aria-hidden />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 id="final-title" className="text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
                Votre prochaine prise de parole commence ici.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
                Venez découvrir le Club Toastmasters Lemoyne de Candiac et repartez avec de nouvelles idées sur ce que
                vous pourriez accomplir.
              </p>
              <p className="mt-6 font-semibold text-accent">Aucune expérience nécessaire. Venez découvrir, tout simplement.</p>
            </div>
            <div className="glass rounded-2xl p-7 shadow-card sm:p-9 lg:col-span-5">
              <EventDetails />
              <div className="mt-8 flex flex-col gap-3">
                <PrimaryCta className="w-full" />
                <MapsCta className="w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy-deep py-14 pb-28 sm:pb-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 flex-col items-start gap-5 sm:flex-row sm:items-center">
            <img src={logo.url} alt="Logo officiel Toastmasters International" className="h-24 w-28 shrink-0 rounded bg-paper p-2 object-contain" loading="lazy" />
            <div>
              <p className="font-display text-lg font-bold">Club Toastmasters Lemoyne de Candiac</p>
              <a href={`mailto:${EMAIL}`} className="mt-1 inline-flex max-w-full items-center gap-2 break-all text-muted-foreground hover:text-accent">
                <Mail className="h-4 w-4" aria-hidden />
                {EMAIL}
              </a>
            </div>
          </div>
          <nav aria-label="Réseaux sociaux" className="flex gap-3">
            <a href={FB_PAGE} {...ext} className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent">
              Facebook<span className="sr-only"> (nouvel onglet)</span>
            </a>
            <a href={LINKEDIN} {...ext} className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent">
              LinkedIn<span className="sr-only"> (nouvel onglet)</span>
            </a>
          </nav>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="glass fixed inset-x-3 bottom-3 z-40 flex items-center gap-2 rounded-full p-1.5 sm:hidden">
        <a href={FB_EVENT} {...ext} className="flex-1 rounded-full bg-primary py-3 text-center text-sm font-bold text-primary-foreground">
          Je participe à la soirée
        </a>
        <a href={MAPS} {...ext} aria-label="Obtenir l'itinéraire" className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/30">
          <Navigation className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}

function Figure({ src, alt, caption, className = "" }: { src: string; alt: string; caption: string; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" aria-hidden />
      <figcaption className="absolute inset-x-0 bottom-0 p-4 font-display text-base font-bold leading-tight sm:p-6 sm:text-xl">
        {caption}
      </figcaption>
    </figure>
  );
}
