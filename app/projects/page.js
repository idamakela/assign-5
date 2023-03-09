import data from '../../public/data.js'

function isOdd(number) {
    return number % 2 !== 0;
}

export default function SpecProject() {
    
    return (
        <div className='projects'>
            {data.map((project, index) => (
                <div className={`project ${isOdd(index) ? 'odd' : ''}`}>
                    <div key={index} className='project-text'>
                        <h3>{project.title}</h3>
                        <p>{project.course}</p>
                        <p>{project.desc}</p>
                        <div className='btn'>
                            {project.live ? (
                                <a href={project.demo}><button>Demo</button></a>
                            ) : (
                                <button disabled>Demo</button>
                            )}
                            {project.public ? (
                                <a href={project.github}><button>GitHub</button></a>
                            ) : (
                                <button disabled>GitHub</button>
                            )}
                        </div>
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

