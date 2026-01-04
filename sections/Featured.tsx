"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Section } from "@/components/ui/Section";
import { fadeUp, staggerContainer } from "@/animations/variants";
import Image from "next/image";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? 0 : 80]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      variants={fadeUp}
      className={`group relative ${index % 2 === 1 ? "md:mt-24" : ""}`}
    >
      <a
        href={project.link}
        className='block'
        target='_blank'
        rel='noopener noreferrer'
      >
        {/* Card with gradient border */}
        <div className='relative rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-accent/50 transition-all duration-500 glow-hover'>
          {/* Image */}
          <div className='relative aspect-[16/10] overflow-hidden'>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60' />

            {/* Hover Overlay */}
            <div className='absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center'>
              <div className='w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300'>
                <ExternalLink className='w-6 h-6 text-accent' />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className='p-6 space-y-4'>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className='text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20'
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className='text-2xl font-bold font-display group-hover:gradient-text transition-all duration-300'>
              {project.title}
            </h3>
            <p className='text-muted-foreground leading-relaxed'>
              {project.description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export const Featured = () => {
  return (
    <Section id='featured' className='py-32 relative'>
      {/* Section Decoration */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent' />

      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, margin: "-100px" }}
        className='space-y-16'
      >
        <div className='text-center max-w-3xl mx-auto'>
          <motion.div
            variants={fadeUp}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6'
          >
            <Sparkles className='w-4 h-4 text-accent' />
            <span className='text-sm font-medium text-accent'>
              Selected Work
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className='text-4xl md:text-6xl font-bold font-display mb-4'
          >
            <span className='gradient-text'>Featured Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className='text-muted-foreground text-lg'>
            A glimpse into some of my favorite work and creative explorations.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {siteConfig.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
