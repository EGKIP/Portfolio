import { motion } from 'framer-motion'

import { ProfileActionLink } from '../components/ui/profile-action-link'
import { Container } from '../components/ui/container'
import { navigation, profileActions, siteIdentity } from '../data/site'

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-800/80 pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24">
      <Container className="min-h-[72vh]">
        <nav className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3" aria-label="Primary">
          <a href="#top" className="font-mono text-[11px] uppercase tracking-[0.34em] text-blue-200/80 transition hover:text-blue-100">
            {siteIdentity.name}
          </a>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="transition hover:text-blue-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-4xl pb-6 pt-16 sm:pt-20 lg:pt-24"
        >
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-blue-200/80">
              {siteIdentity.name}
            </p>
            <h1 className="mt-5 text-[2.55rem] leading-[0.98] text-white sm:text-[4rem] lg:text-[5rem]">
              <span className="block">{siteIdentity.headline}</span>
              <span className="mt-2 block text-slate-300">{siteIdentity.subheadline}</span>
            </h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
              {siteIdentity.role} · {siteIdentity.focus}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {siteIdentity.intro}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-[0.95rem]">
              {siteIdentity.tools.join(' · ')}
            </p>
            <p className="mt-6 text-sm leading-6 text-slate-400">{siteIdentity.educationNote}</p>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2">
              {profileActions.map((action) => (
                <ProfileActionLink key={action.label} action={action} emphasized={action.kind === 'resume'} />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}