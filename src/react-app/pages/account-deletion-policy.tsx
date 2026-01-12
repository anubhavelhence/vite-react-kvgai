import { Trash01, Mail01, Settings02, LinkExternal01, Phone01, Clock, CheckCircle, AlertCircle } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01, NewsletterSimpleLeft } from "./landing-page-19";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const AccountDeletionPolicyPage = () => {
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
                        <FeaturedIcon icon={Trash01} color="error" theme="light" size="xl" />
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:mt-6 md:text-display-lg">
                            Account Deletion Policy
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            You have full control over your account and data
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
                        <div className="rounded-2xl bg-brand-secondary/10 p-6 text-center ring-1 ring-brand-secondary/20 ring-inset md:p-8">
                            <p className="text-base text-tertiary md:text-lg">
                                LandMarks allows users to <span className="font-semibold text-primary">delete their account and associated data at any time</span>. We respect your right to control your personal information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-4xl space-y-12 md:space-y-16">

                        {/* How to Delete Your Account */}
                        <div>
                            <h2 className="mb-8 text-center text-display-xs font-semibold text-primary md:text-display-sm">
                                How to Delete Your Account
                            </h2>
                            <p className="mb-8 mx-auto max-w-2xl text-center text-sm text-tertiary md:mb-12 md:text-base">
                                Choose the method that works best for you. Both options permanently delete your account and all associated data.
                            </p>

                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                {/* Option 1: In-App Deletion */}
                                <div className="relative rounded-2xl bg-gradient-to-br from-brand-secondary/10 to-brand-primary/5 p-6 ring-1 ring-brand-secondary/20 ring-inset md:p-8">
                                    <div className="absolute right-4 top-4 md:right-6 md:top-6">
                                        <span className="rounded-full bg-success-secondary px-3 py-1 text-xs font-semibold text-success-primary">
                                            Recommended
                                        </span>
                                    </div>
                                    <FeaturedIcon icon={Phone01} color="brand" theme="light" size="lg" />
                                    <h3 className="mt-4 text-lg font-semibold text-primary md:mt-6 md:text-xl">
                                        Option 1: Inside the App
                                    </h3>
                                    <p className="mt-2 text-sm text-tertiary md:mt-3 md:text-base">
                                        Delete your account directly from the LandMarks app
                                    </p>

                                    <div className="mt-6 space-y-3 md:space-y-4">
                                        <p className="text-sm font-semibold text-primary">Follow these steps:</p>
                                        {[
                                            { step: 1, text: "Open the LandMarks app" },
                                            { step: 2, text: "Go to Settings" },
                                            { step: 3, text: "Select Delete Account" },
                                            { step: 4, text: "Confirm the deletion" }
                                        ].map((item) => (
                                            <div key={item.step} className="flex items-start gap-3">
                                                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-xs font-semibold text-white md:size-7 md:text-sm">
                                                    {item.step}
                                                </div>
                                                <span className="pt-0.5 text-sm text-tertiary">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 rounded-xl bg-success-secondary/50 p-3 md:p-4">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="size-5 text-success-primary" />
                                            <span className="text-sm font-medium text-success-primary">
                                                Instant deletion
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Option 2: Via Form/Email */}
                                <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                    <FeaturedIcon icon={Mail01} color="brand" theme="modern" size="lg" />
                                    <h3 className="mt-4 text-lg font-semibold text-primary md:mt-6 md:text-xl">
                                        Option 2: Request via Form or Email
                                    </h3>
                                    <p className="mt-2 text-sm text-tertiary md:mt-3 md:text-base">
                                        Can't access the app? Submit a deletion request
                                    </p>

                                    <div className="mt-6 space-y-4">
                                        <div className="rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
                                            <p className="mb-3 text-sm font-semibold text-primary">Method A: Online Form</p>
                                            <a
                                                href="https://forms.gle/DkcsEBrTpWcuLxLz6"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary transition-colors hover:text-brand-secondary_hover"
                                            >
                                                <span>Submit Deletion Request Form</span>
                                                <LinkExternal01 className="size-4" />
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 border-t border-secondary"></div>
                                            <span className="text-xs font-medium text-quaternary">OR</span>
                                            <div className="flex-1 border-t border-secondary"></div>
                                        </div>

                                        <div className="rounded-xl bg-primary p-4 ring-1 ring-secondary ring-inset">
                                            <p className="mb-3 text-sm font-semibold text-primary">Method B: Email</p>
                                            <a
                                                href="mailto:support@kvgai.com"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary transition-colors hover:text-brand-secondary_hover"
                                            >
                                                <Mail01 className="size-4" />
                                                support@kvgai.com
                                            </a>
                                            <p className="mt-2 text-xs text-tertiary">
                                                Use your registered email address
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-xl bg-warning-secondary/50 p-3 md:p-4">
                                        <div className="flex items-start gap-2">
                                            <Clock className="mt-0.5 size-5 shrink-0 text-warning-primary" />
                                            <span className="text-sm font-medium text-warning-primary">
                                                Processing may take 1-2 business days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline & What Gets Deleted */}
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
                            {/* Deletion Timeline */}
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <FeaturedIcon icon={Clock} color="brand" theme="modern" size="md" />
                                <h3 className="mt-4 text-lg font-semibold text-primary">
                                    Deletion Timeline
                                </h3>
                                <div className="mt-4 space-y-3">
                                    {[
                                        "Account deletion is immediate once processed",
                                        "All associated data is permanently removed"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                            <span className="text-sm text-tertiary">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* What Data Is Deleted */}
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <FeaturedIcon icon={Trash01} color="error" theme="modern" size="md" />
                                <h3 className="mt-4 text-lg font-semibold text-primary">
                                    What Data Is Deleted
                                </h3>
                                <div className="mt-4 space-y-2">
                                    {[
                                        "User account information",
                                        "Profile details",
                                        "Posts and uploaded images",
                                        "All data linked to the account"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-error-primary" />
                                            <span className="text-sm text-tertiary">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Important Notice */}
                        <div className="rounded-2xl bg-warning-secondary/30 p-6 ring-1 ring-warning-secondary/50 ring-inset md:p-8">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                                <AlertCircle className="size-6 shrink-0 text-warning-primary" />
                                <div>
                                    <h3 className="text-base font-semibold text-warning-primary md:text-lg">
                                        Important: This Action Cannot Be Undone
                                    </h3>
                                    <p className="mt-2 text-sm text-warning-primary">
                                        Once your account is deleted, all your data will be permanently removed from our servers. This action is irreversible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <FeaturedIcon icon={Mail01} color="brand" theme="modern" size="lg" />
                                <h2 className="mt-4 text-xl font-semibold text-primary md:text-display-xs">
                                    Need Help?
                                </h2>
                                <p className="mt-2 max-w-md text-sm text-tertiary md:text-base">
                                    If you face any issues related to account deletion or have questions, we're here to help
                                </p>
                                <a
                                    href="mailto:support@kvgai.com"
                                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-secondary_hover md:text-base"
                                >
                                    <Mail01 className="size-5" />
                                    Contact Support
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

export default AccountDeletionPolicyPage;
