import Link from "next/link";

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-neutral-light relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-2">Our Ecosystem</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Intelligent tools for the modern workflow
                    </p>
                    <p className="text-lg text-neutral-dark/70">
                        We are building a suite of AI-powered applications designed to streamline your digital life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Service 1: Olos Chat (Active) */}
                    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-border overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:h-full transition-all duration-300"></div>
                        <div className="p-8">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Olos Chat</h3>
                            <p className="text-neutral-dark/70 mb-6 leading-relaxed">
                                Experience the next generation of communication. Our AI-driven chat platform organizes conversations, summarizes threads, and helps you focus on what matters most.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-neutral-dark/80 text-sm">Real-time AI summarization</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-neutral-dark/80 text-sm">Smart context retention</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-neutral-dark/80 text-sm">Seamless dashboard integration</span>
                                </li>
                            </ul>
                            <div className="pt-4 border-t border-gray-100">
                                <Link href="#ai-chat" className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 2: Future / Coming Soon */}
                    <div className="group relative bg-white/50 rounded-2xl border-2 border-dashed border-neutral-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-center items-center text-center p-8 h-full min-h-[400px]">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-dark/80 mb-2">More Coming Soon</h3>
                        <p className="text-neutral-dark/60 max-w-sm mx-auto mb-6">
                            We are constantly innovating. New tools for project management, collaborative code editing, and data visualization are in development.
                        </p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
                            In Development
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
