import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        toast.success('Your message has been sent successfully! We will get back to you soon.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }, 1500);
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
            backgroundImage: "url('https://images.pexels.com/photos/33999/pexels-photo.jpg')"
          }}
        ></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Charity Lane<br />
                New York, NY 10001<br />
                United States
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Number</h3>
              <p className="text-gray-600">
                Main: (123) 456-7890<br />
                Donations: (123) 456-7891<br />
                Toll-free: 1-800-CHARITY
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Address</h3>
              <p className="text-gray-600">
                General: info@ihsancharity.org<br />
                Donations: donate@ihsancharity.org<br />
                Support: help@ihsancharity.org
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9am - 5pm<br />
                Saturday: 10am - 2pm<br />
                Sunday: Closed
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                    placeholder="Enter subject"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Enter your message"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Our Location</h2>
              <p className="text-gray-600 mb-6">
                Visit our office to learn more about our work or to discuss partnership opportunities.
              </p>
              
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1630597533945!5m2!1sen!2s" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Ihsan Charity Location"
                ></iframe>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-gray-600 mb-4">
                  Follow us on social media to stay updated on our projects, events, and impact stories.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#3b5998] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1da1f2] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#c32aa3] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0a66c2] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.div>
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
                <h3 className="text-xl font-bold mb-2">How can I volunteer with Ihsan Charity?</h3>
                <p className="text-gray-600">
                  We welcome volunteers who are passionate about our cause. You can fill out the volunteer form on our website or contact our volunteer coordinator at volunteer@ihsancharity.org to learn about current opportunities.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                <h3 className="text-xl font-bold mb-2">How can my organization partner with Ihsan Charity?</h3>
                <p className="text-gray-600">
                  We're always open to partnerships that align with our mission. Please contact our partnerships team at partnerships@ihsancharity.org with details about your organization and proposed collaboration.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can transform lives. Join us in our mission to create positive change around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/donate" className="btn-accent">
              Donate Now
            </a>
            <a href="/volunteer" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
