'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-10 left-4 md:left-8 z-50 w-[calc(100%-2rem)] md:w-full md:max-w-lg"
                >
                    <div className="glass-card p-6 rounded-xl border border-navy-700 shadow-2xl bg-navy-900/95 backdrop-blur-xl">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-navy-800 rounded-lg text-electric mt-1 shrink-0">
                                <Cookie size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-2">Nastavenia súkromia</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    Používame cookies na vylepšenie vášho zážitku a analýzu návštevnosti.
                                    Používaním webu súhlasíte s našimi podmienkami.
                                </p>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="bg-electric hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors flex-1"
                                    >
                                        Súhlasím
                                    </button>
                                    <button
                                        onClick={handleDecline}
                                        className="bg-navy-800 hover:bg-navy-700 text-slate-300 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors border border-navy-700 flex-1"
                                    >
                                        Odmietnuť
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
