import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden flex items-center">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-center justify-center">
          {/* Content */}
          <div className="text-center max-w-6xl w-full">
            {/* Subtitle with pill-style UI */}
            <div className="mb-4 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Engineering Excellence for Defense & Aerospace
              </div>
            </div>
            
            {/* Enhanced main title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-fade-in-up delay-200">
              <span className="block text-white mb-2 drop-shadow-2xl">Advanced Precision</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Manufacturing
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mt-4 drop-shadow-xl">
                for National Security
              </span>
            </h1>
            
            {/* Enhanced description with better spacing */}
            <div className="max-w-5xl mx-auto mb-8 animate-fade-in-up delay-300">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                GInfra Travancore Pvt. Ltd. stands at the forefront of India's defense manufacturing evolution — delivering
                <span className="text-blue-400 font-bold"> electronic fuze systems</span>,
                <span className="text-cyan-400 font-bold"> artillery components</span>, and
                <span className="text-purple-400 font-bold"> high-precision assemblies</span>.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                With cutting-edge CNC machining, forging, and electronic integration facilities, our plant ensures mission-ready quality, defense-grade reliability, and rapid delivery cycles trusted by armed forces and OEMs alike.
              </p>
            </div>
            
            {/* Enhanced capabilities badges with better styling */}
            <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-in-up delay-400">
              <span className="px-5 py-2 bg-gradient-to-r from-blue-600/30 to-blue-500/20 border-2 border-blue-400/40 rounded-2xl text-blue-300 text-sm font-bold backdrop-blur-md shadow-lg hover:shadow-blue-500/40 hover:shadow-2xl hover:from-blue-600/50 hover:to-blue-500/30 hover:border-blue-400/60 hover:text-blue-200 transition-all duration-300 hover:scale-105 cursor-pointer">
                Electronic Fuze Systems
              </span>
              <span className="px-5 py-2 bg-gradient-to-r from-cyan-600/30 to-cyan-500/20 border-2 border-cyan-400/40 rounded-2xl text-cyan-300 text-sm font-bold backdrop-blur-md shadow-lg hover:shadow-cyan-500/40 hover:shadow-2xl hover:from-cyan-600/50 hover:to-cyan-500/30 hover:border-cyan-400/60 hover:text-cyan-200 transition-all duration-300 hover:scale-105 cursor-pointer">
                Artillery Components
              </span>
              <span className="px-5 py-2 bg-gradient-to-r from-purple-600/30 to-purple-500/20 border-2 border-purple-400/40 rounded-2xl text-purple-300 text-sm font-bold backdrop-blur-md shadow-lg hover:shadow-purple-500/40 hover:shadow-2xl hover:from-purple-600/50 hover:to-purple-500/30 hover:border-purple-400/60 hover:text-purple-200 transition-all duration-300 hover:scale-105 cursor-pointer">
                High-Precision Assemblies
              </span>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500 relative z-10">
              <Link
                href="/services"
                className="relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-purple-600 hover:to-pink-600 text-white hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1 cursor-pointer"
              >
                <span className="flex items-center">
                  Explore Our Capabilities
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 backdrop-blur-sm cursor-pointer"
              >
                <span className="flex items-center">
                  Get In Touch
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/20 rounded-full animate-spin-slow"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-bounce-slow"></div>
      <div className="hidden md:block absolute top-1/2 left-20 w-3 h-3 bg-blue-400/60 rounded-full animate-ping"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping delay-1000"></div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-blue-400/40 rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-400/40 rounded-full animate-float delay-700"></div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  )
}