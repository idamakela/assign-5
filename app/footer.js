import Link from 'next/link';
import { FaRegSmileBeam } from 'react-icons/fa'


export default function FooterLayout() {
    return (
        <>
        <footer>
            <div className='footer-items'>
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
            <FaRegSmileBeam className='icon'/>
            <h2>&copy; Ida Mäkelä.</h2>
        </footer>
        </>
    )
}