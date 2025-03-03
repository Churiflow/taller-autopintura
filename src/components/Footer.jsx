import "../styles/Footer.css"; // Importamos los estilos
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 text-center">
      <p className="text-lg font-semibold">Taller de Pintura Automotriz "AutoColor"</p>
      <p>📍 Dirección: Calle Principal #123, Ciudad</p>
      <p>📞 Teléfono: +123 456 789</p>
      <p>📧 Email: contacto@autocolor.com</p>
      <p className="mt-10 text-white-400 text-sm">© 2025 AutoColor. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
