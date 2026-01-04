"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { cn } from "@/utils/cn";
import { menuVariants } from "@/animations/variants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-accent/5 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className='mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between'>
        {/* Logo with Image and Gradient Text */}
        <Link href='/' className='relative z-50 flex items-center gap-3 group'>
          <div className='relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors duration-300'>
            <Image
              src='/images/logo.jpg'
              alt='Logo'
              fill
              className='object-cover'
            />
          </div>
          <span className='text-xl font-bold font-display gradient-text'>
            {siteConfig.name.split(" ")[0]}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-1'>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group'
            >
              {item.label}
              {/* Hover underline */}
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-secondary group-hover:w-full transition-all duration-300' />
            </Link>
          ))}
          <div className='ml-4'>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className='flex items-center gap-3 md:hidden'>
          <ThemeToggle />
          <button
            className='z-50 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
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
              className='fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden'
            >
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className='text-3xl font-display font-light hover:gradient-text transition-all duration-300'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
