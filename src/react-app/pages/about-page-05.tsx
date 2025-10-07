import type { ComponentPropsWithRef, FC, ReactNode } from "react";
import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ChartBreakoutSquare,
    Clock,
    Command,
    MarkerPin02,
    MessageChatCircle,
    MessageHeartCircle,
    MessageSmileCircle,
    Zap,
} from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import type { Transition } from "motion/react";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

import { NativeSelect } from "@/components/base/select/select-native";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
// import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { StarIcon } from "@/components/foundations/rating-stars";
import {  GitHub,  LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import { FooterLarge01, NewsletterSimpleLeft } from "./landing-page-19";

const jobs: JobCard01Props[] = [
    {
        title: "Product Designer",
        department: "Design",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "blue",
        badgeText: "Design",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Engineering Manager",
        department: "Software Development",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "pink",
        badgeText: "Software",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Customer Success Manager",
        department: "Customer Success",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "success",
        badgeText: "CX",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Account Executive",
        department: "Sales",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "indigo",
        badgeText: "Sales",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "SEO Marketing Manager",
        department: "Marketing",
        description: "We're looking for a mid-level product designer to join our team.",
        href: "#",
        badgeColor: "orange",
        badgeText: "Marketing",
        location: "Remote",
        type: "Full-time",
    },
];

const teamMembers = [
    {
        name: "Anubhav Elhence",
        title: "CEO",
        summary: "Ph.D. BITS Pilani",
        avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGhVAVv_nS-Ew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676404308950?e=1762387200&v=beta&t=AziGvTXTNDia9GdUIq8OcopN_jqJR7DXlUNRcz1uvF8",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: GitHub, href: "https://github.com/" },
        ],
    },
    {
        name: "Mehul Gera",
        title: "Managing Director",
        summary: "Ph.D. NTU Business School",
        avatarUrl: "/mehul.jpeg",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: GitHub, href: "https://github.com/" },
        ],
    },
    {
        name: "Gaurang Bansal",
        title: "Technical Project Manager",
        summary: "Leading AI project delivery and team coordination",
        avatarUrl: "/Gaurang.jpeg",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: GitHub, href: "https://github.com/" },
        ],
    },
    {
        name: "Shashwat Gupta",
        title: "Business Development Manager",
        summary: "US Based - Driving business growth and partnerships",
        avatarUrl: "/shashwat.jpg",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: GitHub, href: "https://github.com/" },
        ],
    },
    {
        name: "Rishi Garg",
        title: "GenAI Expert",
        summary: "Hackathon Winner - Specializing in cutting-edge AI solutions",
        avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGCMthHyA25Bg/profile-displayphoto-scale_200_200/B4EZkFd89.IIAg-/0/1756733363576?e=1762387200&v=beta&t=54lgHQcnMc3FzTOihwS9LM1g8P-04B1EDfvpxvvpeG8",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: GitHub, href: "https://github.com/" },
        ],
    },
    {
        name: "Hardik Batwal",
        title: "Backend GenAI Engineer",
        summary: "Building robust AI backend systems and infrastructure",
        avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQGYCC8Erf0Nyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724496368878?e=1762387200&v=beta&t=UL3tTBrfIV8YOtsPUhsR3UTI9VO-e8dW6D71c5l-bAY",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: GitHub, href: "https://github.com/" },
        ],
    },
    {
        name: "Kartik Jain",
        title: "Backend GenAI Engineer",
        summary: "Developing advanced GenAI backend solutions",
        avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGedTmtVDkjgA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721106144959?e=1762387200&v=beta&t=QQW3GE8frPIoyGzKTnliWLibT3oejHfB4SIC-bfJy_0",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: GitHub, href: "https://github.com/" },
        ],
    },
    {
        name: "Sujit Kumar Pradhan",
        title: "Frontend Developer",
        summary: "Crafting beautiful and responsive user interfaces",
        avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQFduKp9okD2MQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730548581594?e=1762387200&v=beta&t=rJxl2djKyEo7bwFqVDremiLyWf9TDHZHr4h1zYGT6O0",
        socials: [
            { icon: X, href: "https://x.com/" },
            { icon: LinkedIn, href: "https://www.linkedin.com/" },
            { icon: GitHub, href: "https://github.com/" },
        ],
    },
];

// const footerSocials = [
//     { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
//     { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
//     { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
//     { label: "GitHub", icon: GitHub, href: "https://github.com/" },
//     { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
//     { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
//     { label: "Layers", icon: Layers, href: "https://layers.com/" },
// ];

// const footerNavList = [
//     {
//         label: "Product",
//         items: [
//             { label: "Overview", href: "#" },
//             { label: "Features", href: "#" },
//             {
//                 label: "Solutions",
//                 href: "#",
//                 badge: (
//                     <Badge color="gray" type="modern" size="sm" className="ml-1">
//                         New
//                     </Badge>
//                 ),
//             },
//             { label: "Tutorials", href: "#" },
//             { label: "Pricing", href: "#" },
//             { label: "Releases", href: "#" },
//         ],
//     },
//     {
//         label: "Company",
//         items: [
//             { label: "About us", href: "/about" },
//             { label: "Careers", href: "#" },
//             { label: "Press", href: "#" },
//             { label: "News", href: "#" },
//             { label: "Media kit", href: "#" },
//             { label: "Contact", href: "#" },
//         ],
//     },
//     {
//         label: "Resources",
//         items: [
//             { label: "Blog", href: "#" },
//             { label: "Newsletter", href: "#" },
//             { label: "Events", href: "#" },
//             { label: "Help centre", href: "#" },
//             { label: "Tutorials", href: "#" },
//             { label: "Support", href: "#" },
//         ],
//     },
//     {
//         label: "Social",
//         items: [
//             { label: "Twitter", href: "#" },
//             { label: "LinkedIn", href: "#" },
//             { label: "Facebook", href: "#" },
//             { label: "GitHub", href: "#" },
//             { label: "AngelList", href: "#" },
//             { label: "Dribbble", href: "#" },
//         ],
//     },
//     {
//         label: "Legal",
//         items: [
//             { label: "Terms", href: "#" },
//             { label: "FAQ", href: "/faq" },
//             { label: "Cookies", href: "#" },
//             { label: "Licenses", href: "#" },
//             { label: "Settings", href: "#" },
//             { label: "Contact", href: "#" },
//         ],
//     },
// ];

const HeaderCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">About Us</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Engineering Intelligence. Powering Impact.</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        At KVGAI Tech, we go beyond superficial GenAI. We design deep, knowledge-driven AI systems that are fast, cost-efficient, and production-ready. Our focus is on solving real enterprise problems with scalable architectures, autonomous agent orchestration, and structured knowledge systems—not just LLM wrappers.
                    </p>
                </div>
            </div>
        </section>
    );
};

const MetricsImageWithCards01 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="relative grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:p-16 lg:grid-cols-3">
                        <img
                            src="https://www.untitledui.com/marketing/workspace-3.webp"
                            alt="Modern workspace background"
                            className="absolute inset-0 z-0 size-full object-cover"
                        />

                        {[
                            { title: "10+", subtitle: "Production AI Deployments", description: "From pharma patent retrieval to automotive recommendation systems, we’ve delivered real deployments—not prototypes." },
                            { title: "99.9%", subtitle: "Uptime Across Deployments", description: "Our serverless architectures and robust orchestration ensure reliable, low-latency performance." },
                            { title: "<100 ms", subtitle: "Average Latency", description: "Optimized pipelines and intelligent caching make real-time AI a reality for our clients." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="z-10 rounded-2xl bg-alpha-white/30 px-6 py-8 text-center ring-1 ring-alpha-white/30 backdrop-blur-xl ring-inset"
                            >
                                <p className="text-display-lg font-semibold text-white md:text-display-xl">{item.title}</p>
                                <p className="mt-3 text-lg font-semibold text-white">{item.subtitle}</p>
                                <p className="mt-2 text-md text-white">{item.description}</p>
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

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconTopCentered = ({
    color = "gray",
    theme = "modern",
    icon,
    title,
    subtitle,
    footer,
}: FeatureTextIcon & {
    color?: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "gradient" | "dark" | "outline" | "modern";
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <FeaturedIcon icon={icon} size="lg" color={color} theme={theme} className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color={color} theme={theme} className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const features = [
    {
        title: "Depth over Hype",
        subtitle: "We prioritize core system design and robust knowledge representation over superficial LLM gimmicks.",
        icon: MessageChatCircle,
    },
    {
        title: "Efficiency at Scale",
        subtitle: "Our architectures are optimized for serverless compute, minimizing latency and cost without sacrificing performance.",
        icon: Zap,
    },
    {
        title: "Partnership Mindset",
        subtitle: "We work closely with clients as long-term partners, not vendors—building solutions around their vision.",
        icon: ChartBreakoutSquare,
    },
    {
        title: "Global Collaboration",
        subtitle: "With presence in India and the U.S., we operate across time zones to ensure smooth engagement and delivery.",
        icon: MessageSmileCircle,
    },
    {
        title: "Continuous Innovation",
        subtitle: "From multi-agent orchestration to knowledge graph retrieval, we push boundaries to solve hard problems.",
        icon: Command,
    },
    {
        title: "People First",
        subtitle: "Our diverse team combines academic depth with industry pragmatism to deliver world-class solutions.",
        icon: MessageHeartCircle,
    },
];

const FeaturesSimpleIcons02 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our Values</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        Building Deep Tech. Delivering Real Impact. <br />
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We’re a team of engineers, researchers, and builders who share a common mission—to make GenAI systems practical, powerful, and accessible for real businesses.</p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {features.map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopCentered icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const TeamSectionSimple04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">We're hiring!</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Meet our team</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 self-stretch sm:flex-row-reverse sm:justify-center">
                        <Button size="xl">Open positions</Button>
                        <Button color="secondary" size="xl">
                            About us
                        </Button>
                    </div>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
                        {teamMembers.map((item) => (
                            <li key={item.title} className="flex h-full flex-col items-center gap-6 rounded-lg bg-secondary p-6">
                                <Avatar src={item.avatarUrl} alt={item.name} size="2xl" className="size-24" />
                                <div className="flex flex-1 flex-col items-center text-center">
                                    <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                                    <p className="mt-1 text-md text-brand-secondary">{item.title}</p>
                                    <p className="mt-3 text-md text-tertiary">{item.summary}</p>
                                    <ul className="mt-auto flex justify-center gap-4 pt-5">
                                        {item.socials.map((social) => (
                                            <li key={social.href}>
                                                <a
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                                >
                                                    <social.icon className="size-5" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

interface JobCardSimpleProps {
    title: string;
    description: string;
    href: string;
    location: string;
    type: string;
    badgeText?: string;
    badgeColor: BadgeColors;
}

interface JobCard01Props extends JobCardSimpleProps {
    department: string;
}

const JobCard01 = (props: JobCard01Props) => {
    return (
        <a
            href={props.href}
            className="flex flex-col rounded-2xl bg-primary p-6 pb-6 ring-1 ring-secondary outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 md:pb-7"
        >
            <div className="flex items-center justify-between py-0.5 md:py-0">
                <span className="text-sm font-semibold text-brand-secondary">{props.department}</span>
                <Button color="link-color" size="sm" className="hidden md:flex" iconTrailing={ArrowUpRight}>
                    View job
                </Button>
                <div className="flex md:hidden">
                    <BadgeWithDot color={props.badgeColor} size="md">
                        {props.badgeText}
                    </BadgeWithDot>
                </div>
            </div>
            <div className="flex items-center gap-2 md:mt-0.5">
                <h3 className="text-md font-semibold text-primary">{props.title}</h3>
                <div className="hidden md:flex">
                    <BadgeWithDot color={props.badgeColor} size="md">
                        {props.badgeText}
                    </BadgeWithDot>
                </div>
            </div>
            <p className="mt-2 text-md text-tertiary">{props.description}</p>
            <div className="mt-5 flex gap-4">
                <div className="flex items-center gap-1.5">
                    <MarkerPin02 size={20} className="text-fg-quaternary" />
                    <span className="text-sm font-medium text-tertiary">{props.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock size={20} className="text-fg-quaternary" />
                    <span className="text-sm font-medium text-tertiary">{props.type}</span>
                </div>
            </div>
        </a>
    );
};

const departments = [
    // { id: "all", label: "View all" },
    { id: "design", label: "Design" },
    { id: "softwareEngineering", label: "Software Engineering" },
    // { id: "customerSuccess", label: "Customer Success" },
    { id: "sales", label: "Sales" },
    // { id: "marketing", label: "Marketing" },
];

const CareersCard01 = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Open Positions</span>
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Open Positions Join Our Mission to Build the Future of GenAI</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                       We're looking for builders, problem-solvers, and innovators who want to work at the intersection of deep tech, AI, and scalable systems.
                        If you love working on complex problems—from orchestration flows to knowledge systems—we’d love to hear from you.
                    </p>
                </div>

                <div className="mt-12 w-full md:mx-auto md:mt-16 md:w-max">
                    <NativeSelect
                        aria-label="Page tabs"
                        className="md:hidden"
                        value={departments.find(({ id }) => id === selectedTab)?.id ?? ""}
                        onChange={(event) => setSelectedTab(event.target.value)}
                        options={departments.map((tab) => ({ label: tab.label, value: tab.id }))}
                    />
                    <Tabs className="max-md:hidden">
                        <TabList size="md" type="button-border" items={departments} />
                    </Tabs>
                </div>

                <div className="mx-auto mt-8 max-w-3xl md:mt-16">
                    <ul className="flex flex-col gap-4 md:gap-6">
                        {jobs.map((job) => (
                            <li key={job.title}>
                                <JobCard01 {...job} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

interface RoundButtonProps extends ComponentPropsWithRef<"button"> {
    icon?: FC<{ className?: string }>;
}

const RoundButton = ({ icon: Icon, ...props }: RoundButtonProps) => {
    return (
        <Button
            {...props}
            color="link-gray"
            className={cx(
                "group flex size-12 items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14",
                props.className,
            )}
        >
            {props.children ??
                (isReactComponent(Icon) ? (
                    <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" />
                ) : null)}
        </Button>
    );
};

const reviews = [
    {
        quote: "Working at KVGAITech means solving problems that actually matter. We build systems that push the boundaries of what GenAI can do in real production environments.",
        author: {
            name: "Kartik Jain",
            title: "Backend GenAI Engineer",
            avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGedTmtVDkjgA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721106144959?e=1762387200&v=beta&t=QQW3GE8frPIoyGzKTnliWLibT3oejHfB4SIC-bfJy_0",
        },
    },
    {
        quote: "I’ve been building GenAI systems, and the learning never stops here.",
        author: {
            name: "Hardik Batwal",
            title: "Backend GenAI Engineer",
            avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQGYCC8Erf0Nyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724496368878?e=1762387200&v=beta&t=UL3tTBrfIV8YOtsPUhsR3UTI9VO-e8dW6D71c5l-bAY",
        },
    },
    {
        quote: "I’ve been leading GenAI innovation, and the energy here is unmatched.",
        author: { name: "Rishi Garg", title: "GenAI Expert", avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGCMthHyA25Bg/profile-displayphoto-scale_200_200/B4EZkFd89.IIAg-/0/1756733363576?e=1762387200&v=beta&t=54lgHQcnMc3FzTOihwS9LM1g8P-04B1EDfvpxvvpeG8" },
    },
];

const TestimonialAbstractImage = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const transition: Transition = { type: "spring", duration: 0.8 };

    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-12 overflow-hidden px-4 md:gap-16 md:px-8 lg:flex-row lg:items-center">
                <figure className="flex flex-col gap-8 md:gap-12 lg:flex-1">
                    <div className="flex flex-1 flex-col gap-6 md:gap-12">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div key={currentReviewIndex + "-rating"} aria-hidden="true" className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <motion.div
                                        key={`${currentReviewIndex}-${index}`}
                                        initial={{ opacity: 0, scale: 0.9, y: 6 }}
                                        animate={{ opacity: 1, scale: 1, y: 0, transition: { ...transition, delay: 0.5 + index * 0.1 } }}
                                        exit={{ opacity: 0, scale: 0.9, y: 6, transition: { ...transition, delay: 0.12 } }}
                                    >
                                        <StarIcon />
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.q
                                key={currentReviewIndex + "-quote"}
                                initial={{ opacity: 0, scale: 0.99, y: 12 }}
                                animate={{ opacity: 1, scale: 1, y: 0, transition: { ...transition, delay: 0.4 } }}
                                exit={{ opacity: 0, scale: 0.99, y: 12, transition: { ...transition, delay: 0.06 } }}
                                className="origin-bottom-left text-display-sm font-medium text-balance text-primary sm:text-display-md md:text-display-lg"
                            >
                                {reviews[currentReviewIndex].quote}
                            </motion.q>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col justify-between gap-6 md:flex-row">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={currentReviewIndex}
                                initial={{ opacity: 0, scale: 0.99, y: 12 }}
                                animate={{ opacity: 1, scale: 1, y: 0, transition: { ...transition, delay: 0.3 } }}
                                exit={{ opacity: 0, scale: 0.99, y: 12, transition }}
                                className="flex origin-bottom-left gap-4"
                            >
                                <Avatar src={reviews[currentReviewIndex].author.avatarUrl} alt={reviews[currentReviewIndex].author.name} size="xl" />
                                <figcaption className="flex flex-col gap-0.5">
                                    <p className="text-lg font-semibold whitespace-nowrap text-primary">{reviews[currentReviewIndex].author.name}</p>
                                    <cite className="text-md whitespace-nowrap text-tertiary not-italic">{reviews[currentReviewIndex].author.title}</cite>
                                </figcaption>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-4 md:gap-8">
                            <RoundButton
                                icon={ArrowLeft}
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1)}
                            />
                            <RoundButton
                                icon={ArrowRight}
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1)}
                            />
                        </div>
                    </div>
                </figure>

                <div className="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4 lg:flex-1">
                    <img
                        src="https://www.untitledui.com/marketing/testimonial-abstract-image-01.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-3.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/ai-woman-03.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "7 / 1 / 10 / 5" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/two-standing-women.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://www.untitledui.com/marketing/smiling-girl-8.webp"
                        className="size-full object-cover"
                        alt="Team photo"
                        style={{ gridArea: "7 / 9 / 10 / 13" }}
                    />
                </div>
            </div>
        </section>
    );
};

// const SimpleCentered = () => {
//     return (
//         <section className="bg-secondary py-16 md:py-24">
//             <div className="mx-auto max-w-container px-4 md:px-8">
//                 <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
//                     <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Join our careers newsletter</h1>
//                     <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Be the first to know about releases and industry news and insights.</p>

//                     <Form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             const data = Object.fromEntries(new FormData(e.currentTarget));
//                             console.log("Form data:", data);
//                         }}
//                         className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[360px_max-content] sm:gap-0 sm:self-center"
//                     >
//                         <Input
//                             isRequired
//                             size="md"
//                             name="email"
//                             type="email"
//                             placeholder="Enter your email"
//                             wrapperClassName="py-0.5 md:max-w-[345px]"
//                             hint={
//                                 <span>
//                                     We care about your data in our{" "}
//                                     <a
//                                         href="#"
//                                         className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
//                                     >
//                                         privacy policy
//                                     </a>
//                                     .
//                                 </span>
//                             }
//                         />
//                         <Button type="submit" size="xl">
//                             Subscribe
//                         </Button>
//                     </Form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const FooterLarge05 = () => {
//     return (
//         <footer>
//             <div className="relative bg-brand-section py-10 md:py-12">
//                 <div className="mx-auto max-w-container px-4 md:px-8">
//                     <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
//                         <div className="flex flex-col gap-2">
//                             <p id="newsletter-label" className="text-lg font-semibold text-primary_on-brand md:text-xl">
//                                 Join our newsletter
//                             </p>
//                             <p id="newsletter-hint" className="text-md text-tertiary_on-brand">
//                                 We'll send you a nice letter once per week. No spam.
//                             </p>
//                         </div>
//                         <Form
//                             onSubmit={(e) => {
//                                 e.preventDefault();
//                                 const data = Object.fromEntries(new FormData(e.currentTarget));
//                                 console.log("Form data:", data);
//                             }}
//                             className="w-full sm:w-100"
//                         >
//                             <div className="flex flex-col gap-4 sm:flex-row">
//                                 <Input
//                                     isRequired
//                                     aria-labelledby="newsletter-label"
//                                     aria-describedby="newsletter-hint"
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     size="md"
//                                     wrapperClassName="flex-1"
//                                 />
//                                 <Button type="submit" size="lg">
//                                     Subscribe
//                                 </Button>
//                             </div>
//                         </Form>
//                     </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 h-px w-full bg-border-brand_alt"></div>
//             </div>

//             <div className="bg-brand-section py-12 md:pt-16">
//                 <div className="mx-auto max-w-container px-4 md:px-8">
//                     <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
//                         <div className="flex flex-col gap-6 md:w-80 md:gap-8">
//                             <KVGAILogo className="h-8" />
//                             <p className="text-md text-tertiary_on-brand">Build and Deploy Ambitious AI Applications with serverless GPU infrastructure and cutting-edge AI technologies.</p>
//                         </div>
//                         <nav className="flex-1">
//                             <ul className="grid grid-cols-2 gap-8 md:grid-cols-5">
//                                 {footerNavList.map((category) => (
//                                     <li key={category.label}>
//                                         <h4 className="text-sm font-semibold text-quaternary_on-brand">{category.label}</h4>
//                                         <ul className="mt-4 flex flex-col gap-3">
//                                             {category.items.map((item) => (
//                                                 <li key={item.label}>
//                                                     <Button
//                                                         className="gap-1 text-footer-button-fg hover:text-footer-button-fg_hover"
//                                                         color="link-color"
//                                                         size="lg"
//                                                         href={item.href}
//                                                         iconTrailing={item.badge}
//                                                     >
//                                                         {item.label}
//                                                     </Button>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </div>

//                     <div className="relative mt-12 flex flex-col-reverse justify-between gap-6 pt-8 md:mt-16 md:flex-row">
//                         <div className="absolute top-0 left-0 h-px w-full bg-border-brand_alt"></div>
//                         <p className="text-md text-quaternary_on-brand">© 2025 KVGAI Tech. All rights reserved.</p>
//                         <ul className="flex gap-6">
//                             {footerSocials.map(({ label, icon: Icon, href }) => (
//                                 <li key={label}>
//                                     <a
//                                         href={href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-icon-fg-brand_on-brand outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
//                                     >
//                                         <Icon size={24} aria-label={label} />
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

const AboutPage05 = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <HeaderCentered />

            <MetricsImageWithCards01 />

            <FeaturesSimpleIcons02 />

            <TeamSectionSimple04 />

            <CareersCard01 />

            <TestimonialAbstractImage />

            {/* <SimpleCentered /> */}
            <NewsletterSimpleLeft/>

            {/* <FooterLarge05 /> */}
            <FooterLarge01/>
        </div>
    );
};

export default AboutPage05;
