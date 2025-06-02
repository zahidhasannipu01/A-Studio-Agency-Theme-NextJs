import Image from "next/image";
import Hero from "./components/sections/hero/Hero";
import Clients from "./components/sections/clients/Clients";
import Services from "./components/sections/service/Services";
import Video from "./components/sections/video/Video";
import Testimonial from "./components/sections/testimonial/Testimonial";
import Subcription from "./components/sections/subscription/Subcription";

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Services />
      <Video />
      <Testimonial />
      <Subcription />
    </div>
  );
}
