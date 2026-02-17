import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiLightningBolt, HiStar } from 'react-icons/hi';
import SectionContainer from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';
import portfolioData from '../data/portfolioData';

const Experience = () => {
    const { experience } = portfolioData;

    const getIcon = (type) => {
        switch (type) {
            case 'internship':
                return <HiBriefcase className="text-2xl" />;
            case 'training':
                return <HiAcademicCap className="text-2xl" />;
            case 'hackathon':
                return <HiLightningBolt className="text-2xl" />;
            case 'achievement':
                return <HiStar className="text-2xl" />;
            default:
                return <HiBriefcase className="text-2xl" />;
        }
    };

    const getColor = (type) => {
        switch (type) {
            case 'internship':
                return 'from-blue-500 to-blue-600';
            case 'training':
                return 'from-green-500 to-green-600';
            case 'hackathon':
                return 'from-yellow-500 to-yellow-600';
            case 'achievement':
                return 'from-purple-500 to-purple-600';
            default:
                return 'from-primary-500 to-accent-500';
        }
    };

    return (
        <SectionContainer id="experience">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Experience & <span className="gradient-text">Achievements</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    My journey in tech, from internships to hackathons and personal milestones
                </p>
            </motion.div>

            <div className="relative">
                {/* Timeline line (desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-pink-500 transform -translate-x-1/2" />

                <div className="space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Card */}
                            <div className="flex-1 w-full">
                                <Card className="relative overflow-hidden">
                                    {/* Accent corner */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${getColor(exp.type)} opacity-10 blur-2xl`} />

                                    <div className="relative">
                                        {/* Icon & Type */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-3 rounded-lg bg-gradient-to-br ${getColor(exp.type)} text-white`}>
                                                {getIcon(exp.type)}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-primary-400 font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Period */}
                                        <p className="text-sm text-gray-400 mb-4">
                                            {exp.period}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                                            {exp.description}
                                        </p>
                                    </div>
                                </Card>
                            </div>

                            {/* Timeline dot (desktop) */}
                            <div className="hidden md:flex items-center justify-center">
                                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${getColor(exp.type)} shadow-lg`} />
                            </div>

                            {/* Spacer */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default Experience;
