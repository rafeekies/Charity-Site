import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaShoppingCart } from 'react-icons/fa';
import { DonationCartContext } from '../App';
import DonationCart from './DonationCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isDonateDropdownOpen, setIsDonateDropdownOpen] = useState(false);
  const location = useLocation();
  
  const { cartItems, cartTotal, isCartOpen, setIsCartOpen } = useContext(DonationCartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsProjectsDropdownOpen(false);
    setIsDonateDropdownOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
    setIsAboutDropdownOpen(false);
    setIsDonateDropdownOpen(false);
  };

  const toggleDonateDropdown = () => {
    setIsDonateDropdownOpen(!isDonateDropdownOpen);
    setIsAboutDropdownOpen(false);
    setIsProjectsDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsProjectsDropdownOpen(false);
    setIsDonateDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    closeDropdowns();
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-bold text-primary">Ihsan Charity</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-gray-700'}`}
                onClick={closeDropdowns}
              >
                Home
              </Link>
              
              {/* About Dropdown */}
              <div className="relative">
                <button 
                  className={`font-medium hover:text-primary transition-colors flex items-center ${location.pathname.includes('/about') ? 'text-primary' : 'text-gray-700'}`}
                  onClick={toggleAboutDropdown}
                >
                  About
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isAboutDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Our Story</Link>
                    <Link to="/about#mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Mission & Vision</Link>
                    <Link to="/about#team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Our Team</Link>
                    <Link to="/about#financials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Financial Reports</Link>
                  </div>
                )}
              </div>
              
              {/* Projects Dropdown */}
              <div className="relative">
                <button 
                  className={`font-medium hover:text-primary transition-colors flex items-center ${location.pathname.includes('/projects') ? 'text-primary' : 'text-gray-700'}`}
                  onClick={toggleProjectsDropdown}
                >
                  Projects
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isProjectsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>All Projects</Link>
                    <Link to="/projects#food" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Food Programs</Link>
                    <Link to="/projects#water" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Clean Water</Link>
                    <Link to="/projects#housing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Housing</Link>
                    <Link to="/projects#orphans" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Orphan Care</Link>
                    <Link to="/projects#mosques" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Mosque Construction</Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact" 
                className={`font-medium hover:text-primary transition-colors ${location.pathname === '/contact' ? 'text-primary' : 'text-gray-700'}`}
                onClick={closeDropdowns}
              >
                Contact
              </Link>
              
              <Link 
                to="/donor-portal" 
                className="flex items-center font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={closeDropdowns}
              >
                <FaUser className="mr-1" /> Donor Portal
              </Link>
              
              {/* Donate Dropdown */}
              <div className="relative">
                <button 
                  className={`btn-primary flex items-center ${location.pathname.includes('/donate') ? 'bg-primary-dark' : ''}`}
                  onClick={toggleDonateDropdown}
                >
                  Donate Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isDonateDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/donate" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>General Donation</Link>
                    <Link to="/donate#zakat" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Zakat</Link>
                    <Link to="/donate#sadaqah" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Sadaqah</Link>
                    <Link to="/donate#qurbani" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Qurbani/Udhiyah</Link>
                    <Link to="/donate#monthly" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Monthly Giving</Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              {cartItems.length > 0 && (
                <button 
                  onClick={toggleCart} 
                  className="mr-4 relative"
                  aria-label="Open donation cart"
                >
                  <FaShoppingCart className="text-2xl text-primary" />
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                </button>
              )}
              <button 
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white">
            <Link 
              to="/" 
              className={`block py-2 px-4 font-medium rounded-md ${location.pathname === '/' ? 'bg-primary-dark text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            
            {/* Mobile About Dropdown */}
            <div>
              <button 
                className={`flex justify-between items-center w-full py-2 px-4 font-medium rounded-md ${location.pathname.includes('/about') ? 'bg-primary-dark text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={toggleAboutDropdown}
              >
                About
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isAboutDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <div className="pl-4">
                  <Link to="/about" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Our Story</Link>
                  <Link to="/about#mission" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Mission & Vision</Link>
                  <Link to="/about#team" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Our Team</Link>
                  <Link to="/about#financials" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Financial Reports</Link>
                </div>
              )}
            </div>
            
            {/* Mobile Projects Dropdown */}
            <div>
              <button 
                className={`flex justify-between items-center w-full py-2 px-4 font-medium rounded-md ${location.pathname.includes('/projects') ? 'bg-primary-dark text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={toggleProjectsDropdown}
              >
                Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isProjectsDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                </svg>
              </button>
              {isProjectsDropdownOpen && (
                <div className="pl-4">
                  <Link to="/projects" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>All Projects</Link>
                  <Link to="/projects#food" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Food Programs</Link>
                  <Link to="/projects#water" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Clean Water</Link>
                  <Link to="/projects#housing" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Housing</Link>
                  <Link to="/projects#orphans" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Orphan Care</Link>
                  <Link to="/projects#mosques" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Mosque Construction</Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className={`block py-2 px-4 font-medium rounded-md ${location.pathname === '/contact' ? 'bg-primary-dark text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            <Link 
              to="/donor-portal" 
              className={`flex items-center py-2 px-4 font-medium rounded-md ${location.pathname === '/donor-portal' ? 'bg-primary-dark text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={closeMenu}
            >
              <FaUser className="mr-2" /> Donor Portal
            </Link>
            
            {/* Mobile Donate Dropdown */}
            <div>
              <button 
                className={`flex justify-between items-center w-full py-2 px-4 font-medium rounded-md ${location.pathname.includes('/donate') ? 'bg-primary-dark text-white' : 'bg-primary text-white'}`}
                onClick={toggleDonateDropdown}
              >
                Donate Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isDonateDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                </svg>
              </button>
              {isDonateDropdownOpen && (
                <div className="pl-4">
                  <Link to="/donate" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>General Donation</Link>
                  <Link to="/donate#zakat" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Zakat</Link>
                  <Link to="/donate#sadaqah" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Sadaqah</Link>
                  <Link to="/donate#qurbani" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Qurbani/Udhiyah</Link>
                  <Link to="/donate#monthly" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md" onClick={closeMenu}>Monthly Giving</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* Desktop Cart Icon */}
      {cartItems.length > 0 && (
        <div className="hidden lg:block">
          <button 
            onClick={toggleCart}
            className="donation-cart-icon"
            aria-label="Open donation cart"
          >
            <FaShoppingCart className="text-xl" />
            <span className="donation-cart-badge">
              {cartItems.length}
            </span>
          </button>
        </div>
      )}
      
      {/* Donation Cart Panel */}
      {isCartOpen && <DonationCart />}
    </>
  );
};

export default Header;
