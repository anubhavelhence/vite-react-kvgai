import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Moon01, Sun } from "@untitledui/icons";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { KVGAILogo } from "@/components/foundations/logo/kvgai-logo";
import { useTheme } from "@/providers/theme-provider";
import { cx } from "@/utils/cx";

type HeaderNavItem = {
    label: string;
    href?: string;
    menu?: ReactNode;
};

const headerNavItems: HeaderNavItem[] = [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

const MobileNavItem = (props: { label: string; href?: string; children?: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (props.href) {
        return (
            <li>
                <Link to={props.href} className="flex items-center px-5 py-3 text-md font-medium text-primary hover:bg-primary_hover">
                    {props.label}
                </Link>
            </li>
        );
    }

    return (
        <li className="flex flex-col">
            <button
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-5 py-3 text-md font-medium text-primary hover:bg-primary_hover"
            >
                {props.label}
                <ChevronDown className={cx("size-4 text-fg-quaternary transition duration-200", isOpen ? "-rotate-180" : "rotate-0")} />
            </button>
            {isOpen && <div>{props.children}</div>}
        </li>
    );
};

interface HeaderProps {
    items?: HeaderNavItem[];
    isFullWidth?: boolean;
    isFloating?: boolean;
    variant?: "default" | "dark";
    className?: string;
}

export const Header = ({ items = headerNavItems, isFullWidth, isFloating, variant = "default", className }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const isDark = variant === "dark";

    return (
        <header
            ref={headerRef}
            className={cx(
                "relative z-50 flex w-full items-center justify-center py-3 md:py-4",
                isFullWidth && !isFloating ? "has-aria-expanded:bg-primary" : !isDark && "max-md:has-aria-expanded:bg-primary",
                className,
            )}
        >
            <div className="mx-auto w-full max-w-container px-4 md:px-6">
                <div className={cx(
                    "flex w-full items-center justify-between rounded-xl border px-3 py-2 backdrop-blur-md md:px-5 md:py-2.5",
                    isDark
                        ? "border-white/10 bg-white/5"
                        : "border-secondary bg-primary/90"
                )}>

                    {/* Logo */}
                    <Link to="/" className="flex shrink-0 items-center">
                        <KVGAILogo className="h-9 md:h-10" variant={isDark ? "dark" : "default"} />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex md:flex-1 md:justify-center">
                        <ul className="flex items-center gap-1">
                            {items.map((navItem) => (
                                <li key={navItem.label}>
                                    {navItem.menu ? (
                                        <AriaDialogTrigger>
                                            <AriaButton className={cx(
                                                "flex cursor-pointer items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 outline-focus-ring",
                                                isDark
                                                    ? "text-white/70 hover:bg-white/10 hover:text-white"
                                                    : "text-tertiary hover:bg-secondary hover:text-primary"
                                            )}>
                                                {navItem.label}
                                                <ChevronDown className="size-3.5 text-inherit transition duration-200 in-aria-expanded:-rotate-180" />
                                            </AriaButton>
                                            <AriaPopover
                                                className={({ isEntering, isExiting }) =>
                                                    cx(
                                                        "hidden origin-top will-change-transform md:block",
                                                        isFullWidth && "w-full",
                                                        isEntering && "duration-200 ease-out animate-in fade-in slide-in-from-top-1",
                                                        isExiting && "duration-150 ease-in animate-out fade-out slide-out-to-top-1",
                                                    )
                                                }
                                                offset={isFloating || isFullWidth ? 0 : 8}
                                                containerPadding={0}
                                                triggerRef={(isFloating && isFullWidth) || isFullWidth ? headerRef : undefined}
                                            >
                                                {({ isEntering, isExiting }) => (
                                                    <AriaDialog className={cx(
                                                        "mx-auto origin-top outline-hidden",
                                                        isFloating && "max-w-7xl px-8 pt-3",
                                                        isEntering && !isFullWidth && "duration-200 ease-out animate-in zoom-in-95",
                                                        isExiting && !isFullWidth && "duration-150 ease-in animate-out zoom-out-95",
                                                    )}>
                                                        {navItem.menu}
                                                    </AriaDialog>
                                                )}
                                            </AriaPopover>
                                        </AriaDialogTrigger>
                                    ) : (
                                        <Link
                                            to={navItem.href || "#"}
                                            className={cx(
                                                "flex cursor-pointer items-center rounded-lg px-3.5 py-2 text-sm font-medium transition duration-150 focus:outline-offset-2 focus-visible:outline-2 outline-focus-ring",
                                                isDark
                                                    ? "text-white/70 hover:bg-white/10 hover:text-white"
                                                    : "text-tertiary hover:bg-secondary hover:text-primary"
                                            )}
                                        >
                                            {navItem.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Dark mode toggle */}
                    <div className="hidden shrink-0 md:flex">
                        <button
                            onClick={toggleTheme}
                            className={cx(
                                "flex size-9 items-center justify-center rounded-lg transition duration-150",
                                isDark
                                    ? "text-white/60 hover:bg-white/10 hover:text-white"
                                    : "text-fg-quaternary hover:bg-secondary hover:text-primary"
                            )}
                            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                        >
                            {theme === "light" ? <Moon01 className="size-[18px]" /> : <Sun className="size-[18px]" />}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    <AriaDialogTrigger>
                        <AriaButton
                            aria-label="Toggle navigation menu"
                            className={({ isFocusVisible, isHovered }) =>
                                cx(
                                    "group ml-auto cursor-pointer rounded-lg p-2 md:hidden",
                                    isHovered && (isDark ? "bg-white/10" : "bg-secondary"),
                                    isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                )
                            }
                        >
                            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path className="hidden group-aria-expanded:block" d="M18 6L6 18M6 6L18 18" stroke={isDark ? "white" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="group-aria-expanded:hidden" d="M3 12H21M3 6H21M3 18H21" stroke={isDark ? "white" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </AriaButton>
                        <AriaPopover
                            triggerRef={headerRef}
                            className="scrollbar-hide w-full overflow-y-auto md:hidden"
                            offset={0}
                            crossOffset={20}
                            containerPadding={0}
                            placement="bottom left"
                        >
                            <AriaDialog className="outline-hidden">
                                <nav className="w-full border-t border-secondary bg-primary shadow-lg">
                                    <ul className="flex flex-col py-3">
                                        {items.map((navItem) =>
                                            navItem.menu ? (
                                                <MobileNavItem key={navItem.label} label={navItem.label}>{navItem.menu}</MobileNavItem>
                                            ) : (
                                                <MobileNavItem key={navItem.label} label={navItem.label} href={navItem.href} />
                                            ),
                                        )}
                                    </ul>
                                    <div className="border-t border-secondary px-5 py-4">
                                        <button
                                            onClick={toggleTheme}
                                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-secondary py-2.5 text-sm font-medium text-primary transition hover:bg-secondary"
                                        >
                                            {theme === "light" ? <Moon01 className="size-4" /> : <Sun className="size-4" />}
                                            {theme === "light" ? "Dark mode" : "Light mode"}
                                        </button>
                                    </div>
                                </nav>
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDialogTrigger>
                </div>
            </div>
        </header>
    );
};
