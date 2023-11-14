import Image from 'next/image';
import './testimonialCard.scss';
import { FaLinkedin } from 'react-icons/fa';

import React, { FC } from 'react';
import Link from 'next/link';
import { TestimonialDataType } from '@/utils/testimonial';

export const TestimonialCard: FC<TestimonialDataType> = ({ image, name, position, linkedInURL, content }) => {
    return (
        <div className="testimonial-card">
            <div className="about-author">
                <Image src={image} alt="alex" />
                <div className="author-detail">
                    <h4>{name}</h4>
                    <small>{position}</small>
                    <Link href={linkedInURL}>
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
            <div className="main-content">
                {content.map((item, i) => (
                    <p key={i}>{item}</p>
                ))}
            </div>
        </div>
    );
};
