import { StaticImageData } from 'next/image';
import Alex from '@assets/images/alex.png';
import Shakar from '@assets/images/shankar.jpeg';

export enum Testimonial {
    Alex = 'Alex',
    Shankar = 'Shankar',
}

export interface TestimonialDataType {
    image: StaticImageData;
    name: string;
    position: string;
    linkedInURL: string;
    content: string[];
}

export const testimonialDataMap: Record<Testimonial, TestimonialDataType> = {
    [Testimonial.Alex]: {
        image: Alex,
        name: 'Alexandre Abidri',
        position: 'Engineering Manager @ Prenetics',
        linkedInURL: 'https://www.linkedin.com/in/alexandreabidri',
        content: [
            'Gopi is one of the exceptional software engineers I had the pleasure of working with at Prenetics. His proactive, enthusiastic, and passionate approach made him stand out among his peers. He consistently applied these qualities to his work as a valuable member of the software development team.',
            "Gopi's expertise in Front-End development is extensive, enabling him to intelligently drive project delivery with efficiency. He continuously seeks opportunities to learn new skills and enhance his existing ones, demonstrating his commitment to personal and professional growth.",
            'Furthermore, working with Gopi is a delight. His communication style is concise, clear, and he possesses a natural team spirit, fostering a collaborative and productive work environment.',
            'Without hesitation, I would rehire Gopi and highly recommend him to anyone seeking to strengthen their team with a top-tier, high-quality software engineer.',
        ],
    },
    [Testimonial.Shankar]: {
        image: Shakar,
        name: 'Shankar Krishnaiah',
        position: 'Vice President, Engg @ Prenetics',
        linkedInURL: 'https://www.linkedin.com/in/kaskrish',
        content: [
            'Over the last year and half, Gopi has proven to be the go to member in several projects within marketing and has delivered high-quality work. He has shown strong problem- solving abilities, often identifying and resolving complex technical issues that others have struggled with. In addition to his technical skills, he has shown strong leadership abilities, often taking the lead on projects and effectively managing and mentoring other team members.',
            "Quietly spoken, he has a mature head on his shoulders to inspire and motivate his colleagues and has a deep understanding of our company's products, systems, and processes. To top it, he is always willing to go above and beyond to ensure that our team is successful.",
            'I believe that Gopi would make an excellent Lead Engineer and would be a valuable asset to our company',
        ],
    },
};
