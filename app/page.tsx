import { Hero } from "@/sections/Hero";
import { Featured } from "@/sections/Featured";
import { Gallery } from "@/sections/Gallery";
import { Contact } from "@/sections/Contact";
import { About } from "@/sections/About";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <About />
      <Featured />
      <Gallery />
      <Contact />
    </div>
  );
}
