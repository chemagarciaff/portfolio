import { Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../App.css";

function Header() {
  const fullText = "CHEMA GARCÍA";
  const [displayedText, setDisplayedText] = useState("");
  const [opacitySpan, setOpacitySpan] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false); // 👈 Estado de la carta

  const location = useLocation();

  // Animación de escritura
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        setOpacitySpan(0);
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#BDB246] underline underline-offset-8 decoration-[#BDB246] font-semibold"
      : "hover:text-[#BDB246] transition-colors";

  return (
    <>
      <header className="w-full fixed top-0 left-0 px-10 gap-4 md:gap-6 h-[100px] flex items-center z-[100] header-bg">
        {/* ===== Vista de ESCRITORIO ===== */}
        <div className="hidden xl:flex w-full justify-between items-center">
          <nav>
            <ul className="flex flex-wrap gap-8 text-md md:text-md">
              <Link to="/" className={`cursor-pointer links ${isActive("/")}`}>
                WORK
              </Link>
              <Link
                to="/skills"
                className={`cursor-pointer links ${isActive("/skills")}`}
              >
                SKILLS
              </Link>
              <Link
                to="/experience"
                className={`cursor-pointer links ${isActive("/experience")}`}
              >
                FORMATION & EXPERIENCE
              </Link>
              <Link
                to="/contact"
                className={`cursor-pointer links ${isActive("/contact")}`}
              >
                CONTACT
              </Link>
            </ul>
          </nav>

          <p className="text-[#BDB246] nombre absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-2xl font-bold whitespace-nowrap">
            {displayedText}
            <span className="" style={{ opacity: opacitySpan }}>
              |
            </span>
          </p>

          <div className="flex gap-5 justify-center items-center relative">
            {/* Contenedor del Mail con alerta */}
            <div className="relative cursor-pointer"  onClick={() => setShowLetter(true)}>

              <Mail className="linkedin" />
              {!showLetter && (
                <span className="absolute top-0 -right-1 w-[12px] h-[12px] bg-red-500 rounded-full animate-bounce-shadow"></span>
              )}
            </div>

            {/* Icono de LinkedIn */}
            <svg
              className="w-[30px] linkedin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
            </svg>
          </div>
        </div>

        {/* ===== Vista MÓVIL ===== */}
        <div className="flex w-full items-center justify-between xl:hidden">
          <p className="text-2xl font-bold text-[#BDB246]">{displayedText}</p>

          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center space-y-1 cursor-pointer z-50 bg-transparent"
          >
            <span
              className={`barras w-6 h-[2px] bg-black transition-all ${menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
            ></span>
            <span
              className={`barras w-6 h-[2px] bg-black transition-all ${menuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`barras w-6 h-[2px] bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
            ></span>
          </button>
        </div>
      </header>

      {/* ===== MENU DESPLEGABLE MOVIL ===== */}
{menuOpen && (
  <nav className="fixed top-[100px] left-0 w-full links-burger shadow-lg z-[90] xl:hidden animate-fadeIn">
    <ul className="flex flex-col items-center gap-6 py-8 text-lg">
      <Link
        to="/"
        className={`cursor-pointer links ${isActive("/")}`}
        onClick={() => setMenuOpen(false)}
      >
        WORK
      </Link>
      <Link
        to="/skills"
        className={`cursor-pointer links ${isActive("/skills")}`}
        onClick={() => setMenuOpen(false)}
      >
        SKILLS
      </Link>
      <Link
        to="/experience"
        className={`cursor-pointer links ${isActive("/experience")}`}
        onClick={() => setMenuOpen(false)}
      >
        FORMATION & EXPERIENCE
      </Link>
      <Link
        to="/contact"
        className={`cursor-pointer links ${isActive("/contact")}`}
        onClick={() => setMenuOpen(false)}
      >
        CONTACT
      </Link>
    </ul>
  </nav>
)}


      {/* ======= VENTANA EMERGENTE FALSA ======= */}
      {showLetter && (
        <div className="absolute top-4 backdrop-blur-sm flex justify-center items-center z-[999]">
          <div className="relative text-[#4D3F2B] backdrop-blur-sm bg-gray-200 w-[90%] rounded-xl p-8 shadow-2xl animate-fadeInScale border border-[#BDB246]/40">
            <button
              onClick={() => setShowLetter(false)}
              className="absolute top-3 right-3 hover:text-white transition"
            >
              <X />
            </button>

            <h2 className="text-[#BDB246] text-2xl font-bold mb-4 text-center">
              Carta de Recomendación
            </h2>

            <p className="text-justify leading-relaxed">
              A quien corresponda:<br></br><br></br>
              Por la presente, tengo el placer de recomendar a José María García, quien ha desempeñado sus prácticas en CDS durante el periodo comprendido entre marzo y junio de 2025. <br></br><br></br>
              Desde el primer momento, José María demostró una actitud ejemplar y una gran capacidad para asumir responsabilidades de forma autónoma. Su disposición para enfrentarse a retos de envergadura, incluso en contextos que excedían lo aprendido durante su formación, puso de manifiesto una determinación y un compromiso poco comunes.<br></br><br></br>
              A lo largo del proyecto, destacó no solo por su compromiso y capacidad de sacrificio, sino también por su liderazgo natural. Supo ganarse la confianza del equipo gracias a su madurez, iniciativa y habilidad para coordinar esfuerzos y motivar a sus compañeros, contribuyendo de manera decisiva al buen ambiente de trabajo y a la consecución de los objetivos del grupo.<br></br><br></br>
              Mostró una notable capacidad para aprender con rapidez, analizar situaciones complejas y proponer soluciones innovadoras. En todo momento mantuvo una actitud proactiva, responsable y colaborativa, convirtiéndose en un referente entre sus compañeros.<br></br><br></br>
              José María ha dejado una huella muy positiva en nuestro equipo, tanto por su competencia técnica como por sus cualidades humanas y de liderazgo, y, aunque, lamentablemente, no nos encontramos en disposición de ejercer ninguna acción de contratación sobre él, pero no puedo dejar de recomendar su candidatura para cualquier puesto al que se presente, convencido de que aportará valor, compromiso y creatividad allí donde continúe su desarrollo profesional.<br></br><br></br>
            </p>

            <p className="mt-6 text-right italic"> Edgar Fernandez — Service Delivery Manager</p>
            <p className="mt-1 text-right italic"> CDS, a Hewllet Packard Enterprise</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
