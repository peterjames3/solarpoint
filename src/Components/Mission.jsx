import 'aos/dist/aos.css';
function Mission() {
  return (
    <section data-aos="fade-up"
    data-aos-duration="3000"  className='relative max-w-7xl cursor-pointer my-24 mx-auto min-h-[20rem] flex flex-col ss:flex-row md:flex-row gap-6 px-4 font-Inter justify-between bg-gray-500 hover:bg-gray-700 hover:text-white transtion-all delay-300 rounded-md shadow-md shadow-black group'>
    <div className="relative px-2 py-3 space-y-6 flex-1">
      <h4 className='text-5xl  font-semibold hover:underline transition-all delay-300 cursor-pointer'>Our Mission</h4>
      <p className='text-xl text-slate-400'>We&apos;re committed to accelerating the world&apos;s transition to sustainable energy. We provide homeowners, businesses, and utilities with the most advanced solar technology and a seamless end-to-end experience, from design and installation to ongoing system monitoring and maintenance. Our goal is to make clean energy accessible and aesthetically pleasing.</p>
    </div>
    <div className='divider-animate bg-green-500 transition-all ease-in-out duration-500'></div> 
    <div className="relative px-3 py-3 space-y-6 flex-1">
      <h4 className='text-5xl font-semibold  hover:underline transition-all delay-300 cursor-pointer'>Our Vision</h4>
      <p className='text-xl text-slate-400'>We imagine a future where every roof is a solar roof and every home, business, and car is powered by the sun. By harnessing the power of the world&apos;s most abundant resource, we can create a brighter, cleaner, more resilient energy grid for generations to come. We&apos;re not just building a better solar panel; we&apos;re building a better world.</p>
    </div>
  </section>
  
  
  )
}

export default Mission
