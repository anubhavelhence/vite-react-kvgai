import { Lock01, Mail01, Globe01, Shield01, Database01, Users01, CheckCircle } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01, NewsletterSimpleLeft } from "./landing-page-19";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const PrivacyPolicy1Page = () => {
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
                            Last updated: March 2026
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
                                This app ("we", "our", or "us") is operated by <span className="font-semibold text-primary">KVGAI TECH PRIVATE LIMITED</span>. We respect your privacy and are committed to protecting the personal information of our users.
                            </p>
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
                                We collect the following information to provide app functionality:
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                                {[
                                    "Email address (for account creation)",
                                    "Name or username",
                                    "Profile photo (if provided)",
                                    "Posts and images shared by users"
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
                                    We do not collect location data and do not show advertisements
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
                                    "Create and manage user accounts",
                                    "Enable posting, liking, and social interaction features",
                                    "Improve app performance and user experience",
                                    "Maintain app security and prevent misuse"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" />
                                        <span className="text-sm text-tertiary md:text-base">{item}</span>
                                    </div>
                                ))}
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
                                    <span className="font-semibold text-primary">We do not sell or share user data</span> with third parties except when required by law or to protect user safety.
                                </p>
                            </div>
                        </div>

                        {/* User Rights & Children's Privacy */}
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <h3 className="mb-3 text-lg font-semibold text-primary">User Rights</h3>
                                <ul className="space-y-2 text-sm text-tertiary">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-secondary" />
                                        Access and update account information
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-secondary" />
                                        Delete account and data at any time
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Children's Privacy</h3>
                                <p className="text-sm text-tertiary">
                                    This app is intended for users aged <span className="font-semibold text-primary">13 years and above</span>. We do not knowingly collect data from children under 13.
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

export default PrivacyPolicy1Page;
