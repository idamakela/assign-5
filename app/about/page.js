import '../../styles/about.scss'

export default function About() {
    return (
        <>
        <div className="about-container">
            <div className="about-text">
                <h2>About me.</h2>
                <h3>*...some short description about myself...*</h3>
            </div>
        </div>
        <div className='grid-container'>
            <div className='div1'>
                <h3>title</h3>
                <p>some text...</p>
            </div>

            <div className='div2'>
                <h3>title</h3>
                <p>some text...</p>
            </div>

            <div className='div3'>
                <h3>title</h3>
                <p>some text...</p>
            </div>

            <div className='div4'>
                <h3>title</h3>
                <p>some text...</p>
            </div>
        </div>    
        </>
    )
}