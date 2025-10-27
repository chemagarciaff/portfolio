import img1 from './../../assets/hausestate/1.png'
import img2 from './../../assets/hausestate/2.png'
import img3 from './../../assets/hausestate/3.png'
import img4 from './../../assets/hausestate/4.png'
import img5 from './../../assets/hausestate/5.png'
import img6 from './../../assets/hausestate/6.png'
// import video from './../../assets/videos/GreenBloom.mp4'

export default function HausEstate() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left mt-30 bg-transparent transition-all duration-300"
            >
                {/* Título del proyecto */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#BDB246] tracking-wide mb-4">
                        HausEstate
                    </h1>
                    <div className="h-1 w-24 bg-[#BDB246] mx-auto md:mx-0 mb-6 rounded"></div>
                </div>

                {/* Descripción */}
                <div className="w-full lg:w-2/3 text-lg leading-relaxed relative">
                    <p className="mb-6 text-justify">
                        <span className="font-semibold text-[#BDB246]">HausEstate</span> fue mi primera web
                        desarrollada únicamente con <span className="text-[#BDB246]">HTML</span> y{" "}
                        <span className="text-[#BDB246]">CSS</span>. Es un proyecto al que tengo especial cariño, ya que
                        marcó el inicio de mi trayectoria en el desarrollo web y representa el punto de partida de mi
                        evolución tanto técnica como estética.
                    </p>

                    <p className="mb-6 text-justify">
                        El sitio está concebido como la página corporativa de una{" "}
                        <span className="text-[#BDB246]">empresa de arquitectura</span>, con un diseño enfocado en la
                        claridad visual y la armonía entre estructura y espacio. Utiliza una{" "}
                        <span className="text-[#BDB246] font-medium">paleta de colores suaves</span> y una{" "}
                        <span className="text-[#BDB246] font-medium">estética limpia y refinada</span>, buscando reflejar
                        la profesionalidad y precisión del mundo arquitectónico.
                    </p>

                    <p className="text-justify">
                        A nivel técnico, el proyecto me permitió afianzar los fundamentos del{" "}
                        <span className="text-[#BDB246] font-medium">maquetado semántico</span> y la{" "}
                        <span className="text-[#BDB246] font-medium">organización del contenido mediante CSS</span>.
                        También fue el primer ejercicio donde experimenté con la{" "}
                        <span className="text-[#BDB246] font-medium">adaptabilidad responsive</span> y el equilibrio
                        entre tipografía, márgenes y jerarquía visual.
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
