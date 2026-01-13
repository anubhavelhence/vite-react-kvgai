import { File05, Mail01, Users01, Shield01, AlertTriangle, Settings01, CheckCircle, ShoppingCart01, Package } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01, NewsletterSimpleLeft } from "./landing-page-19";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const TermsConditionsSmartMedPage = () => {
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
                            Terms & Conditions – SmartMed
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            Please read these terms carefully before using SmartMed
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
                                These Terms & Conditions govern the use of the SmartMed mobile application, operated by <span className="font-semibold text-primary">KVGAI TECH PRIVATE LIMITED</span>. By using SmartMed, you agree to these terms.
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
                                    <span className="text-sm text-tertiary md:text-base">Users must be at least 13 years old</span>
                                </div>
                                <div className="flex items-start gap-3 rounded-xl bg-secondary p-4 ring-1 ring-secondary ring-inset">
                                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                    <span className="text-sm text-tertiary md:text-base">Users must provide accurate information during signup</span>
                                </div>
                            </div>
                        </div>

                        {/* Accounts */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Shield01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Accounts
                                </h2>
                            </div>
                            <p className="mb-4 text-sm text-tertiary md:text-base">
                                SmartMed requires account creation using email and phone number. You are responsible for:
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Keeping your login credentials secure",
                                    "All activity performed through your account"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" />
                                        <span className="text-sm text-tertiary md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* App Purpose */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Package} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    App Purpose
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <p className="mb-4 text-sm text-tertiary md:text-base">
                                    SmartMed is designed to help pharmacies and medical stores track:
                                </p>
                                <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                                    {[
                                        "Medicine inventory",
                                        "Stock levels",
                                        "Purchase and selling prices",
                                        "Sales totals"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                            <span className="text-sm text-tertiary md:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 rounded-xl bg-warning-secondary/50 p-4 ring-1 ring-warning-secondary ring-inset">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warning-primary" />
                                        <span className="text-sm font-medium text-warning-primary">
                                            SmartMed does not process payments. All financial values are entered by the user for record-keeping only.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User Data */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={ShoppingCart01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    User Data
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                        <span className="text-sm text-tertiary md:text-base">You are responsible for the accuracy of the inventory and price data you enter into the app</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warning-primary" />
                                        <span className="text-sm text-tertiary md:text-base">We are not responsible for losses caused by incorrect or outdated data</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Acceptable Use - Prohibited Activities */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={AlertTriangle} color="error" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Acceptable Use
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-error-secondary/30 p-6 ring-1 ring-error-secondary/50 ring-inset md:p-8">
                                <p className="mb-4 text-sm font-semibold text-error-primary md:text-base">
                                    You agree not to:
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Use the app for illegal purposes",
                                        "Upload false, harmful, or misleading data",
                                        "Attempt to hack, disrupt, or misuse the system"
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

                        {/* App Availability & Liability */}
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <div className="mb-3 flex items-center gap-3">
                                    <FeaturedIcon icon={Settings01} color="brand" theme="modern" size="sm" />
                                    <h3 className="text-lg font-semibold text-primary">App Availability</h3>
                                </div>
                                <p className="text-sm text-tertiary">
                                    We may update, modify, or discontinue parts of SmartMed to improve performance or comply with legal requirements.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <div className="mb-3 flex items-center gap-3">
                                    <FeaturedIcon icon={Shield01} color="brand" theme="modern" size="sm" />
                                    <h3 className="text-lg font-semibold text-primary">Limitation of Liability</h3>
                                </div>
                                <p className="text-sm text-tertiary">
                                    KVGAI TECH PRIVATE LIMITED is not responsible for business losses, incorrect stock values, or financial decisions made using the app.
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <FeaturedIcon icon={Mail01} color="brand" theme="modern" size="lg" />
                                <h2 className="mt-4 text-xl font-semibold text-primary md:text-display-xs">
                                    Contact
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

export default TermsConditionsSmartMedPage;
