import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi';
import SectionContainer from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';
import portfolioData from '../data/portfolioData';



const About = () => {
    const { bio, location } = portfolioData.personal;
    const education = portfolioData.education;
   


    return (
        <SectionContainer id="about" className="bg-dark-900/50 dark:bg-dark-900/50 light:bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - About Me */}
                
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="gradient-text">Me</span>
                    </h2>

                    <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-6">
                        {bio}
                    </p>

                    {location && (
                        <div className="flex items-center gap-2 text-gray-400 mb-6">
                            <HiLocationMarker className="text-primary-400 text-xl" />
                            <span>{location}</span>
                        </div>
                    )}

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <Card className="text-center" hover={false}>
                            <h3 className="text-3xl font-bold gradient-text">
                                {portfolioData.projects.length}+
                            </h3>
                            <p className="text-sm text-gray-400 mt-2">Projects</p>
                        </Card>
                        <Card className="text-center" hover={false}>
                            <h3 className="text-3xl font-bold gradient-text">
                                {portfolioData.experience.length}+
                            </h3>
                            <p className="text-sm text-gray-400 mt-2">Experiences</p>
                        </Card>
                        <Card className="text-center" hover={false}>
                            <h3 className="text-3xl font-bold gradient-text">
                                {portfolioData.skills.length}+
                            </h3>
                            <p className="text-sm text-gray-400 mt-2">Skills</p>
                        </Card>
                    </div>
                </motion.div>

                {/* Right Column - Education */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <h3 className="text-3xl font-bold mb-6">
                        <HiAcademicCap className="inline-block text-primary-400 mr-2" />
                        Education
                    </h3>

                    {education.map((edu, index) => (
                        <Card key={index} className="relative overflow-hidden group">
                            {/* Accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                            <div className="pl-4">
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    {edu.degree}
                                </h4>
                                <p className="text-primary-400 font-medium mb-2">
                                    {edu.institution}
                                </p>
                                <p className="text-sm text-gray-400 mb-3">
                                    {edu.period}
                                </p>
                                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                                    {edu.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default About;
