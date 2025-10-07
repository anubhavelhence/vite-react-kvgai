import { Fragment, type ReactNode } from "react";
import { CheckCircle, ZapFast } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { KVGAILogo } from "@/components/foundations/logo/kvgai-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About us", href: "/about" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "News", href: "#" },
            { label: "Media kit", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
    {
        label: "Use cases",
        items: [
            { label: "Startups", href: "#" },
            { label: "Enterprise", href: "#" },
            { label: "Government", href: "#" },
            { label: "SaaS centre", href: "#" },
            { label: "Marketplaces", href: "#" },
            { label: "Ecommerce", href: "#" },
        ],
    },
    {
        label: "Social",
        items: [
            { label: "Twitter", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "AngelList", href: "#" },
            { label: "Dribbble", href: "#" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Terms", href: "#" },
            { label: "FAQ", href: "/faq" },
            { label: "Cookies", href: "#" },
            { label: "Licenses", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
];

const HeroSplitImage05 = () => {
    return (
        <div className="relative overflow-hidden bg-secondary">
            {/* Background pattern */}
            <img
                alt="Grid background pattern"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid background pattern"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header />

            <section className="py-16 md:pb-24">
                <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div className="flex flex-col items-start">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Build and Deploy Ambitious AI Applications
                        </h1>
                        <p className="mt-4 max-w-xl text-lg text-tertiary md:mt-6 md:text-xl">
                            Run serverless AI on GPU. From zero to production in weeks. Expert in Agentic RAG, MCP servers, and Conversational AI agentss.
                        </p>

                        {/* <div className="mt-8 md:mt-12">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle} className="px-8 py-4 text-lg">
                                Demo
                            </Button>
                        </div> */}
                    </div>

                    <div className="relative">
                        <img
                            className="h-60 w-full rounded-tr-[32px] rounded-bl-[32px] object-cover md:h-96 md:rounded-tr-[64px] md:rounded-bl-[64px] lg:h-full"
                            src="/officeImage.jpg"
                            alt="Workspace"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const SocialProofFullWidth = () => {
    const companies = [
        { name: "Data Ripple", logo: "https://dataripple.ai/wp-content/uploads/2025/07/logo-data-ripple.svg" },
        { name: "iMeld", logo: "https://cdn.prod.website-files.com/67e13517368064b6b75e9706/67eb9a2ffc44be3663899c9f_Logo%20imeld.svg" },
        { name: "Zernyx", logo: "https://sujit.zernyx.com/assets/LogoPng-CbjajjHm.png" },
        { name: "AskEagle", logo: "/AskEagle Logo.png" },
        { name: "Draco", logo: "/dracoLogo.jpg" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-lg font-medium text-tertiary md:text-xl">Trusted by innovative companies</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16">
                        {companies.map((company) => (
                            <div key={company.name} className="flex flex-col items-center gap-4">
                                <div className="flex h-16 w-32 items-center justify-center md:h-20 md:w-40">
                                    <img
                                        alt={company.name}
                                        src={company.logo}
                                        className={cx(
                                            "h-full w-full object-scale-down",
                                            company.name === "Data Ripple" && "invert dark:invert-0"
                                        )}
                                    />
                                </div>
                                <p className="text-lg font-semibold text-primary md:text-xl">
                                    {company.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIntegrationIcon extends TextCentered {
    imgUrl: string;
}

const FeatureTextIntegrationIconBox = ({ imgUrl, title, subtitle, footer }: FeatureTextIntegrationIcon) => (
    <div className="mt-6 flex max-w-sm flex-col items-center gap-4 rounded-2xl bg-secondary px-6 pb-8 text-center">
        <span className="-mt-[26px] flex size-13 shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:-mt-8 md:size-16 md:rounded-xl">
            <img
                alt={title}
                src={imgUrl}
                className={cx(
                    "size-12 md:size-14",
                    (title === "LangGraph" || title === "neo4j") && "dark:invert"
                )}
            />
        </span>

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const FeaturesIntegrationsIcons04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Integrations</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Seamlessly Orchestrate Your AI Workflows</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Bring all your enterprise tools under one intelligent orchestration layer. KVGAI Tech enables AI agents to interact with your favorite platforms autonomously—streamlining operations and reducing manual overhead.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                        {[
                            {
                                title: "Claude Code",
                                subtitle: "Integrate Claude Code directly into your pipelines to power intelligent code understanding, refactoring, and AI-driven automation.",
                                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1200px-Claude_AI_symbol.svg.png",
                            },
                            {
                                title: "Slack integration",
                                subtitle: "Enable agents to collaborate with your teams natively in Slack—trigger workflows, summarize discussions, and file tickets seamlessly.",
                                logo: "https://www.untitledui.com/logos/integrations/slack.svg",
                            },
                            {
                                title: "Google Drive integration",
                                subtitle: "Connect to Google Drive to enable secure document retrieval, intelligent search, and structured knowledge extraction.",
                                logo: "https://www.untitledui.com/logos/integrations/google_drive.svg",
                            },
                            {
                                title: "LangGraph",
                                subtitle: "Build sophisticated multi-agent orchestration flows using LangGraph—allowing agents to coordinate, plan, and execute complex tasks intelligently.",
                                logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.69.0/files/light/langgraph.png",
                            },
                            {
                                title: "neo4j",
                                subtitle: "Leverage graph databases for advanced knowledge representation, semantic search, and time-indexed retrieval.",
                                logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/neo4j/neo4j-original-wordmark.svg",
                            },
                            {
                                title: "Hugging Face",
                                subtitle: "Deploy and manage custom machine learning models as APIs using Hugging Face’s model hub, fully integrated with our orchestration layer.",
                                logo: "https://cdn.worldvectorlogo.com/logos/huggingface-2.svg",
                            },
                            {
                                title: "Intercom integration",
                                subtitle: "Power conversational AI workflows by linking agents with Intercom—enabling contextual support, lead qualification, and ticket escalation.",
                                logo: "https://www.untitledui.com/logos/integrations/intercom.svg",
                            },
                            {
                                title: "Jira integration",
                                subtitle: "Let agents autonomously create, track, and manage Jira tickets as part of your multi-agent pipelines.",
                                logo: "https://www.untitledui.com/logos/integrations/jira.svg",
                            },
                            {
                                title: "Dropbox integration",
                                subtitle: "Securely fetch and analyze documents, enabling knowledge extraction and collaboration across Dropbox repositories.",
                                logo: "https://www.untitledui.com/logos/integrations/dropbox.svg",
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextIntegrationIconBox imgUrl={item.logo} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FeaturesLargeScreenMockup02 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-0">
            <div className="bg-secondary pt-16 pb-28 md:pt-24 md:pb-40">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>

                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Deep Tech for Cost-Efficient, Scalable GenAI Systems</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            From serverless compute to autonomous orchestration, our platform is designed for enterprises that want to move beyond superficial LLM calls and build reliable, intelligent systems.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto -mt-17 w-full max-w-container px-4 pt-1 md:-mt-26 md:overflow-hidden md:px-8 md:pt-2">
                <div className="flex flex-col md:items-start">
                    <div className="flex h-full w-full items-center justify-center md:max-h-105 md:w-full md:items-start lg:max-h-140">
                        {/* Light mode image (hidden in dark mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://bitsiotlab.com/wp-content/uploads/2025/10/sampledash.png"
                            className="size-full rounded object-cover ring-4 ring-screen-mockup-border md:rounded-xl md:ring-8 dark:hidden"
                        />
                        {/* Dark mode image (hidden in light mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://bitsiotlab.com/wp-content/uploads/2025/10/sampledash.png"
                            className="size-full rounded object-cover ring-4 ring-screen-mockup-border not-dark:hidden md:rounded-xl md:ring-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const MetricsSimpleCenteredText = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex w-full flex-col items-center self-center text-center md:max-w-3xl">
                        <FeaturedIcon icon={ZapFast} color="brand" theme="light" size="xl" />
                        <h2 className="mt-4 text-display-sm font-semibold text-primary md:mt-6 md:text-display-md">Unlock the Full Potential of Generative AI</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We help enterprises deploy intelligent, high-performance GenAI systems tailored to their domain—backed by proven execution and robust infrastructure.</p>
                    </div>

                    <dl className="flex w-full flex-col justify-center gap-8 md:max-w-3xl md:flex-row md:gap-4 md:self-center">
                        {[
                            { title: "10+", subtitle: "AI Projects Delivered" },
                            { title: "99.9%", subtitle: "Uptime SLA" },
                            { title: "<100ms", subtitle: "Average Latency" },
                        ].map((item, index) => (
                            <Fragment key={item.title}>
                                {index !== 0 && <div className="hidden border-l border-secondary md:block" />}
                                <div className="flex flex-1 flex-col-reverse gap-3 text-center">
                                    <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                    <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                                </div>
                            </Fragment>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

const CTACardHorizontal = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary">
                            <span className="hidden md:inline">Work with KVGAI Tech</span>
                            {/* <span className="md:hidden">Start your free trial</span> */}
                        </h2>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">Partner with us to design, deploy, and scale intelligent AI systems that deliver measurable business outcomes.</p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialSimpleCentered02 = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="flex w-full shrink-0 snap-start flex-col gap-8 text-center">
                    <div className="flex justify-center">
                        <KVGAILogo className="h-10" />
                    </div>

                    <blockquote className="text-display-sm font-medium text-primary md:text-display-md">
                        KVGAI Tech helped us move from fragmented AI experiments to a fully orchestrated, cost-efficient GenAI pipeline. Their deep technical expertise and responsiveness made a huge difference in accelerating our deployment
                    </blockquote>
                    <figcaption className="flex justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar src="https://inskin.in/cdn/shop/files/Dr._Deepak_Chitkara_inskin.jpg?crop=center&height=1000&v=1685081974&width=1000" alt="Amelie Laurent" size="2xl" />
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-semibold text-primary">Deepak Chitkara</p>
                                <cite className="text-md text-tertiary not-italic">CTO, Draco Automotive (UAE)</cite>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "filled" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-white">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.5 4L4.5 7L10.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    iconStyle === "filled" && "text-brand-secondary",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};

const CTAScreenMockup01 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
                <div className="flex w-full max-w-3xl flex-col">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">Partner with Industry Leaders</h1>
                    <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                        {["Premium Project Engagements — tailored for enterprise-grade challenges", "Deep Tech Expertise — multi-agent orchestration, knowledge graphs, serverless AI", "Global Collaboration — teams in India & the U.S."].map((feat) => (
                            <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                        ))}
                    </ul>
                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="relative mx-auto w-full lg:h-128">
                    <div className="top-0 left-0 w-full max-w-5xl rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px] lg:absolute lg:w-max">
                        <div className="rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                            <div className="relative overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[20.21px] md:ring-[1.68px]">
                                {/* Light mode image (hidden in dark mode) */}
                                <img
                                    alt="Dashboard mockup showing application interface"
                                    src="https://bitsiotlab.com/wp-content/uploads/2025/10/sampledash.png"
                                    className="object-cover object-left-top dark:hidden"
                                />
                                {/* Dark mode image (hidden in light mode) */}
                                <img
                                    alt="Dashboard mockup showing application interface"
                                    src="https://bitsiotlab.com/wp-content/uploads/2025/10/sampledash.png"
                                    className="object-cover object-left-top not-dark:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const NewsletterSimpleLeft = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto flex w-full max-w-container flex-col items-start justify-between gap-8 px-4 md:px-8 lg:flex-row">
                <div>
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Stay Ahead in Generative AI</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Get updates on cutting-edge architectures, real-world deployments, and KVGAI Tech’s latest innovations.</p>
                </div>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="flex w-full flex-col gap-4 md:max-w-120 md:flex-row"
                >
                    <Input
                        isRequired
                        size="md"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        wrapperClassName="py-0.5 md:max-w-[345px]"
                        hint={
                            <span>
                                We care about your data in our{" "}
                                <a
                                    href="#"
                                    className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    privacy policy
                                </a>
                                .
                            </span>
                        }
                    />
                    <Button type="submit" size="xl">
                        Subscribe
                    </Button>
                </Form>
            </div>
        </section>
    );
};

export const FooterLarge01 = () => {
    return (
        <footer className="bg-secondary_alt py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <KVGAILogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2025 KVGAI Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const LandingPage19 = () => {
    return (
        <div className="bg-primary">
            <HeroSplitImage05 />

            <SocialProofFullWidth />

            <SectionDivider />

            <FeaturesIntegrationsIcons04 />

            <FeaturesLargeScreenMockup02 />

            <MetricsSimpleCenteredText />

            <CTACardHorizontal />

            <TestimonialSimpleCentered02 />

            <CTAScreenMockup01 />

            <NewsletterSimpleLeft />

            <FooterLarge01 />
        </div>
    );
};

export default LandingPage19;
