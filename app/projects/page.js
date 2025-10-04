import data from '../../public/data.js';
import Project from './project.js';

export default function SpecProject() {
    return (
        <div className="projects">
            {data.map((project, index) => (
                <Project key={index} {...project}/>
            ))}
        </div>
    );
}
