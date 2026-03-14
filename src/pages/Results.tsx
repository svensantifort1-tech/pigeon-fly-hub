import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, ChevronUp, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RaceResult {
  rank: number;
  member: string;
  pigeonId: string;
  arrival: string;
  distance: number;
  velocity: number;
}

const mockResults: RaceResult[] = [
  { rank: 1, member: "Janssen Loft", pigeonId: "BE-22-6034512", arrival: "14:22:03", distance: 452.12, velocity: 1245.82 },
  { rank: 2, member: "Van der Berg", pigeonId: "BE-23-1098234", arrival: "14:24:17", distance: 451.89, velocity: 1238.45 },
  { rank: 3, member: "De Smet Racing", pigeonId: "BE-22-7845612", arrival: "14:25:41", distance: 453.01, velocity: 1234.11 },
  { rank: 4, member: "Peeters & Zoon", pigeonId: "NL-23-0412789", arrival: "14:27:55", distance: 450.34, velocity: 1225.67 },
  { rank: 5, member: "Claessens Duo", pigeonId: "BE-24-3321001", arrival: "14:29:08", distance: 452.67, velocity: 1221.33 },
  { rank: 6, member: "Hermans Loft", pigeonId: "BE-23-5567890", arrival: "14:31:22", distance: 449.88, velocity: 1214.89 },
  { rank: 7, member: "Van Hees", pigeonId: "NL-22-8876543", arrival: "14:33:45", distance: 451.23, velocity: 1208.44 },
  { rank: 8, member: "Goossens Racing", pigeonId: "BE-24-2234567", arrival: "14:35:11", distance: 453.56, velocity: 1202.18 },
  { rank: 9, member: "Martens Brothers", pigeonId: "BE-23-9901234", arrival: "14:37:29", distance: 450.91, velocity: 1195.72 },
  { rank: 10, member: "De Wilde Loft", pigeonId: "BE-22-4456789", arrival: "14:39:52", distance: 452.44, velocity: 1189.56 },
  { rank: 11, member: "Verhoeven & Co", pigeonId: "NL-24-1123456", arrival: "14:42:18", distance: 448.77, velocity: 1182.34 },
  { rank: 12, member: "Bakker Pigeons", pigeonId: "NL-23-6678901", arrival: "14:44:33", distance: 451.09, velocity: 1176.88 },
];

const races = [
  { value: "all", label: "Alle vluchten" },
  { value: "chateauroux", label: "Châteauroux - Midfond" },
  { value: "bourges", label: "Bourges - Vitesse" },
  { value: "limoges", label: "Limoges - Dagfond" },
];

const years = ["2026", "2025", "2024"];

type SortKey = "rank" | "member" | "velocity" | "distance";

const Results = () => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortAsc, setSortAsc] = useState(true);
  const [raceFilter, setRaceFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("2026");

  const maxVelocity = Math.max(...mockResults.map((r) => r.velocity));

  const filtered = useMemo(() => {
    let data = [...mockResults];
    if (search) {
      const q = search.toLowerCase();
      data = data.filter(
        (r) => r.member.toLowerCase().includes(q) || r.pigeonId.toLowerCase().includes(q)
      );
    }
    data.sort((a, b) => {
      const mul = sortAsc ? 1 : -1;
      if (sortKey === "member") return mul * a.member.localeCompare(b.member);
      return mul * ((a[sortKey] as number) - (b[sortKey] as number));
    });
    return data;
  }, [search, sortKey, sortAsc, raceFilter, yearFilter]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  };

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return null;
    return sortAsc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />;
  };

  return (
    <div className="min-h-screen">
      <section className="container py-12">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
          Uitslagen
        </h1>
        <p className="mt-2 text-muted-foreground">Seizoensresultaten en klassementen.</p>

        {/* Filters */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Zoek op lid of ringnummer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={raceFilter} onValueChange={setRaceFilter}>
            <SelectTrigger className="w-full md:w-56">
              <Filter className="w-4 h-4 mr-2 text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {races.map((r) => (
                <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger className="w-full md:w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="mt-8 shield-container overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 backdrop-blur-md">
                  {[
                    { key: "rank" as SortKey, label: "Rang", align: "text-left" },
                    { key: "member" as SortKey, label: "Lid", align: "text-left" },
                    { key: null, label: "Ringnummer", align: "text-left" },
                    { key: null, label: "Aankomst", align: "text-left" },
                    { key: "distance" as SortKey, label: "Afstand", align: "text-right" },
                    { key: "velocity" as SortKey, label: "Snelheid", align: "text-right" },
                  ].map((col, i) => (
                    <th
                      key={i}
                      className={`py-3 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground ${col.align} ${col.key ? "cursor-pointer select-none hover:text-foreground transition-colors" : ""}`}
                      onClick={() => col.key && toggleSort(col.key)}
                    >
                      <span className="inline-flex items-center gap-1">
                        {col.label}
                        {col.key && <SortIcon col={col.key} />}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => (
                  <motion.tr
                    key={r.pigeonId}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="group border-b border-border hover:bg-accent/5 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-muted-foreground group-hover:text-primary font-mono-data">
                      {String(r.rank).padStart(2, "0")}
                    </td>
                    <td className="py-4 px-6 font-semibold text-foreground">{r.member}</td>
                    <td className="py-4 px-6 font-mono-data text-sm text-secondary">{r.pigeonId}</td>
                    <td className="py-4 px-6 font-mono-data text-sm text-muted-foreground">{r.arrival}</td>
                    <td className="py-4 px-6 text-right font-mono-data text-sm text-muted-foreground">
                      {r.distance.toFixed(2)} km
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="hidden md:block w-20 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary/60"
                            style={{ width: `${(r.velocity / maxVelocity) * 100}%` }}
                          />
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary font-mono-data">
                          {r.velocity.toFixed(2)} m/min
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">Geen resultaten gevonden.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Results;
