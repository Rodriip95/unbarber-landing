"use client";

import { useEffect, useState, type ReactNode } from "react";

/** En móvil, el botón principal queda fijo abajo después de pasar el hero. */
export function StickyCta({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-white p-3 md:hidden [&>a]:w-full">
      {children}
    </div>
  );
}
