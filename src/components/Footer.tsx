import Logo from "./Logo";
import { Link } from "react-router-dom";
import fyxoLogo from "@/assets/fyxo-logo.png";

const sponsors = [
  "Versele-Laga", "Beyers", "Natural", "Colombine", "Herbots", "Röhnfried",
  "Versele-Laga", "Beyers", "Natural", "Colombine", "Herbots", "Röhnfried",
];

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="border-b overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {sponsors.map((s, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-muted-foreground/60 uppercase tracking-widest">
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Logo className="w-8 h-8 text-primary" />
            <span className="font-display text-base font-bold text-foreground">
              Professional Racing Pigeon Association
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Snelheid ontmoet traditie. Realtime uitslagen en seizoenstracking voor het moderne duivenhok.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-foreground mb-3">Navigatie</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Uitslagen", to: "/results" },
              { label: "Programma", to: "/schedule" },
              { label: "Club", to: "/club" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-foreground mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground">info@prpa-racing.com</p>
          <p className="text-sm text-muted-foreground mt-1">+32 123 456 789</p>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 PRPA. Alle rechten voorbehouden.</p>
        <div className="flex items-center gap-0.5 text-xs text-muted-foreground">
          <span>Made by</span>
          <img src={fyxoLogo} alt="FYXO" className="h-[70px] inline-block" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
