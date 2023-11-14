import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { NavBar } from '@/components/NavBar';
import { Skils } from '@/components/Skills';
import { Testimonial } from '@/components/Testimonial';
import React from 'react';

export default function Home() {
    return (
        <React.Fragment>
            <NavBar />
            <Hero />
            <Experience />
            <Skils />
            <Testimonial />
        </React.Fragment>
    );
}
