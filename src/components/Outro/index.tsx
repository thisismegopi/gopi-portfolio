import Link from 'next/link';
import './outro.scss';

import React from 'react';

const Outro = () => {
    return (
        <div className="outro">
            <p>
                {' '}
                <span>
                    Made with ❤️ by{' '}
                    <Link href={'https://github.com/thisismegopi'} target="_blank">
                        Gopi
                    </Link>
                </span>{' '}
                <span>
                    Using{' '}
                    <Link href={'https://nextjs.org/'} target="_blank">
                        Next.js
                    </Link>
                </span>
                <span>
                    <Link href={'https://github.com/thisismegopi/gopi-portfolio'} target="_blank">
                        https://github.com/thisismegopi/gopi-portfolio
                    </Link>
                </span>
            </p>
        </div>
    );
};

export default Outro;
