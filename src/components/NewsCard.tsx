import { motion } from "framer-motion";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const NewsCard = ({ title, excerpt, date, category }: NewsCardProps) => (
  <motion.article
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    className="shield-container p-6 cursor-pointer hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xs font-bold uppercase tracking-widest text-accent">{category}</span>
      <span className="text-xs text-muted-foreground">•</span>
      <span className="text-xs text-muted-foreground">{date}</span>
    </div>
    <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{excerpt}</p>
  </motion.article>
);

export default NewsCard;
