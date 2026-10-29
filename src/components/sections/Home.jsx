import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";

export default function Home() {
  return (
    <main className="h-full bg-black ">
      
      <div className=" w-full lg:w-[1440px] "><Navbar /></div>
      <Hero />
    </main>
  );
}