import data from '../../public/data.js'

function isOdd(number) {
    return number % 2 !== 0;
}

export default function SpecProject() {
    
    console.log(data)

    return (
        <div className='projects'>
            {data.map((project, index) => (
                <div className={`project ${isOdd(index) ? 'odd' : ''}`}>
                    <div key={index} className='project-text'>
                        <h3>{project.title}</h3>
                        <p>{project.course}</p>
                        <p>{project.desc}</p>
                        <p className='tools'>{project.tools}</p>
                    </div>

                    <div className='project-img'>
                        <img src={project.img}></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

