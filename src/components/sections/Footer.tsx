export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              GInfra Travancore
            </h3>
            <p className="text-gray-300 mb-4">
              Precision manufacturing for Defence, Aerospace & Advanced Robotics
            </p>
            <p className="text-sm text-gray-400">
              Building modern, secure manufacturing facilities for mission-critical components with tight tolerances and full traceability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#overview" className="hover:text-blue-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-blue-400 transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-blue-400 transition-colors">
                  Production Roadmap
                </a>
              </li>
              <li>
                <a href="#technical" className="hover:text-blue-400 transition-colors">
                  Technical Specs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Forging & Pressing</li>
              <li>CNC Machining</li>
              <li>Electronics Integration</li>
              <li>Quality Assurance</li>
              <li>Transfer of Technology</li>
              <li>Technical Consultation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 GInfra Travancore Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Quality Policy
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">
              Committed to Quality Standards & Defence Compliance
            </p>
            <div className="flex justify-center space-x-8 text-xs text-gray-500">
              <span>ISO 9001</span>
              <span>AS9100</span>
              <span>Defence Certified</span>
              <span>STQC Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}