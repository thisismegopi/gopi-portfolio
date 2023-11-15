import './navBar.scss';

import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
    return (
        <section className="nav-bar">
            <div className="nav-container">
                <div className="nav-left">
                    <Link href={'/'}>
                        <span>Gopi&rsquo;s Portfolio</span>
                    </Link>
                </div>
                <div className="nav-right">
                    <Link href={'#experience'}>Experience</Link>
                    <Link href={'#projects'}>Projects</Link>
                    <Link href={'#skills'}>Skills</Link>
                    <Link href={'#testimonial'}>Testimonial</Link>
                    <Link href={'#contact'}>Contact</Link>
                </div>
            </div>
        </section>
    );
};
