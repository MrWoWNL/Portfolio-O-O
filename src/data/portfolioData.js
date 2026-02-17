/**
 * ============================================
 * PORTFOLIO DATA CONFIGURATION
 * ============================================
 * 
 * This is the ONLY file you need to edit to customize your portfolio!
 * Simply replace the placeholder data with your own information.
 * 
 * INSTRUCTIONS:
 * 1. Replace all text content with your own information
 * 2. Update the skills array with your actual skills
 * 3. Add your real projects (at least 3-6 recommended)
 * 4. Update social links with your actual profiles
 * 5. Replace the resume file (see README.md for instructions)
 * 
 * NO CODING KNOWLEDGE REQUIRED - Just edit the text!
 * ============================================
 */

const portfolioData = {
    // ========== PERSONAL INFORMATION ==========
    personal: {
        name: "Jules Evers",
        role: "Leerling Calandlyceum",
        tagline: "The sky is not the limit, no problem is too big to solve",

        // Short bio for About section (2-3 sentences recommended)
        bio: "Ik ben Jules Evers, vijfdejaars havo-leerling met een passie voor technologie en innovatie. Voor mij is the sky not the limit en geloof ik dat geen probleem te groot is om op te lossen. In mijn projecten combineer ik creativiteit en praktisch denken om ideeën te maken die zowel werken als inspireren.",

        // Location (optional)
        location: "Amsterdam, Netherlands",

        // Profile image (put your image in public/profile.jpg or update the path)
        profileImage: "/PFP.jpg",
    },

    // ========== EDUCATION ==========
    education: [
        {
            degree: "Student Havo",
            institution: "Calandlyceum Amsterdam",
            period: "2020 - Heden",
            description: "Student Technasium O&O aan het Calandlyceum Amsterdam. Tijdens mijn studie ben ik aan het werk met diverse projecten waarbij ik mijn vaardigheden in onderzoek, ontwerp en technologie aan het ontwikkelen ben. Mijn passie voor innovatie en probleemoplossing heeft me gedreven om altijd op zoek te gaan naar nieuwe uitdagingen en kansen om te leren.",
        },
        // Add more education entries if needed
    ],

    // ========== SKILLS ==========
    // Each skill should have: name, icon (from react-icons), and category
    // Categories: 'frontend', 'backend', 'tools'
    skills: [
        // Onderzoeken
        {
            name: "Onderzoeksvragen formuleren",
            category: "Onderzoeken",
            icon: "SiReact", // From react-icons/si (Simple Icons)
        },
        {
            name: "Hypotheses opstellen",
            category: "Onderzoeken",
            icon: "PFP.jpg",
        },
        {
            name: "bronnen selecteren en analyseren",
            category: "Onderzoeken",
            icon: "SiTypescript",
        },
        {
            name: "Data verzamelen",
            category: "Onderzoeken",
            icon: "SiTailwindcss",
        },
        {
            name: "esultaten structureren en interpreteren",
            category: "Onderzoeken",
            icon: "SiNextdotjs",
        },
        {
            name: "Conclusies trekken",
            category: "Onderzoeken",
            icon: "SiHtml5",
        },
        {
            name: "Kritisch reflecteren op validiteit en betrouwbaarheid",
            category: "Onderzoeken",
            icon: "SiCss3",
        },
        {
            name: "Onderzoek verbeteren na feedback",
            category: "Onderzoeken",
            icon: "SiCss3",
        },

        // Backend Skills
        {
            name: "Probleemanalyse uitvoeren",
            category: "Ontwerpen",
            icon: "SiNodedotjs",
        },
        {
            name: "Eisen en wensen opstellen",
            category: "Ontwerpen",
            icon: "SiExpress",
        },
        {
            name: "Creatieve concepten bedenken",
            category: "Ontwerpen",
            icon: "SiMongodb",
        },
        {
            name: "Ideeën vergelijken en onderbouwen",
            category: "Ontwerpen",
            icon: "SiPostgresql",
        },
        {
            name: "Prototypes maken (digitaal of fysiek)",
            category: "Ontwerpen",
            icon: "SiPython",
        },
        {
            name: "Testen en itereren",
            category: "Ontwerpen",
            icon: "SiFirebase",
        },
         {
            name: "Technische haalbaarheid inschatten",
            category: "Ontwerpen",
            icon: "SiFirebase",
        },
        {
            name: "Duurzaamheid en impact meenemen",
            category: "Ontwerpen",
            icon: "SiFirebase",
        },
        {
            name: "Coderen",
            category: "Ontwerpen",
            icon: "SiFirebase",
        },
        {
            name: "Brainstormen",
            category: "Ontwerpen",
            icon: "SiFirebase",
        },
        

        // Tools & Technologies
        {
            name: "Git",
            category: "Communicatie",
            icon: "SiGit",
        },
        {
            name: "GitHub",
            category: "Communicatie",
            icon: "SiGithub",
        },
        {
            name: "VS Code",
            category: "Communicatie",
            icon: "SiVisualstudiocode",
        },
        {
            name: "Figma",
            category: "tools",
            icon: "SiFigma",
        },
        {
            name: "Docker",
            category: "tools",
            icon: "SiDocker",
        },
        {
            name: "Vercel",
            category: "tools",
            icon: "SiVercel",
        },
    ],

    // ========== PROJECTS ==========
    // Each project should include: title, description, tech stack, links, and image
    projects: [
        {
            title: "TaskFlow Pro",
            description: "A modern task management application with real-time collaboration features. Built with React and Firebase, it helps teams stay organized and productive.",
            techStack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
            githubLink: "https://github.com/yourusername/taskflow-pro",
            liveLink: "https://taskflow-pro.vercel.app",
            image: "/project1.jpg", // Add project images to public folder
            featured: true, // Mark your best projects as featured
        },
        {
            title: "WeatherVue",
            description: "A beautiful weather application that provides accurate forecasts using real-time data from multiple APIs. Features location-based weather and air quality index.",
            techStack: ["Next.js", "TypeScript", "OpenWeather API", "Chart.js"],
            githubLink: "https://github.com/yourusername/weathervue",
            liveLink: "https://weathervue.vercel.app",
            image: "/project2.jpg",
            featured: true,
        },
        {
            title: "CodeSnippet Manager",
            description: "A developer tool for storing and organizing code snippets with syntax highlighting. Supports multiple programming languages and cloud sync.",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            githubLink: "https://github.com/yourusername/codesnippet-manager",
            liveLink: "https://codesnippet.herokuapp.com",
            image: "/project3.jpg",
            featured: false,
        },
        {
            title: "Portfolio Generator",
            description: "An open-source tool that helps developers create their portfolio websites using templates. Supports markdown content and easy deployment.",
            techStack: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
            githubLink: "https://github.com/yourusername/portfolio-generator",
            liveLink: "https://portfolio-gen.netlify.app",
            image: "/project4.jpg",
            featured: false,
        },
        {
            title: "Fitness Tracker App",
            description: "Mobile-responsive fitness tracking application with workout plans, progress tracking, and nutrition logging. Gamification features to keep users motivated.",
            techStack: ["React Native", "Firebase", "Redux"],
            githubLink: "https://github.com/yourusername/fitness-tracker",
            liveLink: "https://fitness-tracker-demo.vercel.app",
            image: "/project5.jpg",
            featured: false,
        },
        {
            title: "E-Learning Platform",
            description: "A comprehensive learning management system with video courses, quizzes, and progress tracking. Supports multiple instructors and student enrollment.",
            techStack: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
            githubLink: "https://github.com/yourusername/elearning-platform",
            liveLink: null, // Set to null if no live demo
            image: "/project6.jpg",
            featured: false,
        },
    ],

    // ========== EXPERIENCE / ACHIEVEMENTS ==========
    experience: [
        {
            title: "Frontend Developer Intern",
            company: "TechCorp Solutions",
            period: "Jun 2024 - Aug 2024",
            description: "Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components. Improved application performance by 40%.",
            type: "internship", // Options: 'internship', 'training', 'hackathon', 'achievement'
        },
        {
            title: "Winner - University Hackathon 2024",
            company: "UC Berkeley",
            period: "Mar 2024",
            description: "Led a team of 4 to build an AI-powered study assistant that won first place among 50+ teams. Implemented the frontend and integrated OpenAI API for smart recommendations.",
            type: "hackathon",
        },
        {
            title: "Web Development Bootcamp",
            company: "Udemy - Dr. Angela Yu",
            period: "Jan 2023 - Apr 2023",
            description: "Completed intensive 60+ hour bootcamp covering full-stack web development. Built 20+ projects including RESTful APIs, authentication systems, and database integration.",
            type: "training",
        },
        {
            title: "Open Source Contributor",
            company: "Various Projects",
            period: "2023 - Present",
            description: "Active contributor to open-source projects on GitHub. Made significant contributions to React component libraries and developer tools with 500+ combined stars.",
            type: "achievement",
        },
    ],

    // ========== CONTACT INFORMATION ==========
    contact: {
        email: "alex.johnson@email.com",
        phone: "+1 (555) 123-4567", // Optional

        // Social media links (set to null or empty string to hide)
        social: {
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourusername",
            twitter: "https://twitter.com/yourusername", // Optional
            instagram: null, // Will not be displayed
            portfolio: "https://yourwebsite.com", // Optional
        },
    },

    // ========== RESUME ==========
    resume: {
        // Put your resume PDF in the /public folder and update the filename here
        fileName: "resume.pdf",

        // Optional: Add a brief description
        description: "Download my resume to learn more about my experience and skills",
    },

    // ========== THEME CUSTOMIZATION (OPTIONAL) ==========
    theme: {
        // Default theme: 'dark' or 'light'
        defaultTheme: "dark",

        // Enable/disable theme toggle
        enableThemeToggle: false,
    },

    // ========== SEO & METADATA ==========
    seo: {
        title: "Alex Johnson - Full-Stack Developer Portfolio",
        description: "Portfolio of Alex Johnson, a passionate Full-Stack Developer specializing in React, Node.js, and modern web technologies.",
        keywords: "developer, portfolio, react, node.js, full-stack, web development",
    },
};

export default portfolioData;
