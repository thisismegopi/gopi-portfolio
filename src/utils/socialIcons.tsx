import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

type SocialIcon = {
    icon: JSX.Element;
    link: string;
};
export const SOCIAL_ICONS: SocialIcon[] = [
    {
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/gopi-n-dev/',
    },
    {
        icon: <FaGithub />,
        link: 'https://github.com/thisismegopi',
    },
    {
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/thisismegopi/',
    },
];
