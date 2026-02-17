import { motion } from 'framer-motion';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import { useState } from 'react';
import Button from '../components/ui/Button';
import portfolioData from '../data/portfolioData';

const Hero = () => {
    const { name, role, tagline, profileImage } = portfolioData.personal;
    const { fileName } = portfolioData.resume;
    const [imageError, setImageError] = useState(false);

    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 lg:px-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative inline-block group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                            {!imageError && profileImage ? (
                                <img
                                    src={profileImage}
                                    alt={name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-slate-400">
                                    {name.charAt(0)}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Greeting */}
                    <motion.p
                        className="text-primary-400 font-medium mb-4 text-lg md:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi there! 👋 I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gradient-text">{name}</span>
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-300 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {role}
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={scrollToProjects}
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            href={`/${fileName}`}
                            download
                            icon={<HiDownload />}
                        >
                            Download Resume
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator - Made relative to avoid overlap */}
                <motion.div
                    className="mt-16 sm:mt-24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
                        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="text-sm">Scroll Down</span>
                        <HiArrowDown className="text-2xl" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
