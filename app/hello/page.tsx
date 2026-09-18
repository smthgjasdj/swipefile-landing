import { PageShell, FeatureRow, Step } from '@/components/navigation'

export default function HelloPage() {
  return (
    <PageShell title="Saved. Sorted. Ready." eyebrow="Thanks for installing">
      <p className="text-lg text-muted-foreground leading-relaxed mb-14">Swipefile is installed and ready. The next time you find an ad worth keeping in the Meta Ad Library, one click puts it in your library.</p>

      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Getting started</h2>
          <div className="flex flex-col gap-6">
            <Step number="1" title="Open the Ad Library" description="Browse ads as usual — Swipefile waits quietly on the pages it knows." />
            <Step number="2" title="Save an ad" description="Click save and the ad lands in your library with its source attached." />
            <Step number="3" title="Add your notes" description="Tag the hook, the angle, the offer — whatever you will want to remember." />
            <Step number="4" title="Search it later" description="Find the right idea instantly when the next campaign starts." />
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Stays private</h2>
          <p className="text-muted-foreground leading-relaxed">Your library lives in your browser. There is no account, nothing is uploaded, and removing the extension takes everything with it.</p>
        </section>
      </div>
    </PageShell>
  )
}
