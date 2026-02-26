import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionContainer from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import portfolioData from '../data/portfolioData';

const Projects = () => {
    const { projects } = portfolioData;
    const featuredProjects = projects.filter(p => p.featured);


    const ProjectCard = ({ project, featured = false }) => (
        <Card className={`h-full flex flex-col ${featured ? 'md:col-span-2' : ''}`}>
            

            {/* Project Content */}
            <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-4 flex-1">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {project.githubLink && (
                        <Button
                            variant="secondary"
                            size="sm"
                            href={project.githubLink}
                            icon={<FaGithub />}
                            className="flex-1"
                        >
                            Code
                        </Button>
                    )}
                    {project.liveLink && (
                        <Button
                            variant="primary"
                            size="sm"
                            href={project.liveLink}
                            icon={<FaExternalLinkAlt />}
                            className="flex-1"
                        >
                            Ga naar
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );

    return (
        <SectionContainer id="projects" className="bg-dark-900/50 dark:bg-dark-900/50 light:bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Mijn <span className="gradient-text">Projecten</span>
                </h2>
                
            </motion.div>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} featured />
                        </motion.div>
                    ))}
                </div>
            )}

            
        </SectionContainer>
    );
};

export default Projects;
