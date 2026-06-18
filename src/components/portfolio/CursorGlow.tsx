import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed -z-10 h-[500px] w-[500px] rounded-full blur-3xl transition-transform duration-300 ease-out"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background:
          "radial-gradient(circle, oklch(0.78 0.16 200 / 0.18), transparent 60%)",
      }}
      aria-hidden
    />
  );
}
