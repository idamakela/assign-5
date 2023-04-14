export default function Form() {
    return (
        <form
            action="mailto: ida.makela@edu.cmeducations.se"
            method="POST"
            enctype="text/plain"
        >
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
            />

            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
            />

            <textarea
                id="message"
                name="message"
                rows="5"
                colu="10"
                placeholder="Message"
                required
            ></textarea>

            <button>Send</button>
        </form>
    );
}
