import { testimonialDataMap, Testimonial as TestimonialName } from '@/utils/testimonial';
import { TestimonialCard } from './TestimonialCard';
import './testimonial.scss';
import React from 'react';

export const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="testimonial-items">
                <TestimonialCard {...testimonialDataMap[TestimonialName.Alex]} />
                <TestimonialCard {...testimonialDataMap[TestimonialName.Shankar]} />
            </div>
        </section>
    );
};
