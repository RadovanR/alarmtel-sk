'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic would go here
        alert('Správa bola odoslaná (Demo)');
    };

    return (
        <section id="contact" className="py-24 bg-navy-900 border-t border-navy-800">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Napíšte nám</h2>
                        <p className="text-slate-app mb-10 text-lg">
                            Máte otázky alebo záujem o cenovú ponuku?
                            Vyplňte formulár a my sa vám ozveme čo najskôr.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-navy-800 rounded-lg text-electric border border-navy-700">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Zavolajte nám</h4>
                                    <a href="tel:+421918565051" className="text-slate-app hover:text-electric transition-colors">+421 918 565 051</a>
                                    <br />
                                    <a href="tel:+421905365788" className="text-slate-app hover:text-electric transition-colors">+421 905 365 788</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-navy-800 rounded-lg text-electric border border-navy-700">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Napíšte e-mail</h4>
                                    <a href="mailto:info@alarmtel.sk" className="text-slate-app hover:text-electric transition-colors">alarmtel@alarmtel.sk</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-navy-800 rounded-lg text-electric border border-navy-700">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Navštívte nás</h4>
                                    <p className="text-slate-app">
                                        Južná Trieda 78 (areál ELTIP)<br />
                                        040 01 Košice<br />
                                        Slovensko
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 blur-[60px] rounded-full -z-10" />

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Meno a Priezvisko</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-navy-900 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors"
                                    placeholder="Meno a Priezvisko"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-navy-900 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors"
                                        placeholder="email@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Telefón</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-navy-900 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors"
                                        placeholder="+421 ..."
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Správa</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-navy-900 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors resize-none"
                                    placeholder="O aké služby máte záujem?"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 mt-4">
                                Odoslať nezáväzne
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
