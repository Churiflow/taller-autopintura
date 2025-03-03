import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contáctanos</h2>
      <form className="contact-form">
        <label className="contact-label">Nombre:</label>
        <input type="text" className="contact-input" placeholder="Tu Nombre" />

        <label className="contact-label">Correo Electrónico:</label>
        <input type="email" className="contact-input" placeholder="tucorreo@email.com" />

        <label className="contact-label">Mensaje:</label>
        <textarea className="contact-textarea" placeholder="Escribe tu mensaje aquí..." />

        <button type="submit" className="contact-button">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
