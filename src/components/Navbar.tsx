'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Domov', href: '#home' },
        { name: 'Služby', href: '#services' },
        { name: 'Referencie', href: '#trust' },
        { name: 'Kontakt', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-navy-700/50">
            <div className="container-custom flex justify-between items-center h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <ShieldCheck className="w-8 h-8 text-electric group-hover:text-white transition-colors" />
                        <div className="absolute inset-0 bg-electric/20 blur-lg rounded-full animate-pulse" />
                    </div>
                    <span className="text-2xl font-bold tracking-wider text-white">
                        ALARMTEL <span className="text-electric">SK</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector(link.href);
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-slate-app hover:text-electric transition-colors text-sm uppercase tracking-widest font-medium cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-5 py-2 border border-electric text-electric rounded hover:bg-electric/10 transition-all font-medium text-sm cursor-pointer"
                    >
                        CENOVÁ PONUKA
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-electric"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy-900 border-b border-navy-700 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg text-slate-light hover:text-electric font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
