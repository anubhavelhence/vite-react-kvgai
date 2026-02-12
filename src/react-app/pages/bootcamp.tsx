import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { KVGAILogo } from "@/components/foundations/logo/kvgai-logo";

const RAZORPAY_KEY_ID = "rzp_live_SE3HBe2FmjrwbJ";
const BOOTCAMP_PRICE = 100;
const BOOTCAMP_PRICE_PAISE = BOOTCAMP_PRICE * 100;
const ORIGINAL_PRICE = 499;
const TOTAL_SEATS = 50;

declare global {
    interface Window {
        Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
    }
}

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    prefill: { name: string; email: string; contact: string };
    theme: { color: string };
    handler: (response: RazorpayResponse) => void;
    modal?: { ondismiss?: () => void };
}

interface RazorpayInstance {
    open: () => void;
}

interface RazorpayResponse {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
}

function loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
        if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
            resolve(true);
            return;
        }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

const scrollToRegister = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

// ─── Animated wrapper ───
const FadeIn = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ─── CTA Button (reused everywhere) ───
const CTAButton = ({ className = "", size = "lg" }: { className?: string; size?: "md" | "lg" }) => (
    <button
        onClick={scrollToRegister}
        className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-bold text-white transition-all ${size === "lg" ? "px-6 py-3.5 text-base sm:px-10 sm:py-4 sm:text-lg" : "px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-md"} bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_32px_rgba(139,92,246,0.25)] hover:shadow-[0_0_48px_rgba(139,92,246,0.4)] ${className}`}
    >
        <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="relative flex items-center gap-2">
            Reserve Your Seat for ₹{BOOTCAMP_PRICE}
            <svg className="size-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </span>
    </button>
);

// ─── Seat counter ───
const SeatCounter = () => {
    const [seats, setSeats] = useState(TOTAL_SEATS);
    useEffect(() => {
        // Simulate seats filling up slowly
        const stored = sessionStorage.getItem("bootcamp_seats");
        if (stored) setSeats(parseInt(stored));
        else sessionStorage.setItem("bootcamp_seats", String(TOTAL_SEATS));

        const interval = setInterval(() => {
            setSeats((prev) => {
                const next = Math.max(prev - 1, 7);
                sessionStorage.setItem("bootcamp_seats", String(next));
                return next;
            });
        }, 45000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
            <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-red-400" />
            </span>
            Only {seats} seats left — Filling fast!
        </div>
    );
};

// ─── Sticky CTA bar ───
const StickyCTA = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handler = () => setVisible(window.scrollY > 600);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0a0f]/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg"
                >
                    <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
                        <div className="hidden sm:block">
                            <p className="text-sm font-bold text-white">Next-Gen AI Protocols Bootcamp — 13th Feb, BITS Pilani</p>
                            <p className="text-xs text-gray-400">
                                <span className="text-gray-500 line-through">₹{ORIGINAL_PRICE}</span>{" "}
                                <span className="font-bold text-emerald-400">₹{BOOTCAMP_PRICE}</span>{" "}
                                — Limited seats
                            </p>
                        </div>
                        <CTAButton size="md" className="w-full sm:w-auto" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// ─── HERO ───
const HeroSection = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <section className="relative overflow-hidden bg-[#0a0a0f]">
            {/* Glow orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[160px]" />
                <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-indigo-600/15 blur-[140px]" />
            </div>

            {/* Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`,
                    backgroundSize: "64px 64px",
                }}
            />

            {/* Nav */}
            <nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-12">
                <Link to="/"><KVGAILogo className="h-8 brightness-0 invert" /></Link>
                <button onClick={scrollToRegister} className="rounded-full bg-violet-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-violet-500">
                    Register Now
                </button>
            </nav>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 pb-20 text-center md:pt-20 md:pb-28">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
                    <SeatCounter />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-8 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl"
                >
                    Next-Gen AI Protocols{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Bootcamp
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="mx-auto mt-5 max-w-xl text-base text-gray-400 sm:mt-6 sm:text-lg md:text-xl"
                >
                    The 3 protocols every AI developer will need in 2026 — and{" "}
                    <span className="font-semibold text-white">you'll learn all of them in one evening.</span>
                </motion.p>

                {/* Event details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-2"
                >
                    {[
                        {
                            text: "13th February 2026",
                            icon: <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
                        },
                        {
                            text: "Room 6109, NAB, BITS Pilani",
                            icon: <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                        },
                        {
                            text: "2–3 Hours Live",
                            icon: <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                        },
                        {
                            text: "3 Protocols + Live Demos",
                            icon: <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                        },
                    ].map((d) => (
                        <span key={d.text} className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-200">
                            <span className="shrink-0 text-violet-400">{d.icon}</span>
                            {d.text}
                        </span>
                    ))}
                </motion.div>

                {/* Price + CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="mt-10 flex flex-col items-center gap-3"
                >
                    <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-bold text-gray-500 line-through">₹{ORIGINAL_PRICE}</span>
                        <span className="text-4xl font-extrabold text-white">₹{BOOTCAMP_PRICE}</span>
                        <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-sm font-bold text-emerald-400">
                            {Math.round((1 - BOOTCAMP_PRICE / ORIGINAL_PRICE) * 100)}% OFF
                        </span>
                    </div>
                    <CTAButton />
                    <p className="mt-1 text-xs text-gray-500">You are paying ₹{BOOTCAMP_PRICE} to reserve a seat for a live AI protocols bootcamp at BITS Pilani.</p>
                    <p className="mt-1 text-xs text-gray-500">Secure checkout via Razorpay • Instant confirmation on email</p>
                </motion.div>
            </div>
        </section>
    );
};

// ─── SESSION BREAKDOWN ───
const WhatYoullBuildSection = () => (
    <section id="session-breakdown" className="bg-[#0c0c14] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
            <FadeIn className="text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                    One Evening. Three Protocols. Zero Fluff.
                </h2>
                <p className="mt-3 text-gray-400">Each protocol gets a deep-dive presentation followed by a live project demo — so you don't just hear about it, you <span className="text-white font-medium">see it work</span>.</p>
            </FadeIn>

            <div className="mt-10 space-y-4">
                {[
                    {
                        step: "01",
                        title: "MCP (Model Context Protocol)",
                        desc: "How do AI models talk to your databases, APIs, and tools? MCP is the answer — and it's already in production at top companies. We'll break it down and demo a real project built with it.",
                        color: "from-blue-500/20 to-cyan-500/20",
                        border: "border-blue-500/20",
                    },
                    {
                        step: "02",
                        title: "A2A (Agent-to-Agent Protocol)",
                        desc: "What if AI agents could hire other AI agents? That's A2A. Learn how autonomous agents discover, negotiate, and collaborate — then watch a multi-agent system in action.",
                        color: "from-violet-500/20 to-purple-500/20",
                        border: "border-violet-500/20",
                    },
                    {
                        step: "03",
                        title: "A2UI (Agent-to-User Interface)",
                        desc: "The missing piece — how AI agents actually interact with humans through smart, adaptive interfaces. We'll demo a project where the agent drives the entire UI experience.",
                        color: "from-emerald-500/20 to-teal-500/20",
                        border: "border-emerald-500/20",
                    },
                    {
                        step: "04",
                        title: "Quiz — Test What You've Learned",
                        desc: "Think you got it? Prove it. A quick, fun quiz after all 3 protocols to lock in what you've learned — and flex on your friends who weren't there.",
                        color: "from-amber-500/20 to-orange-500/20",
                        border: "border-amber-500/20",
                    },
                ].map((item, i) => (
                    <FadeIn key={item.step} delay={i * 0.08}>
                        <div className={`flex gap-3 rounded-xl border ${item.border} bg-white/[0.02] p-4 sm:gap-5 sm:p-5 md:p-6`}>
                            <span className="shrink-0 text-xl font-bold text-white/20 sm:text-2xl">{item.step}</span>
                            <div>
                                <h3 className="font-bold text-white">{item.title}</h3>
                                <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

        </div>
    </section>
);

// ─── WHAT YOU GET ───
const bonusItems = [
    {
        title: "Demo Repos",
        desc: "Full source code for every project demoed",
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
    },
    {
        title: "Cheat Sheet",
        desc: "Quick-reference guide for all 3 protocols",
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
    },
    {
        title: "Recording",
        desc: "Rewatch the full session anytime",
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
        ),
    },
    {
        title: "Community",
        desc: "Private group for Q&A and networking",
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
];

const BonusSection = () => (
    <section id="what-you-get" className="bg-[#0a0a0f] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
            <FadeIn className="text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">What You Get</h2>
            </FadeIn>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {bonusItems.map((bonus, i) => (
                    <FadeIn key={bonus.title} delay={i * 0.05}>
                        <div className="flex flex-col items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center sm:p-5">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-400">
                                {bonus.icon}
                            </div>
                            <div>
                                <span className="text-sm font-semibold text-white">{bonus.title}</span>
                                <p className="mt-0.5 text-xs text-gray-500 leading-tight">{bonus.desc}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);

// ─── FAQ ───
const FAQSection = () => {
    const [open, setOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "I'm a complete beginner. Can I still attend?",
            a: "Absolutely. We start from scratch with each protocol before jumping into demos. No prior AI experience needed — just show up curious.",
        },
        {
            q: "What should I bring?",
            a: "Just yourself! This is a presentation + demo session. If you want to follow along or take notes, bring a laptop or notebook. That's it.",
        },
        {
            q: "Is this just slides or will I see real projects?",
            a: "Both. Each protocol gets a clear presentation explaining the concepts, followed by a live project demo showing it in action. You'll also get access to all demo repos on GitHub.",
        },
        {
            q: "What if I can't attend after paying?",
            a: "All payments are non-refundable once registration is confirmed. However, you'll still receive the session recording, demo repos, cheat sheet, and community access. If the event is cancelled by us, a full refund will be issued. The live experience with Q&A is far more valuable though — try to make it!",
        },
        {
            q: "What are MCP, A2A, and A2UI?",
            a: "These are the latest protocols powering modern AI systems — Model Context Protocol (MCP), Agent-to-Agent (A2A), and Agent-to-User Interface (A2UI). They're already being used in production by top companies. This session breaks them down so you understand exactly how they work.",
        },
        {
            q: "Is ₹" + BOOTCAMP_PRICE + " the final price?",
            a: "This is early bird pricing. The actual price is ₹" + ORIGINAL_PRICE + ". We're offering this limited-time rate to fill seats fast. Once seats fill up, the price goes back to full.",
        },
    ];

    return (
        <section id="faq" className="bg-[#0c0c14] py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-6 md:px-8">
                <FadeIn className="text-center">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">Frequently Asked Questions</h2>
                </FadeIn>

                <div className="mt-10 space-y-3">
                    {faqs.map((faq, i) => (
                        <FadeIn key={faq.q} delay={i * 0.05}>
                            <div className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition hover:border-white/10">
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-6 sm:py-4"
                                >
                                    <span className="text-sm font-semibold text-white sm:text-base">{faq.q}</span>
                                    <svg
                                        className={`size-5 shrink-0 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {open === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <p className="px-4 pb-4 text-sm text-gray-400 leading-relaxed sm:px-6 sm:pb-5 sm:text-base">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── REFUND POLICY ───
const RefundPolicySection = () => (
    <section id="refund-policy" className="bg-[#0a0a0f] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
            <FadeIn>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                    <h2 className="text-xl font-bold text-white md:text-2xl">Refund &amp; Cancellation Policy</h2>
                    <div className="mt-4 space-y-3 text-sm text-gray-400 leading-relaxed">
                        <p>This is a low-cost, limited-seat live bootcamp. <span className="text-white font-medium">All payments are non-refundable</span> once the registration is confirmed.</p>
                        <p>In case of event cancellation from our side, a <span className="text-white font-medium">full refund will be issued</span> within 5–7 business days to the original payment method.</p>
                        <p>If you are unable to attend after registering, you will still receive the session recording, demo repos, cheat sheet, and community access — so nothing is lost.</p>
                        <p className="text-gray-500">For any queries, reach out to us at <a href="mailto:support@kvgai.com" className="text-violet-400 hover:underline">support@kvgai.com</a></p>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

// ─── REGISTRATION FORM ───
type FormStatus = "idle" | "loading" | "success" | "error";

const RegistrationSection = () => {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [paymentDetails, setPaymentDetails] = useState<{ paymentId: string; orderId: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const college = formData.get("college") as string;

        try {
            const loaded = await loadRazorpayScript();
            if (!loaded) throw new Error("Failed to load payment gateway. Please check your internet connection.");

            const orderRes = await fetch("/api/bootcamp/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, college }),
            });
            if (!orderRes.ok) {
                const err = await orderRes.json().catch(() => ({ error: "Failed to create order" }));
                throw new Error(err.error || "Failed to create order");
            }
            const orderData = await orderRes.json();

            const options: RazorpayOptions = {
                key: RAZORPAY_KEY_ID,
                amount: BOOTCAMP_PRICE_PAISE,
                currency: "INR",
                name: "KVGAI TECH PRIVATE LIMITED",
                description: "Next-Gen AI Protocols Bootcamp — 13 Feb, BITS Pilani",
                order_id: orderData.orderId,
                prefill: { name, email, contact: phone },
                theme: { color: "#7C3AED" },
                handler: async (response: RazorpayResponse) => {
                    try {
                        const verifyRes = await fetch("/api/bootcamp/verify-payment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                name, email, phone, college,
                            }),
                        });
                        if (!verifyRes.ok) throw new Error("Payment verification failed");
                        setPaymentDetails({ paymentId: response.razorpay_payment_id, orderId: response.razorpay_order_id });
                        setStatus("success");
                    } catch {
                        setErrorMessage("Payment received but verification failed. Contact support with Payment ID: " + response.razorpay_payment_id);
                        setStatus("error");
                    }
                },
                modal: { ondismiss: () => setStatus("idle") },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
            setStatus("error");
        }
    };

    if (status === "success" && paymentDetails) {
        return (
            <section id="register" className="bg-[#0a0a0f] py-16 md:py-24">
                <div className="mx-auto max-w-lg px-6 md:px-8">
                    <FadeIn>
                        <div className="rounded-2xl border border-emerald-500/20 bg-white/[0.02] p-8 text-center md:p-12">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }}
                                    className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-500/20">
                                    <span className="text-4xl">🎉</span>
                                </motion.div>
                                <h2 className="mt-6 text-3xl font-bold text-white">You're In!</h2>
                                <p className="mt-3 text-gray-400">You're registered for the Next-Gen AI Protocols Bootcamp — 13th Feb, Room 6109, NAB, BITS Pilani.</p>
                                <p className="mt-2 text-sm text-gray-500">A confirmation email with your receipt has been sent by Razorpay.</p>
                                <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-left">
                                    <p className="break-all text-sm text-gray-400"><span className="font-semibold text-gray-300">Payment ID:</span> <span className="font-mono">{paymentDetails.paymentId}</span></p>
                                    <p className="mt-2 break-all text-sm text-gray-400"><span className="font-semibold text-gray-300">Order ID:</span> <span className="font-mono">{paymentDetails.orderId}</span></p>
                                </div>
                                <p className="mt-6 text-sm text-gray-500">Save this for your records. See you at the bootcamp!</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        );
    }

    return (
        <section id="register" className="bg-[#0a0a0f] py-16 md:py-24">
            <div className="mx-auto max-w-lg px-6 md:px-8">
                <FadeIn className="text-center">
                    <SeatCounter />
                    <h2 className="mt-6 text-2xl font-bold text-white md:text-3xl">Secure Your Spot</h2>
                    <p className="mt-3 text-gray-400">
                        Fill in your details below. You'll be redirected to pay{" "}
                        <span className="font-bold text-white">₹{BOOTCAMP_PRICE}</span> securely via Razorpay.
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                {[
                                    { name: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
                                    { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
                                    { name: "phone", label: "WhatsApp Number", type: "tel", placeholder: "+91 98765 43210", required: true },
                                    { name: "college", label: "College / Organization", type: "text", placeholder: "e.g. BITS Pilani", required: false },
                                ].map((f) => (
                                    <div key={f.name}>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-300">
                                            {f.label} {f.required && <span className="text-red-400">*</span>}
                                        </label>
                                        <input
                                            name={f.name} type={f.type} required={f.required} placeholder={f.placeholder}
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-gray-500 outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                                        />
                                    </div>
                                ))}

                                {status === "error" && errorMessage && (
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">{errorMessage}</div>
                                )}

                                <button type="submit" disabled={status === "loading"}
                                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 text-lg font-bold text-white shadow-[0_0_24px_rgba(139,92,246,0.3)] transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] disabled:opacity-50">
                                    {status === "loading" ? (
                                        <><svg className="size-5 animate-spin" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>Processing...</>
                                    ) : (<>Pay ₹{BOOTCAMP_PRICE} &amp; Register →</>)}
                                </button>

                                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">🔒 Secure Payment</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>Instant Confirmation</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>Powered by Razorpay</span>
                                </div>
                                <p className="mt-2 text-center text-xs text-gray-500">
                                    By registering, you agree to our{" "}
                                    <Link to="/terms-conditions" className="text-violet-400 hover:underline">Terms &amp; Conditions</Link>,{" "}
                                    <Link to="/privacy-policy" className="text-violet-400 hover:underline">Privacy Policy</Link>, and{" "}
                                    <Link to="/refund-policy" className="text-violet-400 hover:underline">Refund Policy</Link>.
                                </p>
                            </form>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

// ─── FOOTER ───
const FooterBootcamp = () => (
    <footer className="border-t border-white/10 bg-[#0c0c14] pt-10 pb-32 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
            {/* Logo */}
            <div className="flex justify-center">
                <KVGAILogo className="h-7 brightness-0 invert opacity-80" />
            </div>

            {/* Nav links — grid on mobile, inline on desktop */}
            <nav className="mt-6 grid grid-cols-2 gap-3 text-center text-sm text-gray-400 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-5 sm:gap-y-2">
                <a href="#register" className="transition hover:text-white">Register</a>
                <a href="#session-breakdown" className="transition hover:text-white">Session Breakdown</a>
                <a href="#what-you-get" className="transition hover:text-white">What You Get</a>
                <a href="#faq" className="transition hover:text-white">FAQ</a>
                <Link to="/refund-policy" className="transition hover:text-white">Refund Policy</Link>
                <Link to="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
                <Link to="/terms-conditions" className="transition hover:text-white">Terms & Conditions</Link>
                <Link to="/shipping-delivery" className="transition hover:text-white">Shipping & Delivery</Link>
                <Link to="/contact" className="transition hover:text-white">Contact Us</Link>
            </nav>

            {/* Divider */}
            <div className="mx-auto mt-6 h-px w-full max-w-md bg-white/5" />

            {/* Business info */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-300">© 2026 KVGAI TECH PRIVATE LIMITED</p>
                <p className="mt-1.5 text-xs text-gray-400">B-87, R S M Nagar, Hal, Lucknow, Uttar Pradesh 226016</p>
                <p className="mt-1 text-xs text-gray-400">GSTIN: 09AALCK3280A1ZN</p>
                <p className="mt-1 text-xs text-gray-400">
                    <a href="mailto:support@kvgai.com" className="text-violet-400 hover:underline transition">support@kvgai.com</a>
                    {" "} | {" "}
                    <a href="tel:+917388889308" className="text-violet-400 hover:underline transition">+91 7388889308</a>
                </p>
            </div>
        </div>
    </footer>
);

// ─── PAGE ───
const BootcampPage = () => (
    <div className="bg-[#0a0a0f]">
        <HeroSection />
        <WhatYoullBuildSection />
        <BonusSection />
        <RegistrationSection />
        <FAQSection />
        <RefundPolicySection />
        <FooterBootcamp />
        <StickyCTA />
    </div>
);

export default BootcampPage;
