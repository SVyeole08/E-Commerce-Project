import React from 'react'

const Home = () => {
  return (
    <section className="w-full min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Find the best products for your everyday needs
          </h1>
          <p className="text-muted max-w-xl">
            Curated selection, fast shipping, and friendly support. Browse our latest collections and enjoy special offers.
          </p>
          <div className="flex items-center gap-4">
            <a href="/Products" className="px-6 py-3 btn-primary rounded-lg text-black font-semibold">Shop Now</a>
            <a href="#" className="px-4 py-3 rounded-lg border border-white/8 text-white text-sm">Learn More</a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="overflow-hidden rounded-xl p-6">
            <img src="https://plus.unsplash.com/premium_photo-1664201889922-66bc3c778c1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D" alt="hero" className="w-full h-64 object-cover rounded-md" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home