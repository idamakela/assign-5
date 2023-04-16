'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegSmileBeam, FaGripLines } from 'react-icons/fa';

export default function NavLayout() {
    const pathname = usePathname();

    return (
        <>
            <nav>
                <div className="nav-left">
                    <div className="icon left">
                        <Link href={pathname === '/' ? '' : '/'}>
                            <FaRegSmileBeam />
                        </Link>
                    </div>
                    <div className="nav-items">
                        <Link
                            href="/"
                            className={pathname === '/' ? 'active' : 'hover'}
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className={
                                pathname === '/projects' ? 'active' : 'hover'
                            }
                        >
                            Projects
                        </Link>
                        <Link
                            href="/about"
                            className={
                                pathname === '/about' ? 'active' : 'hover'
                            }
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={
                                pathname === '/contact' ? 'active' : 'hover'
                            }
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="icon right open">
                    <FaGripLines />
                </div>
            </nav>
            <div className="open-nav">
                <div className="nav-items">
                    <Link
                        href="/"
                        className={pathname === '/' ? 'active' : 'hover'}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className={
                            pathname === '/projects' ? 'active' : 'hover'
                        }
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className={pathname === '/about' ? 'active' : 'hover'}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={pathname === '/contact' ? 'active' : 'hover'}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}
