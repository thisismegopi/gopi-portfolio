import type { Metadata } from 'next';
import './globals.scss';
import Outro from '@/components/Outro';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "Gopi's Portfolio",
    description:
        'A passionate Software Developer 🚀 having 3 years of experience in building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-8F36DDJ5YD" />
                <Script
                    strategy="lazyOnload"
                    id="google-analytics"
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-8F36DDJ5YD');`,
                    }}
                />
            </head>
            <body>
                <main className="layout">{children}</main>
                <Outro />
                <Analytics />
            </body>
        </html>
    );
}
