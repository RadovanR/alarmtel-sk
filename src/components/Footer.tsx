const Footer = () => {
    return (
        <footer className="bg-navy-950 border-t border-navy-800 py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <span className="text-xl font-bold tracking-wider text-white">
                            ALARMTEL <span className="text-electric">SK</span>
                        </span>
                        <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} Alarmtel SK. Všetky práva vyhradené.</p>
                    </div>

                    <div className="flex gap-6 text-sm text-slate-400">
                        <a href="#" className="hover:text-electric transition-colors">Ochrana súkromia</a>
                        <a href="#" className="hover:text-electric transition-colors">Podmienky používania</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
