'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-10%" }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: 'Domov', href: '#home' },
        { name: 'Služby', href: '#services' },
        { name: 'Referencie', href: '#trust' },
        { name: 'Kontakt', href: '#contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-md border-b border-navy-700/50 h-20' : 'bg-transparent border-transparent h-24'}`}>
                <div className="container-custom flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <ShieldCheck className="w-8 h-8 text-electric group-hover:text-white transition-colors" />
                            <div className="absolute inset-0 bg-electric/20 blur-lg rounded-full animate-pulse" />
                        </div>
                        <span className="text-2xl font-bold tracking-wider text-white">
                            ALARMTEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-500">SK</span>
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
                                className={`text-sm uppercase tracking-widest font-medium cursor-pointer transition-colors ${activeSection === link.href.substring(1)
                                    ? 'text-electric scale-105 font-bold'
                                    : 'text-slate-app hover:text-electric'
                                    }`}
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
            </nav>

            {/* Mobile Menu Overlay & Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-navy-900 border-l border-navy-700 z-[70] md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full p-6">
                                <div className="flex justify-end mb-8">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-slate-400 hover:text-white transition-colors"
                                    >
                                        <X size={32} />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-6 items-center">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-xl font-medium text-slate-light hover:text-electric transition-colors"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                                setIsOpen(false);
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                            setIsOpen(false);
                                        }}
                                        className="mt-4 px-6 py-3 border border-electric text-electric rounded-md hover:bg-electric/10 transition-colors font-bold text-center w-full"
                                    >
                                        CENOVÁ PONUKA
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
