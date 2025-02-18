"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  const calculateTimeLeft = () => {
      const eventDate = new Date("2025-03-02").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;
  
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

  return (
    <section
      className="relative text-white text-center bg-cover bg-center min-h-screen flex flex-col justify-center px-6 sm:px-12"
      style={{ backgroundImage: "url('/images/maybank_logo.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src="/images/logo-header.jpg"
          alt="Maybank Logo"
          className="w-32 sm:w-40 md:w-48"
        />
      </div>

      {/* Content */}
      <div className="relative z-1 flex flex-col items-center mb-[50px]">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
          Maybank Finance<br /> Annual Conference 2025
        </h1>
        <p className="text-md sm:text-md max-w-lx sm:max-w-2xl mt-[30px]">
        <b>Selamat datang, Mayfiners!</b>
        <br />Anda adalah peserta terundang dalam Maybank Finance Annual Conference 2025, acara tahunan penuh apresiasi bagi para Mayfiners yang sudah memberikan kontribusi terbaik sepanjang tahun 2024!
        <br /> <br />Prepare yourself for an unforgettable spectacle! Are you ready to be amazed?
        </p>

        <button
          onClick={() => router.push('/detail')}
          className="px-6 py-3 mt-5 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Let's Get Started
        </button>
      </div>

      {/* Countdown Timer */}
      <div className="absolute bottom-2 md:left-1/2 transform md:-translate-x-1/2 -translate-x-3 text-center">
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 text-xl sm:text-3xl md:mt-[100px] mt-5 mb-5">
          <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
            {timeLeft.days} <span className="block text-sm sm:text-lg">Days</span>
          </div>
          <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
            {timeLeft.hours} <span className="block text-sm sm:text-lg">Hours</span>
          </div>
          <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
            {timeLeft.minutes} <span className="block text-sm sm:text-lg">Minutes</span>
          </div>
          <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
            {timeLeft.seconds} <span className="block text-sm sm:text-lg">Seconds</span>
          </div>
        </div>
      </div>
     

      {/* Sponsor Section - Responsive */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
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
      </div> */}

    </section>
  );
};

export default Hero;
