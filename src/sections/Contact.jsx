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
                    Contacteer <span className="gradient-text">Mij</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Heb je een uitdaging die opgelost moet worden? Laten we kijken hoe we die samen kunnen aanpakken. Ik kijk ernaar uit om van je te horen!
                </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
                {/* Contact Info */}
                <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="space-y-8 text-center"
>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

                        {/* Email */}
                        <Card className="mb-4" hover={false}>
                            <div className="flex items-center justify-center gap-3">
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
                                        <p className="text-sm text-gray-400 mb-1">Tel</p>
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
                        <h3 className="text-xl font-bold mb-4">Mijn socials</h3>
                        <div className="flex items-center justify-center gap-4">
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

                    
                </motion.div>

                
            </div>
        </SectionContainer>
    );
};

export default Contact;
