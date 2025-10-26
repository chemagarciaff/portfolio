import img1 from './../../assets/greenbloom/1.png'
import img2 from './../../assets/greenbloom/2.png'
import img3 from './../../assets/greenbloom/3.png'
import img4 from './../../assets/greenbloom/4.png'
import img5 from './../../assets/greenbloom/5.png'
import img6 from './../../assets/greenbloom/6.png'
// import video from './../../assets/videos/GreenBloom.mp4'

export default function Greenbloom() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left mt-35 bg-transparent transition-all duration-300"
            >
                {/* Título del proyecto */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#BDB246] tracking-wide mb-4">
                        GreenBloom
                    </h1>
                    <div className="h-1 w-24 bg-[#BDB246] mx-auto md:mx-0 mb-6 rounded"></div>
                </div>

                {/* Descripción */}
                <div className="w-full lg:w-2/3 text-lg leading-relaxed relative">
                    <p className="mb-6 text-justify">
                        <span className="font-semibold text-[#BDB246]">GreenBloom</span> es una web
                        estática creada desde cero con{" "}
                        <span className="text-[#BDB246] font-medium">Bootstrap</span> para la
                        asignatura de <span className="text-[#BDB246]">Lenguajes de Marca</span>.
                        El diseño se centra en una estética limpia y moderna, con una paleta de
                        colores verdes y blancos que reflejan la temática ecológica del proyecto.
                    </p>

                    <p className="mb-6">
                        El sitio incluye un <span className="text-[#BDB246]">catálogo de plantas</span>
                        con descripciones detalladas y fotografías, además de secciones informativas sobre
                        el cuidado de las plantas y consejos para un estilo de vida sostenible.
                    </p>

                    <p>
                        Tecnologías utilizadas:{" "}
                        <span className="text-[#BDB246] font-semibold">
                            HTML5, CSS3, Bootstrap, JavaScript
                        </span>
                    </p>
                </div>
            </section>

            <div className="grid lg:grid-cols-9 lg:grid-rows-6 grid-cols-1 lg:gap-5 gap-7 relative top-30 pb-30 px-5">

                <img src={img1} className="border-1 border-gray-500 lg:col-span-6 lg:row-span-4" />
                <img src={img4} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7" />
                <img src={img3} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-3" />
                <img src={img2} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:row-start-5" />
                <img src={img6} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-5" />
                <img src={img5} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-5" />
            </div>
        </div>
    );
}
