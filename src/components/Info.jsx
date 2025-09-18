export default function Info() {
  return (
    <section className="info">
      <img src="profilepic.jpg" alt="Cindy Mikoda" />
      <h1>Cindy Mikoda</h1>
      <p>Front-End Developer</p>
      <p>A website domain here that I do not yet have.</p>
      <div className="contact">
        <button className="email-button">
          <img src="Mail-icon.svg" alt="Email icon" />
          Email
        </button>
        <button className="linkedin-button">
          <img src="LinkedIn-icon.svg" alt="LinkedIn icon" />
          LinkedIn
        </button>
      </div>
    </section>
  );
}