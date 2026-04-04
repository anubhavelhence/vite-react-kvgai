import { Truck01, Mail01, CheckCircle, Clock, Download01 } from "@untitledui/icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge01 } from "./landing-page-19";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const ShippingDeliveryPage = () => {
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
                        <FeaturedIcon icon={Truck01} color="brand" theme="light" size="xl" />
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:mt-6 md:text-display-lg">
                            Shipping & Delivery Policy
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            How and when your digital products and services are delivered
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
                                <span className="font-semibold text-primary">KVGAI TECH PRIVATE LIMITED</span> provides digital products and services only. We do not ship any physical goods. All deliverables are provided electronically via email, shared links, or online platforms.
                            </p>
                            <p className="mt-3 text-sm text-quaternary">
                                Registered Office: B-87, R S M Nagar, Hal, Lucknow, UP 226016 | GSTIN: 09AALCK3280A1ZN | Email: support@kvgai.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-primary py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl space-y-12 md:space-y-16">

                        {/* Digital Delivery */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Download01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    What We Deliver
                                </h2>
                            </div>
                            <p className="mb-6 text-sm text-tertiary md:text-base">
                                Upon successful payment, you are entitled to receive the following digital deliverables based on your purchase:
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                                {[
                                    { title: "Session Recording", desc: "Full video recording of the bootcamp/workshop session" },
                                    { title: "Demo Repositories", desc: "Access to GitHub repositories with full source code for all projects demoed" },
                                    { title: "Cheat Sheets", desc: "Quick-reference PDF guides for all protocols and topics covered" },
                                    { title: "Community Access", desc: "Invite to private group for Q&A, networking, and ongoing learning" },
                                    { title: "Event Confirmation", desc: "Email confirmation with event details, venue, and schedule" },
                                    { title: "Payment Receipt", desc: "Automated receipt from Razorpay with transaction details" }
                                ].map((item, idx) => (
                                    <div key={idx} className="rounded-xl bg-secondary p-4 ring-1 ring-secondary ring-inset">
                                        <p className="text-sm font-semibold text-primary">{item.title}</p>
                                        <p className="mt-1 text-xs text-tertiary">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Delivery Timeline */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Clock} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    Delivery Timeline
                                </h2>
                            </div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <div className="space-y-4">
                                    {[
                                        { timing: "Immediately after payment", items: "Payment receipt and registration confirmation email" },
                                        { timing: "Before the event", items: "Event details, venue information, and schedule sent via email" },
                                        { timing: "Within 24–48 hours after the event", items: "Session recording link, demo repository access (GitHub), and cheat sheet PDF" },
                                        { timing: "Within 48 hours after the event", items: "Private community group invitation (WhatsApp/Discord)" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-sm font-bold text-white">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-primary">{item.timing}</p>
                                                <p className="mt-0.5 text-sm text-tertiary">{item.items}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Delivery Method */}
                        <div>
                            <div className="mb-6 flex items-center gap-3 md:gap-4">
                                <FeaturedIcon icon={Mail01} color="brand" theme="modern" size="md" className="md:size-12" />
                                <h2 className="text-xl font-semibold text-primary md:text-display-xs">
                                    How We Deliver
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "All digital products are delivered via the email address provided during registration",
                                    "Session recordings are shared as streaming links (Google Drive or similar platforms)",
                                    "Demo repositories are shared as GitHub repository links with view/clone access",
                                    "Cheat sheets are delivered as downloadable PDF files via email",
                                    "Community invitations are sent via email or WhatsApp to the registered phone number",
                                    "No physical shipping is involved — all products are 100% digital"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" />
                                        <span className="text-sm text-tertiary md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Issues with Delivery */}
                        <div>
                            <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                                <h3 className="mb-3 text-lg font-semibold text-primary">Didn't Receive Your Deliverables?</h3>
                                <div className="space-y-3 text-sm text-tertiary md:text-base">
                                    <p>
                                        If you have not received your digital deliverables within the timelines mentioned above, please:
                                    </p>
                                    <div className="space-y-2">
                                        {[
                                            "Check your spam/junk folder for emails from support@kvgai.com or Razorpay",
                                            "Ensure the email address used during registration is correct",
                                            "Contact us at support@kvgai.com with your Payment ID and Order ID"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-secondary" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p>
                                        We will respond within <span className="font-semibold text-primary">24 hours</span> and ensure you receive all promised deliverables.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="rounded-2xl bg-secondary p-6 ring-1 ring-secondary ring-inset md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <FeaturedIcon icon={Mail01} color="brand" theme="modern" size="lg" />
                                <h2 className="mt-4 text-xl font-semibold text-primary md:text-display-xs">
                                    Questions About Delivery?
                                </h2>
                                <p className="mt-2 max-w-md text-sm text-tertiary md:text-base">
                                    For any delivery-related concerns, reach out to us:
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

export default ShippingDeliveryPage;
