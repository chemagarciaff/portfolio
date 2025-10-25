import img1 from './../../assets/ilcollective/1.png'
import img2 from './../../assets/ilcollective/2.png'
import img3 from './../../assets/ilcollective/3.png'
import img4 from './../../assets/ilcollective/4.png'
import img5 from './../../assets/ilcollective/5.png'
import img6 from './../../assets/ilcollective/6.png'
import img7 from './../../assets/ilcollective/7.png'
// import video from './../../assets/videos/snake.mp4'

export default function Snake() {
    return (
        <div className='pb-20 relative'>
            <section
                className="w-full pl-30 flex flex-col lg:flex-row justify-between items-center gap-6 text-center mt-60 transition-opacity duration-20"
            >
                <h1 className="text-3xl md:text-4xl font-bold">Snake</h1>
                <div className="relative h-80 bg-white overflow-hidden">
                    {/* <video src={video} className="w-full h-full" autoPlay muted loop></video> */}
                    <div className="video_fix absolute top-0 left-0 w-full sm:h-8 h-13 bg-white"></div>
                    <div className="video_fix absolute bottom-0 left-0 w-full sm:h-8 h-13 bg-white"></div>
                </div>
            </section>

            <div className="grid xl:grid-cols-5 xl:grid-rows-3 grid-cols-1 gap-4 relative top-38 left-1/2 -translate-x-1/2 gallery pb-20">
                <img src={img1} alt="1" className="rounded-lg xl:col-span-3 xl:row-span-4" />
                <img src={img4} alt="2" className="rounded-lg xl:col-span-2 xl:row-span-2 xl:col-start-4 xl:row-start-3" />
                <img src={img5} alt="3" className="rounded-lg xl:col-span-2 xl:row-span-2 xl:col-start-4 xl:row-start-1" />
                <img src={img3} alt="4" className="rounded-lg xl:col-span-2 xl:row-span-2 xl:row-start-5" />
                <img src={img2} alt="5" className="rounded-lg xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-5" />
                <img src={img6} alt="6" className="rounded-lg xl:col-start-5 xl:row-start-5" />
                <img src={img7} alt="7" className="rounded-lg xl:col-start-5 xl:row-start-6" />
            </div>
        </div>
    );
}
