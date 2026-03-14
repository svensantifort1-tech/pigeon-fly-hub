import { motion } from "framer-motion";
import { MapPin, Calendar as CalIcon } from "lucide-react";

interface Flight {
  date: string;
  location: string;
  category: string;
  distance: string;
  basketing: string;
  status: "upcoming" | "completed" | "live";
}

const flights: Flight[] = [
  { date: "Mar 22", location: "Noyon", category: "Vitesse", distance: "210 km", basketing: "Mar 21 19:00", status: "completed" },
  { date: "Apr 5", location: "Orléans", category: "Vitesse", distance: "320 km", basketing: "Apr 4 19:00", status: "completed" },
  { date: "Apr 19", location: "Bourges", category: "Vitesse", distance: "385 km", basketing: "Apr 18 18:00", status: "completed" },
  { date: "May 3", location: "Tours", category: "Midfond", distance: "420 km", basketing: "May 2 18:00", status: "completed" },
  { date: "May 17", location: "Poitiers", category: "Midfond", distance: "480 km", basketing: "May 16 17:00", status: "completed" },
  { date: "Jun 1", location: "Angoulême", category: "Midfond", distance: "520 km", basketing: "May 31 17:00", status: "live" },
  { date: "Jun 15", location: "Châteauroux", category: "Midfond", distance: "542 km", basketing: "Jun 14 19:00", status: "upcoming" },
  { date: "Jun 29", location: "Limoges", category: "Dagfond", distance: "612 km", basketing: "Jun 28 16:00", status: "upcoming" },
  { date: "Jul 13", location: "Brive", category: "Dagfond", distance: "680 km", basketing: "Jul 12 15:00", status: "upcoming" },
  { date: "Jul 27", location: "Cahors", category: "Dagfond", distance: "745 km", basketing: "Jul 26 14:00", status: "upcoming" },
];

const categoryColors: Record<string, string> = {
  Vitesse: "bg-accent/10 text-accent",
  Midfond: "bg-primary/10 text-primary",
  Dagfond: "bg-secondary/20 text-foreground",
};

const statusLabel: Record<string, string> = {
  completed: "Completed",
  live: "In Progress",
  upcoming: "Upcoming",
};

const statusColor: Record<string, string> = {
  completed: "bg-muted text-muted-foreground",
  live: "bg-primary text-primary-foreground",
  upcoming: "bg-accent/10 text-accent",
};

const Schedule = () => (
  <div className="min-h-screen">
    <section className="container py-12">
      <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
        Flight Schedule
      </h1>
      <p className="mt-2 text-muted-foreground">Season 2026 — Complete race calendar</p>

      <div className="mt-8 grid gap-3">
        {flights.map((f, i) => (
          <motion.div
            key={f.location}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`shield-container p-5 flex flex-col md:flex-row md:items-center gap-4 ${f.status === "live" ? "ring-2 ring-primary" : ""}`}
          >
            {/* Date */}
            <div className="w-20 shrink-0">
              <p className="font-display text-sm font-bold text-foreground">{f.date}</p>
            </div>

            {/* Location & Category */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                <h3 className="font-display text-lg font-bold text-foreground truncate">{f.location}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[f.category]}`}>
                  {f.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="font-mono-data">{f.distance}</span>
              <span className="hidden md:inline">
                <CalIcon className="w-3 h-3 inline mr-1" />
                Basket: {f.basketing}
              </span>
            </div>

            {/* Status */}
            <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${statusColor[f.status]}`}>
              {statusLabel[f.status]}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Schedule;
