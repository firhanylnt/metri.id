"use client";

import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section
      className="relative text-white text-center bg-cover w-full min-h-screen flex flex-col justify-center px-6 sm:px-12"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Content */}
      <div className="relative z-1 flex flex-col items-center mb-[50px]">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
          Annual Conference 2025
        </h1>
        <p className="mt-4 text-sm sm:text-md max-w-lg sm:max-w-2xl">
          This is PT Maybank Indonesia Finance's annual agenda to appreciate the achievements in 2024 for Mayfiner throughout Indonesia. At the same time, this activity was held to motivate Mayfiners to improve performance and achievements in 2025.
        </p>

        <button
          onClick={() => router.push('/detail')}
          className="px-6 py-3 mt-5 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Register Now
        </button>
      </div>

      {/* Sponsor Section - Responsive */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <h4 className="text-lg sm:text-xl font-bold">Our Sponsor</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-2">
          <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-transparent text-white border-2 border-white font-bold rounded-lg">
            Sponsor 1
          </button>
          <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-transparent text-white border-2 border-white font-bold rounded-lg">
            Sponsor 2
          </button>
          <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-transparent text-white border-2 border-white font-bold rounded-lg">
            Sponsor 3
          </button>
          <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-transparent text-white border-2 border-white font-bold rounded-lg">
            Sponsor 4
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
