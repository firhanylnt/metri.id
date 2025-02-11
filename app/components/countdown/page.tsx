const Countdown = () => {

  return (
    <div className="flex flex-col items-center text-white text-lg font-bold space-y-6 md:min-h-screen p-4 md:mt-[100px]">

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
