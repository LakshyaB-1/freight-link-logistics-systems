import { TrendingUp } from "lucide-react";

const FutureReady = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="gradient-navy rounded-xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
        <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
          <TrendingUp className="h-8 w-8 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary-foreground mb-2">Committed to Continuous Improvement</h3>
          <p className="text-primary-foreground/80 leading-relaxed">
            The logistics industry is evolving, and so are we. We are actively investing in better processes, digital tools, and operational efficiencies to serve our clients faster and more transparently. Our goal is to stay ahead of industry changes so your supply chain stays resilient.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FutureReady;
