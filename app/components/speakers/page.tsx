"use client";

import SpeakerSlider from "./swiper";

const dress = [
  { name: "Douglas Alvarado", role: "Chief Guest Speaker", img: "/images/c1.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c2.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c5.png" },
  { name: "Jane Doe", role: "Marketing Expert", img: "/images/c4.png" },
];

const Speakers = () => {
  return (
    <section className="py-12 text-white text-center">
      <h2 className="text-3xl text-center font-bold md:mb-[50px] mb-[20px]">Motivational Quotes</h2>
      <SpeakerSlider />
      <h2 className="text-3xl text-center font-bold md:mt-[50px] mt-[40px]" style={{ fontStyle: 'italic' }}>Dresscode</h2>
      <p className="md:text-md text-sm text-center text-yellow-500 font-bold">
        Black & Gold
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:mt-[50px] mt-[50px]">
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
