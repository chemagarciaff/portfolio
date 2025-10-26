import { Github, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 md:px-20 flex flex-col items-center relative top-25"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl font-bold mb-10 tracking-wide">
          CONTACT <span className="text-[#BDB246]">INFORMATION</span>
        </h2>

        <p className="text-lg md:text-xl  mb-16">
          Si quieres ponerte en contacto conmigo para colaborar, resolver dudas o
          conocer más sobre mi trabajo, aquí tienes mis datos de contacto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-left">
          {/* Correo */}
          <div className="flex items-center gap-4 border-l-2 border-[#4D3F2B]/60 pl-6 relative">
            <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Mail size={24} color="#BDB246" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#BDB246]">Email</h3>
              </div>
              <p className="">garciaf.chema@gmail.com</p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-4 border-l-2 border-[#4D3F2B]/60 pl-6 relative">
            <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Phone size={24} color="#BDB246" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#BDB246]">Teléfono</h3>
              </div>
              <p className="">+34 664 020 094</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 border-l-2 border-[#4D3F2B]/60 pl-6 relative">
            <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Github size={24} color="#BDB246" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#BDB246]">GitHub</h3>
              </div>
              <a
                href="https://github.com/chemagarciaff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#BDB246] transition-colors"
              >
                github.com/chemagarciaff
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div className="flex items-center gap-4 border-l-2 border-[#4D3F2B]/60 pl-6 relative">
            <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <MapPin size={24} color="#BDB246" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#BDB246]">Ubicación</h3>
              </div>
              <p className="">Talavera de la Reina, Toledo, España</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
