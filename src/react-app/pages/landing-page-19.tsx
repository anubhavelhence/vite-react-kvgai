import { Fragment, type ReactNode } from "react";
import { CheckCircle, ZapFast } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { KVGAILogo } from "@/components/foundations/logo/kvgai-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";
import { Link } from "react-router-dom";

/* ─── HERO ─── */
const HeroSection = () => (
    <div className="relative bg-primary">
        <Header />

        <section className="pb-20 pt-10 md:pb-28 md:pt-14 lg:pb-32">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="flex flex-col items-start">
                    <h1 className="text-display-md font-semibold tracking-tight text-primary md:text-display-lg lg:text-display-xl">
                        Build, Scale &amp; Deploy
                    </h1>
                    <h1 className="text-display-md font-semibold tracking-tight text-[#7c3aed] dark:text-[#a78bfa] md:text-display-lg lg:text-display-xl">
                        Next-Generation
                    </h1>
                    <h1 className="text-display-md font-semibold tracking-tight text-primary md:text-display-lg lg:text-display-xl">
                        AI Applications
                    </h1>
                    <p className="mt-6 max-w-lg text-lg text-tertiary md:text-xl">
                        Launch powerful serverless AI on GPU infrastructure and move from idea to production in weeks.
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-quaternary">
                        <li className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-[#7c3aed] dark:bg-[#a78bfa]" />
                            AI Agents
                        </li>
                        <li className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-[#7c3aed] dark:bg-[#a78bfa]" />
                            Generative AI
                        </li>
                        <li className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-[#7c3aed] dark:bg-[#a78bfa]" />
                            AI Model Integration
                        </li>
                        <li className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-[#7c3aed] dark:bg-[#a78bfa]" />
                            AI Automation
                        </li>
                        <li className="flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-[#7c3aed] dark:bg-[#a78bfa]" />
                            DevOps
                        </li>
                    </ul>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
                        <Button size="xl" href="/contact">
                            Book a Demo
                        </Button>
                        <Button color="secondary" size="xl" href="/about">
                            Explore Our Work
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <img
                        className="h-64 w-full rounded-xl object-cover shadow-lg md:h-[460px]"
                        src="/officeImage1.jpg"
                        alt="KVGAI Tech Team"
                    />
                </div>
            </div>
        </section>
    </div>
);

/* ─── SCROLLING LOGO TICKER ─── */
const SocialProofTicker = () => {
    const companies = [
        { name: "Zernyx", logo: "/zernyx-logo.png" },
        { name: "Civic Info", logo: "/civicinfo-logo.png" },
        { name: "AstroGanesh", logo: "/astroganesh-logo.png" },
        { name: "Bits TEC", logo: "/bitstec-logo.png" },
    ];

    /* Duplicate once for seamless infinite scroll */
    const tickerSet = [...companies, ...companies];

    return (
        <section className="border-y border-secondary bg-secondary py-10 md:py-14">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-quaternary md:mb-10">
                Trusted by innovative companies
            </p>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-secondary to-transparent md:w-32" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-secondary to-transparent md:w-32" />

                <div className="flex w-max animate-[scroll_40s_linear_infinite] items-center gap-16 md:gap-24">
                    {tickerSet.map((company, i) => (
                        <div key={`${company.name}-${i}`} className="flex shrink-0 flex-col items-center gap-3">
                            <div className="flex h-12 w-28 items-center justify-center md:h-14 md:w-32">
                                <img
                                    alt={company.name}
                                    src={company.logo}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <span className="text-sm font-semibold text-tertiary">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─── WHAT WE BUILD ─── */
const FeaturesSection = () => {
    const features = [
        {
            title: "AI Agents & Automation",
            description: "Build autonomous AI agents that reason, plan, and execute complex tasks. We automate end-to-end workflows with intelligent multi-agent systems.",
            number: "01",
        },
        {
            title: "Generative AI Solutions",
            description: "Integrate cutting-edge LLMs and generative AI models into your products — from RAG pipelines to conversational AI and content generation.",
            number: "02",
        },
        {
            title: "AI Model Integration & DevOps",
            description: "Seamlessly integrate AI models into existing systems with production-grade MLOps, CI/CD pipelines, and serverless GPU infrastructure.",
            number: "03",
        },
        {
            title: "Civic & Enterprise Platforms",
            description: "Build real-time data platforms serving millions of users — from civic technology systems to enterprise-grade SaaS applications.",
            number: "04",
        },
    ];

    return (
        <section className="bg-primary py-20 md:py-28">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        What We Build
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:text-xl">
                        From AI orchestration frameworks to real-time civic data platforms serving millions of users.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-secondary bg-secondary sm:grid-cols-2">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col bg-primary p-8 md:p-10">
                            <span className="text-display-sm font-bold text-[#7c3aed]/20 dark:text-[#a78bfa]/20 md:text-display-md">{feature.number}</span>
                            <h3 className="mt-3 text-lg font-semibold text-primary md:text-xl">{feature.title}</h3>
                            <p className="mt-3 text-md leading-relaxed text-tertiary">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─── INTEGRATIONS ─── */
const IntegrationsSection = () => {
    const integrations = [
        { title: "Claude Code", subtitle: "AI-powered code understanding and automation.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1200px-Claude_AI_symbol.svg.png" },
        { title: "Slack", subtitle: "Trigger workflows and summarize discussions.", logo: "https://www.untitledui.com/logos/integrations/slack.svg" },
        { title: "Google Drive", subtitle: "Secure document retrieval and knowledge extraction.", logo: "https://www.untitledui.com/logos/integrations/google_drive.svg" },
        { title: "LangGraph", subtitle: "Multi-agent orchestration and coordination.", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.69.0/files/light/langgraph.png" },
        { title: "neo4j", subtitle: "Graph-based knowledge representation and search.", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/neo4j/neo4j-original-wordmark.svg" },
        { title: "Hugging Face", subtitle: "Deploy custom ML models as APIs.", logo: "https://cdn.worldvectorlogo.com/logos/huggingface-2.svg" },
    ];

    return (
        <section className="bg-secondary py-20 md:py-28">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Integrations</h2>
                    <p className="mt-4 text-lg text-tertiary md:text-xl">
                        Bring your enterprise tools under one intelligent orchestration layer.
                    </p>
                </div>

                <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6">
                    {integrations.map((item) => (
                        <li key={item.title} className="flex flex-col items-center rounded-2xl border border-secondary bg-primary p-6 text-center md:p-8">
                            <img
                                alt={item.title}
                                src={item.logo}
                                className={cx(
                                    "mb-4 size-10 object-contain md:size-12",
                                    (item.title === "LangGraph" || item.title === "neo4j") && "dark:invert"
                                )}
                            />
                            <h3 className="text-md font-semibold text-primary">{item.title}</h3>
                            <p className="mt-1.5 text-sm text-tertiary">{item.subtitle}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

/* ─── METRICS ─── */
const MetricsSection = () => (
    <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center">
                <FeaturedIcon icon={ZapFast} color="brand" theme="light" size="xl" />
                <h2 className="mt-5 text-display-sm font-semibold text-primary md:text-display-md">
                    Unlock the Full Potential of Generative AI
                </h2>
                <p className="mt-4 text-lg text-tertiary md:text-xl">
                    We help enterprises deploy intelligent, high-performance GenAI systems tailored to their domain.
                </p>
            </div>

            <dl className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                {[
                    { value: "10+", label: "AI Projects Delivered" },
                    { value: "99.9%", label: "Uptime SLA" },
                    { value: "<100ms", label: "Average Latency" },
                ].map((item) => (
                    <div key={item.value} className="flex flex-col items-center gap-2 rounded-2xl border border-secondary bg-secondary p-8 text-center">
                        <dd className="text-display-md font-semibold text-[#7c3aed] dark:text-[#a78bfa] md:text-display-lg">{item.value}</dd>
                        <dt className="text-md font-medium text-primary">{item.label}</dt>
                    </div>
                ))}
            </dl>
        </div>
    </section>
);

/* ─── TESTIMONIAL ─── */
const TestimonialSection = () => (
    <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <figure className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
                <KVGAILogo className="h-11 w-auto md:h-13" />

                <blockquote className="text-display-xs font-medium text-primary md:text-display-sm">
                    &ldquo;KVGAI Tech helped us move from fragmented AI experiments to a fully orchestrated, cost-efficient GenAI pipeline. Their deep technical expertise made a huge difference in accelerating our deployment.&rdquo;
                </blockquote>
                <figcaption className="flex flex-col items-center gap-3">
                    <Avatar src="https://inskin.in/cdn/shop/files/Dr._Deepak_Chitkara_inskin.jpg?crop=center&height=1000&v=1685081974&width=1000" alt="Deepak Chitkara" size="2xl" />
                    <div>
                        <p className="text-md font-semibold text-primary">Deepak Chitkara</p>
                        <cite className="text-sm text-tertiary not-italic">Associate Professor, BITS Pilani &middot; Founder, Zernyx Innovations</cite>
                    </div>
                </figcaption>
            </figure>
        </div>
    </section>
);

/* ─── PARTNER / WHY US ─── */
const PartnerSection = () => (
    <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-14 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
            <div>
                <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Partner with Industry Leaders</h2>
                <ul className="mt-8 flex flex-col gap-4">
                    {[
                        "Premium Project Engagements — tailored for enterprise-grade challenges",
                        "Deep Tech Expertise — multi-agent orchestration, knowledge graphs, serverless AI",
                        "Global Collaboration — teams in India & the U.S.",
                        "Civic Technology — real-time platforms serving millions of users",
                    ].map((text) => (
                        <li key={text} className="flex gap-3">
                            <CheckCircle className="size-6 shrink-0 text-fg-brand-primary" />
                            <span className="text-md text-tertiary">{text}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="xl" href="/contact">Book a Demo</Button>
                    <Button color="secondary" size="xl" href="/about">Learn More</Button>
                </div>
            </div>

            <div>
                <img
                    alt="KVGAI Tech Dashboard"
                    src="https://bitsiotlab.com/wp-content/uploads/2025/10/sampledash.png"
                    className="w-full rounded-2xl border border-secondary object-cover"
                />
            </div>
        </div>
    </section>
);

/* ─── CTA ─── */
const CTASection = () => (
    <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="flex flex-col items-center rounded-2xl bg-primary px-8 py-14 text-center md:px-16 md:py-20">
                <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                    Ready to Build Something Ambitious?
                </h2>
                <p className="mt-4 max-w-xl text-lg text-tertiary md:text-xl">
                    Partner with us to design, deploy, and scale intelligent AI systems that deliver real outcomes.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="xl" href="/contact">Book a Demo</Button>
                    <Button color="secondary" size="xl" href="/careers">Join the Team</Button>
                </div>
            </div>
        </div>
    </section>
);

/* ─── FOOTER ─── */
export const FooterLarge01 = () => {
    const links = {
        Company: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
            { label: "FAQ", href: "/faq" },
        ],
        Legal: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms-conditions" },
            { label: "Refund Policy", href: "/refund-policy" },
            { label: "Shipping & Delivery", href: "/shipping-delivery" },
        ],
        Connect: [
            { label: "support@kvgai.com", href: "mailto:support@kvgai.com" },
            { label: "+91 7388889308", href: "tel:+917388889308" },
        ],
    };

    return (
        <footer className="border-t border-secondary bg-primary">
            <div className="mx-auto max-w-container px-4 py-14 md:px-8 md:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="flex flex-col gap-4">
                        <KVGAILogo className="h-10 w-auto md:h-11" />
                        <p className="max-w-xs text-sm text-tertiary">
                            Building the next generation of intelligent, autonomous software systems.
                        </p>
                    </div>

                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-quaternary">{category}</h4>
                            <ul className="mt-4 flex flex-col gap-2.5">
                                {items.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.href} className="text-sm text-tertiary transition hover:text-primary">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-secondary pt-6">
                    <p className="text-sm text-quaternary">&copy; 2026 KVGAI TECH PRIVATE LIMITED. All rights reserved.</p>
                    <p className="mt-1 text-xs text-quaternary">2nd Floor, Scalex Loop, Bangalore, India &middot; GSTIN: 09AALCK3280A1ZN</p>
                </div>
            </div>
        </footer>
    );
};

/* ─── PAGE ─── */
const LandingPage19 = () => (
    <div className="bg-primary">
        <HeroSection />
        <SocialProofTicker />
        <FeaturesSection />
        <IntegrationsSection />
        <MetricsSection />
        <PartnerSection />
        <TestimonialSection />
        <CTASection />
        <FooterLarge01 />
    </div>
);

export default LandingPage19;
