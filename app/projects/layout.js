import '../../styles/projects.scss';

export default function Project({ children }) {
    return (
        <>
            <div className="projects-container">
                <div className="projects-text">
                    <h2>Projects.</h2>
                    <h3>*...some short description about my projects...*</h3>
                </div>
            </div>
            {children}
        </>
    );
}
