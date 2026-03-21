import { motion } from 'framer-motion'
import { Container } from '../components/ui/container'
import { ProfileActionLink } from '../components/ui/profile-action-link'
import { navigation, profileActions, profileImageSrc, siteIdentity } from '../data/site'

export function HeroSection() {
  return (
    <section className="flex min-h-svh flex-col">
      <Container className="flex flex-1 flex-col">

        {/* nav */}
        <nav className="flex items-center justify-between py-8" aria-label="Primary">
          <a href="#top" className="text-xs tracking-widest uppercase text-[var(--fg-faint)] transition-colors hover:text-[var(--accent)]">
            EK
          </a>
          <div className="flex items-center gap-6 sm:gap-8">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}
                className="text-xs tracking-widest uppercase text-[var(--fg-faint)] transition-colors hover:text-[var(--fg-muted)]">
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* hero body */}
        <motion.div
          className="flex flex-1 items-center pb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_280px] lg:gap-16">

            {/* left: text */}
            <div>
              <p className="mb-5 text-xs tracking-widest uppercase text-[var(--fg-faint)]">
                {siteIdentity.greeting}
              </p>

              <h1 className="text-[clamp(2rem,6vw,3.8rem)] leading-[0.92] tracking-tight">
                <span className="block font-semibold text-[var(--accent)]">Emmanuel</span>
                <span className="block text-[var(--fg)]">Kiprotich</span>
              </h1>

              <div className="mt-7 space-y-2 max-w-sm">
                <p className="text-sm leading-relaxed text-[var(--fg-muted)]">{siteIdentity.bio}</p>
                <p className="text-sm leading-relaxed text-[var(--fg-muted)]">{siteIdentity.bioExtended}</p>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-6">
                {profileActions.map((action) => (
                  <ProfileActionLink key={action.label} action={action} />
                ))}
              </div>
            </div>

            {/* right: profile image */}
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] lg:mx-0 lg:h-72 lg:w-72">
              <img
                src={profileImageSrc}
                alt="Emmanuel Kiprotich"
                className="h-full w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
              />
              {/* bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg)] to-transparent" />
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  )
}