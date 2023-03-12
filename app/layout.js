'use client';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

import NavLayout from './navbar';
import FooterLayout from './footer';
import '../styles/globals.scss';

const inter = Inter({
    variable: '--inter-font',
    subsets: ['latin'],
});

export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
        <html lang="en" className={inter.className}>
            <Head>
                <title>Ida Mäkelä | FrontEnd / App Developer | Portfolio</title>
                <meta
                    name="description"
                    content="developer, frontend, app, portfolio, projects, work, contact, about"
                />
            </Head>
            <body
                className={
                    pathname === '/projects' || pathname === '/contact'
                        ? 'pink'
                        : 'yellow'
                }
            >
                <NavLayout />
                <main>{children}</main>
                <FooterLayout />
            </body>
        </html>
    );
}
