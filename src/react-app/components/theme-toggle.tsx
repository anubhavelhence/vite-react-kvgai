import { Moon01, Sun } from "@untitledui/icons";
import { useTheme } from "@/providers/theme-provider";
import { Button } from "@/components/base/buttons/button";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button
            onClick={toggleTheme}
            color="secondary"
            size="md"
            iconLeading={theme === "light" ? Moon01 : Sun}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="fixed top-4 right-4 z-50 shadow-lg"
        >
            {theme === "light" ? "Dark" : "Light"}
        </Button>
    );
};
