import { File05, Mail01, Users01, Shield01, AlertTriangle, Settings01, CheckCircle, CreditCard02, Scale01, Building07 } from "@untitledui/icons";
import { Link } from "react-router-dom";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01, NewsletterSimpleLeft } from "./landing-page-19";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const TermsConditionsPage = () => {
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
                        <FeaturedIcon icon={File05} color="brand" theme="light" size="xl" />
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:mt-6 md:text-display-lg">
                            Terms & Conditions
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            Please read these terms carefully before using our website and services
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
                                These Terms & Conditions ("Terms") govern your use of the website <span className="font-semibold text-primary">kvgai.com</span> and all related services, including bootcamps, digital products, and AI consulting, operated by <span className="font-semibold text-primary">KVGAI TECH PRIVATE LIMITED</span> ("KVGAI Tech", "we", "our", or "us"). By accessing our website or purchasing any service, you agree to be bound by these Terms.
                            </p>
                            <p className="mt-3 text-sm text-quaternary">
                                Registered Office: 2nd Floor, Scalex Loop, Bangalore, India | Email: support@kvgai.com | Phone: +91 7388889308
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl space-y-12 md:space-y-16">

                        {/* Eligibility */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Users01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Eligibility
                                </h2>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                                <div className="flex items-start gap-3 rounded-xl bg-secondary p-4 ring-1 ring-secondary ring-inset">
                                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                    <span className="text-sm text-tertiary md:text-base">Users must be at least 13 years old to use our services</span>
                                </div>
                                <div className="flex items-start gap-3 rounded-xl bg-secondary p-4 ring-1 ring-secondary ring-inset">
                                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                    <span className="text-sm text-tertiary md:text-base">Must provide accurate and complete information during registration</span>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Building07} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Services We Offer
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <p className="mb-4 text-sm text-tertiary md:text-base">
                                    KVGAI TECH PRIVATE LIMITED provides the following services through kvgai.com:
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "AI Bootcamps & Workshops — live and recorded training sessions on AI protocols and technologies",
                                        "Digital Products — demo repositories, cheat sheets, session recordings, and educational materials",
                                        "AI Consulting — enterprise-grade AI solutions, agent orchestration, and deployment services",
                                        "Community Access — private groups for networking, Q&A, and continued learning"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" />
                                            <span className="text-sm text-tertiary md:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Payment Terms */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={CreditCard02} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Payment Terms
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-4 text-sm text-tertiary md:text-base">
                                    <p>
                                        All payments are processed securely through <span className="font-semibold text-primary">Razorpay</span>, a PCI-DSS compliant payment gateway. We accept UPI, credit cards, debit cards, net banking, and wallets.
                                    </p>
                                    <p>
                                        All prices listed on kvgai.com are in <span className="font-semibold text-primary">Indian Rupees (INR)</span> and are inclusive of all applicable taxes unless stated otherwise.
                                    </p>
                                    <p>
                                        Upon successful payment, you will receive a confirmation email from Razorpay with your payment receipt, including the Payment ID and Order ID. Please retain this for your records.
                                    </p>
                                    <p>
                                        KVGAI Tech reserves the right to modify pricing at any time. Any price changes will not affect orders already confirmed and paid for.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Refund & Cancellation */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Shield01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Refund & Cancellation
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-3 text-sm text-tertiary md:text-base">
                                    <p>
                                        Our complete Refund & Cancellation Policy is available at{" "}
                                        <Link to="/refund-policy" className="font-semibold text-brand-secondary hover:underline">
                                            kvgai.com/refund-policy
                                        </Link>.
                                    </p>
                                    <p>
                                        In summary: All bootcamp payments are non-refundable once registration is confirmed, except in the case of event cancellation by KVGAI Tech, in which case a full refund will be issued within 5–7 business days.
                                    </p>
                                    <p>
                                        If you are unable to attend a registered event, you will still receive all digital deliverables (session recording, demo repos, cheat sheet, and community access).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Shield01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Intellectual Property
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "All content on kvgai.com — including text, images, logos, code, and digital materials — is the property of KVGAI TECH PRIVATE LIMITED",
                                    "Bootcamp recordings, demo repos, and cheat sheets are provided for personal, non-commercial use only",
                                    "You may not redistribute, resell, or publicly share any purchased or delivered digital content without prior written consent"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" />
                                        <span className="text-sm text-tertiary md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prohibited Activities */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={AlertTriangle} color="error" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Prohibited Activities
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-error-secondary/30 p-6 ring-1 ring-error-secondary/50 ring-inset md:p-8">
                                <p className="mb-4 text-sm font-semibold text-error-primary md:text-base">
                                    You agree not to:
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Use our website or services for any unlawful purpose",
                                        "Attempt to gain unauthorized access to our systems or infrastructure",
                                        "Redistribute, resell, or pirate any paid content (recordings, repos, materials)",
                                        "Misrepresent your identity or provide false information during registration"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-error-primary">
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M1 1L9 9M1 9L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-error-primary md:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Dispute Resolution */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Scale01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Dispute Resolution
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-3 text-sm text-tertiary md:text-base">
                                    <p>
                                        In the event of any dispute arising from payments, services, or the use of kvgai.com, we encourage you to first contact us at <a href="mailto:support@kvgai.com" className="font-semibold text-brand-secondary hover:underline">support@kvgai.com</a> for amicable resolution.
                                    </p>
                                    <p>
                                        If a payment dispute or chargeback is initiated through your bank or payment provider, we will cooperate fully and provide transaction records. Chargebacks filed without first contacting us may result in suspension of access to purchased content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Liability & Governing Law */}
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <div className="mb-3 flex items-center gap-3">
                                    <FeaturedIcon icon={Settings01} color="brand" theme="modern" size="sm" />
                                    <h3 className="text-lg font-semibold text-primary">Changes to Terms</h3>
                                </div>
                                <p className="text-sm text-tertiary">
                                    We may update these Terms from time to time. Changes will be posted on this page with the updated date. Continued use of our website or services after any changes constitutes acceptance of the revised Terms.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <div className="mb-3 flex items-center gap-3">
                                    <FeaturedIcon icon={Shield01} color="brand" theme="modern" size="sm" />
                                    <h3 className="text-lg font-semibold text-primary">Limitation of Liability</h3>
                                </div>
                                <p className="text-sm text-tertiary">
                                    KVGAI TECH PRIVATE LIMITED shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website, services, or digital products. Our total liability is limited to the amount paid by you for the specific service in question.
                                </p>
                            </div>
                        </div>

                        {/* Governing Law */}
                        <div>
                            <div className="rounded-2xl bg-brand-secondary/10 p-6 ring-1 ring-brand-secondary/20 ring-inset md:p-8">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Governing Law</h3>
                                <p className="text-sm text-tertiary md:text-base">
                                    These Terms shall be governed by and construed in accordance with the laws of <span className="font-semibold text-primary">India</span>. Any disputes shall be subject to the exclusive jurisdiction of the courts in <span className="font-semibold text-primary">Bangalore, Karnataka, India</span>.
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <FeaturedIcon icon={Mail01} color="brand" theme="modern" size="lg" />
                                <h2 className="mt-4 text-xl font-semibold text-primary md:text-display-xs">
                                    Questions About Terms?
                                </h2>
                                <p className="mt-2 max-w-md text-sm text-tertiary md:text-base">
                                    For any questions regarding these Terms & Conditions, contact us:
                                </p>
                                <a
                                    href="mailto:support@kvgai.com"
                                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-secondary_hover md:text-base"
                                >
                                    <Mail01 className="size-5" />
                                    support@kvgai.com
                                </a>
                                <p className="mt-4 text-xs text-quaternary">
                                    KVGAI TECH PRIVATE LIMITED — 2nd Floor, Scalex Loop, Bangalore, India
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

export default TermsConditionsPage;
