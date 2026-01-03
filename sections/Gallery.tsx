"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Section } from "@/components/ui/Section";
import { fadeUp, staggerContainer } from "@/animations/variants";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";
import { Camera, Sparkles } from "lucide-react";

export const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % siteConfig.gallery.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + siteConfig.gallery.length) % siteConfig.gallery.length
    );
  };

  return (
    <Section id='gallery' fullWidth className='py-24 relative'>
      {/* Section Decoration */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent-tertiary to-transparent' />

      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='space-y-12'
      >
        {/* Header */}
        <div className='px-6 md:px-12 max-w-7xl mx-auto text-center'>
          <motion.div
            variants={fadeUp}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-tertiary/10 border border-accent-tertiary/20 mb-6'
          >
            <Camera className='w-4 h-4 text-accent-tertiary' />
            <span className='text-sm font-medium text-accent-tertiary'>
              Gallery
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className='text-4xl md:text-6xl font-bold font-display mb-4'
          >
            <span className='gradient-text'>Life & Inspirations</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='text-muted-foreground max-w-2xl mx-auto text-lg'
          >
            A glimpse into my world—travels, hobbies, and the little things that
            inspire me.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 px-4 space-y-4 max-w-7xl mx-auto'>
          {siteConfig.gallery.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className='relative rounded-2xl overflow-hidden bg-muted group cursor-pointer break-inside-avoid border border-border hover:border-accent/50 transition-all duration-500'
              onClick={() => openLightbox(i)}
            >
              {/* Image with zoom effect */}
              <div className='relative overflow-hidden'>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />

                {/* Gradient overlay on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                {/* Category badge */}
                <div className='absolute bottom-4 left-4 right-4'>
                  <span className='inline-block px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-border text-sm font-medium transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    {item.category}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <div className='w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100'>
                    <Sparkles className='w-5 h-5 text-white' />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={siteConfig.gallery}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </Section>
  );
};
