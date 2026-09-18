import Link from 'next/link'

export function Navigation() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">Swipefile</Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/what-is-new" className="hover:text-foreground transition-colors">What Is New</Link>
          <Link href="/whats-new" className="hover:text-foreground transition-colors">What&apos;s New</Link>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2025 Swipefile. A simple tool for better ad research.</p>
        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export function PageShell({ children, title, eyebrow }: { children: React.ReactNode; title: string; eyebrow?: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          {eyebrow && <p className="text-sm font-medium text-primary mb-4">{eyebrow}</p>}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function FeatureRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-l-2 border-primary/30 pl-5">
      <h2 className="font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

export function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 size-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">{number}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
