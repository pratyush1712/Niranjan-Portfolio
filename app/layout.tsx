import type { Metadata } from "next";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { profile } from "@/content/profile";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('illumination');
    var mode = saved === 'light' || saved === 'dark'
      ? saved
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', mode);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.primaryLabel,
  description: profile.alternativeLabel,
  email: `mailto:${profile.email}`,
  affiliation: {
    "@type": "Organization",
    name: "Cornell University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ithaca",
    addressRegion: "NY",
    addressCountry: "US",
  },
  knowsAbout: seo.knowsAbout,
  sameAs: seo.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <meta
          name="theme-color"
          content="#EFF2F5"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0B0D12"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
