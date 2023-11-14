import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { FaSass, FaNodeJs, FaDocker, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiExpress, SiNextdotjs, SiNestjs, SiRedux, SiJest, SiVite, SiWebpack, SiTailwindcss } from 'react-icons/si';
import { DiJqueryLogo, DiMysql } from 'react-icons/di';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';

type SkillsData = {
    icon: JSX.Element;
    title: string;
};

export enum SkillGroup {
    FrontEnd = 'FrontEnd',
    BackEnd = 'BackEnd',
    Frameworks = 'Frameworks',
    OperatindSystem = 'OperatingSystem',
}

export const skillDataMap: Record<SkillGroup, SkillsData[]> = {
    [SkillGroup.FrontEnd]: [
        { icon: <TiHtml5 />, title: 'HTML5' },
        { icon: <TiCss3 />, title: 'CSS3' },
        { icon: <FaSass />, title: 'SASS' },
        { icon: <SiJavascript />, title: 'JavaScript' },
        { icon: <SiTypescript />, title: 'TypeScript' },
        { icon: <DiJqueryLogo />, title: 'jQuery' },
    ],
    [SkillGroup.BackEnd]: [
        { icon: <FaNodeJs />, title: 'Node.js' },
        { icon: <TbApi />, title: 'REST API' },
        { icon: <SiExpress />, title: 'Express.js' },
        { icon: <BiLogoPostgresql />, title: 'PostgreSQL' },
        { icon: <DiMysql />, title: 'MySQL' },
        { icon: <FaDocker />, title: 'Docker' },
    ],
    [SkillGroup.Frameworks]: [
        { icon: <FaReact />, title: 'React.js' },
        { icon: <TbBrandReactNative />, title: 'React Native' },
        { icon: <SiNextdotjs />, title: 'Next.js' },
        { icon: <SiNestjs />, title: 'Nest.js' },
        { icon: <SiRedux />, title: 'Redux' },
        { icon: <SiJest />, title: 'Jest' },
        { icon: <SiVite />, title: 'Vite' },
        { icon: <SiWebpack />, title: 'Webpack' },
        { icon: <FaBootstrap />, title: 'Bootstrap' },
        { icon: <SiTailwindcss />, title: 'Tailwind' },
    ],
    [SkillGroup.OperatindSystem]: [{ icon: TiHtml5, title: 'HTML5' }],
};
