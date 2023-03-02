import { FaLaptopCode } from 'react-icons/fa'
import Image from 'next/image'
import pic from '../public/todd-kent-unsplash.jpg'

export default function Home() {
  return (
    <>
    <div className="landing-container">
        <div className="landing-text">
            <h1>Ida Mäkelä.</h1>
            <h2>Front End / App developer student located in Stockholm. *Welcoming message...*</h2>
        </div>
        <div className='icon'><FaLaptopCode /></div>
    </div>
    <div className='landing-img'>
        <Image 
            src={pic}
            width={500}
            height={500}
            alt='Landscape photo of sunflowers on a field with the rising sun in the distance. Taken from Todd Kent on Unsplash.'
            className='pic'
        />
        <p>Photo by <a href="https://unsplash.com/@churchoftodd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">todd kent</a> on <a href="https://unsplash.com/photos/kW1P8R-UoWI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </div>

        
    </>
  )
}
