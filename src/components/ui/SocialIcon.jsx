import { motion } from 'framer-motion';

const SocialIcon = ({ href, icon, label }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full glass text-gray-300 hover:text-white transition-colors duration-300 group relative"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
        >
            <span className="text-xl group-hover:glow-sm transition-all duration-300">
                {icon}
            </span>

            {/* Tooltip */}
            <span className="absolute -top-10 bg-dark-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {label}
            </span>
        </motion.a>
    );
};

export default SocialIcon;
