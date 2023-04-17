import '../../styles/about.scss';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

export default function About() {
    return (
        <>
            <div className="container">
                <div className="text">
                    <h2>About me.</h2>
                    <h3>*...some short description about myself...*</h3>
                </div>
            </div>
            <div className="grid-container">
                <div className="div1">
                    <h3>My road to Frontend development.</h3>
                    <p>
                        As a young student, I aspired to study a social science
                        subject, and eventually pursued a Bachelor of Science in
                        psychology. However, after beginning my career in tech
                        recruitment, I realized that my true passion lay in
                        problem-solving and understanding how things work.
                        Through exposure to various tech jobs, I discovered my
                        interest in programming, and ultimately made the
                        decision to change careers. The perfect combination of
                        creativity and problem-solving, along with the
                        constantly evolving nature of the field, drew me to
                        pursue a career in tech. I am excited to continue
                        learning and applying logic in a dynamic field where
                        innovation is key.
                    </p>
                </div>

                <div className="div2">
                    <h3>Socials.</h3>
                    <p>Check out more about my experience and work here!</p>
                    <a href="https://www.linkedin.com/in/makelaida/">
                        <p>LinkedIn</p>
                        <FaExternalLinkSquareAlt />
                    </a>
                    <a href="https://github.com/idamakela">
                        <p>GitHub</p>
                        <FaExternalLinkSquareAlt />
                    </a>
                </div>

                <div className="div3">
                    <h3>Interests.</h3>
                    <p>Coding, of course.</p>
                    <p>User Experience.</p>
                    <p>Problem-solving.</p>
                    <p>Innovation.</p>
                    <p>Collaboration.</p>
                    <p>Design.</p>
                    <p>Accessability.</p>
                    <p>And personal one for last, Gaming.</p>
                    <p>\(◠‿◠)/</p>
                </div>

                <div className="div4">
                    <h3>What do I aspire to do?</h3>
                    <p>
                        As a front-end developer, my passion for web development
                        continues to grow, and I am constantly seeking to expand
                        my knowledge and expertise in this dynamic field. My
                        interest in human behavior and psychology has led me to
                        aspire to work closely with these areas during
                        development, utilizing my skills in front-end
                        development to create intuitive and user-friendly
                        interfaces.
                    </p>
                    <p>
                        One of my key aspirations as a front-end developer is to
                        take an active role in driving innovation and pushing
                        the boundaries of what is possible. I believe that
                        working with a diverse team of professionals with unique
                        skill sets and perspectives is the best way to achieve
                        this goal. By harnessing the collective knowledge and
                        expertise of my colleagues, I am confident that we can
                        create truly exceptional and impactful solutions for our
                        clients and users.
                    </p>
                </div>
            </div>
        </>
    );
}
