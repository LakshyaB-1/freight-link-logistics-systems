import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Experienced Team",
    desc: "Our team brings years of hands-on experience in freight forwarding, customs coordination, and logistics operations across multiple trade lanes.",
  },
  {
    title: "Reliable Global Network",
    desc: "We work with trusted shipping lines, airlines, and logistics partners across Europe, Middle East, Asia, and other key regions to keep your cargo moving.",
  },
  {
    title: "Transparent Communication",
    desc: "You'll always know where your shipment stands. We provide regular updates, clear timelines, and honest answers — no runaround.",
  },
  {
    title: "Flexible Solutions for SMEs",
    desc: "We understand the needs of small and medium businesses. Our solutions are tailored to your volume, budget, and schedule requirements.",
  },
  {
    title: "Strong Operational Coordination",
    desc: "From origin to destination, we coordinate every step — carriers, customs, transport, and documentation — so nothing falls through the cracks.",
  },
  {
    title: "Focus on Compliance & Timeliness",
    desc: "We prioritise regulatory compliance and on-time delivery, helping you avoid costly delays and penalties.",
  },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding gradient-section">
    <div className="container-narrow">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          A Logistics Partner You Can Count On
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We don't make exaggerated promises. Here's what we do offer — consistent, reliable service backed by experience and genuine commitment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 bg-card rounded-lg p-6 border border-border">
            <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
