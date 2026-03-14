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
  { date: "22 mrt", location: "Noyon", category: "Vitesse", distance: "210 km", basketing: "21 mrt 19:00", status: "completed" },
  { date: "5 apr", location: "Orléans", category: "Vitesse", distance: "320 km", basketing: "4 apr 19:00", status: "completed" },
  { date: "19 apr", location: "Bourges", category: "Vitesse", distance: "385 km", basketing: "18 apr 18:00", status: "completed" },
  { date: "3 mei", location: "Tours", category: "Midfond", distance: "420 km", basketing: "2 mei 18:00", status: "completed" },
  { date: "17 mei", location: "Poitiers", category: "Midfond", distance: "480 km", basketing: "16 mei 17:00", status: "completed" },
  { date: "1 jun", location: "Angoulême", category: "Midfond", distance: "520 km", basketing: "31 mei 17:00", status: "live" },
  { date: "15 jun", location: "Châteauroux", category: "Midfond", distance: "542 km", basketing: "14 jun 19:00", status: "upcoming" },
  { date: "29 jun", location: "Limoges", category: "Dagfond", distance: "612 km", basketing: "28 jun 16:00", status: "upcoming" },
  { date: "13 jul", location: "Brive", category: "Dagfond", distance: "680 km", basketing: "12 jul 15:00", status: "upcoming" },
  { date: "27 jul", location: "Cahors", category: "Dagfond", distance: "745 km", basketing: "26 jul 14:00", status: "upcoming" },
];

const categoryColors: Record<string, string> = {
  Vitesse: "bg-accent/10 text-accent",
  Midfond: "bg-primary/10 text-primary",
  Dagfond: "bg-secondary/20 text-foreground",
};

const statusLabel: Record<string, string> = {
  completed: "Voltooid",
  live: "Bezig",
  upcoming: "Gepland",
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
        Vluchtprogramma
      </h1>
      <p className="mt-2 text-muted-foreground">Seizoen 2026 — Volledige vluchtkalender</p>

      <div className="mt-8 grid gap-3">
        {flights.map((f, i) => (
          <motion.div
            key={f.location}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`shield-container p-5 flex flex-col md:flex-row md:items-center gap-4 ${f.status === "live" ? "ring-2 ring-primary" : ""}`}
          >
            <div className="w-20 shrink-0">
              <p className="font-display text-sm font-bold text-foreground">{f.date}</p>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                <h3 className="font-display text-lg font-bold text-foreground truncate">{f.location}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[f.category]}`}>
                  {f.category}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="font-mono-data">{f.distance}</span>
              <span className="hidden md:inline">
                <CalIcon className="w-3 h-3 inline mr-1" />
                Inkorven: {f.basketing}
              </span>
            </div>
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
