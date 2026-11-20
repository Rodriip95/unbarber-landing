import type { ComponentProps } from "react";

export const inputClass =
  "w-full border-2 border-ink bg-white px-3 py-3 text-base focus:shadow-hard focus:outline-none";

export function Field({
  label,
  error,
  id,
  ...rest
}: { label: string; error?: string; id: string } & ComponentProps<"input">) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-bold">
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
        <input id={id} type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-ink" {...rest} />
        <span className="text-sm">{children}</span>
      </label>
      {error && <p className="mt-1 text-sm font-bold text-red">{error}</p>}
    </div>
  );
}
