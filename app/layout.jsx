import { Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

import MenuButton from "../components/MenuButton";
import SettingButton from "../components/SettingButton";
import ContactInfo from "../components/ContactInfo";
import SocialIcons from "../components/SocialIcons";
import { SectionProvider } from "../components/SectionContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aman KULARIYA",
  description: "Personal portfolio of Aman Kulariya, Freelance UI/UX Designer and Developer based in India.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col m-0 p-0 overflow-hidden">
        <SectionProvider>
          {children}
          <MenuButton />
          <SettingButton />
          <ContactInfo />
          <SocialIcons />
        </SectionProvider>
      </body>
    </html>
  );
}

