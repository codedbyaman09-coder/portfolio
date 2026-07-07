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
  title: "Aman Kulariya | Full Stack Developer & MERN Stack Expert",
  description: "Portfolio of Aman Kulariya, a Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js), and UI/UX design.",
  keywords: ["Aman Kulariya", "Aman Kulariya Portfolio", "Full Stack Developer", "MERN Stack Developer", "React Developer", "UI/UX Designer"],
  alternates: {
    canonical: "https://amankulariya-portfolio.vercel.app",
  },
  openGraph: {
    title: "Aman Kulariya | Full Stack Developer",
    description: "Portfolio of Aman Kulariya, specializing in the MERN stack and UI/UX design.",
    url: "https://amankulariya-portfolio.vercel.app",
    siteName: "Aman Kulariya Portfolio",
    images: [
      {
        url: "https://amankulariya-portfolio.vercel.app/images/aman.jpeg",
        width: 800,
        height: 600,
        alt: "Aman Kulariya - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kulariya | Full Stack Developer",
    description: "Portfolio of Aman Kulariya, specializing in the MERN stack.",
    images: ["https://amankulariya-portfolio.vercel.app/images/aman.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col m-0 p-0 overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://amankulariya-portfolio.vercel.app/#person",
                  "name": "Aman Kulariya",
                  "url": "https://amankulariya-portfolio.vercel.app",
                  "image": "https://amankulariya-portfolio.vercel.app/images/aman.jpeg",
                  "jobTitle": "Full Stack Developer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance"
                  },
                  "description": "Fresher Full Stack / MERN Stack Developer and UI/UX Designer.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bikaner",
                    "addressRegion": "Rajasthan",
                    "postalCode": "334001",
                    "addressCountry": "IN"
                  },
                  "sameAs": [
                    "https://github.com/codedbyaman09-coder"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://amankulariya-portfolio.vercel.app/#website",
                  "url": "https://amankulariya-portfolio.vercel.app",
                  "name": "Aman Kulariya Portfolio",
                  "publisher": {
                    "@id": "https://amankulariya-portfolio.vercel.app/#person"
                  }
                }
              ]
            })
          }}
        />
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

