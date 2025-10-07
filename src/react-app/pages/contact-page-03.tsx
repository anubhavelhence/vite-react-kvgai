import { useState } from "react";
import { MarkerPin02, MessageChatCircle, Phone } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextArea } from "@/components/base/textarea/textarea";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { KVGAILogo } from "@/components/foundations/logo/kvgai-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import countries, { phoneCodeOptions } from "@/utils/countries";

const ContactFormAndMap = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="grid grid-cols-1 bg-primary lg:grid-cols-2">
            <div className="self-center px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto md:max-w-120">
                    <h2 className="text-display-md font-semibold text-primary md:text-display-lg">Contact us</h2>
                    <p className="mt-4 text-lg whitespace-pre-line text-tertiary md:mt-6 md:text-xl">Our AI engineering team would love to hear from you. Let's build ambitious AI applications together.</p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
                                <Input isRequired size="md" name="firstName" label="First name" placeholder="First name" wrapperClassName="flex-1" />
                                <Input isRequired size="md" name="lastName" label="Last name" placeholder="Last name" wrapperClassName="flex-1" />
                            </div>
                            <Input isRequired size="md" name="email" label="Email" type="email" placeholder="you@company.com" />
                            <InputGroup
                                size="md"
                                name="phone"
                                label="Phone number"
                                leadingAddon={
                                    <NativeSelect
                                        aria-label="Country code"
                                        value={selectedCountryPhone}
                                        onChange={(value) => setSelectedCountryPhone(value.currentTarget.value)}
                                        options={phoneCodeOptions.map((item) => ({
                                            label: item.label as string,
                                            value: item.id as string,
                                        }))}
                                    />
                                }
                            >
                                <InputBase
                                    type="tel"
                                    placeholder={countries.find((country) => country.code === selectedCountryPhone)?.phoneMask?.replace(/#/g, "0")}
                                />
                            </InputGroup>
                            <TextArea isRequired label="Message" placeholder="Leave us a message..." rows={5} />
                            <Checkbox
                                name="privacy"
                                size="md"
                                hint={
                                    <>
                                        You agree to our friendly{" "}
                                        <a
                                            href="#"
                                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            privacy policy.
                                        </a>
                                    </>
                                }
                            />
                        </div>

                        <Button type="submit" size="xl">
                            Send message
                        </Button>
                    </Form>
                </div>
            </div>

            <iframe
                title="Our address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8766876917654!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="hidden h-240 w-full border-none lg:block"
                data-chromatic="ignore"
            />
        </section>
    );
};

const ContactSectionSimpleIcons04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 items-center text-center">
                    <div className="w-full max-w-3xl">
                        <div className="text-sm font-semibold text-brand-secondary md:text-md">Our location</div>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Visit our office</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Find us in the heart of Bangalore's tech hub.</p>
                    </div>

                    <ul className="grid w-full grid-cols-1 gap-x-16 gap-y-6 md:gap-y-8 justify-items-center">
                        {[
                            {
                                title: "Bangalore",
                                subtitle: "2nd floor, Scalex loop\nBangalore, India",
                            },
                        ].map((item) => (
                            <li key={item.title} className="flex flex-col items-center text-center">
                                <h3 className="text-xl font-semibold text-primary md:text-2xl lg:text-3xl">{item.title}</h3>
                                <p className="mt-3 text-lg whitespace-pre text-tertiary md:mt-4 md:text-xl lg:text-2xl">{item.subtitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const ContactSectionIconCards03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge color="brand" size="lg" className="hidden md:flex">
                        Contact us
                    </Badge>
                    <Badge color="brand" size="md" className="md:hidden">
                        Contact us
                    </Badge>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">We'd love to hear from you</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Chat to our AI engineering team.</p>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-24">
                    <img
                        src="/teamImageContactPage.jpg"
                        className="h-60 w-full object-cover md:h-100 lg:h-140"
                        alt="People discussion a topic"
                    />
                    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        {[
                            {
                                title: "Chat to sales",
                                subtitle: "Speak to our AI solutions team.",
                                href: "mailto:anubhav@kvgai.com",
                                cta: "anubhav@kvgai.com",
                                icon: MessageChatCircle,
                            },

                            {
                                title: "Visit us",
                                subtitle: "Visit our office in Bangalore.",
                                href: "https://maps.google.com/?q=Scalex+loop+Bangalore",
                                cta: "2nd floor, Scalex loop\nBangalore, India",
                                icon: MarkerPin02,
                            },
                            { title: "Call us", subtitle: "Mon-Fri from 9am to 6pm IST.", href: "tel:+917388889308", cta: "+91 7388889308", icon: Phone },
                        ].map((item) => (
                            <li key={item.title} className="flex h-full flex-col items-start bg-secondary p-6">
                                <FeaturedIcon size="lg" icon={item.icon} color="brand" theme="dark" />

                                <h3 className="mt-12 text-lg font-semibold text-primary md:mt-16 md:text-xl">{item.title}</h3>
                                <p className="mt-1 text-md text-tertiary md:mt-2">{item.subtitle}</p>
                                <Button color="link-color" size="lg" href={item.href} className="mt-4 whitespace-pre md:mt-5">
                                    {item.cta}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const CardHorizontal = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary">
                            <span className="hidden md:inline">Start building ambitious AI applications</span>
                            <span className="md:hidden">Start building AI</span>
                        </h2>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">Join 4 enterprise clients already deploying AI solutions with KVGAI Tech.</p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            View Documentation
                        </Button>
                        <Button size="xl">Schedule Demo</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge01 = () => {
    return (
        <footer className="bg-secondary_alt py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <KVGAILogo className="h-8 w-min" />
                    <p className="text-md text-quaternary">© 2025 KVGAI Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const ContactPage03 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <ContactFormAndMap />

            <ContactSectionSimpleIcons04 />

            <ContactSectionIconCards03 />

            <CardHorizontal />

            <FooterLarge01 />
        </div>
    );
};

export default ContactPage03;
