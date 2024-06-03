import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ROOT_DIR from "./data/root";

const inter = Inter({ subsets: ["latin"] });

const TITLE = "World Museum";
const DESCRIPTION = "Digitisation of World Museum";
export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    icons: {
        icon: `${ROOT_DIR}/favicon/favicon.ico`,
        apple: `${ROOT_DIR}/favicon/apple-touch-icon.png`,
    },
    manifest: `${ROOT_DIR}/favicon/site.webmanifest`,
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        siteName: TITLE,
        images: [
            {
                url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
            <Script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                type="module"
            ></Script>
        </html>
    );
}
