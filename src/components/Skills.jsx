import { Code, Languages, Paintbrush, Server, UserCheck, Wrench } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            icon: <UserCheck size={32} className="icon_skill" strokeWidth={1.75} />,
            title: "Aptitudes",
            items: [
                "Responsabilidad y compromiso.",
                "Capacidad de aprendizaje rápido y adaptación.",
                "Trabajo en equipo y comunicación efectiva.",
                "Iniciativa y autonomía en la resolución de tareas.",
                "Actitud positiva.",
            ],
        },
        {
            icon: <Code size={32} className="icon_skill" strokeWidth={1.75} />,
            title: "Lenguajes de Programación",
            items: ["Java", "JavaScript", "TypeScript", "HTML5 / CSS3", "PHP", "SQL / PL/SQL"],
        },
        {
            icon: <Server size={32} className="icon_skill" strokeWidth={1.75} />,
            title: "Frameworks y Librerías",
            items: ["React JS", "Bootstrap", "Tailwind CSS"],
        },
        {
            icon: <Wrench size={32} className="icon_skill" strokeWidth={1.75} />,
            title: "Desarrollo Backend",
            items: ["APIs REST", "Arquitectura MVC", "Gestión de servidores"],
        },
        {
            icon: <Code size={32} className="icon_skill" strokeWidth={1.75} />,
            title: "Entornos y Herramientas",
            items: ["Visual Studio Code", "NetBeans", "Eclipse", "Git / GitHub", "WordPress (CMS)"],
        },
        {
            icon: <Paintbrush size={32} className="icon_skill" strokeWidth={1.75} />,
            title: "Diseño y Ofimática",
            items: ["Adobe Photoshop", "Adobe Illustrator", "Microsoft Excel (avanzado)", "Microsoft Office"],
        },
        {
            icon: <Languages size={32} className="icon_skill" strokeWidth={1.75} />,
            title: "Idiomas",
            items: ["Español (nativo)", "Inglés (avanzado)"],
        },
    ];

    return (
        <section className="min-h-screen py-20 px-6 md:px-20 flex flex-col items-center relative top-25 ">
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl font-bold text-center mb-11 tracking-wide">
                    {/* <span className="text-[#BDB246]">Competencias</span> y Habilidades */}
                    SKILLS
                </h2>
                <h2 className="text-center text-lg md:text-xl  mb-21">
                    En esta sección podrás conocer mis principales competencias técnicas y personales, <br></br>
                    así como las herramientas y tecnologías que manejo.
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group p-6 border-l-4 border-[#BDB246]/60 hover:border-[#BDB246] transition-all bg-transparent"
                            >
                            <div className="flex items-center gap-3 mb-4">
                                {category.icon}
                                <h3 className="text-2xl font-semibold text-[#BDB246]">
                                    {category.title}
                                </h3>
                            </div>
                            <ul className="space-y-1 text-lg leading-relaxed">
                                {category.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="transition-colors duration-200 hover:text-[#BDB246]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
