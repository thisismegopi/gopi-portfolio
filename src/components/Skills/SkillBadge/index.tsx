import './skillBadge.scss';
import React, { FC } from 'react';

type SkillBadgeProps = {
    icon: JSX.Element;
    title: string;
};

export const SkillBadge: FC<SkillBadgeProps> = ({ icon, title }) => {
    return (
        <div className="skill-badge">
            <div className="icon">{icon}</div>
            <p>{title}</p>
        </div>
    );
};
