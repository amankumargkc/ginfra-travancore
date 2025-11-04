export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive precision manufacturing solutions for mission-critical applications
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in high-precision manufacturing across multiple sectors, delivering components that meet the most stringent requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Defence Manufacturing */}
      <section id="defence" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Defence Manufacturing</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our defence manufacturing capabilities encompass a wide range of critical components for military applications. We understand the importance of reliability, precision, and security in defence systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Artillery Fuzes</h3>
                    <p className="text-gray-700">Precision-engineered fuzing systems with fail-safe mechanisms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Weapon System Components</h3>
                    <p className="text-gray-700">Critical parts for small arms and heavy weapon systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Armored Vehicle Parts</h3>
                    <p className="text-gray-700">Specialized components for military vehicles and equipment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Security Clearance</h3>
                    <p className="text-gray-700">Full compliance with defence security protocols and standards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">±0.001mm</div>
                  <div className="text-sm text-gray-700">Tolerance Precision</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-700">Quality Testing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-700">Production Capability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">ISO</div>
                  <div className="text-sm text-gray-700">Certified Process</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aerospace Components */}
      <section id="aerospace" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 p-8 rounded-lg order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Aerospace Standards</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AS9100 Quality Management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">NADCAP Accredited Processes</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Full Material Traceability</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Environmental Testing</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Aerospace Components</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We manufacture critical aerospace components that meet the highest industry standards for safety, reliability, and performance in extreme environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Engine Components</h3>
                    <p className="text-gray-700">Turbine blades, combustion chamber parts, and fuel system components</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Structural Elements</h3>
                    <p className="text-gray-700">Airframe components, landing gear parts, and control surfaces</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Avionics Housings</h3>
                    <p className="text-gray-700">Precision enclosures for electronic systems and instruments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Satellite Components</h3>
                    <p className="text-gray-700">Space-qualified parts for satellite and spacecraft applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Robotics */}
      <section id="robotics" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Advanced Robotics</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our robotics manufacturing expertise spans from industrial automation to cutting-edge humanoid systems, delivering components that enable the next generation of robotic applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Actuator Systems</h3>
                    <p className="text-gray-700">High-precision servo motors and linear actuators</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sensor Housings</h3>
                    <p className="text-gray-700">Protective enclosures for LIDAR, cameras, and other sensors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Joint Mechanisms</h3>
                    <p className="text-gray-700">Complex articulated joints for humanoid and industrial robots</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Control Electronics</h3>
                    <p className="text-gray-700">Integrated electronic systems and control modules</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Robotics Capabilities</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Precision Level</span>
                    <span className="text-sm text-gray-600">±0.005mm</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Complexity Handling</span>
                    <span className="text-sm text-gray-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Material Variety</span>
                    <span className="text-sm text-gray-600">50+ Types</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Machining */}
      <section id="precision" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Precision Machining</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art machining capabilities deliver components with exceptional accuracy and surface finish quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">5-Axis</div>
              <div className="text-gray-700 font-medium mb-2">CNC Machining</div>
              <div className="text-sm text-gray-600">Complex geometries with single setup</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">±0.001mm</div>
              <div className="text-gray-700 font-medium mb-2">Tolerance</div>
              <div className="text-sm text-gray-600">Ultra-high precision capability</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">Ra 0.1μm</div>
              <div className="text-gray-700 font-medium mb-2">Surface Finish</div>
              <div className="text-sm text-gray-600">Mirror-like surface quality</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium mb-2">Operation</div>
              <div className="text-sm text-gray-600">Continuous production capability</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Materials We Work With</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Titanium Alloys</li>
                <li>• Stainless Steel</li>
                <li>• Aluminum Alloys</li>
                <li>• Inconel & Hastelloy</li>
                <li>• Carbon Steel</li>
                <li>• Exotic Alloys</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Machining Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CNC Milling</li>
                <li>• CNC Turning</li>
                <li>• Wire EDM</li>
                <li>• Surface Grinding</li>
                <li>• Honing & Lapping</li>
                <li>• Assembly Services</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CMM Inspection</li>
                <li>• Statistical Process Control</li>
                <li>• Material Certification</li>
                <li>• Dimensional Reports</li>
                <li>• First Article Inspection</li>
                <li>• Traceability Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our engineering team to discuss your specific requirements and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
            >
              Request Quote
            </a>
            <a 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}