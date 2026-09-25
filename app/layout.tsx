import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-base",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel dos Santos | Portfólio",
  description: "Portfólio de Gabriel dos Santos. Desenvolvedor especializado em React, Next.js e criação de interfaces responsivas e animadas.",
  keywords: ["Gabriel dos Santos", "Desenvolvedor Front-end", "Portfólio", "React", "Next.js", "Web Design"],
  authors: [{ name: "Gabriel dos Santos" }],
  creator: "Gabriel dos Santos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Gabriel dos Santos | Portfólio",
    description: "Portfólio de Gabriel dos Santos, Desenvolvedor Front-end.",
    siteName: "Gabriel dos Santos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${orbitron.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}