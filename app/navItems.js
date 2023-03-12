import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItems() {
    const pathname = usePathname();

    return (
        <div className="nav-items">
            <Link href="/" className={pathname === '/' ? 'active' : 'hover'}>
                Home
            </Link>
            <Link
                href="/projects"
                className={pathname === '/projects' ? 'active' : 'hover'}
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
    );
}
