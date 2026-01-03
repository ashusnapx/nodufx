"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className='w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5'>
        <span className='sr-only'>Loading theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className='w-10 h-10 rounded-full flex items-center justify-center border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 hover:scale-110 active:scale-95'
      aria-label='Toggle theme'
    >
      {resolvedTheme === "dark" ? (
        <Sun className='h-5 w-5 text-yellow-400' />
      ) : (
        <Moon className='h-5 w-5 text-indigo-600' />
      )}
    </button>
  );
}
