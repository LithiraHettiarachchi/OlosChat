import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Olos Workspace",
    description: "Your personal chat workspace",
};

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body className={`${inter.variable} antialiased h-full overflow-hidden bg-gray-900 text-white`}>
                <div className="flex h-full">
                    {/* Sidebar would go here */}
                    <aside className="w-64 bg-gray-800 p-4 border-r border-gray-700 hidden md:flex flex-col">
                        <h1 className="text-xl font-bold mb-6 text-blue-400">Olos Chat</h1>
                        <div className="flex-1">
                            {/* Chat history list */}
                        </div>
                    </aside>
                    <main className="flex-1 flex flex-col relative h-full">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
