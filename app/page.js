import { FaLaptopCode } from 'react-icons/fa'
import Image from 'next/image'
import pic from '../public/jason-richard-unsplash.jpg'
import '../styles/landing-page.scss'

export default function Home() {
  return (
    <>
    <div className="landing-container">
        <div className="landing-text">
            <h1>Ida Mäkelä.</h1>
            <h2>Front End / App developer located in Stockholm. *...Welcoming message...*</h2>
        </div>
        <div className='icon'><FaLaptopCode /></div>
    </div>
    <div className='landing-img'>
        <Image 
            src={pic}
            width={500}
            height={500}
            className='pic'
            alt='Close up yellow rubber ducks in a blue small pool of water. Taken from Jason Richard on Unsplash.'
        />
        <p className='ref'>Photo by <a href="https://unsplash.com/es/@jasonthedesigner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Richard</a> on <a href="https://unsplash.com/photos/VTvnoNBowZs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>.</p>
    </div> 
    </>
  )
}
