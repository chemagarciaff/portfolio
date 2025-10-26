import img1 from './../../assets/sync/1.png'
import img2 from './../../assets/sync/2.png'
import img3 from './../../assets/sync/3.png'
import img4 from './../../assets/sync/4.png'
import img6 from './../../assets/sync/6.png'
import img7 from './../../assets/sync/7.png'
// import video from './../../assets/videos/GreenBloom.mp4'

export default function Sync() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left mt-30 bg-transparent transition-all duration-300"
            >
                {/* Título del proyecto */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#BDB246] tracking-wide mb-4">
                        SYNC
                    </h1>
                    <div className="h-1 w-24 bg-[#BDB246] mx-auto md:mx-0 mb-6 rounded"></div>
                </div>

                {/* Descripción */}
                <div className="w-full lg:w-2/3 text-lg leading-relaxed relative">
                    <p className="mb-6 text-justify">
                        <span className="font-semibold text-[#BDB246]">SYNC</span> es una aplicación web de{" "}
                        <span className="text-[#BDB246]">streaming musical</span> desarrollada con{" "}
                        <span className="text-[#BDB246] font-medium">HTML5, CSS3 y JavaScript</span>, cuyo objetivo fue
                        simular la experiencia interactiva y visual de una plataforma moderna de música.
                    </p>

                    <p className="mb-6 text-justify">
                        El proyecto integra la{" "}
                        <span className="text-[#BDB246] font-medium">API de Spotify</span>, lo que permite acceder a un
                        catálogo real de canciones, artistas y álbumes, ofreciendo una experiencia mucho más inmersiva y
                        conectada con el entorno musical actual. A través de peticiones asíncronas y manipulación del
                        DOM, se logra una interacción fluida entre la interfaz y los datos obtenidos desde la API.
                    </p>

                    <p className="text-justify">
                        En el apartado estético, se diseñó una interfaz{" "}
                        <span className="text-[#BDB246] font-medium">oscura y futurista</span>, con tipografías de estilo
                        tecnológico y acentos en naranja que evocan energía y ritmo. Las animaciones y efectos de{" "}
                        <span className="text-[#BDB246] font-medium">transición CSS</span> aportan dinamismo al entorno,
                        manteniendo una experiencia visual coherente, moderna y completamente responsive.
                    </p>
                </div>
            </section>



            <div className="grid lg:grid-cols-9 lg:grid-rows-6 grid-cols-1 lg:gap-5 gap-7 relative top-30 pb-30 px-5">
                <img src={img1} className="border-1 border-gray-500 lg:col-span-6 lg:row-span-4" />
                <img src={img2} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7" />
                <img src={img3} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-3" />
                <img src={img6} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:row-start-5" />
                <img src={img4} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-5" />
                <img src={img7} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-5" />
            </div>
        </div>
    );
}
