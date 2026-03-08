import { Ship, Plane, Globe, Users } from "lucide-react";

const stats = [
  { icon: Ship, label: "Sea Freight Shipments", value: "Thousands Handled" },
  { icon: Plane, label: "Air Freight Solutions", value: "Fast & Flexible" },
  { icon: Globe, label: "Trade Lanes", value: "Global Coverage" },
  { icon: Users, label: "Client Relationships", value: "Long-Term Partners" },
];

const StatsBar = () => (
  <section className="bg-card border-y border-border">
    <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-4 md:px-8">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center gap-2">
          <s.icon className="h-8 w-8 text-accent" />
          <span className="text-lg font-bold text-foreground">{s.value}</span>
          <span className="text-sm text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
