import { motion } from 'framer-motion'
import { Container } from '../components/ui/container'
import { ProfileActionLink } from '../components/ui/profile-action-link'
import { navigation, profileActions, siteIdentity } from '../data/site'

export function HeroSection() {
  return (
    <section className="flex min-h-svh flex-col">
      <Container className="flex flex-1 flex-col">
        {/* nav */}
        <nav className="flex items-center justify-between py-8" aria-label="Primary">
          <a
            href="#top"
            className="text-xs tracking-widest uppercase text-[var(--fg-faint)] transition-colors hover:text-[var(--fg-muted)]"
          >
            EK
          </a>
          <div className="flex items-center gap-7">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest uppercase text-[var(--fg-faint)] transition-colors hover:text-[var(--fg-muted)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* hero body */}
        <motion.div
          className="flex flex-1 flex-col justify-center pb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mb-6 text-xs tracking-widest uppercase text-[var(--accent)]">
            {siteIdentity.role}
          </p>

          <h1 className="text-[clamp(3rem,10vw,7.5rem)] leading-[0.92] tracking-tight text-[var(--fg)]">
            Emmanuel<br />
            <span className="text-[var(--fg-muted)]">Kiprotich</span>
          </h1>

          <p className="mt-8 max-w-sm text-base leading-relaxed text-[var(--fg-muted)]">
            {siteIdentity.intro}
          </p>

          <div className="mt-10 flex items-center gap-6">
            {profileActions.map((action) => (
              <ProfileActionLink key={action.label} action={action} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}