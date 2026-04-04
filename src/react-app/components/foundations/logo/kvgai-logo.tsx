import { cx } from "@/utils/cx";

export const KVGAILogo = ({ className, variant = "default" }: { className?: string; variant?: "default" | "dark" }) => {
    return (
        <span className={cx(
            "whitespace-nowrap text-xl font-bold tracking-tight md:text-2xl",
            variant === "dark" ? "text-white" : "text-primary",
            className,
        )}>
            KVGAI Tech
        </span>
    );
};

export const KVGAILogoMinimal = ({ className }: { className?: string }) => {
    return (
        <img
            src="/kvgai-logo.png"
            alt="KVGAI Tech"
            className={`${className} rounded-md object-cover`}
        />
    );
};
