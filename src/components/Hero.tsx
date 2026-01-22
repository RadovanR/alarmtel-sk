'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import Link from 'next/link';



const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-navy-900 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-electric/5 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-6 border border-electric/30 rounded-full bg-electric/5 text-electric text-sm font-semibold tracking-wide">
                        SPOĽAHLIVOSŤ OVERENÁ ROKMI SKÚSENOSTÍ
                    </div>
                    <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                        Špičkové zabezpečenie pre <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-500">domov a firmy</span>
                    </h1>
                    <p className="text-lg text-slate-app mb-10 max-w-xl leading-loose">
                        Komplexné riešenia od kamerových systémov až po inteligentné alarmy.
                        Chráňte to, na čom vám záleží, s technológiou, ktorej môžete dôverovať.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#contact" className="px-8 py-3 rounded-md font-semibold border border-electric text-electric hover:bg-electric hover:text-navy-900 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2 group">
                            Nezáväzná ponuka
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="#services" className="bg-gradient-to-r from-electric to-blue-500 text-white font-bold hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] hover:scale-105 transition-all duration-300 rounded-md py-3 px-8 text-center flex items-center justify-center">
                            Naše služby
                        </Link>
                    </div>
                </motion.div>

                <div
                    className="relative hidden lg:block"
                >
                    {/* Levitating Images Composition - 2 Large Photos */}
                    <div className="relative w-full aspect-square">
                        {/* Decorative Center Glow */}
                        <div className="absolute inset-0 bg-electric/10 blur-[100px] rounded-full" />

                        {/* Image 3: Left - Access Control (New - Side) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                            className="absolute top-[10%] left-0 w-[40%] aspect-square rounded-2xl overflow-hidden border-2 border-electric shadow-[0_0_30px_rgba(0,212,255,0.3)] z-10"
                        >
                            <img
                                src="/images/hero-access.png"
                                alt="Prístupové systémy"
                                className="w-full h-full object-cover"
                            />
                            {/* Blue overlay tint */}
                            <div className="absolute inset-0 bg-electric/10 mix-blend-overlay" />
                        </motion.div>

                        {/* Image 2: Top/Right - Intercom (Large) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                            className="absolute top-0 right-0 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-electric shadow-[0_0_30px_rgba(0,212,255,0.3)] z-0"
                        >
                            <img
                                src="/images/hero-intercom.png"
                                alt="Video vrátnik"
                                className="w-full h-full object-cover"
                            />
                            {/* Blue overlay tint */}
                            <div className="absolute inset-0 bg-electric/10 mix-blend-overlay" />
                        </motion.div>

                        {/* Image 1: Bottom/Left - CCTV (Large) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                            className="absolute bottom-4 left-[20%] w-[75%] aspect-video rounded-2xl overflow-hidden border-2 border-electric shadow-[0_0_30px_rgba(0,212,255,0.3)] z-20"
                        >
                            <img
                                src="/images/hero-cctv.png"
                                alt="Moderný kamerový systém"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-app">
                <ChevronDown />
            </div>
        </section>
    );
};

export default Hero;
