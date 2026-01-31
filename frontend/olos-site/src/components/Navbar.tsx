import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <img
                                src="https://i.ibb.co/PGV5RC4t/olos-Logo.avif"
                                alt="Olos Logo"
                                className="h-20 w-auto object-contain" // Further increased height
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-neutral-dark hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#services" className="text-neutral-dark hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link href="#pricing" className="text-neutral-dark hover:text-primary transition-colors">
                            Pricing
                        </Link>
                        <Link href="#ai-chat" className="text-neutral-dark hover:text-primary transition-colors">
                            AI Chat
                        </Link>
                        <Link href="#contact" className="text-neutral-dark hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Placeholder for future login logic if needed, for now just the dashboard CTA */}
                        <a
                            href="http://localhost:3000" // Assuming OlosChat is running on port 3000 locally or we will update this later
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                        >
                            Go to Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
