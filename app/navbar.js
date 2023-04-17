'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaRegSmileBeam, FaGripLines } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function NavLayout() {
    const [open, setOpen] = useState(false);
    const isMobileScreen = useMediaQuery({ maxWidth: 576 });
    const pathname = usePathname();

    const handleClick = () => {
        if(isMobileScreen) {
            setOpen(!open);
        }
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
                    {open && isMobileScreen ? (
                        <IoIosCloseCircleOutline />
                    ) : (
                        <FaGripLines />
                    )}
                </div>
            </nav>
            <div
                className={`open-nav ${open ? 'open' : 'closed'}`}
                onClick={handleClick}
            >
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
