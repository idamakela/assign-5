import data from '../../public/data.js';
import Project from './project.js';

export default function SpecProject() {
    const reverseData = data.reverse()

    return (
        <div className="projects">
            {reverseData.map((project, index) => (
                <Project key={index} {...project}/>
            ))}
        </div>
    );
}
