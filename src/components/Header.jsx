import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // 👈 Importa useLocation
import "./../App.css";

function Header() {
  const fullText = "CHEMA GARCÍA";
  const [displayedText, setDisplayedText] = useState("");
  const [opacitySpan, setOpacitySpan] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); // 👈 Detecta la ruta actual

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

  // ✅ Función para marcar el link activo
  const isActive = (path) =>
    location.pathname === path
      ? "text-[#BDB246] underline underline-offset-8 decoration-[#BDB246] font-semibold"
      : "hover:text-[#BDB246] transition-colors";

  return (
    <header className="w-full fixed top-0 left-0 px-10 gap-4 md:gap-6 h-[100px] flex items-center z-100 header-bg">
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

        <div>
          <svg
            className="w-[30px] linkedin fill-current"
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
            className={`barras w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`barras w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`barras w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`fixed top-[80px] left-0 w-full links-burger flex flex-col items-center border-b border-brown shadow-lg text-lg transition-all duration-300 overflow-hidden xl:hidden ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col w-full text-center">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`links-burger py-4 ${isActive("/")}`}
          >
            WORK
          </Link>
          <Link
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className={`links-burger py-4 ${isActive("/skills")}`}
          >
            SKILLS
          </Link>
          <Link
            to="/experience"
            onClick={() => setMenuOpen(false)}
            className={`links-burger py-4 ${isActive("/experience")}`}
          >
            FORMATION & EXPERIENCE
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`links-burger py-4 ${isActive("/contact")}`}
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
