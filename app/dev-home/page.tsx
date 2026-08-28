import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ImpactStatement } from "@/components/impact-statement"
import { Methodology } from "@/components/methodology"
import { AcademyPreview } from "@/components/academy-preview"
import { Results } from "@/components/results"
import { Testimonials } from "@/components/testimonials"
import { Community } from "@/components/community"
import { AboutUs } from "@/components/about-us"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function DevHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <Hero />

        <ImpactStatement />

        <Methodology />

        <AcademyPreview />

        <Results />

        <Testimonials />

        <Community />

        <AboutUs />

        <Pricing />

        <Faq />

        <Cta />
      </main>

      <SiteFooter />
    </div>
  )
}