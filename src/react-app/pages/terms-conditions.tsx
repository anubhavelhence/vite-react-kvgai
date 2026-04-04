import { File05, Mail01, Users01, Shield01, CheckCircle, Globe01, MessageSquare01, CreditCard02 } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01 } from "./landing-page-19";
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
                            Please read these terms carefully before using the LandMarks application
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
                                These Terms & Conditions govern your use of the <span className="font-semibold text-primary">LandMarks</span> mobile application operated by <span className="font-semibold text-primary">KVGAI TECH PRIVATE LIMITED</span>. By downloading or using the app, you agree to comply with these terms.
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
                                    <span className="text-sm text-tertiary md:text-base">Users must be at least 13 years old to use the application</span>
                                </div>
                                <div className="flex items-start gap-3 rounded-xl bg-secondary p-4 ring-1 ring-secondary ring-inset">
                                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                    <span className="text-sm text-tertiary md:text-base">Must provide accurate information during account registration</span>
                                </div>
                            </div>
                        </div>

                        {/* Account & Login */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Shield01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Account & Login
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-3 text-sm text-tertiary md:text-base">
                                    <p>
                                        Users may create an account using email and password. Users are responsible for maintaining the confidentiality of their login credentials and are responsible for all activity under their account.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* User Content */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={MessageSquare01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    User Content
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-3 text-sm text-tertiary md:text-base">
                                    <p>
                                        Users may post images, discussions, and other content within the app. Users retain ownership of their content but grant LandMarks the right to display the content within the platform.
                                    </p>
                                    <p>
                                        Content that is illegal, harmful, misleading, offensive, or violates rights may be removed at our discretion.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Subscriptions */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={CreditCard02} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Subscriptions
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-3 text-sm text-tertiary md:text-base">
                                    <p>
                                        LandMarks may offer auto-renewable subscription plans that provide access to premium features within the app.
                                    </p>
                                    <p className="font-semibold text-primary">
                                        Subscription Details:
                                    </p>
                                </div>
                                <div className="mt-4 space-y-3">
                                    {[
                                        "Subscription Title: LandMarks Premium",
                                        "Subscription Length: Monthly / Yearly",
                                        "Payment will be charged to your Apple ID account at confirmation of purchase",
                                        "Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period",
                                        "Your account will be charged for renewal within 24 hours prior to the end of the current subscription period",
                                        "You can manage or cancel subscriptions in your Apple Account Settings after purchase"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" />
                                            <span className="text-sm text-tertiary md:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Privacy Policy */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Shield01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Privacy Policy
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <p className="text-sm text-tertiary md:text-base">
                                    Please review our Privacy Policy for details on how we collect and use user data:{" "}
                                    <a href="/privacy-policy" className="font-semibold text-brand-secondary hover:underline">
                                        kvgai.com/privacy-policy
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Standard Apple EULA */}
                        <div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Standard Apple Terms of Use (EULA)</h3>
                                <p className="text-sm text-tertiary md:text-base">
                                    <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-secondary hover:underline">
                                        https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Limitation of Liability & Changes */}
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Limitation of Liability</h3>
                                <p className="text-sm text-tertiary">
                                    LandMarks and KVGAI TECH PRIVATE LIMITED shall not be liable for any damages arising from the use or inability to use the application.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Changes to Terms</h3>
                                <p className="text-sm text-tertiary">
                                    We may update these Terms & Conditions periodically. Continued use of the app constitutes acceptance of the updated terms.
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
                                    If you have questions regarding these terms, contact:
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
                                        kvgai.com
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <FooterLarge01 />
        </div>
    );
};

export default TermsConditionsPage;
