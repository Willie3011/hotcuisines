import burger from '../assets/burger.png';

const Contact = () => {
  return (
    <section id='contact' className='bg-black'>
      <div className="container py-20 lg:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* left */}
          <div className="md:w-1/2">
            <img src={burger} alt="A burger" className='w-full h-full object-cover' />
          </div>

          {/* right */}
          <div className="md:w-1/2">
            <h2 className='text-4xl font-bold mb-4 text-center md:text-start'>Get in Touch With Us</h2>
            <p className='text-warm-white/80 text-center md:text-start'>Just fill out the form and wait for it</p>
            
            {/* form content */}
            <form action="" className='bg-background py-8 px-6 rounded-lg space-y-6 mt-8'>
              <div className="relative border border-gray-700 rounded-lg group">
                <span className='absolute -top-3 left-3 bg-black text-gray-500 px-2 rounded-md text-sm'>Name</span>
                <input type="text" className='px-4 py-3 w-full outline-none' placeholder='Your name' required/>
              </div>
              <div className="relative border border-gray-700 rounded-lg group">
                <span className='absolute -top-3 left-3 bg-black text-gray-500 px-2 rounded-md text-sm'>Email</span>
                <input type="email" className='px-4 py-3 w-full outline-none' placeholder='Your email' required/>
              </div>
              <div className="relative border border-gray-700 rounded-lg group">
                <span className='absolute -top-3 left-3 bg-black text-gray-500 px-2 rounded-md text-sm'>Phone</span>
                <input type="text" className='px-4 py-3 w-full outline-none' placeholder='xxx-xxx-xxxx' required/>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" id='terms'/>
                <label htmlFor="terms" className='text-white/70 text-sm'>I agree to receive commercial information.</label>
              </div>

              <button className='px-6 py-3 rounded-full bg-primary font-semibold cursor-pointer hover:bg-primary/80 duration-300'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact