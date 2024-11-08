import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider";

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "My AI version",
  description: "Vlož dôveru do svojho AI a urob správne rozhodnutia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
