import Link from 'next/link';
import { FaRegSmileBeam } from 'react-icons/fa'


export default function FooterLayout() {
    return (
        <>
        <footer>
            <div className='footer-items left'>
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
            <FaRegSmileBeam className='icon'/>
            <div className='footer-items right'>
                <h2>&copy; Ida Mäkelä</h2>
                <a href='https://www.figma.com/community/file/1209960296465522132'>design credit</a>
            </div>
        </footer>
        </>
    )
}