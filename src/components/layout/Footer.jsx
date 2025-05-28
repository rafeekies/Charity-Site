import { Link } from 'react-router-dom'
import { FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <FaHeart className="mr-2 text-2xl text-primary-500" />
              <span className="text-xl font-bold font-serif">
                <span className="text-primary-500">Ihsan</span> Charity
              </span>
            </Link>
            <p className="mb-6 text-gray-400">
              Dedicated to providing humanitarian aid and sustainable development to communities in need around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-gray-400 transition-colors rounded-full hover:text-white hover:bg-primary-600">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 text-gray-400 transition-colors rounded-full hover:text-white hover:bg-primary-600">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 text-gray-400 transition-colors rounded-full hover:text-white hover:bg-primary-600">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 text-gray-400 transition-colors rounded-full hover:text-white hover:bg-primary-600">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 transition-colors hover:text-primary-500">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 transition-colors hover:text-primary-500">Our Projects</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 transition-colors hover:text-primary-500">Ways to Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors hover:text-primary-500">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 transition-colors hover:text-primary-500">Volunteer</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 transition-colors hover:text-primary-500">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Causes */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Our Causes</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/projects/food" className="text-gray-400 transition-colors hover:text-primary-500">Food Distribution</Link>
              </li>
              <li>
                <Link to="/projects/water" className="text-gray-400 transition-colors hover:text-primary-500">Clean Water Wells</Link>
              </li>
              <li>
                <Link to="/projects/housing" className="text-gray-400 transition-colors hover:text-primary-500">Housing Projects</Link>
              </li>
              <li>
                <Link to="/projects/orphans" className="text-gray-400 transition-colors hover:text-primary-500">Orphan Care</Link>
              </li>
              <li>
                <Link to="/projects/mosques" className="text-gray-400 transition-colors hover:text-primary-500">Mosque Construction</Link>
              </li>
              <li>
                <Link to="/projects/education" className="text-gray-400 transition-colors hover:text-primary-500">Education Programs</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-500" />
                <span className="text-gray-400">123 Charity Lane, Compassion City, CC 12345</span>
              </li>
              <li className="flex">
                <FaPhone className="mt-1 mr-3 text-primary-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <FaEnvelope className="mt-1 mr-3 text-primary-500" />
                <span className="text-gray-400">info@ihsancharity.org</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/donate" className="btn btn-primary">Donate Now</Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 text-center border-t border-gray-800">
          <p className="text-gray-500">
            &copy; {currentYear} Ihsan Charity Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
