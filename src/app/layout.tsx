import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IBC Gangsters",
  description:
    "Yo, Space Fam! We're the first inscribed NFT collection on the Cosmos Hub. Embark on our cosmic journey and join the meme dream team! Gangster 4 Life!",
  metadataBase: new URL("https://ibcgangsters.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={metadata?.metadataBase?.href ?? ""} />
      <meta property="og:title" content={(metadata.title as string) ?? ""} />
      <meta property="og:description" content={metadata.description ?? ""} />
      <meta property="og:image" content="https:/ibcgangsters.io/banner.jpg" />
      <meta property="og:url" content={metadata?.metadataBase?.href ?? ""} />
      <meta
        property="og:site_name"
        content={(metadata.title as string) ?? ""}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={(metadata.title as string) ?? ""} />
      <meta name="twitter:description" content={metadata.description ?? ""} />
      <meta name="twitter:image" content="https:/ibcgangsters.io/banner.jpg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
