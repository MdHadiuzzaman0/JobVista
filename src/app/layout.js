import { Plus_Jakarta_Sans, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalPageShow from "@/components/ConditionalPageShow"
import Footer from "@/components/Footer"
import { ToastContainer } from 'react-toastify';

// Heading
const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
});

// Body
const bodyFont = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body", 
});

export const metadata = {
  title: "JobVista - Premium Recruiting Platform",
  description: "Manage your entire process from sourcing to employee onboarding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <ToastContainer position="top-center" autoClose={1200} />
        <main>
        {children}
        </main>
        <ConditionalPageShow/>
        <Footer />
      </body>
    </html>
  );
}