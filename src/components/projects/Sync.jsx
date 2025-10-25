import img1 from './../../assets/sync/1.png'
import img2 from './../../assets/sync/2.png'
import img3 from './../../assets/sync/3.png'
import img4 from './../../assets/sync/4.png'
import img5 from './../../assets/sync/5.png'
import img6 from './../../assets/sync/6.png'
// import video from './../../assets/videos/sync!.mp4'

export default function Sync() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full pl-30 flex flex-col lg:flex-row justify-between items-center gap-6 text-center mt-60 transition-opacity duration-20"
            >
                <h1 className="text-3xl md:text-4xl font-bold">Sync</h1>
                <div className="relative h-80 bg-white overflow-hidden">
                    {/* <video src={video} className="w-full h-full" autoPlay muted loop></video> */}
                    <div className="video_fix absolute top-0 left-0 w-full sm:h-8 h-13 bg-white"></div>
                    <div className="video_fix absolute bottom-0 left-0 w-full sm:h-8 h-13 bg-white"></div>
                </div>
            </section>

            <div className="grid grid-cols-9 grid-rows-6 gap-4 relative top-30 pb-30">
                <img src={img1}  alt='' className="col-span-6 row-span-4" />
                <img src={img2}  alt='' className="col-span-3 row-span-2 col-start-7" />
                <img src={img3}  alt='' className="col-span-3 row-span-2 col-start-7 row-start-3" />
                <img src={img4}  alt='' className="col-span-3 row-span-2 row-start-5" />
                <img src={img5}  alt='' className="col-span-3 row-span-2 col-start-4 row-start-5" />
                <img src={img6}  alt='' className="col-span-3 row-span-2 col-start-7 row-start-5" />
            </div>
        </div>
    );
}
