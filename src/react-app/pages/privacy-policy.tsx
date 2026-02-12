import { Lock01, Mail01, Globe01, Shield01, Database01, Users01, CheckCircle, CreditCard02, Building07, Phone } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01, NewsletterSimpleLeft } from "./landing-page-19";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const PrivacyPolicyPage = () => {
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
                        <FeaturedIcon icon={Lock01} color="brand" theme="light" size="xl" />
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:mt-6 md:text-display-lg">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            Your privacy matters to us. Learn how we collect, use, and protect your data.
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
                                This Privacy Policy describes how <span className="font-semibold text-primary">KVGAI TECH PRIVATE LIMITED</span> ("KVGAI Tech", "we", "our", or "us") collects, uses, and protects the personal information of visitors and customers of our website <span className="font-semibold text-primary">kvgai.com</span> and related services, including bootcamps, AI consulting, and digital products.
                            </p>
                            <div className="mt-4 grid gap-2 text-sm text-tertiary sm:grid-cols-2">
                                <div className="flex items-start gap-2">
                                    <Building07 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                                    <span>Registered Office: 2nd Floor, Scalex Loop, Bangalore, India</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Mail01 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                                    <span>Contact: support@kvgai.com</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Globe01 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                                    <span>Website: kvgai.com</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Phone className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                                    <span>Phone: +91 7388889308</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl space-y-12 md:space-y-16">

                        {/* Information We Collect */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Database01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Information We Collect
                                </h2>
                            </div>
                            <p className="mb-6 text-sm text-tertiary md:text-base">
                                We collect the following information when you use our website, register for bootcamps, or engage with our services:
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                                {[
                                    "Full name (for registration and communication)",
                                    "Email address (for account creation and notifications)",
                                    "Phone / WhatsApp number (for event updates)",
                                    "College or organization name (for bootcamp registration)",
                                    "Payment information (processed securely via Razorpay)",
                                    "Browser and device information (for website analytics)"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 rounded-xl bg-secondary p-4 ring-1 ring-secondary ring-inset">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                        <span className="text-sm text-tertiary md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 rounded-xl bg-success-secondary/50 p-4 ring-1 ring-success-secondary ring-inset">
                                <p className="flex items-center gap-2 text-sm font-medium text-success-primary md:text-base">
                                    <Shield01 className="size-5" />
                                    We do not collect location data, and we do not show advertisements on our website
                                </p>
                            </div>
                        </div>

                        {/* How We Use Your Information */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Shield01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    How We Use Your Information
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Process bootcamp registrations and event confirmations",
                                    "Send payment receipts and transaction confirmations via Razorpay",
                                    "Deliver digital goods such as session recordings, demo repos, and cheat sheets",
                                    "Communicate event updates, schedule changes, or support responses",
                                    "Improve website performance, user experience, and service quality",
                                    "Comply with applicable legal and regulatory requirements"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" />
                                        <span className="text-sm text-tertiary md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Payment Data */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={CreditCard02} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Payment Information
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-3 text-sm text-tertiary md:text-base">
                                    <p>
                                        All payments on kvgai.com are processed securely through <span className="font-semibold text-primary">Razorpay</span>, a PCI-DSS compliant payment gateway. We do not store your credit card, debit card, or bank account details on our servers.
                                    </p>
                                    <p>
                                        Razorpay may collect and process your payment information in accordance with their own privacy policy. We only receive transaction confirmations (payment ID, order ID, and payment status) for record-keeping and order fulfilment.
                                    </p>
                                    <p>
                                        All amounts are charged in <span className="font-semibold text-primary">Indian Rupees (INR)</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Data Sharing */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Users01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Data Sharing
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <p className="mb-4 text-sm text-tertiary md:text-base">
                                    <span className="font-semibold text-primary">We do not sell or share your personal data</span> with third parties for marketing purposes. We may share your information only in the following circumstances:
                                </p>
                                <div className="space-y-2">
                                    {[
                                        "With Razorpay, for processing payments securely",
                                        "With email service providers, for sending transactional emails (receipts, confirmations)",
                                        "When required by law, regulation, or legal process",
                                        "To protect the safety and security of our users and services"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-secondary" />
                                            <span className="text-sm text-tertiary md:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Data Security & Retention */}
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Data Security</h3>
                                <p className="text-sm text-tertiary">
                                    We implement industry-standard security measures including HTTPS encryption, secure server infrastructure, and access controls to protect your personal information from unauthorized access, alteration, or disclosure.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Data Retention</h3>
                                <p className="text-sm text-tertiary">
                                    We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. You may request deletion of your data at any time by contacting us at support@kvgai.com.
                                </p>
                            </div>
                        </div>

                        {/* User Rights & Children's Privacy */}
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Your Rights</h3>
                                <ul className="space-y-2 text-sm text-tertiary">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-secondary" />
                                        Access the personal information we hold about you
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-secondary" />
                                        Request correction of inaccurate data
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-secondary" />
                                        Request deletion of your data
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-secondary" />
                                        Withdraw consent for data processing
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Children's Privacy</h3>
                                <p className="text-sm text-tertiary">
                                    Our services are intended for users aged <span className="font-semibold text-primary">13 years and above</span>. We do not knowingly collect personal data from children under 13. If we become aware that we have collected such data, we will take steps to delete it promptly.
                                </p>
                            </div>
                        </div>

                        {/* Cookies */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Globe01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Cookies & Analytics
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <p className="text-sm text-tertiary md:text-base">
                                    Our website may use cookies and similar technologies to improve your browsing experience and gather analytics data. These help us understand how visitors use our website so we can improve it. You can control cookie settings through your browser preferences.
                                </p>
                            </div>
                        </div>

                        {/* Changes to Policy */}
                        <div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Changes to This Policy</h3>
                                <p className="text-sm text-tertiary md:text-base">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <FeaturedIcon icon={Mail01} color="brand" theme="modern" size="lg" />
                                <h2 className="mt-4 text-xl font-semibold text-primary md:text-display-xs">
                                    Have Questions?
                                </h2>
                                <p className="mt-2 max-w-md text-sm text-tertiary md:text-base">
                                    If you have any questions about this Privacy Policy, contact us:
                                </p>
                                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                                    <a
                                        href="mailto:support@kvgai.com"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-secondary_hover md:text-base"
                                    >
                                        <Mail01 className="size-5" />
                                        support@kvgai.com
                                    </a>
                                    <a
                                        href="https://kvgai.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary ring-1 ring-secondary transition-colors hover:bg-secondary ring-inset md:text-base"
                                    >
                                        <Globe01 className="size-5" />
                                        Visit Website
                                    </a>
                                </div>
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

export default PrivacyPolicyPage;
