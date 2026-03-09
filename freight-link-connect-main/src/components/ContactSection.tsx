import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_ln5yeq6",
      "template_sem8bbg",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        message: form.message,
      },
      "xGA71FrPZZT0WwxnN"
    );

    toast({
      title: "Enquiry Submitted",
      description: "Thank you! We'll get back to you within 24 hours."
    });

    setForm({ name: "", email: "", phone: "", company: "", message: "" });

  } catch (error: any) {
  console.log("EMAIL ERROR STATUS:", error?.status);
  console.log("EMAIL ERROR TEXT:", error?.text);

  toast({
    title: "Error",
    description: "Failed to send enquiry. Please try again."
  });
}
};

  return (
    <section id="contact" className="section-padding gradient-section">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Discuss Your Shipping Needs
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you need a quick quote or have questions about our services, reach out and we'll respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card rounded-lg border border-border p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email Address *</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Company Name</label>
                <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Message / Enquiry *</label>
              <Textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your shipment requirements, trade lane, cargo type, etc." />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Submit Enquiry
            </Button>
          </form>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Office Address</p>
                    <p className="text-muted-foreground text-sm">Mohammadpur, Bhikaji Cama Place, New Delhi - 110066, India</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">+91 98186 84545</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">support.freightlink@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
              <p className="text-muted-foreground text-sm">Monday – Saturday: 9:30 AM – 6:30 PM (IST)</p>
              <p className="text-muted-foreground text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
