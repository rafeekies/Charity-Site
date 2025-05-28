import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaHistory, FaFileAlt, FaCog, FaShieldAlt, FaSignOutAlt, FaChartLine } from 'react-icons/fa';
import { toast } from 'react-toastify';

const DonorPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateLoginForm = () => {
    const newErrors = {};
    
    if (!loginForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginForm.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!loginForm.password) {
      newErrors.password = 'Password is required';
    } else if (loginForm.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (validateLoginForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsLoggedIn(true);
        
        toast.success('Welcome back to your donor portal!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }, 1500);
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
    
    toast.info('You have been logged out successfully.', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // Mock donation history data
  const donationHistory = [
    {
      id: 'don-001',
      date: '2023-09-15',
      project: 'Water Well in Somalia',
      amount: 100.00,
      status: 'Completed',
      receipt: 'receipt-001.pdf'
    },
    {
      id: 'don-002',
      date: '2023-08-22',
      project: 'Food Packages for Yemen',
      amount: 75.00,
      status: 'Completed',
      receipt: 'receipt-002.pdf'
    },
    {
      id: 'don-003',
      date: '2023-07-10',
      project: 'Orphan Care in Syria',
      amount: 150.00,
      status: 'Completed',
      receipt: 'receipt-003.pdf'
    },
    {
      id: 'don-004',
      date: '2023-06-05',
      project: 'Mosque Construction in Mali',
      amount: 200.00,
      status: 'Completed',
      receipt: 'receipt-004.pdf'
    },
    {
      id: 'don-005',
      date: '2023-05-18',
      project: 'General Donation',
      amount: 50.00,
      status: 'Completed',
      receipt: 'receipt-005.pdf'
    }
  ];
  
  // Mock tax receipts data
  const taxReceipts = [
    {
      id: 'tax-2022',
      year: '2022',
      totalDonations: 1250.00,
      dateIssued: '2023-01-15',
      file: 'tax-receipt-2022.pdf'
    },
    {
      id: 'tax-2021',
      year: '2021',
      totalDonations: 875.00,
      dateIssued: '2022-01-20',
      file: 'tax-receipt-2021.pdf'
    },
    {
      id: 'tax-2020',
      year: '2020',
      totalDonations: 650.00,
      dateIssued: '2021-01-18',
      file: 'tax-receipt-2020.pdf'
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg')"
          }}
        ></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Donor Portal</h1>
            <p className="text-xl text-gray-200">
              Access your donation history, tax receipts, and account settings in one secure place.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portal Content */}
      <section className="section-padding">
        <div className="container-custom">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <FaUser className="text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold">Donor Login</h2>
                  <p className="text-gray-600 mt-2">
                    Sign in to access your donor dashboard
                  </p>
                </div>
                
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        className={`input-field pl-10 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        className={`input-field pl-10 ${errors.password ? 'border-red-500' : ''}`}
                        placeholder="Enter your password"
                      />
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="remember" 
                        checked={loginForm.remember}
                        onChange={handleLoginChange}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm">
                    Don't have an account? <a href="#" className="text-primary hover:underline">Register now</a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="w-full md:w-64 bg-gray-100 p-6">
                  <div className="text-center mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <FaUser className="text-2xl" />
                    </div>
                    <h3 className="font-bold">John Doe</h3>
                    <p className="text-sm text-gray-600">john.doe@example.com</p>
                  </div>
                  
                  <nav>
                    <ul className="space-y-2">
                      <li>
                        <button 
                          onClick={() => setActiveTab('dashboard')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                          <FaChartLine className="mr-3" /> Dashboard
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveTab('history')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'history' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                          <FaHistory className="mr-3" /> Donation History
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveTab('receipts')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'receipts' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                          <FaFileAlt className="mr-3" /> Tax Receipts
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveTab('profile')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'profile' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                          <FaCog className="mr-3" /> Profile Settings
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveTab('security')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'security' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                          <FaShieldAlt className="mr-3" /> Security
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 rounded-md flex items-center text-red-500 hover:bg-red-100"
                        >
                          <FaSignOutAlt className="mr-3" /> Sign Out
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-6">
                  {activeTab === 'dashboard' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Donor Dashboard</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-100 p-6 rounded-lg">
                          <h3 className="text-lg font-bold mb-2">Total Donations</h3>
                          <p className="text-3xl font-bold text-primary">$575.00</p>
                          <p className="text-sm text-gray-600 mt-1">Lifetime contribution</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                          <h3 className="text-lg font-bold mb-2">Recent Donation</h3>
                          <p className="text-3xl font-bold text-primary">$100.00</p>
                          <p className="text-sm text-gray-600 mt-1">Water Well in Somalia</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                          <h3 className="text-lg font-bold mb-2">Impact</h3>
                          <p className="text-3xl font-bold text-primary">5</p>
                          <p className="text-sm text-gray-600 mt-1">Projects supported</p>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4">Recent Donations</h3>
                      <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <table className="min-w-full">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="py-3 px-4 text-left">Date</th>
                              <th className="py-3 px-4 text-left">Project</th>
                              <th className="py-3 px-4 text-left">Amount</th>
                              <th className="py-3 px-4 text-left">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {donationHistory.slice(0, 3).map((donation) => (
                              <tr key={donation.id} className="border-t border-gray-200">
                                <td className="py-3 px-4">{donation.date}</td>
                                <td className="py-3 px-4">{donation.project}</td>
                                <td className="py-3 px-4">${donation.amount.toFixed(2)}</td>
                                <td className="py-3 px-4">
                                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                    {donation.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-4 text-right">
                        <button 
                          onClick={() => setActiveTab('history')}
                          className="text-primary hover:underline"
                        >
                          View all donations →
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'history' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Donation History</h2>
                      
                      <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <table className="min-w-full">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="py-3 px-4 text-left">Date</th>
                              <th className="py-3 px-4 text-left">Project</th>
                              <th className="py-3 px-4 text-left">Amount</th>
                              <th className="py-3 px-4 text-left">Status</th>
                              <th className="py-3 px-4 text-left">Receipt</th>
                            </tr>
                          </thead>
                          <tbody>
                            {donationHistory.map((donation) => (
                              <tr key={donation.id} className="border-t border-gray-200">
                                <td className="py-3 px-4">{donation.date}</td>
                                <td className="py-3 px-4">{donation.project}</td>
                                <td className="py-3 px-4">${donation.amount.toFixed(2)}</td>
                                <td className="py-3 px-4">
                                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                    {donation.status}
                                  </span>
                                </td>
                                <td className="py-3 px-4">
                                  <a 
                                    href={`#${donation.receipt}`} 
                                    className="text-primary hover:underline"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toast.info(`Downloading receipt: ${donation.receipt}`, {
                                        position: "bottom-right",
                                        autoClose: 3000,
                                      });
                                    }}
                                  >
                                    Download
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'receipts' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Tax Receipts</h2>
                      
                      <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <table className="min-w-full">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="py-3 px-4 text-left">Year</th>
                              <th className="py-3 px-4 text-left">Total Donations</th>
                              <th className="py-3 px-4 text-left">Date Issued</th>
                              <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {taxReceipts.map((receipt) => (
                              <tr key={receipt.id} className="border-t border-gray-200">
                                <td className="py-3 px-4">{receipt.year}</td>
                                <td className="py-3 px-4">${receipt.totalDonations.toFixed(2)}</td>
                                <td className="py-3 px-4">{receipt.dateIssued}</td>
                                <td className="py-3 px-4">
                                  <div className="flex space-x-2">
                                    <a 
                                      href={`#${receipt.file}`} 
                                      className="text-primary hover:underline"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        toast.info(`Downloading tax receipt: ${receipt.file}`, {
                                          position: "bottom-right",
                                          autoClose: 3000,
                                        });
                                      }}
                                    >
                                      Download
                                    </a>
                                    <a 
                                      href={`#email-${receipt.id}`} 
                                      className="text-primary hover:underline"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        toast.info(`Emailing tax receipt for ${receipt.year}`, {
                                          position: "bottom-right",
                                          autoClose: 3000,
                                        });
                                      }}
                                    >
                                      Email
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">Request Additional Tax Receipts</h3>
                        <p className="text-gray-600 mb-4">
                          Need a receipt for a specific donation or a consolidated receipt for a custom date range? Submit a request below.
                        </p>
                        <button 
                          className="btn-primary"
                          onClick={() => {
                            toast.info('Tax receipt request form will be available soon.', {
                              position: "bottom-right",
                              autoClose: 3000,
                            });
                          }}
                        >
                          Request Custom Receipt
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'profile' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
                      
                      <div className="bg-gray-100 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                        <form>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                              <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                defaultValue="John"
                                className="input-field"
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                              <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                defaultValue="Doe"
                                className="input-field"
                              />
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              defaultValue="john.doe@example.com"
                              className="input-field"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              defaultValue="(123) 456-7890"
                              className="input-field"
                            />
                          </div>
                          
                          <button 
                            type="button" 
                            className="btn-primary"
                            onClick={() => {
                              toast.success('Profile information updated successfully!', {
                                position: "bottom-right",
                                autoClose: 3000,
                              });
                            }}
                          >
                            Save Changes
                          </button>
                        </form>
                      </div>
                      
                      <div className="bg-gray-100 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4">Address Information</h3>
                        <form>
                          <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Street Address</label>
                            <input 
                              type="text" 
                              id="address" 
                              name="address" 
                              defaultValue="123 Main St"
                              className="input-field"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label htmlFor="address2" className="block text-gray-700 font-medium mb-2">Apartment, suite, etc. (optional)</label>
                            <input 
                              type="text" 
                              id="address2" 
                              name="address2" 
                              defaultValue="Apt 4B"
                              className="input-field"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                              <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                defaultValue="New York"
                                className="input-field"
                              />
                            </div>
                            <div>
                              <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State/Province</label>
                              <input 
                                type="text" 
                                id="state" 
                                name="state" 
                                defaultValue="NY"
                                className="input-field"
                              />
                            </div>
                            <div>
                              <label htmlFor="zip" className="block text-gray-700 font-medium mb-2">Zip/Postal Code</label>
                              <input 
                                type="text" 
                                id="zip" 
                                name="zip" 
                                defaultValue="10001"
                                className="input-field"
                              />
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
                            <select 
                              id="country" 
                              name="country" 
                              defaultValue="US"
                              className="input-field"
                            >
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="UK">United Kingdom</option>
                              <option value="AU">Australia</option>
                            </select>
                          </div>
                          
                          <button 
                            type="button" 
                            className="btn-primary"
                            onClick={() => {
                              toast.success('Address information updated successfully!', {
                                position: "bottom-right",
                                autoClose: 3000,
                              });
                            }}
                          >
                            Save Changes
                          </button>
                        </form>
                      </div>
                      
                      <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">Communication Preferences</h3>
                        <form>
                          <div className="space-y-3 mb-6">
                            <label className="flex items-center">
                              <input 
                                type="checkbox" 
                                name="emailUpdates" 
                                defaultChecked={true}
                                className="mr-2"
                              />
                              <span>Email updates about our projects and impact</span>
                            </label>
                            <label className="flex items-center">
                              <input 
                                type="checkbox" 
                                name="donationReceipts" 
                                defaultChecked={true}
                                className="mr-2"
                              />
                              <span>Email receipts for donations</span>
                            </label>
                            <label className="flex items-center">
                              <input 
                                type="checkbox" 
                                name="newsletter" 
                                defaultChecked={true}
                                className="mr-2"
                              />
                              <span>Monthly newsletter</span>
                            </label>
                            <label className="flex items-center">
                              <input 
                                type="checkbox" 
                                name="events" 
                                defaultChecked={false}
                                className="mr-2"
                              />
                              <span>Invitations to events and fundraisers</span>
                            </label>
                          </div>
                          
                          <button 
                            type="button" 
                            className="btn-primary"
                            onClick={() => {
                              toast.success('Communication preferences updated successfully!', {
                                position: "bottom-right",
                                autoClose: 3000,
                              });
                            }}
                          >
                            Save Preferences
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'security' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
                      
                      <div className="bg-gray-100 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4">Change Password</h3>
                        <form>
                          <div className="mb-4">
                            <label htmlFor="currentPassword" className="block text-gray-700 font-medium mb-2">Current Password</label>
                            <input 
                              type="password" 
                              id="currentPassword" 
                              name="currentPassword" 
                              className="input-field"
                              placeholder="Enter your current password"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">New Password</label>
                            <input 
                              type="password" 
                              id="newPassword" 
                              name="newPassword" 
                              className="input-field"
                              placeholder="Enter your new password"
                            />
                          </div>
                          
                          <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
                            <input 
                              type="password" 
                              id="confirmPassword" 
                              name="confirmPassword" 
                              className="input-field"
                              placeholder="Confirm your new password"
                            />
                          </div>
                          
                          <button 
                            type="button" 
                            className="btn-primary"
                            onClick={() => {
                              toast.success('Password updated successfully!', {
                                position: "bottom-right",
                                autoClose: 3000,
                              });
                            }}
                          >
                            Update Password
                          </button>
                        </form>
                      </div>
                      
                      <div className="bg-gray-100 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4">Two-Factor Authentication</h3>
                        <p className="text-gray-600 mb-4">
                          Add an extra layer of security to your account by enabling two-factor authentication.
                        </p>
                        <button 
                          type="button" 
                          className="btn-primary"
                          onClick={() => {
                            toast.info('Two-factor authentication setup will be available soon.', {
                              position: "bottom-right",
                              autoClose: 3000,
                            });
                          }}
                        >
                          Enable Two-Factor Authentication
                        </button>
                      </div>
                      
                      <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">Login History</h3>
                        <p className="text-gray-600 mb-4">
                          Review recent login activity on your account.
                        </p>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white">
                            <thead>
                              <tr className="bg-gray-200">
                                <th className="py-3 px-4 text-left">Date & Time</th>
                                <th className="py-3 px-4 text-left">IP Address</th>
                                <th className="py-3 px-4 text-left">Device</th>
                                <th className="py-3 px-4 text-left">Location</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t border-gray-200">
                                <td className="py-3 px-4">2023-09-20 14:32:45</td>
                                <td className="py-3 px-4">192.168.1.1</td>
                                <td className="py-3 px-4">Chrome on Windows</td>
                                <td className="py-3 px-4">New York, USA</td>
                              </tr>
                              <tr className="border-t border-gray-200">
                                <td className="py-3 px-4">2023-09-18 09:15:22</td>
                                <td className="py-3 px-4">192.168.1.1</td>
                                <td className="py-3 px-4">Safari on iPhone</td>
                                <td className="py-3 px-4">New York, USA</td>
                              </tr>
                              <tr className="border-t border-gray-200">
                                <td className="py-3 px-4">2023-09-15 18:45:10</td>
                                <td className="py-3 px-4">192.168.1.1</td>
                                <td className="py-3 px-4">Chrome on Windows</td>
                                <td className="py-3 px-4">New York, USA</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DonorPortal;
