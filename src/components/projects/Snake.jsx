import img1 from './../../assets/snake/1.png';
import img2 from './../../assets/snake/2.png';
import img3 from './../../assets/snake/3.png';
import img4 from './../../assets/snake/4.png';
// import video from './../../assets/videos/GreenBloom.mp4'

export default function Snake() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left mt-30 bg-transparent transition-all duration-300"
            >
                {/* Título del proyecto */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#BDB246] tracking-wide mb-4">
                        Snake
                    </h1>
                    <div className="h-1 w-24 bg-[#BDB246] mx-auto md:mx-0 mb-6 rounded"></div>
                </div>

                {/* Descripción */}
                <div className="w-full lg:w-2/3 text-lg leading-relaxed relative">
                    <p className="mb-6 text-justify">
                        <span className="font-semibold text-[#BDB246]">Snake</span> es un proyecto desarrollado
                        íntegramente con <span className="text-[#BDB246]">HTML, CSS y JavaScript</span>, tomando como
                        referencia el clásico videojuego de los teléfonos Nokia. El objetivo fue recrear la jugabilidad
                        original a través de un enfoque totalmente web, sin dependencias externas ni motores gráficos.
                    </p>

                    <p className="mb-6 text-justify">
                        La base del juego está construida utilizando el sistema de{" "}
                        <span className="text-[#BDB246] font-medium">CSS Grid</span>, lo que permitió representar el
                        tablero como una cuadrícula dinámica donde cada celda se comporta como un píxel del entorno.
                        Este enfoque hace que el movimiento de la serpiente sea preciso, fluido y adaptable a
                        diferentes tamaños de pantalla.
                    </p>

                    <p className="text-justify">
                        En cuanto al diseño visual, se optó por una{" "}
                        <span className="text-[#BDB246] font-medium">estética retro monocromática</span> en tonos
                        verdes, simulando las antiguas pantallas LCD. Los efectos de borde punteado, la tipografía
                        pixelada y la iluminación tenue evocan el aspecto clásico del Snake original, combinando
                        <span className="text-[#BDB246] font-medium"> nostalgia y código moderno</span> en una
                        experiencia completamente responsive.
                    </p>
                </div>
            </section>

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-7 relative top-30 pb-30 px-5">

                <img src={img1} className="border-1 border-gray-500 " />
                <img src={img2} className="border-1 border-gray-500  " />
                <img src={img3} className="border-1 border-gray-500  " />
                <img src={img4} className="border-1 border-gray-500  " />
            </div>
        </div>
    );
}
