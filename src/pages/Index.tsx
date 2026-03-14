import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Timer, MapPin, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import NextFlightBox from "@/components/NextFlightBox";
import NewsCard from "@/components/NewsCard";
import heroPigeons from "@/assets/hero-pigeons.jpg";

const newsItems = [
  { title: "Season 2026 Calendar Released", excerpt: "The board has finalized the complete flight schedule including 12 Vitesse, 8 Midfond, and 4 Dagfond races.", date: "Mar 10, 2026", category: "Schedule" },
  { title: "New Electronic Timing System", excerpt: "PRPA upgrades to Benzing M1 clocking system for all members starting this season.", date: "Mar 5, 2026", category: "Technology" },
  { title: "Champions Gala Recap", excerpt: "Over 200 members celebrated at the annual awards night. Full results and photo gallery now available.", date: "Feb 28, 2026", category: "Events" },
];

const stats = [
  { icon: Trophy, label: "Active Members", value: "342" },
  { icon: Timer, label: "Avg. Velocity", value: "1,142 m/min" },
  { icon: MapPin, label: "Races This Season", value: "24" },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPigeons} alt="Racing pigeons in flight against a clear sky" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>
      <div className="container relative z-10 py-24 md:py-36">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-primary-foreground"
          >
            Velocity Meets Heritage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-lg"
          >
            Real-time results and seasonal tracking for the modern racing loft.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex gap-4"
          >
            <Button asChild size="lg" className="press-effect bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/results">
                View Latest Results <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="press-effect border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <Link to="/schedule">Flight Schedule</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="container -mt-8 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="shield-container p-6 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Bento Grid */}
    <section className="container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Next Flight */}
        <div className="lg:col-span-4">
          <NextFlightBox />
        </div>

        {/* News */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-foreground">Latest News</h2>
            <Link to="/club" className="text-sm text-accent hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {newsItems.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <NewsCard {...n} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
