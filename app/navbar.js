'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaRegSmileBeam, FaGripLines } from 'react-icons/fa';

export default function NavLayout() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const handleClick = () => {
        setOpen(!open);
    };

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
                <div className="icon right" onClick={handleClick}>
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
