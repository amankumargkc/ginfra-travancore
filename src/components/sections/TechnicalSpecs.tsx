'use client'
import { useState } from 'react'

export default function TechnicalSpecs() {
  const [activeTab, setActiveTab] = useState('process')

  const processFlow = [
    "Forging / Blank production — raw forging/pressing to produce housings and casings",
    "Rough machining — rough turning/milling to remove flash and bring to near-net shape",
    "Heat treatment & stress relief — metallurgical processing for mechanical properties",
    "Finish CNC machining — multi-axis cell for critical tolerances, bores, threads and surfaces",
    "Surface treatments & plating — corrosion protection and functional coatings",
    "Electronics assembly — PCB population, sensor integration, battery insertion, harnessing",
    "Controlled assembly — clean rooms / ESD-controlled areas for fuze assembly",
    "Functional & environmental testing — electrical tests, arming/trigger tests, environmental cycling",
    "Packing & traceability — serialization, lot coding, chain-of-custody documentation"
  ]

  const equipment = [
    {
      category: "Forging/Pressing",
      items: ["Hydraulic forging presses", "Trimming presses", "Induction heating systems"]
    },
    {
      category: "Heat Treatment",
      items: ["Batch furnaces", "Quench tanks", "Tempering ovens", "Hardness testers"]
    },
    {
      category: "CNC Machining",
      items: ["4/5-axis CNC turning centers", "Horizontal/vertical machining centers", "Bar feeders"]
    },
    {
      category: "Metrology & NDE",
      items: ["CMM (coordinate measuring machine)", "Optical comparators", "Ultrasonic flaw detectors", "Eddy current testers"]
    },
    {
      category: "Electronics",
      items: ["SMT line", "Reflow oven", "Selective soldering", "Functional testers", "Conformal coat station"]
    },
    {
      category: "Quality & IT",
      items: ["MES / ERP integration", "Lot tracking printers", "Barcode/RFID readers", "QA lab instruments"]
    }
  ]

  const qualityProtocols = [
    {
      title: "Documentation",
      description: "Work instructions, Inspection Plans (IQ, IP, FAI), Batch records and Material Certificates"
    },
    {
      title: "Controls",
      description: "Inline statistical process control, SPC charts for key tolerances, first-piece and last-piece inspection"
    },
    {
      title: "Testing Regimen",
      description: "Electrical verification test (EVT), environmental stress screening (ESS), functional acceptance tests per defence requirements"
    },
    {
      title: "Traceability",
      description: "Serialization of parts & components, raw material lot traceability, configurable digital records for audits"
    },
    {
      title: "Certifications",
      description: "ISO 9001 / AS9100, sector specific defence certifications, STQC where applicable, RDSO/BSF support"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical details of our manufacturing processes, equipment, and quality assurance protocols.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b">
          <button
            onClick={() => setActiveTab('process')}
            className={`px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${
              activeTab === 'process' 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Process Flow
          </button>
          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${
              activeTab === 'equipment' 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Equipment
          </button>
          <button
            onClick={() => setActiveTab('quality')}
            className={`px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${
              activeTab === 'quality' 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Quality Assurance
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'process' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                High-level Process Flow (Electronic Point-Detonating Fuze)
              </h3>
              <div className="grid gap-4">
                {processFlow.map((step, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'equipment' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Equipment List by Process
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {equipment.map((category, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quality' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quality Assurance & Compliance Protocols
              </h3>
              <div className="space-y-6">
                {qualityProtocols.map((protocol, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">
                      {protocol.title}
                    </h4>
                    <p className="text-gray-700">
                      {protocol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Timeline Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Estimated Timelines
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">Stage 1 (Point-Detonating Fuze)</h4>
              <p className="text-gray-600 text-sm">Design finalization → Equipment procurement → Line setup → Pilot qualification</p>
              <div className="mt-2 font-bold text-gray-900">9–12 months</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">Subsequent Stages</h4>
              <p className="text-gray-600 text-sm">Line adaptation and qualification (overlapping possible once Stage 1 is stable)</p>
              <div className="mt-2 font-bold text-gray-900">6–9 months per stage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}