import { useEffect, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById('app');
    const handleScroll = () => {
      setScrolled(scrollContainer.scrollTop > 250);
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  
  }, [])

  useEffect(() => {

    console.log(scrolled)

   }, [scrolled])

  return (
    <header className={`fixed top-0 left-0 right-0 w-full h-20 z-50 ${scrolled ? 'border-b border-accent backdrop-blur-sm shadow-lg' : 'bg-black'}`}>
      <nav className='container relative flex items-center justify-between h-full'>
        <h2 className='text-3xl font-bold'>Hot Cuisines</h2>
        <ul className='flex gap-8 max-md:hidden'>
          <li><a className='text-white hover:text-primary duration-300' href='#hero'>Home</a></li>
          <li><a className='text-white hover:text-primary duration-300' href='#about'>About</a></li>
          <li><a className='text-white hover:text-primary duration-300' href='#services'>Services</a></li>
          <li><a className='text-white hover:text-primary duration-300' href='#contact'>Contact</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button className='bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-full cursor-pointer transition-all duration-150'>
            Order Now
          </button>
          <button onClick={() => setOpenMenu((prev) => !prev)} className='text-3xl text-white hidden max-md:block cursor-pointer'>
            <IoIosMenu/>
          </button>
        </div>
      </nav>

      {/* nav menu */}
      <div className={`absolute top-20 w-full h-dvh bg-black/90 backdrop-blur-2xl  ${openMenu ? "block" : "hidden"} z-50`}>
        <ul className='w-full h-full flex flex-col justify-center items-center text-3xl gap-8'>
          <li><a onClick={() => setOpenMenu((prev => !prev))} className='text-white hover:text-primary duration-300' href='#hero'>Home</a></li>
          <li><a onClick={() => setOpenMenu((prev => !prev))} className='text-white hover:text-primary duration-300' href='#about'>About</a></li>
          <li><a onClick={() => setOpenMenu((prev => !prev))} className='text-white hover:text-primary duration-300' href='#services'>Services</a></li>
          <li><a onClick={() => setOpenMenu((prev => !prev))} className='text-white hover:text-primary duration-300' href='#contact'>Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar