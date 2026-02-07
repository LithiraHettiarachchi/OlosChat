import ChatDemo from "./ChatDemo";

export default function AIChatSection() {
    return (
        <section id="ai-chat" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="mb-12 lg:mb-0">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-2">AI Assistant</h2>
                        <p className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            Your site, smarter.
                        </p>
                        <div className="prose prose-lg text-neutral-dark/70">
                            <p className="mb-4">
                                The Olos AI Chat can be used as a chatbot inside any website. It is fully customizable according to your relevant data and helps users to take an overview of your website without navigating through the whole site.
                            </p>
                            <p>
                                Enhance user engagement, answer queries instantly, and provide a seamless navigation experience with our intelligent chat solution.
                            </p>
                        </div>
                        <div className="mt-8">
                            <a href="#contact" className="text-primary font-medium hover:text-primary-hover flex items-center">
                                Get integration details
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Demo Content */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        {/* Decorative blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-full blur-3xl -z-10 transform scale-110"></div>
                        <ChatDemo />
                    </div>

                </div>
            </div>
        </section>
    );
}
