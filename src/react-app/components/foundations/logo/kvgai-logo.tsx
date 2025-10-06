export const KVGAILogo = ({ className }: { className?: string }) => {
    return (
        <svg className={`${className} text-black dark:text-white`} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="currentColor">
                KVGAI
            </text>
            <text x="120" y="35" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="normal" fill="currentColor" opacity="0.8">
                Tech
            </text>
        </svg>
    );
};

export const KVGAILogoMinimal = ({ className }: { className?: string }) => {
    return (
        <svg className={`${className} text-black dark:text-white`} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="35" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="currentColor">
                KV
            </text>
        </svg>
    );
};
