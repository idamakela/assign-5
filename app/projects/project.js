export default function Project(project, index) {
    function isOdd(number) {
        return number % 2 !== 0;
    }

    return (
        <div className="project" id={isOdd(index) ? 'odd' : ''}>
            <div className="project-text">
                <h3>{project.title}</h3>
                <p>{project.course}</p>
                <p>{project.desc}</p>
                <div className="project-img mobile">
                    <img src={project.img}></img>
                </div>
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

            <div className="project-img desktop">
                <img src={project.img}></img>
            </div>
        </div>
    );
}
