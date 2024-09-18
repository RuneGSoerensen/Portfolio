export default function ContactFormula() {
  return (
    <div className="contact--formula">
      <form action="/submit-form" method="POST">
        <div className="form--row">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />

          <input
            type="text"
            id="company"
            placeholder="Company(Optional)"
            name="company"
          />
        </div>

        <div className="form--row">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form--row">
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form--row">
          <button className="btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
