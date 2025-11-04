import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-400">GInfra Travancore</span>
            <br />
            <span className="text-2xl md:text-4xl font-medium text-gray-300">Pvt. Ltd.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Precision manufacturing for <span className="text-blue-400 font-semibold">Defence</span> • <span className="text-blue-400 font-semibold">Aerospace</span> • <span className="text-blue-400 font-semibold">Advanced Robotics</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
            >
              View Capabilities
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - Hidden on mobile for better UX */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-full"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 border border-blue-400/30 rounded-full"></div>
      <div className="hidden md:block absolute top-1/2 left-20 w-2 h-2 bg-blue-400 rounded-full"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
    </section>
  )
}