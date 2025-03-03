import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Importamos los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="text-2xl font-bold">Mi Taller</h1>
      <ul>
        <li><Link to="/" className="navbar-link">Inicio</Link></li>
        <li><Link to="/services" className="navbar-link">Servicios</Link></li>
        <li><Link to="/gallery" className="navbar-link">Galería</Link></li>
        <li><Link to="/contact" className="navbar-link">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
