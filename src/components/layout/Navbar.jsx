import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import portfolioData from '../../data/portfolioData';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass-strong border-b border-white/5'
                : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {portfolioData.personal.name.split(' ')[0]}
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-slate-400 hover:text-white transition-colors duration-300 relative group font-medium"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white text-2xl"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden glass-strong border-b border-white/5"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="block text-slate-400 hover:text-white transition-colors duration-300 py-2 font-medium"
                                    whileHover={{ x: 10 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
