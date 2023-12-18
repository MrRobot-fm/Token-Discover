import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};
