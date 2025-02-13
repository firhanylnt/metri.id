"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./custom.css";

const speakers = [
  { name: "Douglas Alvarado", role: "CEO", img: "/images/p1.jpg", testi: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
  { name: "Jane Sarah", role: "COO", img: "/images/p2.jpg", testi: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
  { name: "Felix Odo", role: "CFO", img: "/images/p3.jpg", testi: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
  { name: "Michael Smith", role: "CMO", img: "/images/p3.jpg", testi: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
  { name: "Douglas Alvarado", role: "CEO", img: "/images/p1.jpg", testi: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
  { name: "Jane Sarah", role: "COO", img: "/images/p2.jpg", testi: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
  { name: "Felix Odo", role: "CFO", img: "/images/p3.jpg", testi: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
  { name: "Michael Smith", role: "CMO", img: "/images/p3.jpg", testi: "Lorem ipsum dollar sianet lorem ipsum dollar sianet." },
];

const SpeakerSlider = () => {
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
        {speakers.map((speaker, index) => (
          <SwiperSlide key={index} >
            <div className="flex flex-col items-center text-center p-4 border-2 border-yellow-500 rounded-lg shadow-lg">
              <img
                src={speaker.img}
                alt={speaker.name}
                className="rounded-full object-cover w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-32 md:h-32"
              />
              <h3 className="mt-2 text-lg font-semibold text-white">{speaker.name}</h3>
              <p className="text-sm text-gray-300">{speaker.role}</p>
              <p className="mt-2 text-sm text-gray-400 italic">"{speaker.testi}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpeakerSlider;
