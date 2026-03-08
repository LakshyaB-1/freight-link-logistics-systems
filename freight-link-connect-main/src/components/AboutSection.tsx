import { Target, Handshake, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To simplify international trade logistics for Indian businesses by providing transparent, reliable, and well-coordinated freight forwarding services.",
  },
  {
    icon: Handshake,
    title: "Partnership Approach",
    text: "We treat every client as a long-term partner. Our team takes time to understand your supply chain and offers solutions that fit your specific requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Trust",
    text: "We believe in honest communication, realistic timelines, and consistent follow-through. No exaggerated claims — just dependable execution, every shipment.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding gradient-section">
    <div className="container-narrow">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built on Experience, Driven by Reliability
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Freight Link Logistics Systems is a Delhi NCR-based freight forwarding company with hands-on experience in managing sea and air cargo for importers and exporters. Our focus is on operational coordination, clear communication, and ensuring your cargo moves efficiently through every stage of the supply chain.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div key={v.title} className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <v.icon className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
