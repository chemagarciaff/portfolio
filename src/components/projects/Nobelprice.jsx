import img1 from './../../assets/nobelprice/1.png'
import img2 from './../../assets/nobelprice/2.png'
import img3 from './../../assets/nobelprice/3.png'
import img4 from './../../assets/nobelprice/4.png'
import img5 from './../../assets/nobelprice/5.png'
import img6 from './../../assets/nobelprice/6.png'
// import video from './../../assets/videos/GreenBloom.mp4'

export default function Nobelprice() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left mt-30 bg-transparent transition-all duration-300"
            >
                {/* Título del proyecto */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#BDB246] tracking-wide mb-4">
                        The Nobel Prize
                    </h1>
                    <div className="h-1 w-24 bg-[#BDB246] mx-auto md:mx-0 mb-6 rounded"></div>
                </div>

                {/* Descripción */}
                <div className="w-full lg:w-2/3 text-lg leading-relaxed relative">
                    <p className="mb-6 text-justify">
                        <span className="font-semibold text-[#BDB246]">The Nobel Prize</span> es una aplicación interactiva desarrollada en{" "}
                        <span className="text-[#BDB246] font-medium">React</span> que permite explorar los ganadores del Premio Nobel a lo largo de la historia.
                        Utiliza la{" "}
                        <span className="text-[#BDB246] font-medium">API oficial del Nobel Prize</span> para obtener información detallada
                        sobre cada galardonado, incluyendo el año, la categoría y la motivación del premio.
                    </p>

                    <p className="mb-6 text-justify">
                        A partir de estos datos, la aplicación realiza consultas a la{" "}
                        <span className="text-[#BDB246] font-medium">API de CORE</span> para mostrar artículos académicos y publicaciones
                        relacionadas con cada premio o laureado. De esta forma, el usuario puede acceder tanto a la información oficial
                        como a recursos científicos complementarios que amplían el contexto del reconocimiento.
                    </p>

                    <p className="text-justify">
                        El proyecto presenta una{" "}
                        <span className="text-[#BDB246] font-medium">interfaz limpia y minimalista</span> inspirada en la estética visual
                        de la página oficial del Nobel Prize. Su diseño prioriza la{" "}
                        <span className="text-[#BDB246] font-medium">claridad, la navegación fluida</span> y la coherencia visual,
                        ofreciendo una experiencia moderna que conecta la historia del conocimiento con la investigación académica actual.
                    </p>
                </div>
            </section>


            <div className="grid lg:grid-cols-9 lg:grid-rows-6 grid-cols-1 lg:gap-5 gap-7 relative top-25 pb-30 px-5">

                <img src={img1} className="border-1 border-gray-500 lg:col-span-6 lg:row-span-4" />
                <img src={img2} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7" />
                <img src={img3} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-3" />
                <img src={img4} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:row-start-5" />
                <img src={img5} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-5" />
                <img src={img6} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-5" />
            </div>
        </div>
    );
}
