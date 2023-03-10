import '../../styles/contact.scss';
import Form from './form';

export default function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-text">
                    <h2>Contact.</h2>
                    <h3>
                        Want to know more about my projects, or simply have a
                        chat over a cup of coffee? Send me a message in the form
                        below!
                    </h3>
                </div>
            </div>

            <div className="form-container">
                <div className="cta">
                    <h2>
                        get
                        <br />
                        in
                        <br />
                        touch
                    </h2>
                </div>
                <Form />
            </div>
            <p className="img-ref">
                Photo by{' '}
                <a href="https://unsplash.com/@emilybernal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Emily Bernal
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/photos/r2F5ZIEUPtk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
                .
            </p>
        </>
    );
}
