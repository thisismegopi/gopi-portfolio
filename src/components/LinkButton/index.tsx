import './button.scss';
import Link from 'next/link';
import React, { CSSProperties, FC } from 'react';

type LinkButtonProps = {
    link: string;
    buttonEle: string | JSX.Element;
    buttonStyle: CSSProperties;
};

export const LinkButton: FC<LinkButtonProps> = ({ buttonEle, link, buttonStyle }) => {
    const isIcon = typeof buttonEle !== 'string';
    return (
        <Link className={`link-button ${isIcon && 'icon'}`} href={link} style={buttonStyle}>
            {typeof buttonEle === 'string' ? buttonEle : buttonEle}
        </Link>
    );
};
