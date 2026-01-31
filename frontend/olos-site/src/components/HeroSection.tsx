import Link from "next/link";
import ChatDemo from "./ChatDemo";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse [animation-delay:2s]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left mb-12 lg:mb-0">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-yellow-700 text-xs font-medium mb-6 animate-fade-in-up">
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                            New: Olos AI Assistant
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
                            Clear thoughts. <br className="hidden lg:block" />
                            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                                Focused action.
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-neutral-dark/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Olos transforms chaotic communication into structured, actionable streams. Experience the clarity of AI-driven productivity.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="http://localhost:3000" // Link to dashboard
                                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-medium shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                            >
                                Get Started Free
                            </a>
                            <Link
                                href="#demo"
                                className="w-full sm:w-auto px-8 py-3.5 bg-white border border-neutral-border hover:bg-gray-50 text-foreground rounded-xl font-medium transition-all"
                            >
                                Watch Demo
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm text-neutral-dark/60">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Free 14-day trial
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                No credit card required
                            </div>
                        </div>
                    </div>

                    {/* Visual Content (Chat Demo) */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none perspective-1000">
                        {/* Decorative blob behind chat */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-[3rem] blur-2xl -z-10 transform rotate-6 scale-95 opacity-70"></div>

                        <div className="relative transform transition-all duration-500 hover:scale-[1.01]">
                            <ChatDemo />
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -right-4 top-20 bg-white p-3 rounded-xl shadow-lg border border-neutral-border animate-bounce [animation-duration:3s]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                                    🤖
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">AI Status</p>
                                    <p className="text-sm font-bold text-gray-900">Active</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
