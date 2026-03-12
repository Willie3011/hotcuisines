import { useGSAP } from "@gsap/react"
import hero from "../assets/hero.png"
import gsap from "gsap"
const Hero = () => {
    useGSAP(() => {
        gsap.from(".tag", {
            y: -100,
            duration: 1.7,
            opacity: 0,
            ease: "power2.out",
        })
        
        gsap.from(".headline", {
            y: -100,
            duration: 1.7,
            delay: 0.5,
            opacity: 0,
            ease: "power2.out",
        })
        
        gsap.from(".subtitle", {
            y: -100,
            duration: 1.7,
            delay: 1,
            opacity: 0,
            ease: "power2.out",
        })
        
        gsap.from(".buttons", {
            y: -100,
            duration: 1.7,
            delay: 1.5,
            opacity: 0,
            ease: "power2.out",
        })
    })
    return (
        <section id="hero" className='h-screen w-screen bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden flex flex-col justify-center items-center gap-4' style={{ backgroundImage: `url(${hero})` }}>
            <div className='content h-full w-full px-6 flex flex-col justify-center items-center gap-4 bg-black/75'>
                <span className="tag px-6 py-4 bg-primary uppercase text-sm font-light rounded-2xl tracking-tight mb-4">Where Flavor Meets Fire</span>
                <h1 className='headline text-5xl md:text-7xl md:text-balance text-wrap font-bold max-w-90 md:max-w-240 text-center mb-4 tracking-wide'>Hot Cuisines That Ignite Your Taste Buds<span className="text-primary">.</span></h1>
                <p className='subtitle text-lg md:text-xl text-balance text-center mb-4 md:max-w-4xl'>From sizzling street food to gourmet spicy dishes, discover meals that bring the perfect balance of heat and flavor.</p>
                <div className="buttons flex flex-col md:flex-row items-center gap-4">
                    <button className="px-8 py-4 bg-primary border-2 border-primary font-semibold uppercase rounded-full hover:bg-primary/80 transition-all duration-150 cursor-pointer">Shop Now</button>
                    <button className="px-8 py-4 bg-transparent border-2 uppercase font-semibold border-secondary text-secondary rounded-full hover:bg-secondary/80 hover:text-warm-white transition-all duration-150 cursor-pointer">Book a Table</button>
                </div>
            </div>
        </section>

    )
}

export default Hero