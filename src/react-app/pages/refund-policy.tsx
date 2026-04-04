import { RefreshCcw01, Mail01, CheckCircle, AlertTriangle, Clock } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01 } from "./landing-page-19";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const RefundPolicyPage = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
                <img
                    alt="Grid background pattern"
                    aria-hidden="true"
                    loading="lazy"
                    src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
                    className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
                />
                <div className="relative z-10 mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <FeaturedIcon icon={RefreshCcw01} color="brand" theme="light" size="xl" />
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:mt-6 md:text-display-lg">
                            Refund & Cancellation Policy
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            Our refund and cancellation terms for bootcamps, digital products, and services
                        </p>
                        <p className="mt-6 text-sm text-quaternary">
                            Last updated: February 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl">
                        <div className="rounded-2xl bg-brand-secondary/10 p-6 ring-1 ring-brand-secondary/20 ring-inset md:p-8">
                            <p className="text-base text-tertiary md:text-lg">
                                This Refund & Cancellation Policy applies to all purchases made on <span className="font-semibold text-primary">kvgai.com</span>, operated by <span className="font-semibold text-primary">KVGAI TECH PRIVATE LIMITED</span>. All payments are processed securely via <span className="font-semibold text-primary">Razorpay</span>. Please read this policy carefully before making a purchase.
                            </p>
                            <p className="mt-3 text-sm text-quaternary">
                                Registered Office: B-87, R S M Nagar, Hal, Lucknow, UP 226016 | GSTIN: 09AALCK3280A1ZN | Email: support@kvgai.com | Phone: +91 7388889308
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl space-y-12 md:space-y-16">

                        {/* Bootcamp Refund Policy */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={RefreshCcw01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Bootcamp & Workshop Registrations
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-4 text-sm text-tertiary md:text-base">
                                    <p>
                                        Our bootcamps are <span className="font-semibold text-primary">low-cost, limited-seat live events</span>. Due to the nature of seat-limited events and the digital deliverables included:
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warning-primary" />
                                            <span><span className="font-semibold text-primary">All payments are non-refundable</span> once the registration is confirmed and payment is successfully processed.</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                            <span>If the <span className="font-semibold text-primary">event is cancelled by KVGAI Tech</span>, a full refund will be issued within <span className="font-semibold text-primary">5–7 business days</span> to the original payment method.</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                            <span>If you are <span className="font-semibold text-primary">unable to attend</span> after registering, you will still receive the session recording, demo repos, cheat sheet, and community access — so nothing is lost.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Digital Products */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={CheckCircle} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Digital Products & Materials
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Digital products (recordings, repositories, cheat sheets) are delivered electronically and are non-refundable once access has been granted",
                                    "If you experience technical issues accessing purchased digital content, contact us within 7 days of purchase and we will resolve the issue or provide a replacement",
                                    "If we are unable to deliver the promised digital content due to a fault on our end, a full refund will be issued"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" />
                                        <span className="text-sm text-tertiary md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Refund Process */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Clock} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Refund Process & Timeline
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-4 text-sm text-tertiary md:text-base">
                                    <p>
                                        Where a refund is applicable (e.g., event cancellation by us, or failure to deliver digital content):
                                    </p>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {[
                                            { label: "Refund Method", value: "Refunded to the original payment method used during purchase" },
                                            { label: "Processing Time", value: "5–7 business days from the date the refund is approved" },
                                            { label: "Refund Amount", value: "Full amount of the original transaction" },
                                            { label: "Notification", value: "You will receive an email confirmation once the refund is processed" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
                                                <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">{item.label}</p>
                                                <p className="mt-1 text-sm text-tertiary">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cancellation by Customer */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={AlertTriangle} color="warning" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Cancellation by Customer
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-warning-secondary/30 p-6 ring-1 ring-warning-secondary/50 ring-inset md:p-8">
                                <div className="space-y-3 text-sm text-tertiary md:text-base">
                                    <p>
                                        Once a payment is successfully processed and registration is confirmed, <span className="font-semibold text-primary">cancellation by the customer is not eligible for a refund</span>.
                                    </p>
                                    <p>
                                        However, if you cannot attend a registered bootcamp or event, you will still receive all digital deliverables associated with the event, including:
                                    </p>
                                    <div className="ml-2 space-y-2">
                                        {[
                                            "Full session recording",
                                            "Demo repositories (GitHub access)",
                                            "Protocol cheat sheets",
                                            "Private community group access"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-warning-primary" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <FeaturedIcon icon={Mail01} color="brand" theme="modern" size="lg" />
                                <h2 className="mt-4 text-xl font-semibold text-primary md:text-display-xs">
                                    Need Help With a Refund?
                                </h2>
                                <p className="mt-2 max-w-md text-sm text-tertiary md:text-base">
                                    For any refund-related queries or disputes, please contact us. We aim to respond within 24–48 hours.
                                </p>
                                <a
                                    href="mailto:support@kvgai.com"
                                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-secondary_hover md:text-base"
                                >
                                    <Mail01 className="size-5" />
                                    support@kvgai.com
                                </a>
                                <p className="mt-2 text-sm text-tertiary">Phone: +91 7388889308 (Mon–Fri, 9am–6pm IST)</p>
                                <p className="mt-4 text-xs text-quaternary">
                                    KVGAI TECH PRIVATE LIMITED — B-87, R S M Nagar, Hal, Lucknow, UP 226016 | GSTIN: 09AALCK3280A1ZN
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <NewsletterSimpleLeft />
            <FooterLarge01 />
        </div>
    );
};

export default RefundPolicyPage;
