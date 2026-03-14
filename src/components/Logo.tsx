const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shield shape with pigeon dive silhouette */}
    <path
      d="M24 4C14 4 6 10 6 10V28C6 36 14 44 24 44C34 44 42 36 42 28V10C42 10 34 4 24 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Sky arc at top */}
    <path
      d="M12 16C16 13 20 12 24 12C28 12 32 13 36 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* V-shape / diving bird */}
    <path
      d="M14 24L24 34L34 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Wing detail */}
    <path
      d="M18 22L24 28L30 22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
  </svg>
);

export default Logo;
