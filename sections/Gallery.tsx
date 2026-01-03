"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Section } from "@/components/ui/Section";
import { fadeUp, staggerContainer } from "@/animations/variants";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";

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
    <Section id='gallery' fullWidth className='py-24'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='space-y-12'
      >
        <div className='px-6 md:px-12 max-w-7xl mx-auto text-center'>
          <motion.h2
            variants={fadeUp}
            className='text-3xl md:text-5xl font-bold mb-4'
          >
            Life & Inspirations
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='text-muted-foreground max-w-2xl mx-auto'
          >
            A glimpse into my world—travels, hobbies, and the little things that
            inspire me.
          </motion.p>
        </div>

        {/* Masonry-style Grid */}
        <div className='columns-1 md:columns-2 lg:columns-3 gap-4 px-4 space-y-4 max-w-7xl mx-auto'>
          {siteConfig.gallery.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className='relative rounded-xl overflow-hidden bg-muted group cursor-zoom-in break-inside-avoid'
              onClick={() => openLightbox(i)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800} // Infer width/height ratio if possible, else strictly width
                height={600} // Placeholder height, masonry handles height naturally if we used raw <img> but Next/Image needs aspect ratio.
                // Optimized hack: use style={{ height: 'auto' }} and width/height props as aspect ratio guides.
                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
              <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <p className='text-white font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-md translate-y-4 group-hover:translate-y-0 transition-transform'>
                  {item.category}
                </p>
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
