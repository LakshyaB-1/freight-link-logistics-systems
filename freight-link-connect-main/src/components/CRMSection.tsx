import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CRMSection = () => (
  <section id="crm" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Our Platform
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Freight Flow CRM
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Manage your shipments seamlessly with our dedicated logistics platform. Track cargo, access documentation, and stay updated on your freight — all in one place.
        </p>
        <Button size="lg" asChild>
          <a href="https://freight-flow-pi.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
            Launch Freight Flow CRM
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);
export default CRMSection;
