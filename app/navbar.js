import Link from 'next/link';
import { FaRegSmileBeam, FaGripLines } from 'react-icons/fa'

function underline(item)  {
    //on mouseenter add styling: border-bottom: solid 5px $font-color; on link tags
    //if u are on a page, underline should be active 
}

export default function NavLayout() {
    return (
        <>
        <nav>
            <div className='nav-left'>
                <div className='icon left'>
                    <Link href='/'>
                        <FaRegSmileBeam />
                    </Link>
                </div>
                <div className='nav-items'>
                    <Link href='/' className='hover'>Home</Link>
                    <Link href='/projects' className='hover'>Projects</Link>
                    <Link href='/about' className='hover'>About</Link>
                    <Link href='/contact' className='hover'>Contact</Link>
                </div>
            </div>
            <div className='icon right'><FaGripLines /></div>
        </nav>
        </>
    )
}