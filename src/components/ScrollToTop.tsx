'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[40] p-3 bg-electric/10 border border-electric/30 text-electric rounded-full shadow-lg hover:bg-electric hover:text-navy-900 transition-colors backdrop-blur-sm cursor-pointer"
                    aria-label="Späť na začiatok"
                >
                    <ArrowUp size={24} strokeWidth={2.5} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
