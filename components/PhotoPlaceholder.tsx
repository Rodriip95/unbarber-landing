// Marcador hasta tener fotos reales de barberos de la zona (LAN-08). Nunca stock.
export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-end border-2 border-ink bg-gray p-3 text-sm text-gray-text shadow-hard ${className}`}
    >
      {label}
    </div>
  );
}
