import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Container ship at international port" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
      </div>

      <div className="relative z-10 container-narrow section-padding pt-32">
        <div className="max-w-2xl">
          <p className="text-steel-light text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            International Freight Forwarders & Custom's Agents
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-3 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            Reliable Freight Solutions, From Origin to Destination
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary-foreground/90 mb-6 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            Logistics Simplified<span className="text-accent">......... Globally!</span>
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.45s" }}>
            Freight Link Logistics Systems provides dependable sea and air freight forwarding, customs coordination, and end-to-end cargo management for exporters and importers across India and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
            <Button
              size="lg"
              variant="secondary"
              className="group text-base font-semibold"
              onClick={() => scrollTo("#contact")}
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/80"
              onClick={() => scrollTo("#services")}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
