import { motion } from 'framer-motion';
import { HiDownload, HiDocumentText } from 'react-icons/hi';
import SectionContainer from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import portfolioData from '../data/portfolioData';

const Resume = () => {
    const { fileName, description } = portfolioData.resume;

    return (
        <SectionContainer id="resume" className="bg-slate-900/50">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Resume</span>
                    </h2>
                    <p className="text-gray-400">
                        {description}
                    </p>
                </div>

                <Card className="text-center relative overflow-hidden" hover={false}>
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5">
                        <div className="absolute top-10 left-10 text-9xl">📄</div>
                        <div className="absolute bottom-10 right-10 text-9xl">📄</div>
                    </div>

                    <div className="relative z-10 py-12">
                        {/* Document Icon */}
                        <motion.div
                            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mb-6"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <HiDocumentText className="text-5xl text-white" />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                            {portfolioData.personal.name}'s Resume
                        </h3>

                        <p className="text-slate-300 mb-8 max-w-md mx-auto">
                            View my complete professional background, skills, and experience in detail.
                        </p>

                        {/* Download Button */}
                        <Button
                            variant="primary"
                            size="lg"
                            href={`/${fileName}`}
                            download
                            icon={<HiDownload />}
                        >
                            Download Resume (PDF)
                        </Button>

                        {/* File info */}
                        <p className="text-sm text-gray-500 mt-6">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                </Card>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-center"
                >
                    <p className="text-gray-400 text-sm">
                        Looking for more details? Feel free to{' '}
                        <a href="#contact" className="text-primary-400 hover:text-primary-300 transition-colors">
                            contact me
                        </a>
                        {' '}or connect on{' '}
                        <a
                            href={portfolioData.contact.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 transition-colors"
                        >
                            LinkedIn
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </SectionContainer>
    );
};

export default Resume;
