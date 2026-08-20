export function MangoLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label="Logo de Mango App"
    >
      <circle cx="20" cy="20" r="19" className="fill-primary/10" />
      <path
        d="M27.5 15.5c1.6 4.6-1 9.8-5.8 11.3-4 1.2-8-.6-9.4-4-1.4-3.5.6-7.6 4.6-9.4 3.6-1.6 8.2-1.6 10.6 2.1z"
        className="fill-mango"
      />
      <path
        d="M20.5 26.8c-.6-4.4 1.4-8.3 5.4-10.6"
        className="stroke-leaf"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="27.6" cy="14.6" r="3" className="fill-leaf" />
      <circle cx="13.2" cy="24.6" r="2.2" className="fill-leaf/70" />
    </svg>
  );
}
