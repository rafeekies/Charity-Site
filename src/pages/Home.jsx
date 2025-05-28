import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaHandHoldingHeart, FaHandsHelping, FaGlobe, FaUsers } from 'react-icons/fa';

// Import components
import ProjectCard from '../components/projects/ProjectCard';

const Home = () => {
  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Clean Water for Rural Villages",
      category: "water",
      image: "https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg",
      description: "Provide clean drinking water to villages suffering from water scarcity and contamination.",
      raised: 12500,
      goal: 25000,
      donorCount: 143
    },
    {
      id: 2,
      title: "Emergency Food Relief",
      category: "food",
      image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
      description: "Deliver essential food packages to families affected by natural disasters and conflict.",
      raised: 18750,
      goal: 30000,
      donorCount: 215
    },
    {
      id: 3,
      title: "Orphan Care Program",
      category: "orphans",
      image: "https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg",
      description: "Support orphaned children with education, healthcare, and a loving environment.",
      raised: 35000,
      goal: 50000,
      donorCount: 328
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Monthly Donor",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      quote: "I've been donating to Ihsan Charity for over 3 years now. The transparency and impact they provide is unmatched. I can see exactly how my donations are helping people in need."
    },
    {
      id: 2,
      name: "Mohammed Ali",
      role: "Volunteer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      quote: "Working with Ihsan Charity has been an incredible experience. Their commitment to sustainable development and genuine care for communities is inspiring."
    },
    {
      id: 3,
      name: "Aisha Rahman",
      role: "Community Partner",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      quote: "Ihsan Charity's water project in our village has transformed our community. Children no longer have to walk miles for clean water, and waterborne diseases have decreased significantly."
    }
  ];

  // Intersection observer hooks for animations
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg')" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Together We Can Make a Difference
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join us in our mission to help those in need through sustainable development projects around the world.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/donate" 
              className="btn btn-primary text-lg px-8 py-3"
            >
              Donate Now
            </Link>
            <Link 
              to="/projects" 
              className="btn btn-outline text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Our Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                At Ihsan Charity Foundation, we believe in the power of compassion and sustainable development to transform lives. Our mission is to provide immediate relief and long-term solutions to communities facing poverty, hunger, and lack of essential resources.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Through our programs in food security, clean water, housing, education, and orphan care, we strive to create lasting change and empower communities to build a better future.
              </p>
              <Link 
                to="/about" 
                className="btn btn-primary inline-block"
              >
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg" 
                alt="Charity volunteers distributing aid" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section 
        ref={statsRef}
        className="py-16 bg-primary text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white bg-opacity-10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <FaHandHoldingHeart size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {statsInView && <CountUp end={250000} separator="," duration={2.5} />}+
              </h3>
              <p className="text-lg">Lives Impacted</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white bg-opacity-10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <FaGlobe size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {statsInView && <CountUp end={35} duration={2} />}+
              </h3>
              <p className="text-lg">Countries Served</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white bg-opacity-10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {statsInView && <CountUp end={520} duration={2} />}+
              </h3>
              <p className="text-lg">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-white bg-opacity-10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <FaUsers size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {statsInView && <CountUp end={15000} separator="," duration={2.5} />}+
              </h3>
              <p className="text-lg">Monthly Donors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section 
        ref={projectsRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our current initiatives and see how your contribution can make a real difference in people's lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="btn btn-primary inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={testimonialsRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What People Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our donors, volunteers, and community partners about the impact of our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your generosity can transform lives. Join us in our mission to create a more just and compassionate world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/donate" 
              className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
            >
              Donate Now
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-outline text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
