import './timeline.scss';

import Image from 'next/image';
import React from 'react';
import PreneticsLogo from '@assets/images/prenetics_logo.jpeg';

export const TimeLine = () => {
    return (
        <div className="timeline">
            <div className="timeline-container left">
                <Image className="org-logo" src={PreneticsLogo} alt="prenetics-logo" />
                <div className="text-box">
                    <h3>Prenetics</h3>
                    <small>March 2021 - February 2023</small>
                    <h4>Executive Engineer</h4>
                    <span className="left-arrow"></span>
                </div>
            </div>

            <div className="timeline-container right">
                <Image className="org-logo" src={PreneticsLogo} alt="prenetics-logo" />
                <div className="text-box">
                    <h3>Prenetics</h3>
                    <small>March 2023 - Present</small>
                    <h4>Senior Software Engineer</h4>
                    <span className="right-arrow"></span>
                </div>
            </div>
        </div>
    );
};
