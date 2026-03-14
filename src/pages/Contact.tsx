import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Bericht verzonden! We nemen snel contact op.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <section className="container py-12">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
          Contact
        </h1>
        <p className="mt-2 text-muted-foreground">Neem contact op met het PRPA-team.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="shield-container p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Naam</label>
                  <Input placeholder="Uw naam" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail</label>
                  <Input type="email" placeholder="u@voorbeeld.com" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Onderwerp</label>
                <Input placeholder="Waar gaat het over?" required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Bericht</label>
                <Textarea placeholder="Uw bericht..." rows={5} required />
              </div>
              <Button type="submit" disabled={sending} className="press-effect">
                <Send className="w-4 h-4 mr-2" />
                {sending ? "Verzenden..." : "Verstuur bericht"}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="shield-container p-6 space-y-5">
              <h2 className="font-display text-lg font-bold text-foreground">Clubinformatie</h2>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Clublokaal</p>
                  <p className="text-sm text-muted-foreground">Duivenstraat 42, 2000 Antwerpen, België</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Telefoon</p>
                  <p className="text-sm text-muted-foreground">+32 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">info@prpa-racing.com</p>
                </div>
              </div>
            </div>

            <div className="shield-container overflow-hidden h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d4.4025!3d51.2194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6e!2sAntwerpen!5e0!3m2!1sen!2sbe!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PRPA Clublokaal locatie"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
