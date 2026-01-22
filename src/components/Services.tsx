'use client';

import { Cctv, ShieldAlert, KeyRound, Flame, Lightbulb, PencilRuler, Hammer, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {

    const offerings = [
        {
            id: 1,
            title: 'Komplexné poradenstvo',
            description: 'V oblasti bezpečnostných a telekomunikačných systémov',
            icon: <Lightbulb className="w-10 h-10 text-electric" />,
        },
        {
            id: 2,
            title: 'Naprojektovanie systému',
            description: 'Podľa vašich požiadaviek a našich skúseností',
            icon: <PencilRuler className="w-10 h-10 text-electric" />,
        },
        {
            id: 3,
            title: 'Celková realizácia',
            description: 'Od návrhu riešenia až po oživenie systému',
            icon: <Hammer className="w-10 h-10 text-electric" />,
        },
        {
            id: 4,
            title: 'Záručný a pozáručný servis',
            description: 'Všetkých ponúkaných systémov',
            icon: <Wrench className="w-10 h-10 text-electric" />,
        },
    ];

    const services = [
        {
            id: 1,
            title: 'EZS - Zabezpečovacie systémy',
            description: 'Elektronické zabezpečovacie systémy pre okamžitú detekciu narušenia.',
            icon: <ShieldAlert className="w-10 h-10 text-electric" />,
            tag: 'Bezpečnosť',
        },
        {
            id: 2,
            title: 'KMS - Kamerové systémy',
            description: 'Kamerové systémy s vysokým rozlíšením a nočným videním pre 24/7 monitoring.',
            icon: <Cctv className="w-10 h-10 text-electric" />,
            tag: 'Dohľad',
        },
        {
            id: 3,
            title: 'RFID - Prístupové systémy',
            description: 'Inteligentné prístupové a dochádzkové systémy pre firmy a bytové domy.',
            icon: <KeyRound className="w-10 h-10 text-electric" />,
            tag: 'Kontrola',
        },
        {
            id: 4,
            title: 'EPS - Požiarna signalizácia',
            description: 'Elektrická požiarna signalizácia pre včasné varovanie pred požiarom.',
            icon: <Flame className="w-10 h-10 text-electric" />,
            tag: 'Ochrana',
        },
    ];

    return (
        <section id="services" className="py-32 bg-navy-900 relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Naše <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-500">Služby</span></h2>
                    <p className="text-slate-app max-w-2xl mx-auto text-lg leading-relaxed">
                        Poskytujeme komplexné portfólio bezpečnostných riešení prispôsobených vašim potrebám.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group"
                        >
                            <div className="mb-4 p-3 bg-navy-700/30 rounded-lg w-fit group-hover:bg-electric/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                                {service.icon}
                            </div>
                            <div className="mb-3">
                                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{service.tag}</span>
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-electric transition-colors">{service.title}</h3>
                            <p className="text-slate-app text-sm leading-loose">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 mb-16 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-navy-700/50"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-navy-900 px-6 text-sm text-electric uppercase tracking-widest font-semibold">
                            Komplexný proces realizácie
                        </span>
                    </div>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-navy-700" aria-hidden="true">
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
                    </div>

                    {offerings.map((offer, index) => (
                        <motion.div
                            key={offer.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-navy-900 border border-navy-700 group-hover:border-electric/50 shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:scale-110">
                                {offer.icon}
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-electric transition-colors">{offer.title}</h3>
                            <p className="text-slate-app text-sm leading-relaxed max-w-[220px]">
                                {offer.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
