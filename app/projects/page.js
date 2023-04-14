import data from '../../public/data.js';

function isOdd(number) {
    return number % 2 !== 0;
}

export default function SpecProject() {
    return (
        <div className="projects">
            {data.reverse().map((project, index) => (
                <div className="project" id={isOdd(index) ? 'odd' : ''}>
                    <div key={index} className="project-text">
                        <h3>{project.title}</h3>
                        <p>{project.course}</p>
                        <p>{project.desc}</p>
                        <div className="btns">
                            {project.live ? (
                                <button>
                                    <a href={project.demo}>Demo</a>
                                </button>
                            ) : (
                                <button disabled>Demo</button>
                            )}
                            {project.public ? (
                                <button>
                                    <a href={project.github}>GitHub</a>
                                </button>
                            ) : (
                                <button disabled>GitHub</button>
                            )}
                        </div>
                        <p className="tools">{project.tools}</p>
                    </div>

                    <div className="project-img">
                        <img src={project.img}></img>
                    </div>
                </div>
            ))}
        </div>
    );
}
