"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-03-01").getTime();
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
    <div className="flex flex-col items-center text-white text-lg font-bold space-y-4 min-h-screen">
      {/* Countdown Timer */}
      <div className="flex justify-center space-x-4 text-3xl mt-5 mb-5">
        <div className="border-2 border-yellow-400 rounded-lg p-4">{timeLeft.days} Days</div>
        <div className="border-2 border-yellow-400 rounded-lg p-4">{timeLeft.hours} Hours</div>
        <div className="border-2 border-yellow-400 rounded-lg p-4">{timeLeft.minutes} Minutes</div>
        <div className="border-2 border-yellow-400 rounded-lg p-4">{timeLeft.seconds} Seconds</div>
      </div>


      <div className="flex justify-center space-x-4">
        <img src="/images/poster.jpg" style={{width: '40%'}} />
      </div>

    </div>


      
  );
};

export default Countdown;
