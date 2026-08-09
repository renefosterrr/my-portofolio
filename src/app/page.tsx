'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { content, Locale } from '@/data/content'
import { Terminal, Mail, Globe, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { Reveal } from '@/components/motion-ui'
import { motion } from 'framer-motion'

export default function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>('en')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = content[locale]

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') as 'dark' | 'light' | null
    const savedLocale = window.localStorage.getItem('locale') as Locale | null
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme)
    if (savedLocale === 'id' || savedLocale === 'en') setLocale(savedLocale)
  }, [])

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale)
    window.localStorage.setItem('locale', nextLocale)
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
  }

  const toggleLocale = () => {
    changeLocale(locale === 'id' ? 'en' : 'id')
  }

  return (
    <div className={`${theme} min-h-screen bg-bg text-textMain selection:bg-accent/30 selection:text-accent relative overflow-hidden`}>
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#1E293B10_1px,transparent_1px),linear-gradient(to_bottom,#1E293B10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wider text-accent">
            <Terminal className="h-4 w-4" />
            <span>YOGI.ANANDA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-textMuted">
            <a href="#about" className="transition hover:text-accent">{t.nav.about}</a>
            <a href="#experience" className="transition hover:text-accent">{t.nav.experience}</a>
            <a href="#projects" className="transition hover:text-accent">{t.nav.projects}</a>
            <a href="#skills" className="transition hover:text-accent">{t.nav.skills}</a>
            <a href="#contact" className="transition hover:text-accent">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-border bg-panel p-2 text-textMuted transition hover:border-accent hover:text-accent"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1.5 font-mono text-xs text-textMain transition hover:border-accent"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5 text-accent" />
              <span className="font-bold">{locale.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg border border-border p-2 text-textMuted hover:text-textMain"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-panel px-6 py-6 font-mono text-sm">
            <div className="flex flex-col gap-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-textMuted hover:text-accent">{t.nav.about}</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-textMuted hover:text-accent">{t.nav.experience}</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-textMuted hover:text-accent">{t.nav.projects}</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-textMuted hover:text-accent">{t.nav.skills}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-textMuted hover:text-accent">{t.nav.contact}</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div className="lg:col-span-7" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1 className="mt-6 font-[var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-4 font-mono text-sm text-accent sm:text-base">
              {t.hero.subtitle}
            </p>

            <p className="mt-6 text-base text-textMuted sm:text-lg leading-relaxed">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs font-semibold text-bg transition hover:bg-accentDark shadow-lg shadow-accent/20"
              >
                {t.hero.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-6 py-3 font-mono text-xs font-semibold text-textMain transition hover:border-accent"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-panel/50 p-4 font-mono text-xs text-textMuted">
              <span className="text-emerald-400 font-bold">STATUS:</span> {t.hero.status}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-5 flex justify-center" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent to-purple-600 opacity-40 blur-xl animate-pulse" />
              <motion.div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full border-2 border-accent/50 bg-panel overflow-hidden shadow-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                <Image
                  src="/images/profile.jpg"
                  alt="Yogi Ananda Brata"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.06} className="aceternity-card rounded-xl border border-border bg-panel/60 p-6 backdrop-blur">
              <div className="font-[var(--font-display)] text-2xl font-bold text-accent sm:text-3xl">{stat.value}</div>
              <div className="mt-1 font-mono text-xs text-textMuted">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border bg-panel/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 max-w-3xl space-y-4 text-textMuted text-base sm:text-lg leading-relaxed">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.experience.title}
            </h2>
          </Reveal>

          <div className="mt-12 space-y-8">
            {t.experience.items.map((exp, i) => (
              <Reveal key={i} delay={i * 0.08} className="aceternity-card rounded-2xl border border-border bg-panel/40 p-6 sm:p-8 backdrop-blur transition hover:-translate-y-1 hover:border-accent/40">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="font-mono text-sm text-accent">{exp.company}</p>
                  </div>
                  <div className="font-mono text-xs text-textMuted rounded-full border border-border px-3 py-1 w-fit">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-textMuted text-sm sm:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-border bg-panel/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.projects.title}
            </h2>
            <p className="mt-2 text-textMuted text-sm sm:text-base">{t.projects.subtitle}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.projects.items.map((proj, i) => (
              <Reveal key={i} delay={i * 0.06} className="aceternity-card flex flex-col justify-between rounded-2xl border border-border bg-panel/60 p-6 transition hover:-translate-y-1 hover:border-accent">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">{proj.name}</span>
                    <span className="project-type-badge rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold">
                      {proj.type}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-textMuted leading-relaxed">{proj.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.focus.map((f, j) => (
                      <span key={j} className="project-tag rounded bg-bg px-2 py-1 font-mono text-[11px] text-textMuted">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.skills.title}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.skills.groups.map((group, i) => (
              <Reveal key={i} delay={i * 0.04} className="aceternity-card rounded-xl border border-border bg-panel/40 p-6 transition hover:-translate-y-1">
                <h3 className="font-mono text-xs font-bold text-accent">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span key={j} className="rounded-md border border-border/80 bg-bg px-2.5 py-1 font-mono text-xs text-textMain">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="border-t border-border bg-panel/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="rounded-3xl border border-border bg-panel/60 p-8 sm:p-12 text-center backdrop-blur">
            <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-textMuted text-base sm:text-lg">
              {t.contact.description}
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-mono text-xs font-bold text-bg transition hover:bg-accentDark shadow-lg shadow-accent/20"
              >
                <Mail className="h-4 w-4" />
                {t.contact.email}
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-border/80 flex flex-col items-center justify-center gap-2 font-mono text-xs text-textMuted">
              <div>(c) {new Date().getFullYear()} Yogi. All rights reserved.</div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
