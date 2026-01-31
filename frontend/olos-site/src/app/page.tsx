import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />

      {/* Simple Footer just to round it off */}
      <footer className="py-10 border-t border-neutral-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-dark/60 text-sm">
          <p>© {new Date().getFullYear()} Olos Inc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
