"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";

export const Cursor = () => {
  const { position } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed z-[10000] h-[2rem] w-[2rem] -translate-x-[50%] -translate-y-[50%] rounded-full bg-purpleRed mix-blend-difference transition-transform duration-100 ease-in base:hidden lg:block"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};
