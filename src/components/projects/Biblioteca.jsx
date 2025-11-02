import img1 from './../../assets/biblioteca/1.png'
import img2 from './../../assets/biblioteca/2.png'
import img3 from './../../assets/biblioteca/3.png'
import img4 from './../../assets/biblioteca/4.png'
import img5 from './../../assets/biblioteca/5.png'
import img6 from './../../assets/biblioteca/6.png'
// import video from './../../assets/videos/GreenBloom.mp4'

export default function Biblioteca() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left mt-35 bg-transparent transition-all duration-300"
            >
                {/* Título del proyecto */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#BDB246] tracking-wide mb-4">
                        Biblioteca
                    </h1>
                    <div className="h-1 w-24 bg-[#BDB246] mx-auto md:mx-0 mb-6 rounded"></div>
                </div>

                {/* Descripción */}
                <div className="w-full lg:w-2/3 text-lg leading-relaxed relative">
    <p className="mb-6 text-justify">
        <span className="font-semibold text-[#BDB246]">Biblioteca</span> es una aplicación web desarrollada con el patrón 
        <span className="text-[#BDB246] font-medium"> MVC</span> en 
        <span className="text-[#BDB246]"> PHP</span>, diseñada para gestionar de manera eficiente los 
        <span className="text-[#BDB246]"> libros, usuarios y reservas</span> de una biblioteca. 
        La interfaz combina <span className="text-[#BDB246]"> HTML, CSS</span> y 
        <span className="text-[#BDB246]"> JavaScript</span> para ofrecer una experiencia fluida, moderna y visualmente atractiva.
    </p>

    <p className="mb-6 text-justify">
        El sistema distingue entre <span className="text-[#BDB246]"> administradores</span> y 
        <span className="text-[#BDB246]"> usuarios regulares</span>: los administradores pueden registrar, editar o eliminar libros, 
        gestionar usuarios y supervisar las reservas; mientras que los usuarios pueden consultar el catálogo, 
        reservar ejemplares y revisar sus préstamos activos.
    </p>

    <p className="mb-6 text-justify">
        La aplicación se apoya en una <span className="text-[#BDB246]"> base de datos relacional</span> para el almacenamiento y 
        organización de la información, garantizando consistencia y rapidez en las operaciones.
    </p>

    <p>
        Tecnologías utilizadas:{" "}
        <span className="text-[#BDB246] font-semibold">
            PHP, MVC, MySQL, HTML5, CSS3, JavaScript
        </span>
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
