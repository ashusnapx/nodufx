"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site.config";
import { Section } from "@/components/ui/Section";
import { fadeUp, staggerContainer } from "@/animations/variants";
import Image from "next/image";
import { useRef } from "react";

// Types for props
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

  // Parallax effect: standard for even, slower for odd items to create visual staggering
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? 0 : 70]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      variants={fadeUp}
      className={`group relative ${index % 2 === 1 ? "md:mt-32" : ""}`}
    >
      <a href={project.link} className='block'>
        <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted mb-6 shadow-sm dark:shadow-none hover:shadow-2xl transition-all duration-500'>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          <div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500' />
        </div>

        <div className='space-y-4'>
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className='text-xs font-medium px-2 py-1 rounded-full border border-black/5 dark:border-white/10 text-muted-foreground'
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className='text-2xl font-semibold group-hover:text-accent transition-colors'>
            {project.title}
          </h3>
          <p className='text-muted-foreground leading-relaxed'>
            {project.description}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export const Featured = () => {
  const containerRef = useRef(null);

  return (
    <Section id='featured' className='py-32'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, margin: "-100px" }}
        className='space-y-24'
      >
        <div className='mb-12'>
          <motion.h2
            variants={fadeUp}
            className='text-3xl md:text-5xl font-bold mb-4'
          >
            Selected Work
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className='h-1 w-20 bg-accent rounded-full'
          />
        </div>

        <div
          className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16'
          ref={containerRef}
        >
          {siteConfig.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
