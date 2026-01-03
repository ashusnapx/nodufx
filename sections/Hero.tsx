"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Sparkles, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <Section className='min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden'>
      {/* Decorative Vector Shapes */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        {/* Floating Circles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className='absolute top-20 right-[15%] w-32 h-32 rounded-full border-2 border-accent/30'
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-40 left-[10%] w-20 h-20 rounded-full bg-gradient-to-br from-accent-secondary/20 to-accent-tertiary/20'
        />

        {/* Floating Triangles */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className='absolute bottom-32 right-[20%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-accent/20'
        />

        {/* Floating Squares */}
        <motion.div
          animate={{
            rotate: [45, 135, 45],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-1/2 left-[5%] w-16 h-16 border-2 border-accent-tertiary/30 rotate-45'
        />

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-1/3 right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-accent via-accent-secondary to-accent-tertiary opacity-20 blur-3xl'
        />

        {/* Dotted Lines */}
        <svg
          className='absolute bottom-20 left-[15%] w-48 h-48 opacity-20'
          viewBox='0 0 100 100'
        >
          <motion.circle
            cx='50'
            cy='50'
            r='40'
            stroke='currentColor'
            strokeWidth='1'
            strokeDasharray='4 4'
            fill='none'
            className='text-accent'
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      </div>

      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className='text-center relative z-10 max-w-5xl mx-auto px-4'
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8'
        >
          <Sparkles className='w-4 h-4 text-accent' />
          <span className='text-sm font-medium text-accent'>
            {siteConfig.tagline}
          </span>
        </motion.div>

        {/* Main Heading with Gradient */}
        <motion.h1
          variants={fadeUp}
          className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-display'
        >
          <span className='gradient-text'>{siteConfig.hero.title}</span>
        </motion.h1>

        {/* Kannada Subtitle */}
        <motion.h2
          variants={fadeUp}
          className='text-2xl md:text-4xl font-light text-accent-secondary mb-8 font-display italic'
        >
          {siteConfig.hero.subtitle}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed'
        >
          {siteConfig.hero.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className='flex flex-wrap justify-center gap-4'
        >
          <Button
            size='lg'
            variant='primary'
            className='gradient-bg text-white glow-hover'
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {siteConfig.hero.cta}
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='gradient-border'
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Gallery
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeUp}
          className='absolute bottom-10 left-1/2 -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className='w-6 h-6 text-muted-foreground' />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
