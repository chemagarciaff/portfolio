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
                className="w-full px-20 border-1 border-black flex flex-col lg:flex-row justify-between items-center gap-6 text-center mt-60 transition-opacity duration-20"
            >
                <h1 className="text-3xl md:text-4xl font-bold">GreenBloom</h1>
                <div className="relative h-80 bg-white overflow-hidden">
                    {/* <video src={video} className="w-full h-full" autoPlay muted loop></video> */}
                    <div className="video_fix absolute top-0 left-0 w-full sm:h-8 h-13 bg-white"></div>
                    <div className="video_fix absolute bottom-0 left-0 w-full sm:h-8 h-13 bg-white"></div>
                </div>
            </section>
            <div className="grid lg:grid-cols-9 lg:grid-rows-6 grid-cols-1 lg:gap-5 gap-7 relative top-30 pb-30 px-5">

                <img src={img1} className="border-1 border-gray-500 lg:col-span-6 lg:row-span-4"/>
                <img src={img4} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7"/>
                <img src={img3} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-3"/>
                <img src={img2} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:row-start-5"/>
                <img src={img6} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-5"/>
                <img src={img5} className="border-1 border-gray-500 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-5"/>
            </div>
        </div>
    );
}
