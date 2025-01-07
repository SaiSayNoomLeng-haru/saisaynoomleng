import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/fonts";
import Navbar from "./ui/_components/Navbar";
import DarkModeProvider from "./lib/DarkModeProvider";
import SocialLinks from "./ui/_components/SocialLinks";


export const metadata: Metadata = {
  title: "Sai Say Noom Leng",
  description: "Sai Say Noom Leng's Portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <DarkModeProvider>
            <Navbar className="col-span-full" />
          <div className="grid grid-cols-main-grid gap-2">
            <main>
              {children}
            </main>
            <SocialLinks className='justify-self-center self-end'/>
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}

