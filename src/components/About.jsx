const About = () => {
  return (
    <section className="relative z-20 min-h-screen bg-[linear-gradient(90deg,_#1e3a8a_0%,_#3b82f6_100%)] text-white flex flex-col items-center justify-center px-6 py-20">
      
      {/* Header Section */}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
          Our Story
        </h2>
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
          Crafting digital experiences that bridge the gap between style and functionality. 
          Any Shop is more than a store—it's a collection of curated essentials for the modern world.
        </p>
      </div>

      {/* Features Grid */}
      {/* grid-cols-1 on mobile, md:grid-cols-3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full max-w-5xl">
        
        {/* Feature 1: Fast Delivery */}
        <div className="flex flex-col items-center group">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[100px] h-[100px] md:w-[124px] md:h-[124px] transition-transform duration-500 group-hover:scale-110">
            <path strokeMiterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"/><path d="M2 9h4"/><path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"/>
          </svg>
          <p className="mt-4 uppercase tracking-[0.2em] font-bold text-xs md:text-sm text-blue-200">Fast delivery</p>
        </div>

        {/* Feature 2: Secure Payment */}
        <div className="flex flex-col items-center group">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[100px] h-[100px] md:w-[124px] md:h-[124px] transition-transform duration-500 group-hover:scale-110">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <p className="mt-4 uppercase tracking-[0.2em] font-bold text-xs md:text-sm text-blue-200">Secure Payment</p>
        </div>

        {/* Feature 3: Quality Support */}
        <div className="flex flex-col items-center group">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[100px] h-[100px] md:w-[124px] md:h-[124px] transition-transform duration-500 group-hover:scale-110">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9" />
            <path d="M11 12h11" /><path d="M11 12l2-2" /><path d="M11 12l2 2" />
          </svg>
          <p className="mt-4 uppercase tracking-[0.2em] font-bold text-xs md:text-sm text-blue-200">24/7 Support</p>
        </div>

      </div>
    </section>
  )
}

export default About;