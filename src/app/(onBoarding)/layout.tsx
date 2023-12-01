import { ReactNode } from "react";
import { workSans } from "@/public/fonts/fonts";
import "../globals.css";

export default function SingUpLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <section className="flex gap-[6rem] bg-background-black base:flex-col lg:min-h-screen lg:flex-row lg:items-center">
          {children}
        </section>
      </body>
    </html>
  );
}
