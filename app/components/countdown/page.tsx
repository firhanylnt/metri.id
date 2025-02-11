"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
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
    <div className="flex flex-col items-center text-white text-lg font-bold space-y-6 min-h-screen p-4 md:mt-[100px]">
      <div>
        <h1 className="text-white md:text-5xl text-2xl font-bold">Maybank Annual Conference</h1>
        <h1 className="text-yellow-500 md:text-5xl text-2xl font-bold text-center">2025</h1>
      </div>
      {/* Countdown Timer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xl sm:text-3xl md:mt-[100px] mt-5 mb-5">
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

      {/* Poster Image */}
      <div className="flex justify-center">
        <img
          src="/images/poster.jpg"
          alt="Event Poster"
          className="w-[90%] sm:w-[60%] md:w-[40%] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Countdown;
