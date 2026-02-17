import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import SocialIcon from '../ui/SocialIcon';
import portfolioData from '../../data/portfolioData';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { social } = portfolioData.contact;

    const socialLinks = [
        { icon: <FaGithub />, href: social.github, label: 'GitHub' },
        { icon: <FaLinkedin />, href: social.linkedin, label: 'LinkedIn' },
        { icon: <FaTwitter />, href: social.twitter, label: 'Twitter' },
        { icon: <HiMail />, href: `mailto:${portfolioData.contact.email}`, label: 'Email' },
    ].filter(link => link.href); // Filter out null/undefined links

    return (
        <footer className="relative py-12 px-4 md:px-8 lg:px-16 bg-dark-950 dark:bg-dark-950 light:bg-gray-100">
            {/* Gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-8">
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link, index) => (
                            <SocialIcon
                                key={index}
                                href={link.href}
                                icon={link.icon}
                                label={link.label}
                            />
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-gray-400 dark:text-gray-500 flex items-center gap-2 flex-wrap justify-center">
                            <span>© {currentYear} {portfolioData.personal.name}.</span>
                            <span className="flex items-center gap-1">
                                Built with <FaHeart className="text-red-500 text-sm" /> using React & Tailwind CSS
                            </span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                            Home
                        </a>
                        <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                            Contact
                        </a>
                        <a
                            href={`/${portfolioData.resume.fileName}`}
                            download
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
