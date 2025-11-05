import { Metadata } from 'next'
import Features from '@/components/sections/Features'

export const metadata: Metadata = {
  title: "About GInfra Travancore - Leading Precision Manufacturing Company in Telangana",
  description: "Learn about GInfra Travancore Pvt. Ltd., a leading precision manufacturing company in Telangana, India. ISO 9001:2015 certified with 50+ expert engineers, 25+ years experience, and 99.9% quality rating in defence, aerospace, and robotics manufacturing.",
  keywords: "about GInfra Travancore, precision manufacturing company, Telangana manufacturing, ISO 9001 certified, defence manufacturing, aerospace components, robotics manufacturing, CNC machining, quality assurance",
  openGraph: {
    title: "About GInfra Travancore - Precision Manufacturing Excellence",
    description: "Leading precision manufacturing company in Telangana with 50+ expert engineers, ISO 9001:2015 certification, and 99.9% quality rating.",
    url: "https://ginfratravancore.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://ginfratravancore.com/about",
  },
}

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up">
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About</span>
              <span className="text-xl md:text-3xl font-medium text-gray-300 ml-3">GInfra Travancore</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Leading the future of <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">precision manufacturing</span> with cutting-edge technology and unwavering commitment to excellence.
            </p>
          </div>
        </div>
        
        {/* Enhanced decorative elements with animations */}
        <div className="hidden md:block absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-spin-slow"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 border border-cyan-400/30 rounded-full animate-bounce-slow"></div>
        <div className="hidden md:block absolute top-1/2 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-float"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-400/50 rounded-full animate-float delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-float delay-1000"></div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                GInfra Travancore Pvt. Ltd. was founded with a vision to revolutionize precision manufacturing in the defence, aerospace, and advanced robotics sectors. Our journey began with a commitment to delivering mission-critical components that meet the highest standards of quality and reliability.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With state-of-the-art facilities and a team of highly skilled engineers, we have established ourselves as a trusted partner for organizations requiring precision-engineered solutions with tight tolerances and short lead times.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our dedication to innovation, quality, and customer satisfaction has made us a preferred choice for complex manufacturing challenges across multiple industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">ISO 9001:2015 certified manufacturing processes</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">Advanced CNC machining capabilities with ±0.001mm precision</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">Full traceability and quality documentation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">24/7 production capability for urgent requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide every aspect of our operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver precision-engineered solutions that exceed expectations, enabling our clients to achieve their most ambitious goals in defence, aerospace, and robotics.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in precision manufacturing, setting new standards for quality, innovation, and reliability in critical applications.
              </p>
            </div>

            {/* Values */}
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Excellence, integrity, innovation, and customer-centricity form the core of our operations, driving us to continuously improve and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A team of dedicated professionals with decades of combined experience in precision manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Expert Engineers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-700 font-medium">Quality Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Features />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our precision manufacturing capabilities can support your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                Get In Touch
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
            <a
              href="/"
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                View Our Work
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}