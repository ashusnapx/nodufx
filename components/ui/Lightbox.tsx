"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}: LightboxProps) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl'
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className='absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[101]'
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={onPrev}
            className='absolute left-6 text-white/50 hover:text-white transition-colors z-[101] hidden md:block'
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={onNext}
            className='absolute right-6 text-white/50 hover:text-white transition-colors z-[101] hidden md:block'
          >
            <ChevronRight size={48} />
          </button>

          {/* Main Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='relative w-full max-w-5xl h-[80vh] mx-4'
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className='object-contain'
              quality={100}
            />
            <div className='absolute bottom-[-3rem] left-0 right-0 text-center text-white/70'>
              {images[currentIndex].alt}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
