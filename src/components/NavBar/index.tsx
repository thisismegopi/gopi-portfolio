import Link from 'next/link';
import './navBar.scss';
import React from 'react';

export const NavBar = () => {
    return (
        <section className="nav-bar">
            <div className="nav-container">
                <div className="nav-left">
                    <Link href={'/'}>
                        <h1>Gopi&rsquo;s Portfolio</h1>
                    </Link>
                </div>
                <div className="nav-right">
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Work</Link>
                    <Link href={'/'}>Skill</Link>
                    <Link href={'/'}>Contact</Link>
                </div>
            </div>
        </section>
    );
};
