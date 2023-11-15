import './accordion.scss';
import React, { FC } from 'react';

export type AccordionProps = {
    id: string;
    name: string;
    label: JSX.Element | string;
    content: JSX.Element | string[];
    withShadow?: boolean;
    topBorderOnly?: boolean;
    hasContentPadding?: boolean;
};

export const Accordion: FC<AccordionProps> = ({ id, name, label, content, withShadow = true, topBorderOnly = false, hasContentPadding = false }) => {
    return (
        <div className={`accordion ${withShadow && 'shadow'} ${topBorderOnly && 'top-border-only'}`}>
            <label htmlFor={id}>
                {label} <span>&#x3e;</span>
            </label>
            <input type="radio" name={name} id={id} />
            <div className={`content ${hasContentPadding && 'has-padding'}`}>{Array.isArray(content) ? content.map((text, i) => <p key={i}>{text}</p>) : content}</div>
        </div>
    );
};
