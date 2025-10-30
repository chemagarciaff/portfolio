import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
    return (
        <section className="min-h-screen py-20 px-6 md:px-20 flex flex-col items-center relative top-25 ">
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl font-bold text-center mb-11 tracking-wide">
                    {/* <span className="text-[#BDB246]">Competencias</span> y Habilidades */}
                    FORMACIÓN & <span className="text-[#BDB246]">EXPERIENCIA</span>
                </h2>
                <h2 className="text-center text-lg md:text-xl /80 mb-21">
                    Aquí podrás conocer los aspectos más destacados de mi trayectoria académica y profesional.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                    {/* Formación */}
                    <div>
                        <div className="flex items-center gap-3 mb-8 relative -left-4">
                            <GraduationCap size={35} color="#BDB246" strokeWidth={1.5} className="relative" />
                            <h2 className="text-3xl font-semibold  tracking-wide">
                                Formación
                            </h2>
                        </div>

                        <div className="space-y-10 ">
                            <div className="border-l-2 border-[#4D3F2B]/60 pl-6 relative">
                                <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
                                <h3 className="text-xl font-semibold text-[#BDB246]">
                                    CFGS Desarrollo de Aplicaciones Web
                                </h3>
                                <p className="text-sm mb-1">
                                    I.E.S. Ribera del Tajo — 09/23 - 06/25
                                </p>
                                <p className=" leading-relaxed">
                                    Formación en desarrollo full-stack con tecnologías como{" "}
                                    <span className="">React, Node.js, PHP, Java, SQL</span>
                                    y frameworks modernos como{" "}
                                    <span className="">Tailwind CSS</span>.
                                </p>
                            </div>

                            <div className="border-l-2 border-[#4D3F2B]/60 pl-6 relative">
                                <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
                                <h3 className="text-xl font-semibold text-[#BDB246]">
                                    CFGS Proyectos y Dirección de Obras de Decoración
                                </h3>
                                <p className="text-sm mb-1">
                                    Escuela de ArteDiez — 09/18 - 06/20
                                </p>
                                <p className="leading-relaxed">
                                    Formación en los <span className="font-medium">principios del diseño, composición, color y
                                        representación gráfica</span>. Desarrollo de proyectos decorativos y de interiorismo,
                                    aplicando criterios estéticos, funcionales y técnicos. Experiencia con
                                    <span className="font-medium"> herramientas de diseño 2D y 3D</span>.
                                </p>
                            </div>

                            <div className="border-l-2 border-[#4D3F2B]/60 pl-6 relative">
                                <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
                                <h3 className="text-xl font-semibold text-[#BDB246]">
                                    Grado en Física (3 años cursados)
                                </h3>
                                <p className="text-sm mb-1">
                                    Universidad Complutense de Madrid — 09/15 - 06/18
                                </p>
                                <p className="leading-relaxed">
                                    Formación en los <span className="font-medium">fundamentos teóricos y experimentales de la física</span>,
                                    incluyendo <span className="font-medium">matemáticas avanzadas, análisis de datos,
                                        programación científica</span> y resolución de problemas complejos. Desarrollo de
                                    pensamiento crítico y capacidad analítica.
                                </p>
                            </div>


                            <div className="border-l-2 border-[#4D3F2B]/60 pl-6 relative">
                                <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
                                <h3 className="text-xl font-semibold text-[#BDB246]">Bachillerato</h3>
                                <p className="text-sm mb-1">
                                    I.E.S. San Isidro — 09/13 - 06/15
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Experiencia */}
                    <div>
                        <div className="flex items-center gap-3 mb-8 relative -left-4">
                            <Briefcase size={32} color="#BDB246" strokeWidth={1.75} className="relative " />
                            <h2 className="text-3xl font-semibold  tracking-wide">
                                Experiencia
                            </h2>
                        </div>

                        <div className="space-y-8 ">
                            <div className="border-l-2 border-[#4D3F2B]/60 pl-6 relative ">
                                <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#BDB246] rounded-full"></div>
                                <h3 className="text-xl font-semibold text-[#BDB246]">Desarrollador Web</h3>
                                <p className="text-sm mb-1">
                                    Hewllet Packard Enterprise — 03/25 - 06/25
                                </p>
                                <p className=" leading-relaxed">
                                    Encargado del desarrollo y diseño de la aplicación web en el proyecto{" "}
                                    <span className="font-medium ">CDS Race Experience 5G</span>,
                                    colaborando con <span className="">I.E.S. Ribera del Tajo</span>
                                    e <span className="">I.E.S. San Isidro</span> (Talavera de la Reina).
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
