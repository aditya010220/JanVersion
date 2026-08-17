import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/aditya010220/',
        'instagram': 'https://www.instagram.com/magicman_x/',
        'twitter': 'https://x.com/athreya2902',
        'linkedin': 'https://www.linkedin.com/in/fullstackdeveloperaditya/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'curseddeveloper2@gmail.com',
        onClick: () => openLink('mailto:curseddeveloper2@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements