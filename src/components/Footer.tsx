import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
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
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/defence" className="hover:text-blue-400 transition-colors">
                  Defence Components
                </Link>
              </li>
              <li>
                <Link href="/services/aerospace" className="hover:text-blue-400 transition-colors">
                  Aerospace Components
                </Link>
              </li>
              <li>
                <Link href="/services/robotics" className="hover:text-blue-400 transition-colors">
                  Advanced Robotics
                </Link>
              </li>
              <li>
                <Link href="/services/precision" className="hover:text-blue-400 transition-colors">
                  Precision Machining
                </Link>
              </li>
              <li>
                <Link href="/services/quality" className="hover:text-blue-400 transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/services/all" className="hover:text-blue-400 transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <h5 className="font-medium text-white mb-1">Email</h5>
                <a href="mailto:info@ginfratravancore.com" className="hover:text-blue-400 transition-colors text-sm">
                  info@ginfratravancore.com
                </a>
              </div>
              <div>
                <h5 className="font-medium text-white mb-1">Locations</h5>
                <div className="text-sm space-y-2">
                  <div>
                    <p className="font-medium">Cherlapally</p>
                    <p className="text-gray-400">Hyderabad, Telangana</p>
                  </div>
                  <div>
                    <p className="font-medium">EMC Maheshwaram</p>
                    <p className="text-gray-400">Rangareddy, Telangana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <div className="text-sm text-gray-400">
              © 2025 Ginfra Travancore Private Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}