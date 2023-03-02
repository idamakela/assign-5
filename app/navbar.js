import Link from 'next/link';
import { FaRegSmileBeam, FaGripLines } from 'react-icons/fa'

function underline()  {
    //on mouseenter add styling: border-bottom: solid 5px $font-color; on link tags
}

export default function NavLayout() {
    return (
        <>
        <nav>
            <div className='nav-left'>
                <div className='icon left'><FaRegSmileBeam /></div>
                <div className='nav-items'>
                    <Link href='/'>Home</Link>
                    <Link href='/projects'>Projects</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
            <div className='icon right'><FaGripLines /></div>
        </nav>
        </>
    )
}