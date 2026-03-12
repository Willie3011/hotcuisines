import gsap from "gsap";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

function App() {

  return (
    <div id="app" className="font-roboto h-dvh w-dvw overflow-x-hidden scroll-smooth bg-black text-warm-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
