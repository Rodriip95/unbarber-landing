import type { ComponentProps } from "react";

export const inputClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-base text-ink placeholder:text-gray-text/70 " +
  "focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/15";

export function Field({
  label,
  error,
  id,
  ...rest
}: { label: string; error?: string; id: string } & ComponentProps<"input">) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold">
        {label}
      </label>
      <input id={id} className={inputClass} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...rest} />
      {error && (
        <p id={`${id}-err`} className="mt-1 text-sm font-bold text-red">
          {error}
        </p>
      )}
    </div>
  );
}

export function Checkbox({
  id,
  children,
  error,
  ...rest
}: { id: string; error?: string; children: React.ReactNode } & ComponentProps<"input">) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3">
        <input id={id} type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-ink" {...rest} />
        <span className="text-sm text-gray-text">{children}</span>
      </label>
      {error && <p className="mt-1 text-sm font-bold text-red">{error}</p>}
    </div>
  );
}

/** Contenedor de formulario: tarjeta clara con borde fino y esquinas redondeadas. */
export const formCardClass = "grid gap-5 rounded-2xl border border-line bg-paper p-5 md:p-7";
