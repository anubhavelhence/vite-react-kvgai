import { Trash01, Mail01, LinkExternal01, Clock, CheckCircle, AlertCircle } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01, NewsletterSimpleLeft } from "./landing-page-19";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const AccountDeletionPolicySmartMedPage = () => {
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
                            Account Deletion Policy – SmartMed
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
                                SmartMed allows users to <span className="font-semibold text-primary">permanently delete their account and all inventory data</span>.
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
                                If you want to delete your SmartMed account, you can request it using this form:
                            </p>

                            <div className="mx-auto max-w-2xl">
                                {/* Deletion Request Form */}
                                <div className="rounded-2xl bg-gradient-to-br from-brand-secondary/10 to-brand-primary/5 p-6 ring-1 ring-brand-secondary/20 ring-inset md:p-8">
                                    <FeaturedIcon icon={Mail01} color="brand" theme="light" size="lg" />
                                    <h3 className="mt-4 text-lg font-semibold text-primary md:mt-6 md:text-xl">
                                        Submit Deletion Request
                                    </h3>
                                    <p className="mt-2 text-sm text-tertiary md:mt-3 md:text-base">
                                        Use the form below to request account deletion
                                    </p>

                                    <div className="mt-6">
                                        <a
                                            href="https://forms.gle/cVcTHCuQ7sTJuZBZ6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-secondary_hover md:text-base"
                                        >
                                            <span>Request Account Deletion</span>
                                            <LinkExternal01 className="size-4" />
                                        </a>
                                    </div>

                                    <div className="mt-6 rounded-xl bg-warning-secondary/50 p-3 md:p-4">
                                        <div className="flex items-start gap-2">
                                            <AlertCircle className="mt-0.5 size-5 shrink-0 text-warning-primary" />
                                            <span className="text-sm font-medium text-warning-primary">
                                                You must submit the request using the same email or phone number that is registered in the app.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What Happens After Deletion */}
                        <div>
                            <h2 className="mb-8 text-center text-display-xs font-semibold text-primary md:text-display-sm">
                                What Happens After Deletion
                            </h2>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <p className="mb-4 text-sm text-tertiary md:text-base">
                                    Once your deletion request is processed:
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-primary" />
                                        <span className="text-sm text-tertiary md:text-base">Your account will be removed</span>
                                    </div>
                                </div>
                                <p className="mt-4 mb-3 text-sm font-semibold text-primary md:text-base">
                                    The following data will be permanently deleted from our servers:
                                </p>
                                <div className="grid gap-2 sm:grid-cols-2">
                                    {[
                                        "All inventory records",
                                        "All medicine data",
                                        "All price and sales data"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-error-primary" />
                                            <span className="text-sm text-tertiary">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Deletion Timeline */}
                        <div className="mx-auto max-w-2xl">
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset">
                                <FeaturedIcon icon={Clock} color="brand" theme="modern" size="md" />
                                <h3 className="mt-4 text-lg font-semibold text-primary">
                                    Deletion Timeline
                                </h3>
                                <p className="mt-3 text-sm text-tertiary md:text-base">
                                    Account and data deletion is completed once the request is verified and processed.
                                </p>
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

export default AccountDeletionPolicySmartMedPage;
