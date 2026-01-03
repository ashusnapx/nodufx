"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

export const Contact = () => {
  return (
    <Section id='contact' className='py-24 md:py-32 relative'>
      {/* Section Decoration */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent' />

      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='text-center max-w-3xl mx-auto'
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6'
        >
          <Send className='w-4 h-4 text-accent' />
          <span className='text-sm font-medium text-accent'>Let's Connect</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className='text-4xl md:text-6xl font-bold font-display mb-6'
        >
          <span className='gradient-text'>{siteConfig.contact.title}</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className='text-lg text-muted-foreground mb-10'
        >
          I'm always excited to connect with new people and explore creative
          opportunities. Feel free to reach out!
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          variants={fadeUp}
          className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10'
        >
          <div className='p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors group'>
            <Mail className='w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform' />
            <p className='text-sm text-muted-foreground'>Email</p>
            <p className='font-medium truncate'>{siteConfig.contact.email}</p>
          </div>
          <div className='p-6 rounded-2xl bg-card border border-border hover:border-accent-secondary/50 transition-colors group'>
            <MapPin className='w-8 h-8 text-accent-secondary mx-auto mb-3 group-hover:scale-110 transition-transform' />
            <p className='text-sm text-muted-foreground'>Location</p>
            <p className='font-medium'>Karnataka, India</p>
          </div>
          <div className='p-6 rounded-2xl bg-card border border-border hover:border-accent-tertiary/50 transition-colors group'>
            <Sparkles className='w-8 h-8 text-accent-tertiary mx-auto mb-3 group-hover:scale-110 transition-transform' />
            <p className='text-sm text-muted-foreground'>Status</p>
            <p className='font-medium text-green-500'>Open to Work</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className='flex flex-wrap justify-center gap-4'
        >
          <a href={`mailto:${siteConfig.contact.email}`}>
            <Button size='lg' variant='primary' className='gap-2'>
              <Mail className='w-4 h-4' />
              {siteConfig.contact.cta}
            </Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className='flex justify-center gap-4 mt-10'
        >
          {siteConfig.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:scale-110 hover:glow transition-all duration-300'
              aria-label={social.label}
            >
              {social.icon && <social.icon className='w-5 h-5' />}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
