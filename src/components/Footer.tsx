import Logo from "./Logo";
import { Link } from "react-router-dom";

const sponsors = [
  "Versele-Laga", "Beyers", "Natural", "Colombine", "Herbots", "Röhnfried",
  "Versele-Laga", "Beyers", "Natural", "Colombine", "Herbots", "Röhnfried",
];

const Footer = () => (
  <footer className="border-t bg-card">
    {/* Sponsor marquee */}
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
            Velocity meets heritage. Real-time results and seasonal tracking for the modern racing loft.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-foreground mb-3">Navigation</h4>
          <div className="flex flex-col gap-2">
            {["Results", "Schedule", "Club", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
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
      <div className="border-t mt-8 pt-6">
        <p className="text-xs text-muted-foreground">© 2026 PRPA. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
