import { motion } from 'framer-motion';
import * as SimpleIcons from 'react-icons/si';

const SkillBadge = ({ name, icon, delay = 0 }) => {
    // Dynamically get the icon component from react-icons
    const IconComponent = SimpleIcons[icon] || SimpleIcons.SiReact;

    return (
        <motion.div
            className="glass rounded-xl p-4 flex flex-col items-center gap-3 hover-lift group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="text-4xl text-primary-400 group-hover:text-accent-400 transition-colors duration-300">
                <IconComponent />
            </div>
            <span className="text-sm font-medium text-gray-200 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                {name}
            </span>
        </motion.div>
    );
};

export default SkillBadge;
