import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import TrustedBy from "./TrustedBy";
import AboutUs from "../layout/AboutUs";

export default function Home() {
  return (
   
    <div className="px-52 bg-black">
        <main className="h-full bg-black border-x-2 border-gray-700  ">
      
      <div className=" w-full lg:w-[1440px] "><Navbar /></div>
      <Hero />
      <TrustedBy/>
      <AboutUs/>
    </main>
    </div>
  );
}