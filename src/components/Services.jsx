import food1 from '../assets/cuisine1.jpg';
import food2 from '../assets/cuisine2.jpg';
import food3 from '../assets/cuisine3.jpg';
import food4 from '../assets/cuisine4.jpg';


const Services = () => {
  return (
    <section id='services' className='bg-background py-16'>
      <div className="container space-y-12">
        <div className="flex flex-col gap-6 sm:flex-row items-center justify-between">
          <h2 className='text-4xl font-bold text-center md:max-w-110 md:text-start'>We also offer unique services for your events</h2>
          <button className='bg-primary px-6 py-3 rounded-full font-semibold'>Learn More</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="service-card">
            <div className="overflow-hidden rounded-lg h-80">
              <img src={food1} alt="Cuisine 1" className='w-full h-full object-cover' />
            </div>
            <div className="px-4 space-y-5">
              <h3 className='text-xl font-semibold'>Caterings</h3>
              <p className='tracking-wide text-warm-white/70'>A small gathering or a large celebration, we deliver quality and reliability with care.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="overflow-hidden rounded-lg h-80">
              <img src={food2} alt="Cuisine 1" className='w-full h-full object-cover' />
            </div>
            <div className="px-4 space-y-5">
              <h3 className='text-xl font-semibold'>Bithdays</h3>
              <p className='tracking-wide text-warm-white/70'>Make your birthday celebration extra special with our delicious gourmet treats.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="overflow-hidden rounded-lg h-80">
              <img src={food3} alt="Cuisine 1" className='w-full h-full object-cover' />
            </div>
            <div className="px-4 space-y-5">
              <h3 className='text-xl font-semibold'>Weddings</h3>
              <p className='tracking-wide text-warm-white/70'>We offer beautifully crafted menus tailored to your taste ensuring every dish delights.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="overflow-hidden rounded-lg h-80">
              <img src={food4} alt="Cuisine 1" className='w-full h-full object-cover' />
            </div>
            <div className="px-4 space-y-5">
              <h3 className='text-xl font-semibold'>Events</h3>
              <p className='tracking-wide text-warm-white/70'>For corporate meetings, we deliver fresh food and professional service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services