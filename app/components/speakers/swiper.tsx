"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./custom.css";
import { useEffect, useState } from "react";
import axios from "axios";

const speakers = [
    { fullname: "Douglas Alvarado", departemen: "CEO", testimoni: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
    { fullname: "Jane Sarah", departemen: "COO", testimoni: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
    { fullname: "Felix Odo", departemen: "CFO", testimoni: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
    { fullname: "Michael Smith", departemen: "CMO", testimoni: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
    { fullname: "Douglas Alvarado", departemen: "CEO", testimoni: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
    { fullname: "Jane Sarah", departemen: "COO", testimoni: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
    { fullname: "Felix Odo", departemen: "CFO", testimoni: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
    { fullname: "Michael Smith", departemen: "CMO", testimoni: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
];

interface testi {
    fullname: string;
    departemen: string;
    testimoni: string;
}
const SpeakerSlider = () => {

    const [data, setData] = useState<testi[]>([]);

    const getTesti = async () => {
        try {
            const response = await axios.get('http://localhost:3001/testi')
            if(response.status === 200) {
                const {data} = response.data;
                setData(data);
            }else{
                setData(speakers);
            }
        } catch (error) {
            setData(speakers);
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
                    1024: { slidesPerView: 4 },
                }}
                pagination={false}
                longSwipes={true}
                navigation
            >
                {data.map((d, index) => (
                    <SwiperSlide key={index} >
                        <div className="flex flex-col z-0 items-center text-center p-4 border-2 border-yellow-500 rounded-lg shadow-lg">
                            <h3 className="mt-2 text-lg font-semibold text-white">{d.fullname}</h3>
                            <p className="text-sm text-gray-300">{d.departemen}</p>
                            <p className="mt-2 text-sm text-gray-400 italic">"{d.testimoni}"</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SpeakerSlider;
