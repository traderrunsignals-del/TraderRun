import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TickerBar } from "@/components/ticker-bar"
import { TraderRunSystem } from "@/components/trader-run-system"
import { AcademyPreview } from "@/components/academy-preview"
import { Outcomes } from "@/components/Outcomes"
import { Results } from "@/components/results"
import { ValueBridge } from "@/components/value-bridge"
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

        <TraderRunSystem />

        <AcademyPreview />

        <Outcomes />

        <Results />

       <ValueBridge />
       <Pricing />

        <Testimonials />

        <Faq />
      </main>

      <SiteFooter />
    </div>
  )
}