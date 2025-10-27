import img1 from './../../assets/guesswhere/1.png'
import img2 from './../../assets/guesswhere/2.png'
import img3 from './../../assets/guesswhere/3.png'
import img4 from './../../assets/guesswhere/4.png'
import img5 from './../../assets/guesswhere/5.png'
// import video from './../../assets/videos/GreenBloom.mp4'

export default function Guesswhere() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left mt-30 bg-transparent transition-all duration-300"
            >
                {/* Título del proyecto */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#BDB246] tracking-wide mb-4">
                        ¡GuessWhere!
                    </h1>
                    <div className="h-1 w-24 bg-[#BDB246] mx-auto md:mx-0 mb-6 rounded"></div>
                </div>

                {/* Descripción */}
                <div className="w-full lg:w-2/3 text-lg leading-relaxed relative">
                    <p className="mb-6 text-justify">
                        <span className="font-semibold text-[#BDB246]">¡GuessWhere!</span> es una aplicación web desarrollada como
                        <span className="text-[#BDB246] font-medium"> Trabajo de Fin de Grado</span>, inspirada en el popular juego
                        <span className="text-[#BDB246] font-medium"> GeoGuessr</span>. Su objetivo es poner a prueba los
                        conocimientos geográficos del usuario a través de una experiencia visual e interactiva basada en ubicaciones reales.
                    </p>

                    <p className="mb-6 text-justify">
                        El proyecto cuenta con una arquitectura completa <span className="text-[#BDB246] font-medium">full-stack</span>:
                        el <span className="text-[#BDB246] font-medium">frontend</span> fue implementado con
                        <span className="text-[#BDB246] font-medium"> React</span>, ofreciendo una interfaz moderna, fluida y
                        totalmente responsive; mientras que el <span className="text-[#BDB246] font-medium">backend</span> se
                        desarrolló con <span className="text-[#BDB246] font-medium">Express.js</span>, conectado a una base de datos
                        <span className="text-[#BDB246] font-medium"> MySQL</span> para la gestión de usuarios, puntuaciones y partidas.
                    </p>

                    <p className="mb-6 text-justify">
                        Además, la aplicación integra la <span className="text-[#BDB246] font-medium">API de Google Maps</span>,
                        permitiendo a los jugadores explorar ubicaciones reales en modo panorámico y realizar sus predicciones de
                        manera dinámica y precisa. Los resultados muestran la distancia entre la suposición y la ubicación real,
                        generando una puntuación personalizada según la precisión del usuario.
                    </p>

                </div>
            </section>

            <div className="grid lg:grid-cols-9 lg:grid-rows-6 grid-cols-1 lg:gap-5 gap-7 relative top-25 pb-30 px-5">

                <img src={img1} className="border-1 border-gray-500 lg:col-span-6 lg:row-span-4" />
                <img src={img2} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7" />
                <img src={img3} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-3" />
                <img src={img4} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:row-start-5" />
                <img src={img5} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-5" />
                <img src={img5} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-5" />
            </div>
        </div>
    );
}
