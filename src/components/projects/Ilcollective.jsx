import img1 from './../../assets/ilcollective/1.png'
import img2 from './../../assets/ilcollective/2.png'
import img3 from './../../assets/ilcollective/3.png'
import img4 from './../../assets/ilcollective/4.png'
import img5 from './../../assets/ilcollective/5.png'
import img6 from './../../assets/ilcollective/6.png'
// import video from './../../assets/videos/GreenBloom.mp4'

export default function Ilcollective() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left mt-30 bg-transparent transition-all duration-300"
            >
                {/* Título del proyecto */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#BDB246] tracking-wide mb-4">
                        ILCollective
                    </h1>
                    <div className="h-1 w-24 bg-[#BDB246] mx-auto md:mx-0 mb-6 rounded"></div>
                </div>

                {/* Descripción */}
                <div className="w-full lg:w-2/3 text-lg leading-relaxed relative">
                    <p className="mb-6 text-justify">
                        <span className="font-semibold text-[#BDB246]">ILCollective</span> es una tienda de ropa creada
                        a partir de prendas <span className="text-[#BDB246]">reworked</span>, donde cada pieza tiene una
                        segunda vida y una identidad única. El proyecto combina un enfoque sostenible con un desarrollo
                        técnico sólido y una experiencia visual moderna inspirada en la estética editorial.
                    </p>

                    <p className="mb-6 text-justify">
                        El sitio fue desarrollado desde cero utilizando{" "}
                        <span className="text-[#BDB246] font-medium">HTML5, CSS3 y JavaScript</span>, junto con una{" "}
                        <span className="text-[#BDB246] font-medium">base de datos SQL gestionada por MySQL</span> para
                        almacenar y administrar la información de las prendas: descripciones, tallas, precios e imágenes.
                        Esta integración permitió un flujo de datos dinámico y estructurado, facilitando la actualización
                        y gestión del catálogo desde el backend.
                    </p>

                    <p className="text-justify">
                        En el apartado visual, se apostó por una{" "}
                        <span className="text-[#BDB246] font-medium">paleta fría y minimalista</span>, tipografía fina y
                        un diseño limpio que reflejan la filosofía sostenible de la marca. Las transiciones suaves y el
                        uso equilibrado del espacio transmiten la esencia de una{" "}
                        <span className="text-[#BDB246] font-medium">marca de moda consciente</span> con un enfoque
                        digital contemporáneo.
                    </p>
                </div>
            </section>


            <div className="grid lg:grid-cols-9 lg:grid-rows-6 grid-cols-1 lg:gap-5 gap-7 relative top-25 pb-30 px-5">

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
