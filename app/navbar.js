import Link from 'next/link'

export default function navLayout({ children }) {
    return (
        <>
        <nav>
            <div>
                <div>Left icon</div>
                <div className='menu-items'>

                </div>
            </div>
            <div>right icon/pop-up menu</div>
        </nav>
        </>
    )
}