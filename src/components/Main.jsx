import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import greenbloom from './../assets/portadas/greenbloom_home.png';
import guesswhere from './../assets/portadas/guesswhere_home.png';
import haus from './../assets/portadas/hausestate_home.png';
import ilco from './../assets/portadas/ilcollective_home.png';
import snake from './../assets/portadas/snake_home.png';
import sync4 from './../assets/portadas/sync4_home.png';
import ScrollButton from './ScrollButton';


function Main() {
  const [opacity, setOpacity] = useState(1);

  const projects = [
    { img: greenbloom, title: 'GreenBloom', path: '/project/greenbloom' },
    { img: ilco, title: 'Ilcollective', path: '/project/ilcollective' },
    { img: sync4, title: 'Sync', path: '/project/sync' },
    { img: guesswhere, title: 'GuessWhere', path: '/project/guesswhere' },
    { img: snake, title: 'Snake Game', path: '/project/snake' },
    { img: haus, title: 'HausEstate', path: '/project/hausestate' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.max(1 - window.scrollY / 300, 0);
      setOpacity(newOpacity);
    };

    // Ejecutar una vez al montar para sincronizar el estado inicial
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex flex-col gap-16 relative">
      {/* Sección fija con opacidad dinámica */}
      <section style={{ opacity }}
      className="flex flex-col items-center justify-center text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#4D3F2B]">
            ¡Bienvenido!
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="max-w-2xl text-base md:text-lg leading-relaxed text-[#4D3F2B]/90 
            backdrop-blur-sm p-6 rounded-2xl"
          >
            Mi nombre es <span className="font-semibold text-[#BDB246]">Chema</span> y soy diseñador y desarrollador web.
            <br />A continuación podrás ver algunos de mis trabajos realizados durante mi etapa como estudiante de{" "}
            <span className="font-medium text-[#BDB246]">Desarrollo de Aplicaciones Web</span>.
            <br />
            <span className="italic">¡Espero que te gusten!</span>
          </motion.h2>
        </motion.div>
      </section>

      {/* Sección scrollable */}
      <section className="grid gap-10 md:gap-14 projects relative z-10 top-175 pb-30 px-20">
        {projects.map((project) => (
          <Link
            key={project.title}
            to={project.path}
            className="relative group block "
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full object-cover rounded-lg transition duration-300 group-hover:opacity-40"
            />
            <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
              {project.title}
            </p>
          </Link>
        ))}
      </section>

      <ScrollButton />
    </main>
  );
}

export default Main;
