import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShoppingCart, FaHandHoldingHeart, FaCreditCard, FaMoneyBillWave, FaUserFriends, FaBuilding, FaArrowRight, FaCheck } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import PageHero from '../components/layout/PageHero';

const Donate = () => {
  const { addToCart, clearCart } = useCart();
  const [demoAdded, setDemoAdded] = useState(false);
  
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleAddDemoItems = () => {
    // Clear the cart first to avoid duplicates
    clearCart();
    
    // Add sample items to the cart with unique IDs
    setTimeout(() => {
      addToCart({
        id: 'demo-food-' + Date.now(),
        title: 'Food for Families',
        type: 'Emergency Relief',
        amount: 50
      });
      
      addToCart({
        id: 'demo-water-' + Date.now(),
        title: 'Clean Water Project',
        type: 'Water & Sanitation',
        amount: 75
      });
      
      setDemoAdded(true);
      
      // Reset the state after 3 seconds
      setTimeout(() => {
        setDemoAdded(false);
      }, 3000);
    }, 100);
  };

  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Your generosity can change lives. Choose how you'd like to make an impact today."
        backgroundImage="/images/donate-hero.jpg"
      />
      
      {/* Donation Options */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ways to Give</h2>
            <p className="mb-12 text-lg text-gray-600">
              Choose the donation method that works best for you. All donations are tax-deductible.
            </p>
          </div>
          
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* One-Time Donation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary-600">
                <FaHandHoldingHeart className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold">One-Time Donation</h3>
              <p className="mb-4 text-gray-600">
                Make an immediate impact with a one-time donation to support our projects and programs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[25, 50, 100, 250, 500].map((amount) => (
                  <button
                    key={amount}
                    className="px-4 py-2 text-sm font-medium transition-colors border rounded-md border-primary-600 text-primary-600 hover:bg-primary-50"
                    onClick={() => {
                      addToCart({
                        id: 'general-' + Date.now(),
                        title: 'General Donation',
                        type: 'One-Time',
                        amount
                      });
                    }}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center text-primary-600 hover:text-primary-700"
              >
                Browse specific projects <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            {/* Monthly Giving */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary-600">
                <FaUserFriends className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Monthly Giving</h3>
              <p className="mb-4 text-gray-600">
                Join our community of monthly donors and provide sustainable support to our ongoing programs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[10, 25, 50, 100, 200].map((amount) => (
                  <button
                    key={amount}
                    className="px-4 py-2 text-sm font-medium transition-colors border rounded-md border-primary-600 text-primary-600 hover:bg-primary-50"
                    onClick={() => {
                      addToCart({
                        id: 'monthly-' + Date.now(),
                        title: 'Monthly Donation',
                        type: 'Monthly',
                        amount
                      });
                    }}
                  >
                    ${amount}/mo
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Monthly donations can be canceled or modified at any time.
              </p>
            </motion.div>
            
            {/* Corporate Giving */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary-600">
                <FaBuilding className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Corporate Giving</h3>
              <p className="mb-4 text-gray-600">
                Partner with us through corporate donations, matching gifts, or sponsorship opportunities.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <FaCheck className="mt-1 mr-2 text-primary-600" />
                  <span>Corporate matching programs</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mt-1 mr-2 text-primary-600" />
                  <span>Event sponsorships</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="mt-1 mr-2 text-primary-600" />
                  <span>Cause marketing partnerships</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700"
              >
                Contact us to learn more <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Islamic Giving */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Islamic Giving</h2>
            <p className="mb-12 text-lg text-gray-600">
              Fulfill your religious obligations and earn rewards through these Islamic giving options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Zakat */}
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="h-48 bg-primary-600">
                <div className="flex items-center justify-center h-full text-white">
                  <h3 className="text-3xl font-bold">Zakat</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Fulfill your obligation to purify your wealth by giving 2.5% of your savings to those in need.
                </p>
                <Link
                  to="/zakat-calculator"
                  className="block w-full py-2 mb-3 text-center text-white rounded-md bg-primary-600 hover:bg-primary-700"
                >
                  Zakat Calculator
                </Link>
                <button
                  onClick={() => {
                    addToCart({
                      id: 'zakat-' + Date.now(),
                      title: 'Zakat Donation',
                      type: 'Zakat',
                      amount: 100
                    });
                  }}
                  className="block w-full py-2 text-center border rounded-md border-primary-600 text-primary-600 hover:bg-primary-50"
                >
                  Give Zakat Now
                </button>
              </div>
            </div>
            
            {/* Sadaqah */}
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="h-48 bg-primary-700">
                <div className="flex items-center justify-center h-full text-white">
                  <h3 className="text-3xl font-bold">Sadaqah</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Give voluntary charity to help those in need and earn continuous rewards for your generosity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[25, 50, 100].map((amount) => (
                    <button
                      key={amount}
                      className="flex-1 px-4 py-2 text-sm font-medium transition-colors border rounded-md border-primary-600 text-primary-600 hover:bg-primary-50"
                      onClick={() => {
                        addToCart({
                          id: 'sadaqah-' + Date.now(),
                          title: 'Sadaqah Donation',
                          type: 'Sadaqah',
                          amount
                        });
                      }}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <Link
                  to="/projects"
                  className="block w-full py-2 text-center text-white rounded-md bg-primary-600 hover:bg-primary-700"
                >
                  Browse Sadaqah Projects
                </Link>
              </div>
            </div>
            
            {/* Qurbani/Udhiyah */}
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="h-48 bg-primary-800">
                <div className="flex items-center justify-center h-full text-white">
                  <h3 className="text-3xl font-bold">Qurbani/Udhiyah</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Fulfill the Sunnah of Prophet Ibrahim (AS) by providing meat to families in need during Eid al-Adha.
                </p>
                <div className="mb-4">
                  <button
                    className="block w-full py-2 mb-3 text-center text-white rounded-md bg-primary-600 hover:bg-primary-700"
                    onClick={() => {
                      addToCart({
                        id: 'qurbani-' + Date.now(),
                        title: 'Qurbani/Udhiyah',
                        type: 'Qurbani',
                        amount: 150
                      });
                    }}
                  >
                    Give Qurbani ($150)
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  Qurbani/Udhiyah is available seasonally before Eid al-Adha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Cart Demo */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl p-8 mx-auto bg-gray-50 rounded-lg shadow-md"
          >
            <div className="flex flex-col items-center mb-8 md:flex-row md:items-start">
              <div className="flex items-center justify-center w-20 h-20 mb-4 text-white rounded-full bg-primary-600 md:mb-0 md:mr-6">
                <FaShoppingCart className="text-3xl" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">Try Our New Donation Cart</h2>
                <p className="text-lg text-gray-600">
                  Now you can donate to multiple projects at once with our convenient donation cart system.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mb-8">
              <button
                onClick={handleAddDemoItems}
                disabled={demoAdded}
                className={`px-6 py-3 text-lg font-medium text-white rounded-md ${
                  demoAdded 
                    ? 'bg-green-600' 
                    : 'bg-primary-600 hover:bg-primary-700'
                }`}
              >
                {demoAdded ? 'Demo Items Added!' : 'Add Demo Items to Cart'}
              </button>
            </div>
            
            <p className="mb-4 text-sm text-center text-gray-500">
              Click the button above to add sample donations to your cart, then click the cart icon that appears in the bottom right corner.
            </p>
            
            <div className="p-6 mb-8 bg-white rounded-lg">
              <h3 className="mb-4 text-xl font-bold text-center">Donation Cart Features</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-primary-600" />
                  <span>Donate to multiple projects at once</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-primary-600" />
                  <span>Pay via credit card or Zelle</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-primary-600" />
                  <span>Option to cover processing fees</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-primary-600" />
                  <span>Donate in honor of someone or in memory</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="mt-1 mr-3 text-primary-600" />
                  <span>Employer donation matching</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-4 text-xl font-bold">How It Works</h3>
              <ol className="pl-6 space-y-2 list-decimal">
                <li>Browse our projects and add donations to your cart</li>
                <li>Click the cart icon to review your donations</li>
                <li>Customize your donation options</li>
                <li>Complete your donation in one simple checkout</li>
                <li>Receive a confirmation and tax receipt</li>
              </ol>
              <p className="mt-4 text-center">
                Try it now! Add demo items to your cart and explore all the features.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Other Ways to Give */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Other Ways to Give</h2>
            <p className="mb-12 text-lg text-gray-600">
              Beyond online donations, there are many ways you can support our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Stock Donations */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Stock Donations</h3>
              <p className="text-gray-600">
                Donate appreciated securities and receive tax benefits while supporting our cause.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-700"
              >
                Contact us for details <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            {/* Planned Giving */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Planned Giving</h3>
              <p className="text-gray-600">
                Include Ihsan Charity in your will or estate plan to leave a lasting legacy of compassion.
              </p>
              <Link
                to="/planned-giving"
                className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-700"
              >
                Learn more <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            {/* Donor-Advised Funds */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Donor-Advised Funds</h3>
              <p className="text-gray-600">
                Recommend a grant to Ihsan Charity through your donor-advised fund.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Our EIN: 12-3456789
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="mb-12 text-lg text-gray-600">
              Find answers to common questions about donating to Ihsan Charity.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="mb-2 text-xl font-bold">Is my donation tax-deductible?</h3>
              <p className="text-gray-600">
                Yes, Ihsan Charity is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="mb-2 text-xl font-bold">How is my donation used?</h3>
              <p className="text-gray-600">
                We strive to use at least 90% of every donation directly for program expenses. Our administrative and fundraising costs are kept to a minimum to maximize the impact of your generosity.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="mb-2 text-xl font-bold">Can I specify where my donation goes?</h3>
              <p className="text-gray-600">
                Yes, you can designate your donation to a specific project or program. If you don't specify, your donation will be used where it's needed most.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="mb-2 text-xl font-bold">Will I receive a receipt for my donation?</h3>
              <p className="text-gray-600">
                Yes, you will receive an email receipt immediately after your online donation. For offline donations, receipts are sent within 2-3 weeks.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="mb-2 text-xl font-bold">How do I update or cancel my monthly donation?</h3>
              <p className="text-gray-600">
                You can update or cancel your monthly donation at any time by logging into your donor portal account or by contacting our donor services team.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 text-white bg-primary-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Make a Difference?</h2>
            <p className="mb-8 text-xl text-primary-100">
              Your generosity today can transform lives tomorrow. Every donation, no matter the size, brings hope to those in need.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/projects"
                className="px-8 py-3 text-lg font-medium text-primary-700 bg-white rounded-md hover:bg-gray-100"
              >
                Browse Projects
              </Link>
              <button
                onClick={() => {
                  addToCart({
                    id: 'general-' + Date.now(),
                    title: 'General Donation',
                    type: 'One-Time',
                    amount: 100
                  });
                }}
                className="px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-md hover:bg-primary-600"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
