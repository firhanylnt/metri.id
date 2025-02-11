const Hero = () => {
  return (
    <section 
      className="relative text-white text-center bg-cover w-full min-h-screen flex flex-col justify-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }} // Ensure image is in public/images/
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-7xl font-bold">Annual Conference 2025</h1>
        <p className="mt-4 text-md max-w-2xl">
        This is PT Maybank Indonesia Finance's annual agenda to appreciate the achievements in 2024 for Mayfiner throughout Indonesia. At the same time, this activity was held to motivate Mayfiners to improve performance and achievements in 2025.
        </p>

        <button className="px-6 py-3 mt-5 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300">
          Register Now
        </button>
      </div>

      

      {/* Register Button - Fixed to Bottom Center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <h4 className="text-xl font-bold">Our Sponsor </h4>
        <button className="px-6 py-3 m-2 bg-transparent text-white border-2 border-white font-bold rounded-lg">
          Sponsor 1
        </button>
        <button className="px-6 py-3 m-2 bg-transparent text-white border-2 border-white font-bold rounded-lg">
          Sponsor 2
        </button>
        <button className="px-6 py-3 m-2 bg-transparent text-white border-2 border-white font-bold rounded-lg">
          Sponsor 3
        </button>
      </div>
    </section>
  );
};

export default Hero;
