import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionContainer from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import portfolioData from '../data/portfolioData';

const Projects = () => {
    const { projects } = portfolioData;
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    const ProjectCard = ({ project, featured = false }) => (
        <Card className={`h-full flex flex-col ${featured ? 'md:col-span-2' : ''}`}>
            {/* Project Image Placeholder */}
            <div className="relative w-full h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl mb-6 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                </div>
                {featured && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Featured
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

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
                            Live Demo
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
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and passion for development
                </p>
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

            {/* Other Projects */}
            {otherProjects.length > 0 && (
                <>
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        Other <span className="gradient-text">Projects</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </>
            )}
        </SectionContainer>
    );
};

export default Projects;
