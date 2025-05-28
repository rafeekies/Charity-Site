import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaGlobe, FaHandsHelping, FaUsers } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Aisha Rahman',
      role: 'Executive Director',
      bio: 'Dr. Rahman has over 15 years of experience in humanitarian work and international development. She leads our organization with passion and strategic vision.',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
    },
    {
      id: 2,
      name: 'Mohammed Ali',
      role: 'Operations Director',
      bio: 'Mohammed oversees all field operations and ensures that our projects are implemented effectively and efficiently in all regions we serve.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Development Director',
      bio: 'Sarah leads our fundraising efforts and donor relations, building partnerships that enable us to expand our impact around the world.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      id: 4,
      name: 'Yusuf Hassan',
      role: 'Programs Manager',
      bio: 'Yusuf designs and implements our humanitarian programs, ensuring they address the most pressing needs of the communities we serve.',
      image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg'
    }
  ];
  
  const values = [
    {
      icon: <FaHandHoldingHeart className="text-4xl text-primary mb-4" />,
      title: 'Compassion',
      description: 'We approach our work with deep empathy and care for those we serve, recognizing their dignity and humanity.'
    },
    {
      icon: <FaGlobe className="text-4xl text-primary mb-4" />,
      title: 'Global Responsibility',
      description: 'We believe in our shared responsibility to help those in need, regardless of geography, nationality, or background.'
    },
    {
      icon: <FaHandsHelping className="text-4xl text-primary mb-4" />,
      title: 'Sustainability',
      description: 'We develop solutions that create lasting change, empowering communities to thrive long after our direct involvement.'
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: 'Transparency',
      description: 'We maintain the highest standards of accountability and openness in all our operations and financial management.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ihsan Charity</h1>
            <p className="text-xl text-gray-200">
              Dedicated to serving humanity through sustainable development and emergency relief since 2010.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story */}
      <section id="story" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="mb-4">
                Ihsan Charity was founded in 2010 by a group of dedicated individuals who witnessed firsthand the devastating effects of poverty and conflict in various parts of the world. The Arabic word "Ihsan" means "excellence in doing good," which embodies our approach to humanitarian work.
              </p>
              <p className="mb-4">
                What began as a small initiative to provide food packages during Ramadan has grown into a comprehensive organization that implements sustainable development projects, emergency relief, and community empowerment programs across multiple countries.
              </p>
              <p>
                Over the years, we have expanded our reach and impact, but our core mission remains the same: to serve those in need with excellence, compassion, and dignity, regardless of race, religion, or nationality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/6647029/pexels-photo-6647029.jpeg" 
                alt="Ihsan Charity volunteers distributing aid" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section id="mission" className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="mb-4">
                To alleviate suffering and provide sustainable solutions for communities in need through humanitarian aid, development projects, and emergency relief, while upholding the dignity of those we serve.
              </p>
              <p>
                We strive to create lasting change by addressing immediate needs while also implementing long-term solutions that empower communities to become self-sufficient.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="mb-4">
                A world where all people have access to the basic necessities of life, opportunities for education and economic advancement, and the ability to live with dignity and hope.
              </p>
              <p>
                We envision communities that are resilient, self-reliant, and able to thrive despite challenges, supported by a global network of compassionate individuals committed to positive change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="text-gray-600">
              These core principles guide our work and define our approach to humanitarian service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {value.icon}
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section id="team" className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Team</h2>
            <p className="text-gray-600">
              Meet the dedicated professionals who lead our organization with passion and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Financial Transparency */}
      <section id="financials" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Financial Transparency</h2>
              <p className="mb-4">
                At Ihsan Charity, we are committed to complete transparency in our financial operations. We believe that donors have the right to know exactly how their contributions are being used to make a difference.
              </p>
              <p className="mb-4">
                Our financial reports are published annually and are available for public review. We maintain low administrative costs to ensure that the maximum amount of each donation goes directly to our programs and the communities we serve.
              </p>
              <div className="mt-6">
                <a href="/reports/annual-report-2022.pdf" className="btn-primary inline-block mr-4 mb-2">
                  Annual Report 2022
                </a>
                <a href="/reports/financial-statement-2022.pdf" className="btn-outline inline-block mb-2">
                  Financial Statement 2022
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-center">Fund Allocation</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Program Services</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Fundraising</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Administration</span>
                    <span className="font-medium">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-accent h-2.5 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold mb-2">Charity Ratings</h4>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-1">
                      <span className="font-bold">A+</span>
                    </div>
                    <span className="text-sm">CharityWatch</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-1">
                      <span className="font-bold">4★</span>
                    </div>
                    <span className="text-sm">Charity Navigator</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-1">
                      <span className="font-bold">Gold</span>
                    </div>
                    <span className="text-sm">GuideStar</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can make a lasting difference in the lives of those who need it most. Your support enables us to continue our vital work around the world.
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

export default About;
