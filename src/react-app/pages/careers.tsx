import { ArrowUpRight, Briefcase01, Clock, Globe01, MarkerPin02, Users01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { KVGAILogo } from "@/components/foundations/logo/kvgai-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01 } from "./landing-page-19";

const GOOGLE_FORM_URL = "https://forms.gle/H5kkKSUYxCY9SEXu6";

const openPositions = [
    {
        title: "Fullstack GenAI Intern",
        department: "Engineering",
        location: "Remote",
        type: "Internship",
        description: "Work on building and integrating AI agents, generative AI models, and full-stack applications with our engineering team.",
    },
];

const perks = [
    {
        icon: Globe01,
        title: "Remote-First Culture",
        description: "Work from anywhere. We have team members across India and the U.S.",
    },
    {
        icon: Briefcase01,
        title: "Cutting-Edge Projects",
        description: "Work on agentic AI, knowledge graphs, and multi-agent orchestration systems.",
    },
    {
        icon: Users01,
        title: "Collaborative Team",
        description: "Join a team of PhDs, hackathon winners, and passionate builders.",
    },
    {
        icon: Clock,
        title: "Flexible Hours",
        description: "We trust you to manage your time. Results matter, not hours clocked.",
    },
];

const CareersHero = () => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <span className="text-sm font-semibold text-brand-secondary md:text-md">We're Hiring</span>
                <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                    Join the Future of AI
                </h1>
                <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                    We're looking for builders, problem-solvers, and innovators who want to work at the intersection of agentic AI, civic technology, and enterprise software. Help us build the next generation of intelligent, autonomous software systems.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="xl" href={GOOGLE_FORM_URL} target="_blank" iconTrailing={ArrowUpRight}>
                        Apply Now
                    </Button>
                    <Button color="secondary" size="xl" href="#open-positions">
                        View Open Positions
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

const PerksSection = () => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center md:mb-16">
                <span className="text-sm font-semibold text-brand-secondary md:text-md">Why KVGAI Tech</span>
                <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                    Build What Matters
                </h2>
                <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                    We're a fast-growing AI company where every team member makes an outsized impact.
                </p>
            </div>
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {perks.map((perk) => (
                    <li key={perk.title} className="flex flex-col items-center gap-4 rounded-2xl bg-primary p-6 text-center">
                        <FeaturedIcon icon={perk.icon} size="lg" color="brand" theme="light" />
                        <h3 className="text-lg font-semibold text-primary">{perk.title}</h3>
                        <p className="text-md text-tertiary">{perk.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const OpenPositions = () => (
    <section id="open-positions" className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center md:mb-16">
                <span className="text-sm font-semibold text-brand-secondary md:text-md">Open Positions</span>
                <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                    Find Your Role
                </h2>
                <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                    Don't see a perfect fit? We're always looking for talented people. Apply via the form and tell us what you bring.
                </p>
            </div>

            <div className="mx-auto max-w-3xl">
                <ul className="flex flex-col gap-4 md:gap-6">
                    {openPositions.map((job) => (
                        <li key={job.title}>
                            <a
                                href={GOOGLE_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col rounded-2xl bg-secondary p-6 ring-1 ring-secondary outline-focus-ring ring-inset transition hover:ring-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 md:p-8"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-sm font-semibold text-brand-secondary">{job.department}</span>
                                        <h3 className="mt-1 text-lg font-semibold text-primary md:text-xl">{job.title}</h3>
                                    </div>
                                    <ArrowUpRight className="size-5 text-fg-quaternary transition group-hover:text-brand-secondary" />
                                </div>
                                <p className="mt-2 text-md text-tertiary">{job.description}</p>
                                <div className="mt-5 flex flex-wrap gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <MarkerPin02 size={18} className="text-fg-quaternary" />
                                        <span className="text-sm font-medium text-tertiary">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={18} className="text-fg-quaternary" />
                                        <span className="text-sm font-medium text-tertiary">{job.type}</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12 flex justify-center">
                <Button size="xl" href={GOOGLE_FORM_URL} target="_blank" iconTrailing={ArrowUpRight}>
                    Apply for Any Role
                </Button>
            </div>
        </div>
    </section>
);

const CTASection = () => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="flex flex-col items-center gap-8 rounded-2xl bg-primary px-6 py-12 text-center md:px-16 md:py-16">
                <KVGAILogo className="h-14 md:h-16" />
                <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                    Ready to Build the Future?
                </h2>
                <p className="max-w-2xl text-lg text-tertiary md:text-xl">
                    Join a team that's pushing the boundaries of what AI can do. We're building intelligent systems that power real impact across industries.
                </p>
                <Button size="xl" href={GOOGLE_FORM_URL} target="_blank" iconTrailing={ArrowUpRight}>
                    Apply Now
                </Button>
            </div>
        </div>
    </section>
);

const CareersPage = () => {
    return (
        <div className="bg-primary">
            <Header />
            <CareersHero />
            <PerksSection />
            <OpenPositions />
            <CTASection />
            <FooterLarge01 />
        </div>
    );
};

export default CareersPage;
