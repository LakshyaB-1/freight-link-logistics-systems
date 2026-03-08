import { Ship, Plane, FileCheck, Truck, Warehouse, FileText } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea Freight (FCL & LCL)",
    desc: "Full Container Load and Less-than Container Load ocean freight services connecting Indian ports to major destinations across Europe, Middle East, Asia, and beyond. We coordinate vessel bookings, container management, and port documentation.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Time-sensitive air cargo solutions for urgent or high-value shipments. We work with reliable airline partners to offer competitive rates and ensure timely delivery from Indian airports to international destinations.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance Coordination",
    desc: "We coordinate with licensed customs brokers to handle import and export clearance, ensuring compliance with Indian customs regulations and smooth processing of your cargo through all regulatory checkpoints.",
  },
  {
    icon: Truck,
    title: "Door-to-Door Logistics",
    desc: "End-to-end cargo movement from your warehouse to the final destination. We manage pick-up, freight, clearance, and last-mile delivery so you can focus on your core business.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    desc: "Through our partner network, we offer warehousing and distribution support at key locations, helping you manage inventory and ensure timely dispatch of your goods.",
  },
  {
    icon: FileText,
    title: "Documentation & Compliance",
    desc: "Complete support with shipping documentation — bills of lading, invoices, packing lists, certificates of origin, and more. We help ensure your paperwork is accurate, complete, and compliant.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Comprehensive Freight Forwarding Services
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          From booking to delivery, we manage every aspect of your international cargo movement with a focus on reliability, compliance, and clear communication.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-lg border border-border p-8 bg-background hover:border-accent/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-md gradient-navy flex items-center justify-center mb-5">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
