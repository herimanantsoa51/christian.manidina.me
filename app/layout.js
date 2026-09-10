import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Christian Herimanantsoa — AI Automation & Software Developer",
  description:
    "AI Automation & Software Developer (Laravel, React, n8n, LangChain) — Reference.mg, Enfants De La Rue (ONG) parrainage scolaire, gestion comptable et automatisation métier. Basé à Antananarivo, disponible freelance.",
  keywords: ["AI Automation", "n8n", "LangChain", "Laravel", "React", "Software Developer", "Reference.mg", "Enfants De La Rue", "Christian Herimanantsoa", "Madagascar"],
  authors: [{ name: "Christian Herimanantsoa", url: "https://christian.manidina.me" }],
  openGraph: {
    title: "Christian Herimanantsoa — AI Automation & Software Developer",
    description: "Laravel/React & n8n/LangChain — automatisation emails, comptabilité et processus métier. Reference.mg & EDLR.",
    url: "https://christian.manidina.me",
    siteName: "Christian Herimanantsoa",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Herimanantsoa — AI Automation & Software Developer",
    description: "Laravel/React & n8n/LangChain pour entreprises et ONG.",
  },
  metadataBase: new URL("https://christian.manidina.me"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
