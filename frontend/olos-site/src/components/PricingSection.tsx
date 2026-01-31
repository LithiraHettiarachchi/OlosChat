import Link from "next/link";

export default function PricingSection() {
    return (
        <section id="pricing" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-2">Pricing</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Simple, transparent pricing
                    </p>
                    <p className="text-lg text-neutral-dark/70">
                        Choose the plan that fits your productivity needs. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Free Tier */}
                    <div className="relative rounded-2xl border border-neutral-border bg-white p-8 shadow-sm flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-foreground">Free</h3>
                            <p className="mt-2 text-neutral-dark/60 text-sm">imgEssential tools for individuals.</p>
                            <div className="mt-4 flex items-baseline text-foreground">
                                <span className="text-4xl font-bold tracking-tight">$0</span>
                                <span className="ml-1 text-xl font-semibold text-neutral-dark/60">/mo</span>
                            </div>
                        </div>
                        <ul className="mb-8 space-y-4 flex-1">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">Basic Chat access</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">3-day message history</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-neutral-dark/40 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <span className="text-sm text-neutral-dark/40">No AI Summarization</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-neutral-dark/40 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <span className="text-sm text-neutral-dark/40">Limited to 1 device</span>
                            </li>
                        </ul>
                        <Link
                            href="http://localhost:3000/signup"
                            className="block w-full py-3 px-4 rounded-xl border border-primary text-primary font-medium text-center hover:bg-primary/5 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Basic Plan ($5) */}
                    <div className="relative rounded-2xl border border-primary/20 bg-primary/5 p-8 shadow-md flex flex-col transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 -mr-1 -mt-1 w-24 h-24 overflow-hidden rounded-tr-2xl">
                            <div className="absolute transform rotate-45 bg-primary text-white text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                                POPULAR
                            </div>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-primary">Basic</h3>
                            <p className="mt-2 text-neutral-dark/60 text-sm">More power for serious users.</p>
                            <div className="mt-4 flex items-baseline text-foreground">
                                <span className="text-4xl font-bold tracking-tight">$5</span>
                                <span className="ml-1 text-xl font-semibold text-neutral-dark/60">/mo</span>
                            </div>
                        </div>
                        <ul className="mb-8 space-y-4 flex-1">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">Unlimited Chat access</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">30-day message history</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">Basic AI Summarization</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-neutral-dark/40 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                <span className="text-sm text-neutral-dark/40">No Priority Support</span>
                            </li>
                        </ul>
                        <Link
                            href="http://localhost:3000/signup?plan=basic"
                            className="block w-full py-3 px-4 rounded-xl bg-primary text-white font-medium text-center hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all"
                        >
                            Start Free Trial
                        </Link>
                    </div>

                    {/* Ultimate Plan ($15) */}
                    <div className="relative rounded-2xl border border-accent/30 bg-white p-8 shadow-sm flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-yellow-700 flex items-center">
                                Ultimate
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent/20 text-yellow-800">
                                    PRO
                                </span>
                            </h3>
                            <p className="mt-2 text-neutral-dark/60 text-sm">Total control and limitless AI.</p>
                            <div className="mt-4 flex items-baseline text-foreground">
                                <span className="text-4xl font-bold tracking-tight">$15</span>
                                <span className="ml-1 text-xl font-semibold text-neutral-dark/60">/mo</span>
                            </div>
                        </div>
                        <ul className="mb-8 space-y-4 flex-1">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-accent mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">Unlimited Message History</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-accent mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">Advanced AI Models (GPT-4)</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-accent mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">Priority Support (24/7)</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-accent mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-sm text-neutral-dark/80">Early Access to New Features</span>
                            </li>
                        </ul>
                        <Link
                            href="http://localhost:3000/signup?plan=ultimate"
                            className="block w-full py-3 px-4 rounded-xl border border-neutral-border text-foreground font-medium text-center hover:bg-gray-50 transition-colors"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
