import { motion } from 'framer-motion';
import SectionContainer from '../components/ui/SectionContainer';
import SkillBadge from '../components/ui/SkillBadge';
import portfolioData from '../data/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    // Group skills by category
    const frontendSkills = skills.filter(skill => skill.category === 'Onderzoeken');
    const backendSkills = skills.filter(skill => skill.category === 'Ontwerpen');
    const toolsSkills = skills.filter(skill => skill.category === 'Communicatie');

    const skillCategories = [
        { title: 'Onderzoeken', skills: frontendSkills, color: 'from-primary-500 to-primary-600' },
        { title: 'Ontwerpen', skills: backendSkills, color: 'from-accent-500 to-accent-600' },
        { title: 'Communicatie', skills: toolsSkills, color: 'from-pink-500 to-pink-600' },
    ];

    return (
        <SectionContainer id="skills">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Mijn <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Tools die ik door de jaren heen ontwikkeld heb en die ik graag inzet om problemen op te lossen.
                </p>
            </motion.div>

            <div className="space-y-16">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    >
                        {/* Category Title */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`h-1 flex-1 bg-gradient-to-r ${category.color} rounded-full`} />
                            <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                {category.title}
                            </h3>
                            <div className={`h-1 flex-1 bg-gradient-to-l ${category.color} rounded-full`} />
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {category.skills.map((skill, skillIndex) => (
                                <SkillBadge
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                    delay={skillIndex * 0.05}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Skills;
