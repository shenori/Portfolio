import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;