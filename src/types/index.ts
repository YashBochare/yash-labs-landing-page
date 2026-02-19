export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface StatItem {
    label: string;
    value: number;
    suffix: string;
}

export interface LeadSubmission {
    name: string;
    email: string;
    message: string;
}

export interface NavLink {
    label: string;
    href: string;
}
