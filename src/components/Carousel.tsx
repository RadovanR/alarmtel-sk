'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    images: { src: string; alt: string }[];
    aspectRatio?: 'square' | 'video' | 'wide';
    autoPlayInterval?: number;
    className?: string;
}

const Carousel = ({
    images,
    aspectRatio = 'square',
    autoPlayInterval = 5000,
    className = ''
}: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [images.length, autoPlayInterval]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const aspectRatioClass = {
        'square': 'aspect-square',
        'video': 'aspect-video',
        'wide': 'aspect-[21/9]'
    }[aspectRatio];

    return (
        <div className={`relative group overflow-hidden rounded-2xl ${aspectRatioClass} ${className}`}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient overlay for better text contrast if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button
                onClick={(e) => { e.preventDefault(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy-900/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-electric/20 border border-white/10"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={(e) => { e.preventDefault(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy-900/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-electric/20 border border-white/10"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'bg-electric w-6'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
