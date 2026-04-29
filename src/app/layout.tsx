import type { Metadata } from "next";
import { Lora, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/components/ModeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProfileToggle } from "@/components/ProfileToggle";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zarak Shah",
    template: "%s — Zarak Shah",
  },
  description:
    "Zarak Shah — Senior Data Scientist at BMW. Builds ML systems and AI agents.",
  metadataBase: new URL("https://zarakshah.com"),
  openGraph: {
    title: "Zarak Shah",
    description:
      "Senior Data Scientist at BMW. Builds ML systems and AI agents.",
    type: "website",
  },
};

const prePaintScript = `(()=>{try{const m=localStorage.getItem("mode");if(m==="life"||m==="work")document.documentElement.dataset.mode=m}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="work" className={`h-full ${lora.variable} ${playfair.variable} ${caveat.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaintScript }} />
      </head>
      <body className="min-h-full">
        <ModeProvider>
          <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6">
            <Nav />
            <div className="mb-6 pt-4">
              <ProfileToggle />
            </div>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ModeProvider>
      </body>
    </html>
  );
}
