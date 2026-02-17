import { motion } from 'framer-motion';

const SectionContainer = ({ id, children, className = '' }) => {
    return (
        <motion.section
            id={id}
            className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </motion.section>
    );
};

export default SectionContainer;
