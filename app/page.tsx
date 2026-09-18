'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation, Footer } from '@/components/navigation'
import { Globe2, Save, Tag, Filter, Download, Lock, ArrowRight } from 'lucide-react'

export default function Home() {
  const [showCookieModal, setShowCookieModal] = useState(true)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <main className="px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Swipefile</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-2">
              Save Ads from the Meta Ad Library
            </p>
            <p className="text-base text-muted-foreground">
              Build your swipe file of winning creative in one click
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-20">
            <Link href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group">
                Get Swipefile — it&apos;s free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <FeatureCard
              icon={<Save className="w-6 h-6" />}
              title="Save any ad in one click"
              description="Capture ads from the Meta Ad Library instantly with a single click"
            />
            <FeatureCard
              icon={<Tag className="w-6 h-6" />}
              title="Organize with notes and tags"
              description="Add personal notes and tags to every saved ad for easy categorization"
            />
            <FeatureCard
              icon={<Filter className="w-6 h-6" />}
              title="Filter and search instantly"
              description="Find the perfect ads from your library with powerful search and filtering"
            />
            <FeatureCard
              icon={<Download className="w-6 h-6" />}
              title="Export as JSON or CSV"
              description="Download your swipe file for sharing with your team"
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6" />}
              title="Everything stays private"
              description="No account needed, no uploads. Everything stays in your browser"
            />
            <FeatureCard
              icon={<Globe2 className="w-6 h-6" />}
              title="Browse from anywhere"
              description="Access your swipe file right from your browser extension"
            />
          </div>

          {/* Use Cases */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-6">Built for research teams</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Media Buyers</span> — Keep a swipe file of
                winning creative from any competitor
              </p>
              <p>
                <span className="font-medium text-foreground">Advertisers</span> — Research competitor
                campaigns and ad strategies
              </p>
              <p>
                <span className="font-medium text-foreground">Creative Teams</span> — Build inspiration
                libraries for your next campaign
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Cookie Modal */}
      {showCookieModal && (
        <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 max-w-sm shadow-lg z-50">
          <p className="text-sm text-muted-foreground mb-3">
            This site uses cookies for analytics and to improve your experience.
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCookieModal(false)}
              className="flex-1"
            >
              Decline
            </Button>
            <Button size="sm" onClick={() => setShowCookieModal(false)} className="flex-1">
              Accept
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="border border-border rounded-lg p-6 hover:bg-card/50 transition-colors">
      <div className="text-primary mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
