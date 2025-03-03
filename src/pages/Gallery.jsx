import imagen1 from "../assets/images/imagen1.jpg";
import imagen2 from "../assets/images/imagen2.jpg";
import imagen3 from "../assets/images/imagen3.jpg";

const Gallery = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-20 text-center">Nuestra Galería</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src={imagen1} alt="Auto 1" className="gallery-img" />
        <img src={imagen2} alt="Auto 2" className="gallery-img" />
        <img src={imagen3} alt="Auto 3" className="gallery-img" />
      </div>
    </div>
  );
};

export default Gallery;
