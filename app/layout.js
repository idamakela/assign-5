import { Inter } from 'next/font/google';
//import dyanamic from 'next/dynamic'
import NavLayout from './navbar';
import FooterLayout from './footer';
import '../styles/globals.scss';

//const DynamicNavBar = dyanamic(() => import('./navbar'), {ssr: false});

const inter = Inter({
    variable: '--inter-font',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Ida Mäkelä | FrontEnd / App Developer | Portfolio',
    description:
        'Welcome to the personal portfolio of a Frontend / App developer!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <head>
            <link rel="icon" type="image/svg+js" href="../public/face-smiling-beam-regular.svg" />
        </head> */}
            <body className={inter.className}>
                <NavLayout />
                <main>{children}</main>
                <FooterLayout />
            </body>
        </html>
    );
}
