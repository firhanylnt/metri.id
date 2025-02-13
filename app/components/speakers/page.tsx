"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SpeakerSlider from "./swiper";

const speakers = [
  { name: "Douglas Alvarado", role: "CEO", img: "/images/p1.jpg", 'testi': 'lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet' },
  { name: "Jane Sarah", role: "COO", img: "/images/p2.jpg", 'testi': 'lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet' },
  { name: "Felix Odo", role: "CFO", img: "/images/p3.jpg", 'testi': 'lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet' },
  { name: "Michael Smith", role: "CMO", img: "/images/p3.jpg", 'testi': 'lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet' },
  { name: "Douglas Alvarado", role: "CEO", img: "/images/p1.jpg", 'testi': 'lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet' },
  { name: "Jane Sarah", role: "COO", img: "/images/p2.jpg", 'testi': 'lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet' },
  { name: "Felix Odo", role: "CFO", img: "/images/p3.jpg", 'testi': 'lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet' },
  { name: "Michael Smith", role: "CMO", img: "/images/p3.jpg", 'testi': 'lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet lorem ipsum dollar sianet' },
];

const dress = [
  { name: "Douglas Alvarado", role: "Chief Guest Speaker", img: "/images/c1.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c2.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c5.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c4.png" },
];

const Speakers = () => {
  return (
    <section className="py-12 text-white text-center">
      <h2 className="text-3xl text-center font-bold md:mb-[100px]">Testimoni</h2>
      <SpeakerSlider />
      <h2 className="text-3xl text-center font-bold md:mt-[100px] mt-[50px]">Dress Code</h2>
      <p className="md:text-md text-sm text-center text-yellow-500 font-bold">
        Black & Gold
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-[100px]">
        {dress.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-auto h-[150px] sm:h-[180px] md:h-[200px] mx-auto bg-white rounded-lg border-2 border-yellow-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
