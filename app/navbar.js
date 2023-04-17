'use client';
import Link from 'next/link';
import styles from '../styles/animate.module.scss';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaRegSmileBeam, FaGripLines } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function NavLayout() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const isMobileScreen = useMediaQuery({ maxWidth: 576 });
    const pathname = usePathname();

    const handleClick = () => {
        setOpen(!open);
    };

    const animate = () => {
        if (!isMobileScreen) {
            setVisible(!visible);
        } else if (isMobileScreen && visible) {
            setVisible(true);
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
                <div
                    className={`icon right`}
                    onClick={isMobileScreen ? handleClick : animate}
                >
                    {open && isMobileScreen ? (
                        <IoIosCloseCircleOutline />
                    ) : (
                        <FaGripLines
                            className={`${!visible ? 'visible' : 'hidden'}`}
                        />
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
