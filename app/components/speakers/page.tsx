const speakers = [
    { name: "Douglas Alvarado", role: "Chief Guest Speaker", img: "/images/dc1.png" },
    { name: "Jane Doe", role: "Marketing Expert", img: "/images/dc2.png" },
    { name: "Jane Doe", role: "Marketing Expert", img: "/images/dc3.png" },
  ];
  
  const Speakers = () => {
    return (
      <section className="py-12 text-white text-center">
        <h2 className="text-3xl text-center font-bold">Dress Code</h2>
        <div className="grid grid-cols-4 md:grid-cols-3 gap-6 mt-6">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={speaker.img} alt={speaker.name} className="w-auto h-[200px] mx-auto" />
            </div>
          ))}
        </div>
      </section>

    );
  };
  
  export default Speakers;
  