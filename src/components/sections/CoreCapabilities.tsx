export default function CoreCapabilities() {
  const capabilities = [
    {
      title: "Forging & Pressing",
      description: "Hot/cold forging and pressing for structural casings and load-bearing parts",
      icon: "🔨"
    },
    {
      title: "Multi-axis CNC Machining",
      description: "Precision turning/milling for tight tolerances and complex geometries",
      icon: "⚙️"
    },
    {
      title: "Controlled Assembly",
      description: "Clean environment assembly for electronic fuzes and electromechanical subsystems",
      icon: "🔧"
    },
    {
      title: "Electronics Integration",
      description: "PCB assembly, wiring harnesses, sensors and potting solutions",
      icon: "💻"
    },
    {
      title: "Comprehensive Testing",
      description: "Functional, environmental, electrical, metrology, and NDE testing",
      icon: "🔬"
    },
    {
      title: "Traceability & QA",
      description: "Complete lot control and defence compliance systems",
      icon: "📋"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Core Capabilities
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end manufacturing capabilities from metallurgy to precision machining, electronics integration, assembly, and comprehensive testing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Value Proposition
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">End-to-End Capability</h4>
              <p className="text-gray-600 text-sm">Metallurgy → Precision Machining → Electronics → Assembly → Testing</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Modular Approach</h4>
              <p className="text-gray-600 text-sm">Stage-wise implementation minimizes risk and enables targeted ToT per stage</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Mission-Critical Supply</h4>
              <p className="text-gray-600 text-sm">Rapid qualification, defence certifications, and high-volume production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}