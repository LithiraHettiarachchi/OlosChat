import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Olos Dashboard",
    description: "Admin Dashboard for Olos System",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased bg-gray-50 text-gray-900`}>
                <div className="flex min-h-screen">
                    <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
                        <h1 className="text-xl font-bold mb-6 text-blue-600">Olos Admin</h1>
                        <nav className="space-y-2">
                            <a href="/dashboard" className="block p-2 rounded hover:bg-gray-100">Overview</a>
                            <a href="/dashboard/users" className="block p-2 rounded hover:bg-gray-100">Users</a>
                            <a href="/dashboard/settings" className="block p-2 rounded hover:bg-gray-100">Settings</a>
                        </nav>
                    </aside>
                    <main className="flex-1 p-8">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
