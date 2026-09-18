'use client'

import { useEffect } from 'react'
import { PageShell } from '@/components/navigation'

export default function DepartedPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const clientId = params.get('clientId')
    if (!clientId) return
    fetch(`/api/gone?clientId=${encodeURIComponent(clientId)}`, { method: 'POST' }).catch(() => {})
  }, [])

  return (
    <PageShell title="Sorry to see you go." eyebrow="Swipefile removed">
      <div className="flex flex-col gap-12">
        <p className="text-lg text-muted-foreground leading-relaxed">Thanks for giving Swipefile a try. Your library was stored in your browser and is gone with the extension — nothing was left behind on your machine, and nothing was ever sent anywhere.</p>
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Changed your mind?</h2>
          <p className="text-muted-foreground leading-relaxed">Swipefile is always free, and reinstalling takes seconds.</p>
        </section>
      </div>
    </PageShell>
  )
}
