"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants";
import Image from "next/image";
import { Download } from "lucide-react";

export const About = () => {
  return (
    <Section id='about' className='py-24 md:py-32'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start'
      >
        {/* Left: Avatar/Image */}
        <motion.div
          variants={fadeUp}
          className='relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-muted shadow-2xl'
        >
          <Image
            src={siteConfig.about.avatar}
            alt={siteConfig.about.title}
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
        </motion.div>

        {/* Right: Content */}
        <div className='space-y-8'>
          <div className='space-y-2'>
            <motion.h2
              variants={fadeUp}
              className='text-3xl md:text-5xl font-bold text-foreground'
            >
              {siteConfig.about.title}
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

          <motion.div
            variants={fadeUp}
            className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4'
          >
            <div>
              <h3 className='text-sm font-semibold uppercase tracking-wider mb-4 opacity-70 border-b border-border pb-2'>
                At a Glance
              </h3>
              <ul className='space-y-3'>
                {siteConfig.about.quickFacts.map((fact) => (
                  <li
                    key={fact.label}
                    className='text-muted-foreground text-sm'
                  >
                    <span className='block font-medium text-foreground'>
                      {fact.label}
                    </span>
                    {fact.value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold uppercase tracking-wider mb-4 opacity-70 border-b border-border pb-2'>
                Core Skills
              </h3>
              <div className='flex flex-wrap gap-2'>
                {siteConfig.about.skills.map((skill) => (
                  <span
                    key={skill}
                    className='text-xs font-medium px-3 py-1.5 rounded-full bg-accent/5 border border-accent/20 text-foreground'
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className='text-sm font-semibold uppercase tracking-wider mb-4 mt-6 opacity-70 border-b border-border pb-2'>
                Achievements
              </h3>
              <ul className='space-y-2'>
                {siteConfig.about.achievements.map((award) => (
                  <li
                    key={award}
                    className='text-sm text-muted-foreground flex items-center gap-2'
                  >
                    <span className='w-1.5 h-1.5 rounded-full bg-yellow-500' />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className='pt-8 gap-4 flex flex-wrap'>
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
              Contact Me
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
