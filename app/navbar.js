'use client';
import { useState } from 'react';
import NavItems from './navItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegSmileBeam, FaGripLines } from 'react-icons/fa';

export default function NavLayout() {
    const pathname = usePathname();
    const [isVisable, setVisability] = useState(false);
    const toggleVisability = () => {
        setVisability(!setVisability);
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
                    {window.innerWidth <= 750 && isVisable ? (
                        <NavItems />
                    ) : null}
                </div>
                <div
                    id="hamburger"
                    className="icon right"
                    onClick={() => {
                        window.innerWidth <= 750
                            ? setVisability(true)
                            : setVisability(false);
                    }}
                >
                    <FaGripLines />
                </div>
            </nav>
        </>
    );
}
