import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SectionContainer from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SocialIcon from '../components/ui/SocialIcon';
import portfolioData from '../data/portfolioData';

const Contact = () => {
    const { email, phone, social } = portfolioData.contact;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // This is frontend only - in a real scenario, you'd integrate with a backend or service
        alert('This is a demo form. In production, this would send your message!');
        console.log('Form data:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
        { icon: <FaGithub />, href: social.github, label: 'GitHub' },
        { icon: <FaLinkedin />, href: social.linkedin, label: 'LinkedIn' },
        { icon: <FaTwitter />, href: social.twitter, label: 'Twitter' },
    ].filter(link => link.href);

    return (
        <SectionContainer id="contact">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? I'd love to hear from you!
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        {/* Email */}
                        <Card className="mb-4" hover={false}>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                                    <HiMail className="text-2xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <a
                                        href={`mailto:${email}`}
                                        className="text-white hover:text-primary-400 transition-colors font-medium"
                                    >
                                        {email}
                                    </a>
                                </div>
                            </div>
                        </Card>

                        {/* Phone (if provided) */}
                        {phone && (
                            <Card hover={false}>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                                        <HiPhone className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Phone</p>
                                        <a
                                            href={`tel:${phone}`}
                                            className="text-white hover:text-primary-400 transition-colors font-medium"
                                        >
                                            {phone}
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        )}
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <SocialIcon
                                    key={index}
                                    href={link.href}
                                    icon={link.icon}
                                    label={link.label}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="hidden lg:block">
                        <Card className="relative overflow-hidden" hover={false}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                            <div className="relative p-8 text-center">
                                <div className="text-6xl mb-4">💬</div>
                                <p className="text-gray-300">
                                    I typically respond within 24 hours
                                </p>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card hover={false}>
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                variant="primary"
                                size="lg"
                                type="submit"
                                className="w-full"
                            >
                                Send Message
                            </Button>

                            <p className="text-sm text-gray-500 text-center">
                                Note: This is a frontend-only demo. No emails will be sent.
                            </p>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
