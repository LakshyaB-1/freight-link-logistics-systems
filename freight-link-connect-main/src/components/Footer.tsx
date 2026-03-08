import logo from "@/assets/fllslogo.png";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Freight Link Logistics Systems" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold">Freight Link Logistics Systems</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Reliable freight forwarding and logistics services from New Delhi to the world. Your dependable partner for sea freight, air freight, and end-to-end cargo management.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["#home", "#about", "#services", "#why-us", "#contact"].map((href) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors text-left"
                >
                  {href.replace("#", "").replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Sea Freight (FCL & LCL)</li>
              <li>Air Freight</li>
              <li>Customs Clearance</li>
              <li>Door-to-Door Logistics</li>
              <li>Documentation Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Freight Link Logistics Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
