import Countdown from "./components/countdown/page";
import Hero from "./components/hero/page"
import Speakers from "./components/speakers/page";


export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <Countdown />
      <Speakers />
    </div>
  );
}