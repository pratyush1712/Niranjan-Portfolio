import type { Metadata } from "next";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niranjan Vinay Kulkarni — Biomedical optics researcher",
  description:
    "Biomedical optics researcher studying how optical coherence tomography signals relate to tissue structure in the brain.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
