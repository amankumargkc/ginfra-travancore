export default function Overview() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Overview
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              GInfra Travancore is building a modern, secure manufacturing facility dedicated to high-precision components and weapon-system subsystems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform delivers <span className="font-semibold text-blue-600">mission-critical parts</span> with tight tolerances, short lead times and full traceability — initially focused on artillery munitions and fuze systems, with a roadmap to aerospace and robotics components.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Quality Assurance</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Production Capability</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">ISO</div>
              <div className="text-gray-600">Certified Standards</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">ToT</div>
              <div className="text-gray-600">Technology Transfer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}