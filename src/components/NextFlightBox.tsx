const NextFlightBox = () => (
  <div className="bg-accent p-8 rounded-[24px] text-accent-foreground flex flex-col justify-between h-full relative overflow-hidden press-effect">
    <div className="z-10">
      <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Next Release</span>
      <h3 className="font-display text-4xl font-bold mt-2">Châteauroux</h3>
      <p className="text-lg opacity-90 mt-1">Saturday, June 15 • 06:30</p>
    </div>
    <div className="mt-8 z-10">
      <div className="flex justify-between border-t border-accent-foreground/20 pt-4">
        <span className="text-sm opacity-80">Basketing</span>
        <span className="text-sm font-mono-data">Friday 19:00</span>
      </div>
      <div className="flex justify-between border-t border-accent-foreground/20 pt-4 mt-2">
        <span className="text-sm opacity-80">Distance</span>
        <span className="text-sm font-mono-data">542 km</span>
      </div>
      <div className="flex justify-between border-t border-accent-foreground/20 pt-4 mt-2">
        <span className="text-sm opacity-80">Category</span>
        <span className="text-sm font-mono-data">Midfond</span>
      </div>
    </div>
    {/* Abstract wing watermark */}
    <svg className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12" viewBox="0 0 200 200" fill="currentColor">
      <path d="M100 20C60 20 20 60 20 100S60 180 100 180C80 140 80 100 100 60C120 100 120 140 100 180C140 180 180 140 180 100S140 20 100 20Z" />
    </svg>
  </div>
);

export default NextFlightBox;
