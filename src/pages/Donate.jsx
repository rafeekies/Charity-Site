import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaHandHoldingUsd, FaShekelSign, FaMosque } from 'react-icons/fa';
import { DonationCartContext } from '../App';
import { toast } from 'react-toastify';

const Donate = () => {
  const { addToCart } = useContext(DonationCartContext);
  const [activeTab, setActiveTab] = useState('general');
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setDonationAmount(50);
    setCustomAmount('');
    setIsCustomAmount(false);
  };
  
  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setIsCustomAmount(false);
  };
  
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(value) && parseFloat(value) > 0) {
      setDonationAmount(parseFloat(value));
    } else {
      setDonationAmount(0);
    }
  };
  
  const handleCustomAmountFocus = () => {
    setIsCustomAmount(true);
  };
  
  const handleAddToCart = (category) => {
    if (donationAmount < 5) {
      toast.error('Minimum donation amount is $5', {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    
    const donationItem = {
      id: `${category}-${Date.now()}`,
      name: getCategoryName(category),
      category: getCategoryName(category),
      amount: donationAmount
    };
    
    addToCart(donationItem);
    
    toast.success(`Added ${getCategoryName(category)} donation to your cart!`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  
  const getCategoryName = (category) => {
    switch (category) {
      case 'general':
        return 'General Donation';
      case 'zakat':
        return 'Zakat';
      case 'sadaqah':
        return 'Sadaqah';
      case 'qurbani':
        return 'Qurbani/Udhiyah';
      case 'monthly':
        return 'Monthly Giving';
      default:
        return 'Donation';
    }
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg')"
          }}
        ></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl text-gray-200">
              Your generosity can transform lives. Choose how you'd like to make a difference today.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Donation Tabs */}
      <section className="py-8 bg-gray-100 sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => handleTabChange('general')}
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'general' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              General Donation
            </button>
            <button 
              onClick={() => handleTabChange('zakat')}
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'zakat' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Zakat
            </button>
            <button 
              onClick={() => handleTabChange('sadaqah')}
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'sadaqah' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Sadaqah
            </button>
            <button 
              onClick={() => handleTabChange('qurbani')}
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'qurbani' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Qurbani/Udhiyah
            </button>
            <button 
              onClick={() => handleTabChange('monthly')}
              className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'monthly' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Monthly Giving
            </button>
          </div>
        </div>
      </section>
      
      {/* Donation Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Donation Form */}
            <div className="lg:col-span-2">
              {activeTab === 'general' && (
                <div id="general">
                  <h2 className="section-title">General Donation</h2>
                  <p className="text-gray-600 mb-8">
                    Your general donation allows us to allocate funds where they are needed most, supporting our various humanitarian projects around the world.
                  </p>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Select Donation Amount</h3>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <button 
                        onClick={() => handleAmountClick(25)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 25 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $25
                      </button>
                      <button 
                        onClick={() => handleAmountClick(50)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 50 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $50
                      </button>
                      <button 
                        onClick={() => handleAmountClick(100)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 100 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $100
                      </button>
                      <button 
                        onClick={() => handleAmountClick(250)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 250 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $250
                      </button>
                      <button 
                        onClick={() => handleAmountClick(500)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 500 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $500
                      </button>
                      <button 
                        onClick={() => handleAmountClick(1000)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 1000 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $1,000
                      </button>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="customAmount" className="block text-gray-700 font-medium mb-2">Custom Amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input 
                          type="text" 
                          id="customAmount" 
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onFocus={handleCustomAmountFocus}
                          className="input-field pl-8"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart('general')}
                      className="btn-primary w-full py-3 text-lg"
                    >
                      Add to Donation Cart
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'zakat' && (
                <div id="zakat">
                  <h2 className="section-title">Zakat</h2>
                  <p className="text-gray-600 mb-8">
                    Fulfill your Zakat obligation by donating to those in need. Your Zakat funds will be distributed to eligible recipients according to Islamic guidelines.
                  </p>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h3 className="text-xl font-bold mb-6">Zakat Calculator</h3>
                    <p className="text-gray-600 mb-4">
                      Use our simple calculator to determine your Zakat obligation.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Gold & Silver</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input 
                            type="text" 
                            className="input-field pl-8"
                            placeholder="Value of gold and silver"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Cash & Bank Balances</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input 
                            type="text" 
                            className="input-field pl-8"
                            placeholder="Total cash and bank balances"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Investments & Stocks</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input 
                            type="text" 
                            className="input-field pl-8"
                            placeholder="Value of investments and stocks"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Business Assets</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input 
                            type="text" 
                            className="input-field pl-8"
                            placeholder="Value of business assets"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Debts & Liabilities</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input 
                            type="text" 
                            className="input-field pl-8"
                            placeholder="Total debts and liabilities"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <button className="btn-primary w-full py-3">
                      Calculate Zakat
                    </button>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Select Zakat Amount</h3>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <button 
                        onClick={() => handleAmountClick(25)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 25 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $25
                      </button>
                      <button 
                        onClick={() => handleAmountClick(50)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 50 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $50
                      </button>
                      <button 
                        onClick={() => handleAmountClick(100)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 100 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $100
                      </button>
                      <button 
                        onClick={() => handleAmountClick(250)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 250 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $250
                      </button>
                      <button 
                        onClick={() => handleAmountClick(500)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 500 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $500
                      </button>
                      <button 
                        onClick={() => handleAmountClick(1000)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 1000 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $1,000
                      </button>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="customZakatAmount" className="block text-gray-700 font-medium mb-2">Custom Amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input 
                          type="text" 
                          id="customZakatAmount" 
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onFocus={handleCustomAmountFocus}
                          className="input-field pl-8"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart('zakat')}
                      className="btn-primary w-full py-3 text-lg"
                    >
                      Add to Donation Cart
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'sadaqah' && (
                <div id="sadaqah">
                  <h2 className="section-title">Sadaqah</h2>
                  <p className="text-gray-600 mb-8">
                    Sadaqah is a voluntary act of giving that can be performed at any time. Your Sadaqah donation will support our various humanitarian projects.
                  </p>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Select Sadaqah Amount</h3>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <button 
                        onClick={() => handleAmountClick(25)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 25 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $25
                      </button>
                      <button 
                        onClick={() => handleAmountClick(50)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 50 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $50
                      </button>
                      <button 
                        onClick={() => handleAmountClick(100)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 100 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $100
                      </button>
                      <button 
                        onClick={() => handleAmountClick(250)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 250 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $250
                      </button>
                      <button 
                        onClick={() => handleAmountClick(500)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 500 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $500
                      </button>
                      <button 
                        onClick={() => handleAmountClick(1000)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 1000 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $1,000
                      </button>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="customSadaqahAmount" className="block text-gray-700 font-medium mb-2">Custom Amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input 
                          type="text" 
                          id="customSadaqahAmount" 
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onFocus={handleCustomAmountFocus}
                          className="input-field pl-8"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-2">Sadaqah Type</label>
                      <select className="input-field">
                        <option value="general">General Sadaqah</option>
                        <option value="food">Food Programs</option>
                        <option value="water">Clean Water</option>
                        <option value="orphans">Orphan Care</option>
                        <option value="education">Education</option>
                      </select>
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart('sadaqah')}
                      className="btn-primary w-full py-3 text-lg"
                    >
                      Add to Donation Cart
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'qurbani' && (
                <div id="qurbani">
                  <h2 className="section-title">Qurbani/Udhiyah</h2>
                  <p className="text-gray-600 mb-8">
                    Fulfill your Qurbani/Udhiyah obligation by donating for the sacrifice of an animal during Eid al-Adha. The meat will be distributed to those in need.
                  </p>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Select Qurbani Option</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                        <label className="flex items-start cursor-pointer">
                          <input 
                            type="radio" 
                            name="qurbaniOption" 
                            value="sheep" 
                            className="mt-1 mr-3"
                            defaultChecked
                          />
                          <div>
                            <span className="block font-bold">Sheep/Goat - $150</span>
                            <span className="text-sm text-gray-600">One sheep/goat for one person or family</span>
                          </div>
                        </label>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                        <label className="flex items-start cursor-pointer">
                          <input 
                            type="radio" 
                            name="qurbaniOption" 
                            value="cow-share" 
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="block font-bold">Cow Share (1/7) - $200</span>
                            <span className="text-sm text-gray-600">One share in a cow (1/7 portion)</span>
                          </div>
                        </label>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                        <label className="flex items-start cursor-pointer">
                          <input 
                            type="radio" 
                            name="qurbaniOption" 
                            value="cow-full" 
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="block font-bold">Full Cow - $1,200</span>
                            <span className="text-sm text-gray-600">Entire cow (can be shared by up to 7 people)</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-2">Country</label>
                      <select className="input-field">
                        <option value="">Select a country</option>
                        <option value="somalia">Somalia</option>
                        <option value="yemen">Yemen</option>
                        <option value="syria">Syria</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="bangladesh">Bangladesh</option>
                      </select>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                      <div className="flex items-center">
                        <button 
                          className="bg-gray-200 px-4 py-2 rounded-l-md"
                          onClick={() => {
                            const newQuantity = Math.max(1, parseInt(document.getElementById('qurbaniQuantity').value) - 1);
                            document.getElementById('qurbaniQuantity').value = newQuantity;
                          }}
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          id="qurbaniQuantity" 
                          min="1" 
                          defaultValue="1" 
                          className="w-20 text-center py-2 border-y border-gray-300"
                        />
                        <button 
                          className="bg-gray-200 px-4 py-2 rounded-r-md"
                          onClick={() => {
                            const newQuantity = parseInt(document.getElementById('qurbaniQuantity').value) + 1;
                            document.getElementById('qurbaniQuantity').value = newQuantity;
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart('qurbani')}
                      className="btn-primary w-full py-3 text-lg"
                    >
                      Add to Donation Cart
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'monthly' && (
                <div id="monthly">
                  <h2 className="section-title">Monthly Giving</h2>
                  <p className="text-gray-600 mb-8">
                    Become a sustaining donor by setting up a monthly donation. Your regular support helps us plan and implement long-term projects.
                  </p>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Select Monthly Amount</h3>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <button 
                        onClick={() => handleAmountClick(25)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 25 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $25/month
                      </button>
                      <button 
                        onClick={() => handleAmountClick(50)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 50 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $50/month
                      </button>
                      <button 
                        onClick={() => handleAmountClick(100)}
                        className={`py-3 rounded-md font-medium transition-colors ${!isCustomAmount && donationAmount === 100 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        $100/month
                      </button>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="customMonthlyAmount" className="block text-gray-700 font-medium mb-2">Custom Monthly Amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input 
                          type="text" 
                          id="customMonthlyAmount" 
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onFocus={handleCustomAmountFocus}
                          className="input-field pl-8"
                          placeholder="Enter monthly amount"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-2">Program</label>
                      <select className="input-field">
                        <option value="general">Where Needed Most</option>
                        <option value="food">Food Programs</option>
                        <option value="water">Clean Water</option>
                        <option value="orphans">Orphan Sponsorship</option>
                        <option value="education">Education</option>
                      </select>
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart('monthly')}
                      className="btn-primary w-full py-3 text-lg"
                    >
                      Add to Donation Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Info */}
            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Why Donate?</h3>
                <p className="text-gray-600 mb-4">
                  Your donation makes a real difference in the lives of those in need. Here's how your contribution helps:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>$25 can provide food for a family for a week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>$50 can supply clean water to a community for a month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>$100 can sponsor an orphan's education and care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>$250 can help build shelter for a displaced family</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Donation Types</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-2 rounded-full mr-3">
                      <FaHandHoldingHeart />
                    </div>
                    <div>
                      <h4 className="font-bold">General Donation</h4>
                      <p className="text-sm text-gray-600">
                        Unrestricted funds that support our overall mission and are allocated where needed most.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-2 rounded-full mr-3">
                      <FaHandHoldingUsd />
                    </div>
                    <div>
                      <h4 className="font-bold">Zakat</h4>
                      <p className="text-sm text-gray-600">
                        Obligatory charity in Islam, distributed to eligible recipients according to Islamic guidelines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-2 rounded-full mr-3">
                      <FaShekelSign />
                    </div>
                    <div>
                      <h4 className="font-bold">Sadaqah</h4>
                      <p className="text-sm text-gray-600">
                        Voluntary charity that can be given at any time, supporting our humanitarian projects.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-2 rounded-full mr-3">
                      <FaMosque />
                    </div>
                    <div>
                      <h4 className="font-bold">Qurbani/Udhiyah</h4>
                      <p className="text-sm text-gray-600">
                        Animal sacrifice during Eid al-Adha, with meat distributed to those in need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Tax Benefits</h3>
                <p className="text-gray-600 mb-4">
                  Ihsan Charity is a registered 501(c)(3) nonprofit organization. Your donations are tax-deductible to the extent allowed by law.
                </p>
                <p className="text-gray-600">
                  You will receive a tax receipt for your donation that can be used for tax purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-2">How is my donation used?</h3>
                <p className="text-gray-600">
                  85% of your donation goes directly to our programs and services, with 10% allocated to fundraising efforts and 5% to administrative costs. We are committed to transparency and publish detailed financial reports annually.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">Is my donation tax-deductible?</h3>
                <p className="text-gray-600">
                  Yes, Ihsan Charity is a registered 501(c)(3) nonprofit organization, and your donations are tax-deductible to the extent allowed by law. You will receive a tax receipt for your donation.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">Can I specify which project my donation supports?</h3>
                <p className="text-gray-600">
                  Yes, you can designate your donation to a specific project or program. During the donation process, you'll have the option to select which initiative you'd like to support.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">How do I know my Zakat is distributed correctly?</h3>
                <p className="text-gray-600">
                  We follow strict Islamic guidelines for Zakat distribution, ensuring it reaches the eligible recipients (asnaf). We work with qualified scholars to oversee our Zakat distribution process and provide detailed reports on how funds are used.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
