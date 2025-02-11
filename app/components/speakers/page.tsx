const speakers = [
  { name: "Douglas Alvarado", role: "CEO", img: "/images/p1.jpg" },
  { name: "Jane Sarah", role: "COO", img: "/images/p2.jpg" },
  { name: "Felix Odo", role: "CFO", img: "/images/p3.jpg" },
  { name: "Michael Smith", role: "CMO", img: "/images/p3.jpg" },
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
      {/* Speakers Section */}
      <h2 className="text-3xl text-center font-bold md:mb-[100px]">Speakers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 mb-6">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="rounded-full object-cover w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-32 md:h-32"
            />
            <h3 className="mt-2 text-lg font-semibold">{speaker.name}</h3>
            <p className="text-sm">{speaker.role}</p>
          </div>
        ))}
      </div>

      {/* Dress Code Section */}
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
