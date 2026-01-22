'use client';

import { CheckCircle2, Award, Wrench, Users, ShieldCheck, History, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Trust = () => {
    return (
        <section id="trust" className="py-20 bg-navy-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#00d4ff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Viac ako <span className="text-electric">25 rokov</span> bezpečnosti bez kompromisov
                        </h2>
                        <p className="text-slate-app mb-8 text-lg">
                            Za našu históriu sme zabezpečili stovky objektov po celom Slovensku.
                            Naša odbornosť nie je len sľub, ale fakt podložený certifikátmi a spokojnosťou klientov.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Kompletná projektová dokumentácia',
                                'Rýchla a čistá inštalácia',
                                'Zaškolenie obsluhy zdarma',
                                'Pravidelné revízie a údržba'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white font-medium text-lg">
                                    <CheckCircle2 className="text-electric w-6 h-6 flex-shrink-0 drop-shadow-sm" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Grid Content - Value Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            {
                                title: 'Certifikácia',
                                icon: Award,
                                bg: '/images/trust-technician.png',
                                desc: 'Odborne vyškolený tím'
                            },
                            {
                                title: 'Revízie',
                                icon: Wrench,
                                bg: '/images/hero-monitoring.png',
                                desc: 'Pravidelná údržba'
                            },
                            {
                                title: 'Individuálny prístup',
                                icon: Users,
                                bg: '/images/trust-meeting.png',
                                desc: 'Riešenia na mieru'
                            },
                            {
                                title: 'Technológie',
                                icon: ShieldCheck,
                                bg: '/images/hero-alarm.png',
                                desc: 'Overené značky'
                            },
                            {
                                title: 'Skúsenosti',
                                icon: History,
                                bg: '/images/hero-access.png',
                                desc: '25 rokov praxe'
                            },
                            {
                                title: 'Kvalita',
                                icon: ThumbsUp,
                                bg: '/images/hero-cctv.png',
                                desc: 'Garancia spokojnosti'
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-square rounded-xl overflow-hidden border border-navy-600 group cursor-default shadow-lg"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={item.bg}
                                        alt={item.title}
                                        className="w-full h-full object-cover filter blur-[3px] brightness-[0.4] group-hover:blur-[2px] group-hover:brightness-[0.5] transition-all duration-500"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/90 via-navy-900/40 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-10">
                                    <div className="mb-3 p-3 rounded-full bg-electric/10 border border-electric/30 text-electric shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={28} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-white font-bold text-lg tracking-wide mb-1 drop-shadow-md uppercase">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-slate-200 tracking-wide font-medium opacity-90">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Trust Bar - Brand List */}
                <div className="mt-20 pt-10 border-t border-navy-700/50">
                    <p className="text-center text-slate-500 text-sm mb-6 uppercase tracking-widest">Pracujeme s overenými technológiami</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-xl font-bold text-white flex items-center gap-2">
                            PARADOX
                        </span>
                        <span className="text-xl font-bold text-white flex items-center gap-2">
                            DAHUA
                        </span>
                        <span className="text-xl font-bold text-white flex items-center gap-2">
                            JABLOTRON
                        </span>
                        <span className="text-xl font-bold text-white flex items-center gap-2">
                            HIKVISION
                        </span>
                        <span className="text-xl font-bold text-white flex items-center gap-2">
                            SATEL
                        </span>
                        <span className="text-xl font-bold text-white flex items-center gap-2">
                            AJAX
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
