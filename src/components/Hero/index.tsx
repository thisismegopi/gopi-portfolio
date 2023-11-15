import Image from 'next/image';
import { LinkButton } from '../LinkButton';
import './hero.scss';
import ProfilePic from '@assets/images/profile-pic-3.png';

import React from 'react';
import { SOCIAL_ICONS } from '@/utils/socialIcons';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-contaner">
                <div className="hero-left">
                    <h1>-Hello, I&rsquo;m Gopi 👋🏻</h1>
                    <h2>
                        A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool
                        libraries and frameworks.
                    </h2>
                    <div className="button-wrapper">
                        <div style={{ marginTop: '1rem' }}>
                            <LinkButton buttonEle="Contact Me" scroll={false} link="#contact" buttonStyle={{ backgroundColor: '#d7f1c2' }} />
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <LinkButton buttonEle="See my Resume" link="/docs/gopi-resume-wm.pdf" buttonStyle={{ backgroundColor: '#d7f1c2' }} />
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <Image src={ProfilePic} alt="profile-pic" />
                    <div className="social">
                        {SOCIAL_ICONS.map((social, index) => (
                            <div style={{ width: '2rem', height: '2rem' }} key={index}>
                                <LinkButton buttonEle={social.icon} link={social.link} buttonStyle={{ backgroundColor: '#d7f1c2' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
