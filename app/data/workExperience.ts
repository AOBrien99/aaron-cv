export interface Module {
    code: string;
    title: string;
    grade: string;
}

export interface Semester {
    name: string;
    qca: string;
    modules: Module[];
}

export interface WorkExperience {
    id: string;
    type: 'work' | 'education';
    year: string;
    title: string;
    company: string;
    role: string;
    shortDescription: string;
    overview: string;
    responsibilities?: string[];
    achievements?: string[];
    skills?: string[];
    transcript?: Semester[];
}

export const workExperience: WorkExperience[] = [
    {
        id: "jlr-tech-lead",
        type: "work",
        year: "May 2024 – Present",
        title: "Technical Lead",
        company: "Jaguar Land Rover",
        role: "Technical Lead",
        shortDescription: "Technical Lead responsible for platform architecture, technical strategy, and end-to-end delivery.",
        overview: "Technical Lead responsible for platform architecture, technical strategy, and end-to-end delivery. Owns requirements definition, solution design, and Agile execution while mentoring engineers and aligning technical initiatives with business goals.",
        responsibilities: [
            "Lead end-to-end solution architecture, producing high- and low-level designs for scalable, secure platform services.",
            "Translate business needs into structured technical requirements, epics, and user stories.",
            "Define and maintain architectural standards, ensuring consistency across platform services.",
            "Act as technical sign-off authority for major design and platform decisions.",
            "Drive backlog prioritization and roadmap planning in collaboration with stakeholders and product teams.",
            "Lead Agile ceremonies and foster continuous improvement practices.",
            "Mentor engineers through 1:1s, design reviews, and technical coaching sessions.",
            "Establish best practices across CI/CD, testing, and cloud-native development."
        ],
        achievements: [
            "Architected and delivered multiple platform services aligned to long-term technical strategy.",
            "Eliminated a critical testing bottleneck by coordinating rapid patch releases, unlocking 50+ hours of additional automated testing across customer assets.",
            "Improved system reliability and deployment frequency through CI/CD optimization and test coverage improvements.",
            "Strengthened cross-team alignment by formalizing requirement capture and architecture review processes.",
            "Recognized as a key contributor to platform technical strategy and governance."
        ],
        skills: ["Solution Architecture", "Agile Leadership", "Technical Strategy", "Mentoring", "CI/CD", "AWS", "Agile Methodologies", "Scrum"],
    },
    {
        id: "jlr-platform-engineer",
        type: "work",
        year: "May 2022 – May 2024",
        title: "Platform Engineer",
        company: "Jaguar Land Rover",
        role: "Platform Engineer",
        shortDescription: "Platform Engineer focused on developing scalable Python applications, CI/CD pipelines, and AWS cloud solutions.",
        overview: "Platform Engineer focused on developing scalable Python applications, CI/CD pipelines, and AWS-integrated cloud solutions within an Agile environment.",
        responsibilities: [
            "Designed and implemented Python-based applications and backend services.",
            "Developed and maintained REST APIs and system integrations.",
            "Built and optimized CI/CD pipelines using GitLab.",
            "Implemented infrastructure as code using Terraform.",
            "Developed automated testing frameworks to improve reliability and coverage.",
            "Collaborated with cross-functional teams to refine requirements and deliver incremental software releases."
        ],
        achievements: [
            "Delivered secure, cloud-integrated solutions aligned with enterprise standards.",
            "Improved release efficiency and platform stability through CI/CD enhancements.",
            "Increased automation coverage, reducing regression defects."
        ],
        skills: ["Python", "AWS", "Gitlab", "Terraform", "REST APIs", "Test Automation", "Agile Methodologies", "Linux", "FastAPI"],
    },
    {
        id: "university-of-limerick-masters",
        type: "education",
        year: "2017 – 2022",
        title: "Master of Engineering",
        company: "University of Limerick",
        role: "Electronic & Computer Engineering",
        shortDescription: "Grade Achieved 2.1 | QCA 3.18",
        overview: "Master of Engineering in Electronic & Computer Engineering. Achieved a 2.1 grade with a QCA of 3.18. Below is the full academic transcript.",
        responsibilities: [],
        achievements: [],
        skills: ["Electronic Engineering", "Computer Engineering"],
        transcript: [
            {
                name: "2021/2 Semester 2",
                qca: "3.15",
                modules: [
                    { code: "CS6502", title: "APPLIED BIG DATA AND VISUALIZATION", grade: "B2" },
                    { code: "EE6062", title: "INTEGRATED MASTER OF ENGINEERING PROJECT 2", grade: "A2" },
                    { code: "EE6622", title: "ASICS 2 (ANALOGUE ASICS)", grade: "A2" },
                    { code: "ME6212", title: "ENGINEERING A CIRCULAR ECONOMY", grade: "C1" },
                ]
            },
            {
                name: "2021/2 Semester 1",
                qca: "3.11",
                modules: [
                    { code: "EE4031", title: "MODERN ELECTRICAL POWER SYSTEMS", grade: "C2" },
                    { code: "EE6021", title: "TEST DEVELOPMENT ENGINEERING", grade: "A2" },
                    { code: "EE6061", title: "INTEGRATED MASTER OF ENGINEERING PROJECT 1", grade: "A2" },
                    { code: "EE6621", title: "ASICS 1 (DIGITAL ASICS)", grade: "A2" },
                ]
            },
            {
                name: "2020/1 Semester 2",
                qca: "2.97",
                modules: [
                    { code: "CE4518", title: "COMPUTER ARCHITECTURE", grade: "B1" },
                    { code: "EE4042", title: "ENERGY DEMAND MANAGEMENT", grade: "B1" },
                    { code: "EE4052", title: "MASTER OF ENGINEERING PROJECT PREPARATION", grade: "P" },
                    { code: "EE4117", title: "ELECTROMAGNETICS 1", grade: "B1" },
                    { code: "RE4002", title: "SPATIAL ROBOTICS", grade: "A2" },
                ]
            },
            {
                name: "2020/1 Semester 1",
                qca: "2.89",
                modules: [
                    { code: "CE4041", title: "ARTIFICIAL INTELLIGENCE", grade: "B1" },
                    { code: "CE4607", title: "COMPUTER NETWORKS 1", grade: "A2" },
                    { code: "CE4817", title: "DIGITAL SIGNAL PROCESSING 1", grade: "B2" },
                    { code: "EP4407", title: "ENTERPRISE DEVELOPMENT", grade: "B3" },
                    { code: "ET4021", title: "ELECTRONICS LIFE CYCLE ENGINEERING", grade: "B2" },
                ]
            },
        ]
    },
    {
        id: "bd",
        type: "work",
        year: "May 2021 – Apr 2022",
        title: "Electronic Engineer",
        company: "BD",
        role: "Electronic Engineer",
        shortDescription: "Contributed to the design and development of high reliability electronic systems for medical devices.",
        overview: "Contributed to the design and development of high reliability electronic systems for medical devices, focusing on analog, digital, and mixed-signal circuit design. Collaborated across engineering disciplines to ensure seamless integration, manufacturability, and performance of custom PCB solutions.",
        responsibilities: [
            "Designed and validated analog, digital, and mixed-signal circuits for next-generation medical devices.",
            "Conducted rigorous testing and troubleshooting using lab equipment including oscilloscopes, signal generators, and multimeters.",
            "Integrated custom PCBs into new systems, ensuring optimal performance and reliability across product lines.",
            "Partnered with cross-functional teams to refine designs for manufacturability and system level integration.",
            "Applied engineering principles to improve product quality and reduce post-production issues."
        ],
        achievements: [
            "Successfully integrated custom PCBs into new product platforms, accelerating time-to-market and enhancing device performance.",
            "Improved circuit reliability through design optimization, resulting in a measurable reduction in post-production failures.",
            "Strengthened cross team collaboration, contributing to smoother handoffs between design, testing, and manufacturing."
        ],
        skills: ["Computer Engineering", "Wireshark", "Testing", "C++", "Software Development", "Quality Engineering"],
    },
    {
        id: "university-of-limerick-ta",
        type: "work",
        year: "Sep 2021 – Dec 2021",
        title: "Teaching Assistant",
        company: "University of Limerick",
        role: "Teaching Assistant",
        shortDescription: "Supported undergraduate lab sessions in computing and electronics.",
        overview: "Supported undergraduate lab sessions in computing and electronics, helping students build foundational skills in Java programming and circuit design. Provided hands on guidance and technical troubleshooting to enhance learning outcomes and lab performance.",
        responsibilities: [
            "Assisted in the delivery of Engineering Computing 1 (Java 1) and Electronics 1 lab sessions.",
            "Guided students through programming exercises and circuit design tasks, reinforcing core engineering concepts.",
            "Performed circuit fault-finding and debugging to support student projects and lab assessments.",
            "Facilitated a collaborative and supportive learning environment for first year engineering students."
        ],
        achievements: [],
        skills: ["Computer Engineering", "Wireshark", "Manual Testing", "Testing", "Java", "Software Development"],
    },
    {
        id: "amcert-ltd",
        type: "work",
        year: "Jun 2017 – Oct 2020",
        title: "Junior Telecommunications Engineer",
        company: "AMCERT LIMITED",
        role: "Junior Telecommunications Engineer",
        shortDescription: "Programmed and configured Mitel telephony solutions for customer sites.",
        overview: "Supported the deployment and maintenance of telephony infrastructure across customer sites, focusing on Mitel systems. Delivered hands-on technical support, system configuration, and customer training to ensure reliable communication solutions and smooth adoption.",
        responsibilities: [
            "Programmed and configured Mitel telephony solutions for customer sites.",
            "Installed and tested wiring infrastructure for telephone systems.",
            "Diagnosed and resolved faults in telephone systems, ensuring optimal performance.",
            "Provided training and technical support to customers for newly installed systems."
        ],
        achievements: [
            "Successfully completed installations and programming for numerous customer sites, ensuring full functionality and minimal downtime.",
            "Delivered comprehensive training to customers, ensuring smooth system adoption and user satisfaction."
        ],
        skills: ["Wireshark", "Manual Testing", "Postman API", "Testing"],
    },
    {
        id: "analog-devices",
        type: "work",
        year: "Apr 2019 – Jan 2020",
        title: "Test Development Engineer",
        company: "Analog Devices",
        role: "Test Development Engineer",
        shortDescription: "Test Development Engineer focused on automated semiconductor test solutions and data analysis.",
        overview: "Contributed to the development and optimization of automated semiconductor test solutions, focusing on improving production efficiency, test accuracy, and data analysis. Worked closely with cross-functional engineering teams to enhance on-device testing processes and production test integration.",
        responsibilities: [
            "Explored and implemented automation strategies to streamline device testing workflows and reduce manual intervention.",
            "Developed embedded C++ code for on-device testing, improving test execution efficiency and measurement accuracy.",
            "Integrated automated testing solutions into existing production test flows to enhance consistency and repeatability.",
            "Collaborated with hardware and software engineers to expand test coverage and refine testing methodologies.",
            "Designed and developed Python scripts to analyze, format, and visualize production test data for improved decision-making."
        ],
        achievements: [
            "Successfully automated critical testing processes, reducing manual effort and accelerating production timelines.",
            "Improved the accuracy and reliability of on-device testing through embedded code enhancements.",
            "Enhanced visibility of production performance by delivering structured data analysis and visualization tools."
        ],
        skills: ["NumPy", "Wireshark", "Python", "Manual Testing", "Postman API", "Testing", "Pandas", "Test Engineering", "Software Development"],
    },
    {
        id: "molex",
        type: "work",
        year: "May 2018 – May 2019",
        title: "Junior Test Engineer",
        company: "Molex",
        role: "Junior Test Engineer",
        shortDescription: "Supported the development and validation of test infrastructure for electronic components.",
        overview: "Supported the development and validation of test infrastructure for electronic components, contributing to the design, debugging, and enhancement of Molex test benches. Played a key role in ensuring product quality and reliability through hands on testing and automation.",
        responsibilities: [
            "Designed and developed custom test benches to validate Molex devices and components.",
            "Implemented new test procedures and integrated them into existing test systems.",
            "Diagnosed and debugged device issues, contributing to faster fault resolution and improved test coverage.",
            "Collaborated with engineering teams to ensure test solutions aligned with product specifications and quality standards."
        ],
        achievements: [],
        skills: ["Computer Engineering", "Manual Handling", "SAP", "Wireshark", "Manual Testing", "Postman API", "Testing", "Visual Basic", "Test Engineering"],
    },
];

