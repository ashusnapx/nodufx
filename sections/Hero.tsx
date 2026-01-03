"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { fadeUp, staggerContainer } from "@/animations/variants";

export const Hero = () => {
  return (
    <Section className='min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden'>
      {/* Background Gradient / Blur */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] opacity-50 animate-pulse' />
        <div className='absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] opacity-30' />
      </div>

      {/* Floating Shapes Animation */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-20 right-10 w-24 h-24 rounded-full border border-accent/20'
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className='absolute bottom-40 left-10 w-32 h-32 rounded-lg border border-accent/10 rotate-12'
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-accent'
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className='text-center relative z-10 max-w-4xl mx-auto'
      >
        <motion.p
          variants={fadeUp}
          className='text-sm md:text-base font-medium text-accent tracking-widest uppercase mb-6'
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className='text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 text-balance bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50'
        >
          {siteConfig.hero.title}
        </motion.h1>

        {/* Kannada Subtitle */}
        <motion.h2
          variants={fadeUp}
          className='text-2xl md:text-4xl font-light text-muted-foreground mb-8'
        >
          {siteConfig.hero.subtitle}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance'
        >
          {siteConfig.hero.description}
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            size='lg'
            onClick={() =>
              document
                .getElementById("featured")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {siteConfig.hero.cta}
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};
