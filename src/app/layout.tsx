import type { Metadata } from "next";
import "./globals.css";
import { ModeProvider } from "@/components/ModeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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

const prePaintScript = `(()=>{try{const m=localStorage.getItem("mode");if(m==="personal"||m==="professional")document.documentElement.dataset.mode=m}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="professional" className="h-full">
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaintScript }} />
      </head>
      <body className="min-h-full">
        <ModeProvider>
          <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ModeProvider>
      </body>
    </html>
  );
}
