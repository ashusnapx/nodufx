"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { cn } from "@/utils/cn";
import { menuVariants } from "@/animations/variants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className='mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between'>
        <Link
          href='/'
          className='text-xl font-bold tracking-tight z-50 relative'
        >
          {siteConfig.hero.title}
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-8'>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className='flex items-center gap-4 md:hidden'>
          <ThemeToggle />
          <button
            className='z-50 text-foreground'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className='fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 md:hidden'
            >
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-3xl font-light hover:text-accent transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
