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
            period: "2021 - Heden",
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
            name: "Solderen",
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
        {
            name: "Webdevelopment",
            category: "Ontwerpen",
            icon: "SiFirebase",
        },
        
        

        // Tools & Technologies
        {
            name: "Professioneel presenteren",
            category: "Communicatie",
            icon: "SiGit",
        },
        {
            name: "Pitching van ideeën",
            category: "Communicatie",
            icon: "SiGithub",
        },
        {
            name: "Technische informatie helder uitleggen",
            category: "Communicatie",
            icon: "SiVisualstudiocode",
        },
        {
            name: "Feedback geven",
            category: "Communicatie",
            icon: "SiFigma",
        },
        {
            name: "Samenwerken",
            category: "Communicatie",
            icon: "SiDocker",
        },
        {
            name: "Argumenteren en overtuigen",
            category: "Communicatie",
            icon: "SiVercel",
        },
    ],

    // ========== Leerjaren ==========
    // Each project should include: title, description, tech stack, links, and image
    projects: [
        {
            title: "Meesterproef 5H",
            description: "In mijn vijfde leerjaar werk ik voor CE Trainer aan de ontwikkeling van NextStep, een applicatie die basisschoolleerlingen begeleidt in de overgang naar de middelbare school. Binnen dit project richt ik mij op het combineren van gebruiksvriendelijkheid, didactiek en technologie om leerlingen stap voor stap zelfverzekerder te maken in hun volgende fase. Dit project vraagt niet alleen om technisch ontwerp, maar ook om inzicht in doelgroep, motivatie en gedragsverandering. Hier komt mijn volledige O&O-ontwikkeling samen: onderzoeken, ontwerpen en strategisch denken.",
            techStack: ["Supabase", "JavaScript", "UX/UI Design", "CE Trainer"],
            liveLink: "https://portefolio099.cms.webnode.nl/o-o-5/",

            featured: true,
        },
        {
            title: "1H/V",
            description: "In mijn eerste jaar op het Calandlyceum maakte ik voor het eerst kennis met O&O. Dit was mijn introductie in het werken met echte opdrachtgevers en het oplossen van realistische problemen. Voor Decathlon werkte ik aan een innovatief remsysteem voor een skateboard, waarbij veiligheid en gebruiksgemak centraal stonden. Voor het Van Gogh Museum ontwikkelde ik in Unity een interactieve simulatie waarin een schilderij digitaal werd nagebootst. Daarnaast ontwierp ik een multifunctioneel stopcontact dat ook als verlengsnoer gebruikt kan worden.Dit jaar legde de basis voor mijn manier van denken: problemen analyseren, creatief ontwerpen en ideeën vertalen naar concrete oplossingen.",
            techStack: ["Sketchup", "Solderen", "Van Gogh Museum", "Decatlon", "Elektro techniek", "Unity"],
            liveLink: "https://portefolio099.cms.webnode.nl/o-o/",
            image: "/project1.jpg", // Add project images to public folder
            featured: true, // Mark your best projects as featured
        },
        {
            title: "2H/V",
            description: "In mijn tweede jaar binnen O&O verbreedde ik mijn technische en ontwerpvaardigheden. Ik experimenteerde met de micro:bit en leerde hoe je hardware en programmering combineert om interactieve systemen te maken. Binnen het project Artcadia ontwierpen we een duurzaam en toekomstbestendig huis, waarbij we nadachten over energie, materiaalgebruik en leefomgeving. Voor De Kaashut ontwikkelden we een website waarin gebruiksvriendelijkheid en duidelijke communicatie centraal stonden. Daarnaast werkten we voor IJs-Break aan het ontwikkelen van een eigen ijsproduct, waarbij experimenteren, testen en verbeteren een belangrijke rol speelden.Dit jaar leerde ik om techniek, duurzaamheid en ondernemerschap met elkaar te verbinden.",
            techStack: ["Onderzoeksvragen formuleren", "Data verzamelen", "Webdesign", "Duurzaamheid meenemen", "IJs-Break", "Artcadia", "Micro:bit", "De Kaashut"],
            liveLink: "https://portefolio099.cms.webnode.nl/o-o-2/",
            image: "/project2.jpg",
            featured: true,
        },
        {
            title: "3H/V",
            description: "In mijn derde jaar werd O&O technischer en conceptueler. Met behulp van biomimicry ontwierpen we een innovatieve golfbreker, geïnspireerd op natuurlijke structuren en processen. Het doel was om golfenergie effectiever te absorberen en tegelijkertijd duurzamer te bouwen. Dit project dwong mij om natuurprincipes te analyseren en te vertalen naar een technisch toepasbaar ontwerp. Daarnaast werkten we voor Pentacon aan een duurzaamheidsadvies. Hierbij onderzochten we hoe processen en keuzes binnen het bedrijf toekomstbestendiger konden worden ingericht. Ik leerde om niet alleen technisch te denken, maar ook strategisch en maatschappelijk. Dit jaar verschoof mijn focus van “iets maken” naar “iets doordacht ontwerpen”.",
            techStack: ["Onderzoeksvragen formuleren", "Data verzamelen", "Creatieve concepten genereren", "Duurzaamheid meenemen", "Prototypeontwikkeling", "Natuurprincipes vertalen naar technische concepten", "feetback verwerken", "Pentacon", "Biomimicry"],
            liveLink: "https://portefolio099.cms.webnode.nl/o-o-3/",
            image: "/project3.jpg",
            featured: true,
        },
        {
            title: "4H",
            description: "In mijn vierde jaar werkten we voor Vakkanjers aan de ontwikkeling van een drone die onbegaanbaar terrein kan verkennen. Het concept richtte zich op inzet in Tsjernobyl, waar de drone via AI afwijkingen bij dieren kan detecteren en analyseren. Voor de energievoorziening onderzochten we het gebruik van betavoltaïsche cellen als langdurige en autonome energiebron. Daarnaast ontwikkelden we voor Pentacon de BreakBuddy-app, die gebruikers periodiek herinnert om pauzes te nemen en zo gezonder en productiever te werken. In dit jaar combineerde ik high-tech innovatie met praktische toepasbaarheid. Ik leerde om complexe systemen te ontwerpen die niet alleen technisch geavanceerd zijn, maar ook echt waarde toevoegen voor gebruikers en de samenleving.",
            techStack: ["Raspberry Pi", "basic code schrijven", "Radiatie techniek", "AI integreren", "Pentacon", "Vakkanjers"],
            liveLink: "https://portefolio099.cms.webnode.nl/o-o-4/",
            image: "/project4.jpg",
            featured: true,
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
        email: "121050@calandlyceum.nl",

        // Social media links (set to null or empty string to hide)
        social: {
            github: "https://github.com/MrWoWNL",
            linkedin: "https://www.linkedin.com/in/jules-evers-92751a261/",
            instagram: null, // Will not be displayed
            portfolio: "https://yourwebsite.com", // Optional
        },
    },

    // ========== RESUME ==========
    resume: {
        // Put your resume PDF in the /public folder and update the filename here
        fileName: "resume.pdf",

        // Optional: Add a brief description
        description: "Nog geen beschikbare CV",
    },

    // ========== THEME CUSTOMIZATION (OPTIONAL) ==========
    theme: {
        // Default theme: 'dark' or 'light'
        defaultTheme: "light",

        // Enable/disable theme toggle
        enableThemeToggle: true,
    },

    // ========== SEO & METADATA ==========
    seo: {
        title: "Jules Evers - Portfolio",
        description: "Portfolio van Jules Evers, een leerling van het Calandlyceum met een passie voor technologie en innovatie. Bekijk mijn projecten, vaardigheden en ervaring.",
        keywords: "developer, portfolio, scholier, Onderzoek en ondwerp, O&O, creatief",
    },
};

export default portfolioData;
