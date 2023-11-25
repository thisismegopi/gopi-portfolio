import Link from 'next/link';
import './contactMe.scss';

import React from 'react';
import { SOCIAL_ICONS } from '@/utils/socialIcons';
import { LinkButton } from '../LinkButton';

export const ContactMe = () => {
    return (
        <section className="contact-me" id="contact">
            <h2>Contact Me</h2>
            <p>
                Write an email to{' '}
                <span>
                    <Link href="mailto:gopin.careers@gmail.com">gopin.careers@gmail.com</Link>
                </span>
            </p>

            <h3>Also Follow me on</h3>
            <div className="social">
                {SOCIAL_ICONS.map((social, index) => (
                    <div style={{ width: '2rem', height: '2rem' }} key={index}>
                        <LinkButton buttonEle={social.icon} link={social.link} buttonStyle={{ backgroundColor: '#d7f1c2' }} />
                    </div>
                ))}
            </div>
        </section>
    );
};
