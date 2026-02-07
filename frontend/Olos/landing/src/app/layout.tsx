import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "OlosChat - Intelligent AI Communication",
    description: "Experience the future of communication with OlosChat. Secure, intelligent, and designed for productivity.",
    openGraph: {
        title: "OlosChat - Intelligent AI Communication",
        description: "Experience the future of communication with OlosChat. Secure, intelligent, and designed for productivity.",
        siteName: "OlosChat",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
