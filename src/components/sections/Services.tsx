import Link from 'next/link'

export default function Services() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized manufacturing solutions for critical applications
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          {/* First Row - 3 Services */}
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/services/defence" className="group w-80">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer h-48 flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-red-600 mb-2 group-hover:text-red-700 transition-colors duration-300">Defence Components</div>
                <div className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Ammunition components and military-grade systems</div>
              </div>
            </Link>

            <Link href="/services/aerospace" className="group w-80">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer h-48 flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">Aerospace Components</div>
                <div className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">High-precision aircraft and spacecraft components</div>
              </div>
            </Link>

            <Link href="/services/robotics" className="group w-80">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer h-48 flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300">Advanced Robotics</div>
                <div className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Intelligent automation and robotic systems</div>
              </div>
            </Link>
          </div>

          {/* Second Row - 2 Services Centered */}
          <div className="flex justify-center gap-8">
            <Link href="/services/precision" className="group w-80">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer h-48 flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-green-600 mb-2 group-hover:text-green-700 transition-colors duration-300">Precision Machining</div>
                <div className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Ultra-precision CNC machining and manufacturing</div>
              </div>
            </Link>

            <Link href="/services/quality" className="group w-80">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer h-48 flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-orange-600 mb-2 group-hover:text-orange-700 transition-colors duration-300">Quality Assurance</div>
                <div className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Comprehensive testing and quality control</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}