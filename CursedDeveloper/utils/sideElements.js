import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/adity010220',
        'instagram': 'https://www.instagram.com/its.athreya/',
        'twitter': 'https://x.com/cursedMan0102',
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