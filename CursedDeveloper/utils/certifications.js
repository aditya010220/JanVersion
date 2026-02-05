import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'AWS Certified Cloud Practitioner',
            platform: 'Amazon Web Services',
            link: 'https://www.credly.com/go/3VesgOOQbY6HFlCyzcr6bA',
            date: 'Issued Jan 2026 · Jan 2029',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Virtual Internship Via FSP',
            platform: 'IBMCEP',
            link: 'https://drive.google.com/file/d/1Vj_MFbrVaT8jhCGoKp1iMECI6V5MZseT/view?usp=sharing',
            date: 'Issued Sep 2025 · No Expiration Date',
            logo: '/assets/resibm.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'AWS Certified Developer - Associate',
            platform: 'Amazon Web Services',
            link: 'https://www.credly.com/go/2zEDKXegLnn98dPwpo9eUA',
            date: 'Issued Feb 2026 · Feb 2029',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Certified Full Stack Developer',
            platform: 'PW | Physics Wallah Skill Builder',
            link: 'https://drive.google.com/file/d/1i1FdkQp5IFRK-dbs50CcGZ2z9V5t83uK/view?usp=sharing',
            date: 'Issued Aug 2025 · No Expiration Date',
            logo: '/assets/physics-wallah-seeklogo.png',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: 'IIT Delhi Hackathon – “Trash to Cash” Website Project',
            platform: 'IIT Delhi | Unstop Platform',
            link: 'https://media.licdn.com/dms/image/v2/D5622AQFb6kiaUT1Y3w/feedshare-shrink_2048_1536/B56ZToCdxYGUAo-/0/1739059749842?e=1772064000&v=beta&t=suASL0cAJBa6S1jLosS77e9wMHbefZRs_ryO_yY3hPA',
            date: 'Issued Feb 2025 · No Expiration Date',
            logo: '/assets/iit.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications