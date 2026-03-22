import { motion } from 'framer-motion'
import { Container } from '../components/ui/container'
import { ProfileActionLink } from '../components/ui/profile-action-link'
import { navigation, profileActions, profileImageSrc, siteIdentity } from '../data/site'

const TECH_KEYWORDS = new Set(['Python', 'Java', 'JavaScript', 'Django', 'React', 'AWS'])

function HighlightText({ text }: { text: string }) {
  const parts = text.split(/\b(Python|Java|JavaScript|Django|React|AWS)\b/)
  return (
    <>
      {parts.map((part, i) =>
        TECH_KEYWORDS.has(part)
          ? <strong key={i} className="font-semibold text-[var(--accent)]">{part}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  )
}

export function HeroSection() {
  return (
    <section>
      <Container>

        {/* nav */}
        <nav className="flex items-center justify-between gap-4 py-5" aria-label="Primary">
          <a href="#top" className="shrink-0 text-xs font-semibold tracking-widest uppercase text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]">
            EK
          </a>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1.5 sm:gap-x-6">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}
                className="text-[10px] tracking-widest uppercase text-[var(--fg-faint)] transition-colors hover:text-[var(--fg-muted)]">
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* hero body */}
        <motion.div
          className="pt-6 pb-8 lg:pb-14"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_260px] lg:gap-16">

            {/* profile image — shown first on mobile (order-first), right side on desktop */}
            <div className="order-first flex justify-center lg:order-last lg:block">
              <div className="relative h-36 w-36 overflow-hidden rounded-full bg-[var(--bg-subtle)] lg:mx-0 lg:h-64 lg:w-64 lg:rounded-2xl">
                <img
                  src={profileImageSrc}
                  alt="Emmanuel Kiprotich"
                  className="h-full w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
                />
                {/* gradient only makes sense on the rectangular desktop version */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-10 bg-gradient-to-t from-[var(--bg)] to-transparent lg:block" />
              </div>
            </div>

            {/* text */}
            <div>
              <p className="mb-3 text-[11px] tracking-[0.2em] uppercase text-[var(--fg-faint)]">
                {siteIdentity.greeting}
              </p>

              <h1 className="font-sans text-[clamp(1.7rem,3.5vw,2.2rem)] leading-[1.0] tracking-tight">
                <span className="block font-bold text-[var(--accent)]">Emmanuel</span>
                <span className="block font-semibold text-[var(--fg)]">Kiprotich</span>
              </h1>

              <div className="mt-4 space-y-1.5">
                <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                  <HighlightText text={siteIdentity.bio} />
                </p>
                <p className="text-sm leading-relaxed text-[var(--fg-faint)]">{siteIdentity.bioExtended}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                {profileActions.map((action) => (
                  <ProfileActionLink key={action.label} action={action} />
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  )
}