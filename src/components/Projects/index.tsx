import { projectDataMap } from '@/utils/projects';
import { Accordion } from '../Accordion';
import { ProjectLabel } from './ProjectLabel';
import './projects.scss';
import React from 'react';

export const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects Worked</h2>
            <div className="project-list">
                {Object.values(projectDataMap).map((projects, index) => (
                    <Accordion
                        id={`id${index + 1}`}
                        name="parent"
                        label={<ProjectLabel {...projects.projectLabel} />}
                        key={index}
                        content={
                            <>
                                {projects.accordionContents.map((content, contentIdx) => (
                                    <Accordion key={contentIdx} {...content} />
                                ))}
                            </>
                        }
                    />
                ))}
            </div>
        </section>
    );
};
