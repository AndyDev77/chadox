import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas Delangle",
  description:
    "Une fusion artistique et technique captivante, où chaque projet raconte une histoire immersive avec des montages fluides et une attention aux détails.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/img/header/logo.gif",
        },
      }}
    >
      <html lang="en">
        <body className={oswald.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
