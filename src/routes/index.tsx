import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { About } from "@/components/site/about";
import { Products } from "@/components/site/products";
import { ErpFeatures } from "@/components/site/erp-features";
import { Services } from "@/components/site/services";
import { WhyMapsoft } from "@/components/site/why-mapsoft";
import { Industries } from "@/components/site/industries";
import { TechnologyStack } from "@/components/site/tech-stack";
import { Portfolio } from "@/components/site/portfolio";
import { Clients } from "@/components/site/clients";
import { Team } from "@/components/site/team";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

const title = "Mapsoft Technologies LLP — Custom Software, ERP & Mobile";
const description =
  "Mapsoft Technologies LLP builds custom software, cloud ERP, CRM, mobile apps and digital solutions for distributors, manufacturers and service businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <ErpFeatures />
        <Services />
        <WhyMapsoft />
        <Industries />
        <TechnologyStack />
        <Portfolio />
        <Clients />
        <Team />
        <Testimonials />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
