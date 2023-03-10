'use client';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import NavLayout from './navbar';
import FooterLayout from './footer';
import '../styles/globals.scss';

const inter = Inter({
    variable: '--inter-font',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Ida Mäkelä | FrontEnd / App Developer | Portfolio',
    description:
        'Welcome to the personal portfolio of a Frontend / App developer!',
    keywords:
        'developer, frontend, app, portfolio, projects, work, contact, about',
};

export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
        <html lang="en" className={inter.className}>
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
