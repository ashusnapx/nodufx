"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants";

export const Contact = () => {
  return (
    <Section id='contact' className='py-48 flex items-center justify-center'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='text-center max-w-3xl mx-auto space-y-8'
      >
        <motion.h2
          variants={fadeUp}
          className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]'
        >
          {siteConfig.contact.title}
        </motion.h2>

        <motion.div variants={fadeUp}>
          <a href={`mailto:${siteConfig.contact.email}`}>
            <Button size='lg' className='rounded-full px-10 py-6 text-lg'>
              {siteConfig.contact.cta}
            </Button>
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className='text-muted-foreground pt-8'>
          or say hi at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className='text-foreground hover:underline'
          >
            {siteConfig.contact.email}
          </a>
        </motion.p>
      </motion.div>
    </Section>
  );
};
