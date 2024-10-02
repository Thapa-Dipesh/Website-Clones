export const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData.entries);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="container contact-wrapper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            name="message"
            rows="10"
            className="form-control"
            placeholder="Enter your message"
            required
            autoComplete="off"></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
