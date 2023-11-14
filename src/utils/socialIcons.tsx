import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

type SocialIcon = {
    icon: JSX.Element;
    link: string;
};
export const SOCIAL_ICONS: SocialIcon[] = [
    {
        icon: <FaLinkedin />,
        link: '#',
    },
    {
        icon: <FaGithub />,
        link: '#',
    },
    {
        icon: <FaInstagram />,
        link: '#',
    },
];
