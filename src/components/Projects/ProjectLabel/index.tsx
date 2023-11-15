import './projectLabel.scss';

import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

export type ProjectLableProps = {
    image: StaticImageData;
    title: string;
    employer: string;
    technology: string;
};

export const ProjectLabel: FC<ProjectLableProps> = ({ image, title, employer, technology }) => {
    return (
        <div className="project-label">
            <Image src={image} alt="project-logo" />
            <div className="label-content">
                <h4>{title}</h4>
                <p>
                    {' '}
                    <strong>Employer: </strong> <span>{employer}</span>
                </p>
                <p>
                    {' '}
                    <strong>Technology used: </strong> <span>{technology}</span>
                </p>
            </div>
        </div>
    );
};
