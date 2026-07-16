import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TickerBar } from "@/components/ticker-bar"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TickerBar />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
