"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./custom.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface testi {
    fullname: string;
    departemen: string;
    testimoni: string;
}
const SpeakerSlider = () => {

    const [data, setData] = useState<testi[]>([]);

    const getTesti = async () => {
        try {
            // const response = await axios.get('http://localhost:3001/testi')
            const response = await axios.get('https://metri-backend.vercel.app/testi')
            
            const { data } = response.data;
            setData(data);

        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getTesti()
    }, [])
    return (
        <div className="mx-[10%]">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                }}
                pagination={false}
                longSwipes={true}
                navigation
            >
                {data.map((d, index) => (
                    <SwiperSlide key={index} >
                        <div className="flex flex-col z-0 h-[200px] items-center text-center p-4 border-2 border-yellow-500 rounded-lg shadow-lg">
                            <h3 className="mt-2 text-lg font-semibold text-white">{d.fullname}</h3>
                            <p className="text-sm text-gray-300">{d.departemen}</p>
                            <p className="mt-2 text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: d.testimoni }}></p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SpeakerSlider;
