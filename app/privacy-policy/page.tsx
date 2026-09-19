import { PageShell } from '@/components/navigation'

export default function PrivacyPolicy() {
  return (
    <PageShell title="Privacy Policy" eyebrow="Swipefile">
      <div className="flex flex-col gap-12 text-muted-foreground leading-relaxed">
        <p className="text-lg">Everything Swipefile saves stays in your browser. There is no account, no upload, and nothing is sold or shared with anyone — including Meta, ad networks, and data brokers. Last updated: September 19, 2026.</p>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-foreground">What Swipefile stores</h2>
          <p>When you save an ad from the Meta Ad Library, Swipefile keeps a copy of what the ad already showed publicly — its creative, its destination link, when you saved it — together with the notes and tags you add. Your library lives in your browser&apos;s local storage, on your device only.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-foreground">Retention and deletion</h2>
          <p>Your library is capped at your chosen size limit, and the oldest saved ads are dropped first when it fills. Removing the extension removes everything with it — nothing is left behind on your machine.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-foreground">Network activity</h2>
          <p>The pages you save already live on the Meta Ad Library; Swipefile reads them as you browse and does not modify them. The extension contacts exactly one website of its own: the Swipefile product site, which hosts the release notes it opens after updates. That site keeps a record of the installed version so the notes match what you are running, and nothing else.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-foreground">Exports</h2>
          <p>When you export your library as JSON or CSV, the file is written by the popup from its own data, on your device.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-foreground">Sharing</h2>
          <p>Your saved ads, notes, and tags are never sold, rented, or traded, and never shared with third parties.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-foreground">Permissions and why they are needed</h2>
          <p><strong className="text-foreground">storage</strong> — holds your library and settings on your device; nothing saved is ever written to a server.</p>
          <p><strong className="text-foreground">alarms</strong> — wakes the extension periodically to keep your library within its size limit and to check its own website for release notes.</p>
          <p><strong className="text-foreground">Access to the Meta Ad Library and the Swipefile site</strong> — the Ad Library is where the ads you save come from; the Swipefile site is the extension&apos;s own product website. No other site is accessed, and nothing about the rest of your browsing is read.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-foreground">Children</h2>
          <p>Swipefile is a research tool for advertisers and is not directed at children. It collects no personal information from anyone.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-foreground">Changes to this policy</h2>
          <p>If this policy changes, the updated version is published on this page with a new date at the top. Continuing to use the extension after a change means you accept the revised policy.</p>
        </section>
      </div>
    </PageShell>
  )
}
