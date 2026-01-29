const ContactForm = () => {
    return (
        <form>
            <input name="name" required />
            <input name="email" type="email" required />
            <textarea name="message" required />
            <button type="submit">Send</button>
        </form>
    );
}
export default ContactForm;