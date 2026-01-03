"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants";
import Image from "next/image";
import { Download, Award, Book, Heart, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <Section id='about' className='py-24 md:py-32 relative'>
      {/* Section Decoration */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent-secondary to-transparent' />

      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'
      >
        {/* Left: Avatar with decorative elements */}
        <motion.div variants={fadeUp} className='relative'>
          {/* Decorative ring */}
          <div className='absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent via-accent-secondary to-accent-tertiary opacity-20 blur-2xl' />

          {/* Main image */}
          <div className='relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-accent/20 glow'>
            <Image
              src={siteConfig.about.avatar}
              alt={siteConfig.about.title}
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent' />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className='absolute -right-4 top-10 bg-card border border-border rounded-2xl p-4 shadow-xl'
          >
            <Award className='w-8 h-8 text-yellow-500' />
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <div className='space-y-8'>
          <div className='space-y-4'>
            <motion.div
              variants={fadeUp}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20'
            >
              <Heart className='w-4 h-4 text-accent-secondary' />
              <span className='text-sm font-medium text-accent-secondary'>
                About Me
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className='text-4xl md:text-5xl font-bold font-display'
            >
              <span className='gradient-text'>{siteConfig.name}</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className='text-xl font-medium text-accent'
            >
              {
                siteConfig.about.quickFacts.find(
                  (f) => f.label === "Current Role"
                )?.value
              }
            </motion.p>
          </div>

          <motion.p
            variants={fadeUp}
            className='text-lg text-muted-foreground leading-relaxed'
          >
            {siteConfig.about.description}
          </motion.p>

          {/* Quick Facts with icons */}
          <motion.div
            variants={fadeUp}
            className='grid grid-cols-1 sm:grid-cols-2 gap-4'
          >
            {siteConfig.about.quickFacts.map((fact, i) => (
              <div
                key={fact.label}
                className='p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors group'
              >
                <p className='text-sm text-muted-foreground mb-1'>
                  {fact.label}
                </p>
                <p className='font-medium text-foreground group-hover:text-accent transition-colors'>
                  {fact.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeUp} id='skills'>
            <h3 className='text-sm font-semibold uppercase tracking-wider mb-4 text-accent flex items-center gap-2'>
              <Sparkles className='w-4 h-4' />
              Core Skills
            </h3>
            <div className='flex flex-wrap gap-2'>
              {siteConfig.about.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className='px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-accent/20 text-sm font-medium hover:scale-105 transition-transform cursor-default'
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={fadeUp} id='achievements'>
            <h3 className='text-sm font-semibold uppercase tracking-wider mb-4 text-yellow-500 flex items-center gap-2'>
              <Award className='w-4 h-4' />
              Achievements
            </h3>
            <ul className='space-y-3'>
              {siteConfig.about.achievements.map((award) => (
                <li
                  key={award}
                  className='flex items-center gap-3 text-muted-foreground'
                >
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500' />
                  {award}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className='flex flex-wrap gap-4 pt-4'>
            <a href={siteConfig.about.resumeUrl} download>
              <Button variant='primary' className='gap-2'>
                <Download className='w-4 h-4' />
                Download CV
              </Button>
            </a>
            <Button
              variant='outline'
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
