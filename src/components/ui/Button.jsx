import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    onClick,
    href,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 shadow-lg hover:shadow-xl hover:shadow-primary-500/50",
        secondary: "glass text-white border border-white/20 hover:bg-white/10 hover:border-white/30",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5",
        outline: "border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500 hover:text-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {icon && <span className="text-xl">{icon}</span>}
            {children}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={classes}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
