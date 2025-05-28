import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ihsan Charity</h3>
            <p className="mb-4 text-gray-300">
              Dedicated to helping those in need through sustainable development projects, emergency relief, and community empowerment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/donor-portal" className="text-gray-300 hover:text-white transition-colors">Donor Portal</Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects#food" className="text-gray-300 hover:text-white transition-colors">Food Programs</Link>
              </li>
              <li>
                <Link to="/projects#water" className="text-gray-300 hover:text-white transition-colors">Clean Water</Link>
              </li>
              <li>
                <Link to="/projects#housing" className="text-gray-300 hover:text-white transition-colors">Housing Projects</Link>
              </li>
              <li>
                <Link to="/projects#orphans" className="text-gray-300 hover:text-white transition-colors">Orphan Care</Link>
              </li>
              <li>
                <Link to="/projects#mosques" className="text-gray-300 hover:text-white transition-colors">Mosque Construction</Link>
              </li>
              <li>
                <Link to="/projects#education" className="text-gray-300 hover:text-white transition-colors">Education</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Charity Lane</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
              <p className="mt-4">Phone: (123) 456-7890</p>
              <p>Email: info@ihsancharity.org</p>
            </address>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Ihsan Charity Foundation. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>Made with <FaHeart className="inline text-red-500" /> for humanity</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
