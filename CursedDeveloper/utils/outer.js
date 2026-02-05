import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Aditya Maurya,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'I build things for the web',
        'A UI/UX Designer',
        'A Traveler',
    ],
    desciption: `A dedicated and disciplined Full Stack student who loves to create things for the internet, having more than 1 year of hands-on experience I've delivered projects to friends and clients across India.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:curseddeveloper2@gmail.com?subject=Hello')
    }
}

export default outer
