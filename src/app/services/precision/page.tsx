import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Precision Machining - GInfra Travancore | Ultra-Precision CNC Manufacturing",
  description: "Ultra-precision manufacturing capabilities for critical defense components with ±0.0001\" tolerance capability, 5-axis CNC machining, and Ra 0.1μm surface finish. Exotic materials processing from titanium to ceramics.",
  keywords: "precision machining, CNC machining, ultra-precision manufacturing, 5-axis machining, exotic materials processing, titanium machining, ceramic machining, micro-machining, tight tolerances",
  openGraph: {
    title: "Precision Machining Services - GInfra Travancore",
    description: "Ultra-precision manufacturing capabilities for critical defense components with exceptional accuracy and surface finish quality.",
    url: "https://ginfratravancore.com/services/precision",
    type: "website",
  },
  alternates: {
    canonical: "https://ginfratravancore.com/services/precision",
  },
}

export default function PrecisionMachining() {
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
            {/* Subtitle with pill-style UI */}
            <div className="mb-4 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Ultra-Precision Manufacturing & CNC Machining
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up delay-200">
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Precision</span>
              <span className="text-xl md:text-3xl font-medium text-gray-300 ml-3">Machining</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Ultra-precision <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">manufacturing capabilities</span> for critical defense components requiring exceptional accuracy.
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


      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl order-2 lg:order-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">Machining Specifications</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">5-Axis CNC Machining Centers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">±0.0001" Tolerance Capability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Surface Finish: Ra 0.1μm</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Material Range: Titanium to Ceramics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Temperature Controlled Environment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">In-Process Measurement Systems</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Precision Machining</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ultra-precision manufacturing capabilities for critical defense components requiring exceptional accuracy and surface finish quality. Our state-of-the-art machining centers deliver consistent results with tolerances measured in micrometers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Multi-Axis CNC Machining</h3>
                    <p className="text-gray-700">Complex geometries with simultaneous 5-axis interpolation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Exotic Materials Processing</h3>
                    <p className="text-gray-700">Titanium, Inconel, ceramics, and advanced composites</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Micro-Machining</h3>
                    <p className="text-gray-700">Features down to 10μm with exceptional repeatability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">In-Process Measurement</h3>
                    <p className="text-gray-700">Real-time quality control with laser measurement systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Capabilities */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Equipment & Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art machining equipment and advanced manufacturing capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">CNC Machining Centers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 5-Axis Simultaneous Machining</li>
                <li>• High-Speed Spindles (40,000 RPM)</li>
                <li>• Automatic Tool Changers</li>
                <li>• Coolant Through Spindle</li>
                <li>• Vibration Dampening Systems</li>
                <li>• Temperature Compensation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Measurement & Inspection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Coordinate Measuring Machines</li>
                <li>• Laser Interferometry Systems</li>
                <li>• Surface Roughness Testers</li>
                <li>• Optical Comparators</li>
                <li>• Roundness & Cylindricity</li>
                <li>• Statistical Process Control</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Specialized Processes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• EDM (Wire & Sinker)</li>
                <li>• Ultrasonic Machining</li>
                <li>• Electrochemical Machining</li>
                <li>• Laser Cutting & Engraving</li>
                <li>• Abrasive Flow Machining</li>
                <li>• Cryogenic Machining</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Materials Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Extensive experience machining a wide range of materials from standard alloys to exotic superalloys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">Metallic Materials</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Titanium Alloys</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Ti-6Al-4V (Grade 5)</li>
                    <li>• Ti-6Al-2Sn-4Zr-2Mo</li>
                    <li>• Commercially Pure Ti</li>
                    <li>• Beta Titanium Alloys</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Superalloys</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Inconel 718, 625, 600</li>
                    <li>• Hastelloy X, C-276</li>
                    <li>• Waspaloy</li>
                    <li>• Rene 41, 80, 95</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Stainless Steels</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 15-5PH, 17-4PH</li>
                    <li>• 316L, 321, 347</li>
                    <li>• Duplex 2205, 2507</li>
                    <li>• Custom 450, 455</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Aluminum Alloys</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 7075-T6, 6061-T6</li>
                    <li>• 2024-T3, 2014-T6</li>
                    <li>• 5083-H116</li>
                    <li>• Cast Aluminum A356</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">Advanced Materials</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Ceramics</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Aluminum Oxide (Al₂O₃)</li>
                    <li>• Zirconia (ZrO₂)</li>
                    <li>• Silicon Carbide (SiC)</li>
                    <li>• Silicon Nitride (Si₃N₄)</li>
                    <li>• Boron Carbide (B₄C)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Composite Materials</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Carbon Fiber Reinforced Plastics</li>
                    <li>• Glass Fiber Composites</li>
                    <li>• Metal Matrix Composites</li>
                    <li>• Ceramic Matrix Composites</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialty Alloys</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Magnesium Alloys</li>
                    <li>• Beryllium Copper</li>
                    <li>• Tungsten & Molybdenum</li>
                    <li>• Shape Memory Alloys</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Quality Control & Validation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality control processes ensuring every component meets the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">First Article Inspection</h3>
              <p className="text-gray-700">Complete dimensional and material verification for initial production parts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Statistical Process Control</h3>
              <p className="text-gray-700">Real-time monitoring and control of manufacturing processes using SPC methods</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Material Certification</h3>
              <p className="text-gray-700">Complete material traceability and certification documentation for all components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Subtitle with pill-style UI */}
            <div className="mb-4 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Let's Build Together
              </div>
            </div>
            
            {/* Enhanced main title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-fade-in-up delay-200">
              <span className="block text-white mb-2 drop-shadow-2xl">Ready to Discuss</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Your Precision Machining Needs?
              </span>
            </h2>
            
            {/* Enhanced description */}
            <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up delay-300">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                Partner with GInfra Travancore for ultra-precision manufacturing solutions that exceed expectations.
                <span className="text-blue-400 font-bold"> Let's discuss</span> how we can bring your vision to life with
                <span className="text-cyan-400 font-bold"> cutting-edge technology</span> and
                <span className="text-purple-400 font-bold"> unmatched expertise</span>.
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500 relative z-10">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-purple-600 hover:to-pink-600 text-white hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1 cursor-pointer"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Get Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <a
                href="mailto:info@ginfratravancore.com"
                className="relative inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 backdrop-blur-sm cursor-pointer"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
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
      </section>
    </main>
  )
}