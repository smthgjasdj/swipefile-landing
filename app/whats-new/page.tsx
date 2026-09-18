import { PageShell } from '@/components/navigation'

const updates = [
  ['Improved ad capture', 'Capture ads from the Meta Ad Library more consistently, even as layouts change.'],
  ['Enhanced notes and tagging', 'Add richer context to every saved ad with faster notes and flexible tags.'],
  ['Better Facebook compatibility', 'Swipefile now works smoothly with more modern Facebook layouts and campaign views.'],
  ['Performance and reliability', 'Faster loading, more reliable saves, and a smoother experience across the extension.'],
]

export default function WhatsNew() {
  return (
    <PageShell title="What&apos;s New" eyebrow="Product updates">
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">Small improvements that make your ad research faster and more useful.</p>
      <div className="flex flex-col gap-8">
        {updates.map(([title, description]) => (
          <article key={title} className="border-b border-border pb-8 last:border-0">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
