import { Hero } from '@/components/Hero';
import { NavBar } from '@/components/NavBar';
import React from 'react';

export default function Home() {
    return (
        <React.Fragment>
            <NavBar />
            <Hero />
        </React.Fragment>
    );
}
