import { motion } from 'framer-motion';
import * as SiIcons from "react-icons/si";
import * as FiIcons from "react-icons/fi";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as TbIcons from "react-icons/tb";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as Fa6Icons from "react-icons/fa6";
import * as VscIcons from "react-icons/vsc"

const SkillBadge = ({ name, icon, delay = 0 }) => {
    // Dynamically get the icon component from all imported icon sets
    const IconComponent =
        SiIcons[icon] ||
        FiIcons[icon] ||
        FaIcons[icon] ||
        TbIcons[icon] ||  
        GiIcons[icon] ||
        VscIcons[icon] ||
        Fa6Icons[icon] ||
        RiIcons[icon] ||
        CgIcons[icon];

    if (!IconComponent) {
        console.warn(`Icon ${icon} not found!`);
        return null; // voorkomt dat er een verkeerd icoon verschijnt
    }

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