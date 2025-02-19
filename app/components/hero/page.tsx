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
      className="relative text-white text-center bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12"
      style={{ backgroundImage: "url('/images/maybank_logo.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mb-[20px]">
        <img
          src="/images/logo-header.jpg"
          alt="Maybank Logo"
          className="w-28 sm:w-36 md:w-44 lg:w-48"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Maybank Finance <br /> Annual Conference 2025
        </h1>
        <p className="text-md sm:text-lg mt-5 leading-relaxed">
          <b>Selamat datang, Mayfiners!</b> <br />
          Anda adalah peserta terundang dalam Maybank Finance Annual Conference 2025, acara tahunan penuh apresiasi bagi para Mayfiners yang telah memberikan kontribusi terbaik sepanjang tahun 2024!
          <br /> <br />
          Prepare yourself for an unforgettable spectacle! Are you ready to be amazed?
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/detail")}
          className="px-6 py-3 mt-6 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Let's Get Started
        </button>
      </div>

      {/* Countdown Timer */}
      <div className="relative z-10 w-full max-w-lg mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-lg sm:text-2xl">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
            <div key={label} className="border-2 border-yellow-400 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl font-bold">
                {Object.values(timeLeft)[idx]}
              </span>
              <span className="text-sm sm:text-lg">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
