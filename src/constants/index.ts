// Animation constants from Front-End Spec
export const ANIMATION = {
    duration: 0.6,
    easing: [0.22, 1, 0.36, 1] as const,
    stagger: 0.1,
} as const;

// Framer Motion presets
export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
        duration: ANIMATION.duration,
        ease: ANIMATION.easing,
    },
};

export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: {
        duration: ANIMATION.duration,
        ease: ANIMATION.easing,
    },
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: ANIMATION.stagger,
        },
    },
};

// Service data
export const SERVICES = [
    {
        id: "ai-development",
        icon: "Brain",
        title: "AI Development",
        description:
            "Custom AI models and intelligent automation solutions tailored to your business needs.",
    },
    {
        id: "saas-platforms",
        icon: "Layers",
        title: "SaaS Platforms",
        description:
            "End-to-end SaaS development with scalable architecture and modern cloud infrastructure.",
    },
    {
        id: "process-automation",
        icon: "Zap",
        title: "Process Automation",
        description:
            "Streamline operations with intelligent workflow automation and integration solutions.",
    },
];

// Stats data
export const STATS = [
    { label: "Projects Delivered", value: 150, suffix: "+" },
    { label: "Client Satisfaction", value: 99.9, suffix: "%" },
    { label: "Team Members", value: 40, suffix: "+" },
    { label: "Uptime", value: 99.9, suffix: "%" },
];

// Project portfolio data
export const PROJECTS = [
    {
        id: "ai-crm",
        title: "Neural CRM",
        category: "AI / SaaS",
        description:
            "An AI-powered CRM that predicts churn, scores leads automatically, and surfaces actionable insights in real time.",
        gradient: "from-indigo-500 to-purple-600",
    },
    {
        id: "devops-platform",
        title: "FlowOps Platform",
        category: "Cloud / DevOps",
        description:
            "End-to-end CI/CD orchestration platform with zero-config deployments across multi-cloud environments.",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        id: "ml-pipeline",
        title: "DataForge ML",
        category: "MLOps",
        description:
            "Automated ML pipeline builder that handles data ingestion, feature engineering, training, and model serving.",
        gradient: "from-purple-500 to-pink-600",
    },
    {
        id: "ecommerce-ai",
        title: "CartIQ Engine",
        category: "E-Commerce / AI",
        description:
            "Real-time personalisation engine that boosted average order value by 34% through contextual recommendations.",
        gradient: "from-orange-500 to-red-600",
    },
    {
        id: "analytics-dash",
        title: "Prism Analytics",
        category: "Data / Visualisation",
        description:
            "Interactive business intelligence dashboard with live WebSocket feeds and sub-second query performance.",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        id: "fintech-api",
        title: "PayNexus API",
        category: "FinTech",
        description:
            "PCI-DSS compliant payment processing API handling 1M+ transactions/day with 99.99% uptime SLA.",
        gradient: "from-yellow-500 to-orange-600",
    },
];

// Navigation links
export const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];
