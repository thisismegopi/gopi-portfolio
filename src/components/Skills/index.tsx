import { SkillGroup, skillDataMap } from '@/utils/skills';
import { SkillBadge } from './SkillBadge';
import './skills.scss';
import React from 'react';
import { IoLogoJavascript } from 'react-icons/io5';

export const Skils = () => {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <h3>Front End</h3>
            <div className="skill-group">
                {skillDataMap[SkillGroup.FrontEnd].map((item, i) => (
                    <SkillBadge key={i} icon={item.icon} title={item.title} />
                ))}
            </div>

            <h3>Backend End</h3>
            <div className="skill-group">
                {skillDataMap[SkillGroup.BackEnd].map((item, i) => (
                    <SkillBadge key={i} icon={item.icon} title={item.title} />
                ))}
            </div>

            <h3>Libraries & Frameworks</h3>
            <div className="skill-group">
                {skillDataMap[SkillGroup.Frameworks].map((item, i) => (
                    <SkillBadge key={i} icon={item.icon} title={item.title} />
                ))}
            </div>
        </section>
    );
};
