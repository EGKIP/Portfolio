import { motion } from 'framer-motion'
import { Container } from '../components/ui/container'
import { ProfileActionLink } from '../components/ui/profile-action-link'
import { navigation, profileActions, profileImageSrc, siteIdentity } from '../data/site'

export function HeroSection() {
  return (
    <section>
      <Container>

        {/* nav */}
        <nav className="flex items-center justify-between py-5" aria-label="Primary">
          <a href="#top" className="text-xs font-semibold tracking-widest uppercase text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]">
            EK
          </a>
          <div className="flex items-center gap-5 sm:gap-7">
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
          className="pt-8 pb-14"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">

            {/* left: text */}
            <div>
              <p className="mb-3 text-[11px] tracking-[0.2em] uppercase text-[var(--fg-faint)]">
                {siteIdentity.greeting}
              </p>

              <h1 className="text-[clamp(1.7rem,4.5vw,2.8rem)] leading-[0.94] tracking-tight">
                <span className="block font-bold text-[var(--accent)]">Emmanuel</span>
                <span className="block font-semibold text-[var(--fg)]">Kiprotich</span>
              </h1>

              <div className="mt-4 max-w-sm space-y-1">
                <p className="text-base leading-relaxed text-[var(--fg-muted)]">{siteIdentity.bio}</p>
                <p className="text-sm leading-relaxed text-[var(--fg-faint)]">{siteIdentity.bioExtended}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                {profileActions.map((action) => (
                  <ProfileActionLink key={action.label} action={action} />
                ))}
              </div>
            </div>

            {/* right: profile image */}
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl bg-[var(--bg-subtle)] lg:mx-0 lg:h-52 lg:w-52">
              <img
                src={profileImageSrc}
                alt="Emmanuel Kiprotich"
                className="h-full w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[var(--bg)] to-transparent" />
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  )
}