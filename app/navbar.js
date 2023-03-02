import Link from 'next/link';
import { FaRegSmileBeam, FaGripLines } from 'react-icons/fa'
import styles from '../app/page.module.css'

export default function NavLayout() {
    return (
        <>
        <nav>
            <div>
                <div><FaRegSmileBeam /></div>
                <div className='nav-items'>
                    <h2><Link href='/'>Home</Link></h2>
                    <h2><Link href='/projects'>Projects</Link></h2>
                    <h2><Link href='/about'>About</Link></h2>
                    <h2><Link href='/contact'>Contact</Link></h2>
                </div>
            </div>
            <div><FaGripLines/></div>
        </nav>
        </>
    )
}