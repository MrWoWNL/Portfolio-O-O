import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, glass = true, ...props }) => {
    const baseStyles = "rounded-2xl p-6 transition-smooth";
    const glassStyles = glass ? "glass" : "bg-slate-900 border border-slate-800";
    const hoverStyles = hover ? "hover-lift cursor-pointer" : "";

    return (
        <motion.div
            className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
