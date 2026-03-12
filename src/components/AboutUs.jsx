import chef1 from '../assets/chef1.jpg'
import chef2 from '../assets/chef2.jpg'

const AboutUs = () => {
  return (
    <section id='about' className='min-h-screen w-full overflow-x-hidden bg-black'>
      <div className="h-full container flex flex-col px-6 py-20 md:py-28 gap-12">
        <div className="flex flex-col text-center md:text-left md:flex-row gap-4 space-between items-center">
          <div className="flex flex-col gap-4 mb-4">
            <h2 className='text-4xl font-bold'>Where Bold Flavors Meet Fiery Passion</h2>
            <p className='text-lg text-warm-white/70 text-balance'>At <strong>Hot Cuisines</strong>, we believe food should be an experience — rich in flavor, vibrant in spice, and unforgettable in every bite. Our kitchen brings together the finest ingredients, authentic spices, and creative culinary techniques to craft dishes that ignite your taste buds and leave you craving more.</p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className='text-lg text-warm-white/70 text-balance'>From sizzling street-style favorites to carefully crafted signature plates, every meal we prepare celebrates the bold spirit of global cuisines. Whether you're enjoying a quick order at home or joining us at the table, <strong>Hot Cuisines</strong> is where great food, fiery flavor, and memorable moments come together.</p>
            <button className='bg-primary hover:bg-primary/80 w-fit text-white font-bold py-3 px-6 rounded-full cursor-pointer transition-all duration-150'>Learn More</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-140">
          <div className="overflow-hidden rounded-xl">
            <img className='w-full h-full object-cover hover:scale-105 transition duration-300' src={chef1} alt="Chef 1" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img className='w-full h-full object-cover hover:scale-105 transition duration-300' src={chef2} alt="Chef 2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs