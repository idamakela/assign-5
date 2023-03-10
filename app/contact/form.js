export default function Form() {
    return (
        <form
            action="mailto: ida.makela@edu.cmeducations.se"
            method="POST"
            enctype="text/plain"
        >
            <label for="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Josi Johnsson"
                required
            />

            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="JosiJ@email-address.com"
                required
            />

            <label for="message">Message</label>
            <textarea
                id="message"
                name="message"
                rows="5"
                colu="10"
                placeholder="Write your message here!"
                required
            ></textarea>

            <button>Send</button>
        </form>
    );
}
