import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaHeart, FaBars, FaTimes, FaUser, FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const location = useLocation()
  const submenuRefs = useRef({})

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu()
    setActiveSubmenu(null)
  }, [location])

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeSubmenu && submenuRefs.current[activeSubmenu] && 
          !submenuRefs.current[activeSubmenu].contains(event.target)) {
        setActiveSubmenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeSubmenu])

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const navLinks = [
    { 
      name: 'Home', 
      path: '/' 
    },
    { 
      name: 'About', 
      path: '/about',
      hasSubmenu: true,
      submenu: [
        { name: 'Our Mission', path: '/about#mission' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Our History', path: '/about#history' },
        { name: 'Annual Reports', path: '/about#reports' }
      ]
    },
    { 
      name: 'Projects', 
      path: '/projects',
      hasSubmenu: true,
      submenu: [
        { name: 'Food Distribution', path: '/projects/food-distribution' },
        { name: 'Water Wells', path: '/projects/water-wells' },
        { name: 'Orphan Care', path: '/projects/orphan-care' },
        { name: 'Mosque Construction', path: '/projects/mosque-construction' },
        { name: 'Emergency Relief', path: '/projects/emergency-relief' }
      ]
    },
    { 
      name: 'Donate', 
      path: '/donate',
      hasSubmenu: true,
      submenu: [
        { name: 'Zakat', path: '/donate/zakat' },
        { name: 'Sadaqah', path: '/donate/sadaqah' },
        { name: 'Qurbani/Udhiyah', path: '/donate/qurbani' },
        { name: 'Sponsorships', path: '/donate/sponsorships' },
        { name: 'Monthly Giving', path: '/donate/monthly' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact' 
    },
    { 
      name: 'Donor Portal', 
      path: '/donor-portal', 
      icon: <FaUser className="mr-2" /> 
    }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <FaHeart className="mr-2 text-2xl text-primary-600" />
          <span className="text-xl font-bold font-serif">
            <span className="text-primary-600">Ihsan</span> Charity
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                {link.name === 'Donor Portal' ? (
                  <Link 
                    to={link.path}
                    className="flex items-center px-3 py-2 text-gray-700 transition-colors border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ) : link.hasSubmenu ? (
                  <div 
                    ref={el => submenuRefs.current[link.name] = el}
                    className="relative"
                  >
                    <button
                      className={`flex items-center text-base font-medium transition-colors hover:text-primary-600 ${
                        activeSubmenu === link.name ? 'text-primary-600' : scrolled ? 'text-gray-800' : 'text-gray-800'
                      }`}
                      onClick={() => toggleSubmenu(link.name)}
                      aria-expanded={activeSubmenu === link.name}
                    >
                      {link.name}
                      <FaChevronDown className={`ml-1 text-xs transition-transform ${
                        activeSubmenu === link.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 z-50 w-56 mt-2 bg-white rounded-md shadow-lg"
                        >
                          <ul className="py-2">
                            {link.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `text-base font-medium transition-colors hover:text-primary-600 ${
                        isActive ? 'text-primary-600' : scrolled ? 'text-gray-800' : 'text-gray-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <Link 
                to="/donate" 
                className="btn btn-primary"
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="text-2xl text-gray-800" />
          ) : (
            <FaBars className="text-2xl text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.name === 'Donor Portal' ? (
                      <Link 
                        to={link.path}
                        className="flex items-center justify-center w-full py-3 text-gray-700 transition-colors border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </Link>
                    ) : link.hasSubmenu ? (
                      <div>
                        <button
                          className={`flex items-center justify-between w-full py-2 text-base font-medium transition-colors ${
                            activeSubmenu === link.name ? 'text-primary-600' : 'text-gray-800 hover:text-primary-600'
                          }`}
                          onClick={() => toggleSubmenu(link.name)}
                          aria-expanded={activeSubmenu === link.name}
                        >
                          {link.name}
                          <FaChevronDown className={`ml-1 text-xs transition-transform ${
                            activeSubmenu === link.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 ml-4 border-l-2 border-gray-200"
                            >
                              <ul className="pl-4">
                                {link.submenu.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      to={subItem.path}
                                      className="block py-2 text-sm text-gray-700 transition-colors hover:text-primary-600"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink 
                        to={link.path}
                        className={({ isActive }) => 
                          `block py-2 text-base font-medium transition-colors ${
                            isActive ? 'text-primary-600' : 'text-gray-800 hover:text-primary-600'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                ))}
                <li>
                  <Link 
                    to="/donate" 
                    className="block w-full py-3 text-center btn btn-primary"
                  >
                    Donate Now
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
