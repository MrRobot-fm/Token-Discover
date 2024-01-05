import type { Metadata } from "next";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryParamsProvider } from "@/utils/providers/query-param-provider";
import TanstackQUeryProvider from "@/utils/providers/tanstack-query-provider";
import { Cursor } from "@/components/atoms/Cursor/Cursor";
import { Navbar } from "@/components/molecules/nav/Navbar/Navbar";
import { Footer } from "@/components/organism/Footer/Footer";
import { proximaNova } from "@/public/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Token Discover",
  icons: {
    icon: "/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={proximaNova.variable}>
      <body>
        <TanstackQUeryProvider>
          <Suspense>
            <QueryParamsProvider>
              <Cursor />
              <Navbar />
              {children}
              <ToastContainer position="top-right" autoClose={3000} />
              <Footer />
            </QueryParamsProvider>
          </Suspense>
        </TanstackQUeryProvider>
      </body>
    </html>
  );
}
