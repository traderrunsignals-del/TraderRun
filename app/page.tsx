import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TickerBar } from "@/components/ticker-bar"
import { Features } from "@/components/features"
import { Curriculum } from "@/components/curriculum"
import { Community } from "@/components/community"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TickerBar />
        <Features />
        <Curriculum />
        <Community />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}
