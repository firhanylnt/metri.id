import Countdown from "./components/countdown/page";
import Hero from "./components/hero/page"
import Speakers from "./components/speakers/page";


export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold">Event Starts In:</h2>
        <Countdown />
      </div>
      <Speakers />
    </div>
  );
}