'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
    return (
        <section className="py-12 bg-electric relative overflow-hidden">
            <div className="absolute inset-0 bg-navy-900/10 pattern-grid-lg opacity-10" />

            <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h2 className="font-heading text-2xl md:text-4xl font-bold text-navy-950 mb-2">
                        Zabezpečte svoj majetok ešte dnes
                    </h2>
                    <p className="text-navy-900/80 font-medium text-lg">
                        Nečakajte kým bude neskoro. Navrhneme vám riešenie na mieru.
                    </p>
                </div>

                <Link
                    href="#contact"
                    className="group bg-navy-950 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                    Mám záujem
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

export default CTA;
