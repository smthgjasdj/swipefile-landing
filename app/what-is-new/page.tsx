import { PageShell, FeatureRow, Step } from '@/components/navigation'

export default function WhatIsNew() {
  return (
    <PageShell title="What is Swipefile?" eyebrow="A better way to research ads">
      <p className="text-lg text-muted-foreground leading-relaxed mb-14">Swipefile is a Chrome extension for saving, organizing, and learning from ads in the Meta Ad Library.</p>

      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">What Swipefile does</h2>
          <p className="text-muted-foreground leading-relaxed">When you find an ad worth remembering, save it in one click. Swipefile keeps the ad, its source, and your notes together in a private browser-based library.</p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Key features</h2>
          <FeatureRow title="One-click saving" description="Save any ad directly from the Meta Ad Library without copying links or taking screenshots." />
          <FeatureRow title="Notes and tags" description="Add the context you will want later: hooks, angles, audiences, offers, and creative patterns." />
          <FeatureRow title="Search and filters" description="Find the right idea quickly by searching your library or filtering by your own tags." />
          <FeatureRow title="Simple export" description="Export your collection as JSON or CSV to share with teammates or keep as a backup." />
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Build a swipe file of proven creative</h2>
          <p className="text-muted-foreground leading-relaxed">The best creative research compounds over time. Collect ads that catch your attention, annotate what makes them work, and return to your library when it is time to develop the next campaign.</p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="flex flex-col gap-6">
            <Step number="1" title="Find an ad" description="Browse the Meta Ad Library and spot an ad worth studying." />
            <Step number="2" title="Save and organize" description="Click Swipefile, then add a note or tag to remember why it stood out." />
            <Step number="3" title="Return to your library" description="Search and filter your collection whenever you need inspiration or research." />
            <Step number="4" title="Export and share" description="Take your organized library with you as a JSON or CSV file." />
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-3">Made for teams that make ads</h2>
          <p className="text-muted-foreground leading-relaxed">Media buyers, advertisers, agencies, and creative teams use Swipefile to turn scattered inspiration into a practical research library—without an account or another dashboard to manage.</p>
        </section>
      </div>
    </PageShell>
  )
}
