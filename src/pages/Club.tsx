import { motion } from "framer-motion";
import { Trophy, Users, Award } from "lucide-react";

const boardMembers = [
  { name: "Marc Janssen", role: "Voorzitter", years: "Sinds 2018" },
  { name: "Luc Van der Berg", role: "Ondervoorzitter", years: "Sinds 2020" },
  { name: "Sophie De Smet", role: "Secretaris", years: "Sinds 2019" },
  { name: "Jan Peeters", role: "Penningmeester", years: "Sinds 2021" },
  { name: "Els Claessens", role: "Vluchtleider", years: "Sinds 2017" },
  { name: "Tom Hermans", role: "Jeugdcoördinator", years: "Sinds 2023" },
];

const champions = [
  { year: "2025", name: "Janssen Loft", bird: "Blue Lightning", velocity: "1.312,45 m/min", race: "Limoges" },
  { year: "2024", name: "De Smet Racing", bird: "Storm Chaser", velocity: "1.298,11 m/min", race: "Cahors" },
  { year: "2023", name: "Van der Berg", bird: "Northern Star", velocity: "1.276,88 m/min", race: "Châteauroux" },
  { year: "2022", name: "Peeters & Zoon", bird: "Golden Arrow", velocity: "1.264,33 m/min", race: "Brive" },
];

const Club = () => (
  <div className="min-h-screen">
    <section className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            Over PRPA
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            De Professional Racing Pigeon Association staat sinds 1952 aan de top van de wedstrijdduivensport. 
            Met meer dan 340 actieve leden en een uitgebreid seizoensprogramma van Vitesse tot Grand Fond afstanden, 
            zet PRPA de standaard voor datagedreven, eerlijke en spannende duivenraces.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Onze missie is de sport vooruit te brengen door technologie, transparantie en een diep respect voor het 
            erfgoed van de duivensport. Elke vlucht wordt elektronisch getimed, elk resultaat geverifieerd en elke 
            prestatie wordt seizoen na seizoen bijgehouden.
          </p>
          <div className="mt-8 flex gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">342</p>
                <p className="text-xs text-muted-foreground">Leden</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">72</p>
                <p className="text-xs text-muted-foreground">Jaar actief</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Bestuur</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {boardMembers.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="shield-container p-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="font-display font-bold text-primary text-sm">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-sm">{m.name}</h3>
                <p className="text-xs text-accent font-semibold">{m.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.years}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="container py-12">
      <div className="flex items-center gap-3 mb-8">
        <Award className="w-6 h-6 text-primary" />
        <h2 className="font-display text-2xl font-bold text-foreground">Eregalerij</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {champions.map((c, i) => (
          <motion.div
            key={c.year}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="shield-container p-6 relative overflow-hidden"
          >
            <span className="absolute top-4 right-4 font-display text-5xl font-extrabold text-primary/5">
              {c.year}
            </span>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-accent">Kampioen {c.year}</p>
            <h3 className="font-display text-xl font-bold text-foreground mt-2">{c.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">"{c.bird}"</p>
            <div className="mt-4 pt-3 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{c.race}</span>
                <span className="font-mono-data text-primary font-semibold">{c.velocity}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Club;
