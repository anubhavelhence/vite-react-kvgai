import type { ComponentPropsWithRef, FC } from "react";
import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    ChartBreakoutSquare,
    Command,
    MessageChatCircle,
    MessageHeartCircle,
    MessageSmileCircle,
    Zap,
} from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import type { Transition } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { StarIcon } from "@/components/foundations/rating-stars";
import { LinkedIn } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { isReactComponent } from "@/utils/is-react-component";
import { FooterLarge01 } from "./landing-page-19";

/* ─── DATA ─── */
const teamMembers = [
    { name: "Anubhav Elhence", title: "CEO", summary: "Ph.D. BITS Pilani", avatarUrl: "/anubhav.jpg", linkedin: "https://www.linkedin.com/in/anubhavelhence/" },
    { name: "Mehul Gera", title: "Managing Director", summary: "Ph.D. NTU Business School", avatarUrl: "/mehul.jpeg", linkedin: "https://www.linkedin.com/in/mehul-gera/" },
    { name: "Gaurang Bansal", title: "Technical Project Manager", summary: "Leading AI project delivery and team coordination", avatarUrl: "/Gaurang.jpeg", linkedin: "https://www.linkedin.com/in/gaurang18/" },
    { name: "Shashwat Gupta", title: "Business Development Manager", summary: "US Based - Driving business growth and partnerships", avatarUrl: "/shashwat.jpg", linkedin: "https://www.linkedin.com/in/gupta-shashwat/" },
    { name: "Rishi Garg", title: "GenAI Expert", summary: "Hackathon Winner - Cutting-edge AI solutions", avatarUrl: "/rishi_garg.jpg", linkedin: "https://www.linkedin.com/in/rishigarg03/" },
    { name: "Hardik Batwal", title: "Backend GenAI Engineer", summary: "Building robust AI backend systems", avatarUrl: "/hardik_batwal.jpg", linkedin: "https://www.linkedin.com/in/hardik-batwal-888427239/" },
    { name: "Kartik Jain", title: "Backend GenAI Engineer", summary: "Developing advanced GenAI solutions", avatarUrl: "/kartik_jain.jpg", linkedin: "https://www.linkedin.com/in/-kartikjain/" },
    { name: "Arya Pitre", title: "Product Experience Designer", summary: "Designing intuitive product experiences", avatarUrl: "/arya_pitre.jpg", linkedin: "https://www.linkedin.com/in/arya-pitre-08949a225/" },
];

const values = [
    { title: "Depth over Hype", subtitle: "We prioritize core system design and robust knowledge representation over superficial LLM gimmicks.", icon: MessageChatCircle },
    { title: "Efficiency at Scale", subtitle: "Architectures optimized for serverless compute, minimizing latency and cost without sacrificing performance.", icon: Zap },
    { title: "Partnership Mindset", subtitle: "We work closely with clients as long-term partners, not vendors — building solutions around their vision.", icon: ChartBreakoutSquare },
    { title: "Global Collaboration", subtitle: "With presence in India and the U.S., we operate across time zones for smooth engagement.", icon: MessageSmileCircle },
    { title: "Continuous Innovation", subtitle: "From multi-agent orchestration to knowledge graph retrieval, we push boundaries to solve hard problems.", icon: Command },
    { title: "People First", subtitle: "Our diverse team combines academic depth with industry pragmatism to deliver world-class solutions.", icon: MessageHeartCircle },
];

const reviews = [
    {
        quote: "Working at KVGAI Tech means solving problems that actually matter. We build systems that push the boundaries of what GenAI can do in real production environments.",
        author: { name: "Kartik Jain", title: "Backend GenAI Engineer" },
    },
    {
        quote: "I've been building GenAI systems, and the learning never stops here. Every project is a new challenge.",
        author: { name: "Hardik Batwal", title: "Backend GenAI Engineer" },
    },
    {
        quote: "I've been leading GenAI innovation, and the energy here is unmatched. The team is brilliant.",
        author: { name: "Rishi Garg", title: "GenAI Expert" },
    },
];

/* ─── HERO ─── */
const AboutHero = () => (
    <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">About Us</p>
                <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                    Engineering Intelligence. Powering Impact.
                </h1>
                <p className="mt-5 text-lg text-tertiary md:text-xl">
                    KVGAI Tech Private Limited is a fast-growing AI and product engineering company building the next generation of intelligent, autonomous software systems. We work at the intersection of agentic AI, civic technology, and enterprise software — from AI orchestration frameworks and multi-agent pipelines to real-time civic data platforms serving millions of users.
                </p>
            </div>
        </div>
    </section>
);

/* ─── METRICS ─── */
const MetricsCards = () => (
    <section className="bg-primary pb-20 md:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="relative overflow-hidden rounded-2xl">
                <img src="/officeImage.jpg" alt="KVGAI Tech workspace" className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative grid grid-cols-1 gap-5 p-6 md:grid-cols-3 md:p-12">
                    {[
                        { title: "10+", subtitle: "Production AI Deployments", description: "Real deployments from pharma to automotive." },
                        { title: "99.9%", subtitle: "Uptime Across Deployments", description: "Reliable, low-latency performance guaranteed." },
                        { title: "<100ms", subtitle: "Average Latency", description: "Optimized pipelines for real-time AI." },
                    ].map((item) => (
                        <div key={item.title} className="rounded-xl bg-white/10 px-6 py-7 text-center ring-1 ring-white/15 backdrop-blur ring-inset">
                            <p className="text-display-md font-semibold text-white md:text-display-lg">{item.title}</p>
                            <p className="mt-2 text-md font-semibold text-white">{item.subtitle}</p>
                            <p className="mt-1 text-sm text-white/75">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

/* ─── VALUES ─── */
const ValuesSection = () => (
    <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">Our Values</p>
                <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Building Deep Tech. Delivering Real Impact.</h2>
                <p className="mt-4 text-lg text-tertiary md:text-xl">
                    Engineers, researchers, and builders on a common mission — making GenAI practical and accessible.
                </p>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {values.map((item) => (
                    <li key={item.title} className="rounded-2xl border border-secondary bg-primary p-7">
                        <FeaturedIcon icon={item.icon} size="md" color="brand" theme="light" />
                        <h3 className="mt-4 text-md font-semibold text-primary">{item.title}</h3>
                        <p className="mt-2 text-sm text-tertiary">{item.subtitle}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

/* ─── TEAM ─── */

const InitialsAvatar = ({ name, className }: { name: string; className?: string }) => {
    const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2);
    return (
        <div className={`flex items-center justify-center rounded-full bg-brand-primary text-white font-semibold ${className}`}>
            {initials}
        </div>
    );
};

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <li className="rounded-2xl border border-secondary bg-secondary p-6 text-center">
            {member.avatarUrl && !imgError ? (
                <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="mx-auto size-20 rounded-full object-cover"
                    onError={() => setImgError(true)}
                />
            ) : (
                <InitialsAvatar name={member.name} className="mx-auto size-20 text-xl" />
            )}
            <h3 className="mt-4 text-md font-semibold text-primary">{member.name}</h3>
            <p className="mt-0.5 text-sm font-medium text-brand-secondary">{member.title}</p>
            <p className="mt-2 text-sm text-tertiary">{member.summary}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-fg-quaternary transition hover:text-brand-secondary">
                <LinkedIn className="size-4" />
            </a>
        </li>
    );
};

const TeamSection = () => (
    <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">We're hiring!</p>
                <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Meet Our Team</h2>
                <p className="mt-4 text-lg text-tertiary md:text-xl">
                    Diverse, passionate people building the future of AI together.
                </p>
                <Button size="xl" href="/careers" className="mt-6">Open Positions</Button>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.name} member={member} />
                ))}
            </ul>
        </div>
    </section>
);

/* ─── TESTIMONIAL CAROUSEL ─── */
const RoundButton = ({ icon: Icon, ...props }: ComponentPropsWithRef<"button"> & { icon?: FC<{ className?: string }> }) => (
    <button
        {...props}
        className="flex size-11 items-center justify-center rounded-full border border-secondary text-fg-quaternary transition hover:bg-secondary hover:text-primary md:size-12"
    >
        {isReactComponent(Icon) ? <Icon className="size-5" /> : null}
    </button>
);

const TestimonialCarousel = () => {
    const [idx, setIdx] = useState(0);
    const transition: Transition = { type: "spring", duration: 0.8 };

    return (
        <section className="bg-secondary py-20 md:py-28">
            <div className="mx-auto flex max-w-container flex-col gap-12 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-16">
                <figure className="flex flex-col gap-8 lg:flex-1">
                    <AnimatePresence initial={false} mode="popLayout">
                        <motion.div key={idx + "-stars"} className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <motion.div
                                    key={`${idx}-${i}`}
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0, transition: { ...transition, delay: 0.4 + i * 0.08 } }}
                                    exit={{ opacity: 0, y: 4 }}
                                >
                                    <StarIcon />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.q
                            key={idx + "-q"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { ...transition, delay: 0.3 } }}
                            exit={{ opacity: 0, y: 10 }}
                            className="text-display-xs font-medium text-primary sm:text-display-sm"
                        >
                            {reviews[idx].quote}
                        </motion.q>
                    </AnimatePresence>

                    <div className="flex items-center justify-between">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.figcaption
                                key={idx}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0, transition: { ...transition, delay: 0.2 } }}
                                exit={{ opacity: 0, y: 8 }}
                            >
                                <p className="text-md font-semibold text-primary">{reviews[idx].author.name}</p>
                                <cite className="text-sm text-tertiary not-italic">{reviews[idx].author.title}</cite>
                            </motion.figcaption>
                        </AnimatePresence>

                        <div className="flex gap-3">
                            <RoundButton icon={ArrowLeft} onClick={() => setIdx(idx === 0 ? reviews.length - 1 : idx - 1)} />
                            <RoundButton icon={ArrowRight} onClick={() => setIdx(idx === reviews.length - 1 ? 0 : idx + 1)} />
                        </div>
                    </div>
                </figure>

                <div className="lg:flex-1">
                    <img src="/officeImage1.jpg" className="h-72 w-full rounded-2xl object-cover md:h-96" alt="KVGAI Tech Office" />
                </div>
            </div>
        </section>
    );
};

/* ─── PAGE ─── */
const AboutPage05 = () => (
    <div className="bg-primary">
        <Header />
        <AboutHero />
        <MetricsCards />
        <ValuesSection />
        <TeamSection />
        <TestimonialCarousel />
        <FooterLarge01 />
    </div>
);

export default AboutPage05;
