'use client';

import { Cctv, ShieldAlert, KeyRound, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {

    const services = [
        {
            id: 1,
            title: 'EZS - Alarmy',
            description: 'Elektronické zabezpečovacie systémy pre okamžitú detekciu narušenia.',
            icon: <ShieldAlert className="w-10 h-10 text-electric" />,
            tag: 'Bezpečnosť',
        },
        {
            id: 2,
            title: 'KMS - Kamery',
            description: 'Kamerové systémy s vysokým rozlíšením a nočným videním pre 24/7 monitoring.',
            icon: <Cctv className="w-10 h-10 text-electric" />,
            tag: 'Dohľad',
        },
        {
            id: 3,
            title: 'RFID - Prístup',
            description: 'Inteligentné prístupové a dochádzkové systémy pre firmy a bytové domy.',
            icon: <KeyRound className="w-10 h-10 text-electric" />,
            tag: 'Kontrola',
        },
        {
            id: 4,
            title: 'EPS - Požiarna',
            description: 'Elektrická požiarna signalizácia pre včasné varovanie pred požiarom.',
            icon: <Flame className="w-10 h-10 text-electric" />,
            tag: 'Ochrana',
        },
    ];

    return (
        <section id="services" className="py-24 bg-navy-900 relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Naše <span className="text-electric">Služby</span></h2>
                    <p className="text-slate-app max-w-2xl mx-auto">
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
                            <div className="mb-4 p-3 bg-navy-700/30 rounded-lg w-fit group-hover:bg-electric/10 transition-colors">
                                {service.icon}
                            </div>
                            <div className="mb-3">
                                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{service.tag}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-electric transition-colors">{service.title}</h3>
                            <p className="text-slate-app text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
