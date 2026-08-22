import { SiteHeader } from "@/components/site-header"
import { AboutUs } from "@/components/about-us"
import { SiteFooter } from "@/components/site-footer"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <AboutUs />
      </main>

      <SiteFooter />
    </div>
  )
}