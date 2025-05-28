import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaHandsHelping, FaUsers, FaGlobe } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import ImpactCounter from '../components/ImpactCounter';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    // For demo purposes, we'll use mock data
    setFeaturedProjects([
      {
        id: 'water-well-somalia',
        title: 'Water Well in Somalia',
        category: 'Clean Water',
        description: 'Provide clean drinking water to a village of 500 people in Somalia by building a deep water well.',
        image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg',
        goal: 5000,
        raised: 3750,
        featured: true
      },
      {
        id: 'orphan-care-syria',
        title: 'Orphan Care in Syria',
        category: 'Orphan Care',
        description: 'Support orphaned children in Syria with food, shelter, education, and psychological care.',
        image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg',
        goal: 10000,
        raised: 4200,
        featured: false
      },
      {
        id: 'food-packages-yemen',
        title: 'Food Packages for Yemen',
        category: 'Food Programs',
        description: 'Provide emergency food packages to families suffering from famine in Yemen.',
        image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
        goal: 7500,
        raised: 6800,
        featured: false
      }
    ]);
    
    setTestimonials([
      {
        id: 1,
        name: 'Ahmed Hassan',
        location: 'Somalia',
        quote: 'The water well your charity built has transformed our village. Our children no longer have to walk miles for clean water.',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
      },
      {
        id: 2,
        name: 'Fatima Ali',
        location: 'Syria',
        quote: 'Thanks to your orphan sponsorship program, my nephew is receiving an education and has hope for the future.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      },
      {
        id: 3,
        name: 'Sarah Johnson',
        location: 'USA',
        quote: 'Donating to Ihsan Charity has been a wonderful experience. I appreciate the transparency and seeing the direct impact of my contributions.',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
      }
    ]);
  }, []);
  
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gray-900 text-white py-24 md:py-32"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg')",
            filter: "brightness(0.6)"
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Together We Can Make A Difference
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-200"
              variants={itemVariants}
            >
              Join us in our mission to help those in need through food programs, clean water initiatives, housing projects, and orphan care.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <Link to="/donate" className="btn-accent text-center">
                Donate Now
              </Link>
              <Link to="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-center">
                Our Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Impact Stats */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImpactCounter 
              icon={FaHandHoldingHeart}
              count={1250}
              label="Families Supported"
            />
            <ImpactCounter 
              icon={FaHandsHelping}
              count={75}
              label="Water Wells Built"
            />
            <ImpactCounter 
              icon={FaUsers}
              count={500}
              label="Orphans Sponsored"
            />
            <ImpactCounter 
              icon={FaGlobe}
              count={12}
              label="Countries Served"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title mb-0">Featured Projects</h2>
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your donation, no matter how small, can change lives. Join us in our mission to create a better world for those in need.
          </p>
          <Link to="/donate" className="btn-accent inline-block">
            Donate Now
          </Link>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-6">Stay Updated</h2>
            <p className="mb-8">
              Subscribe to our newsletter to receive updates on our projects, success stories, and ways you can help.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="input-field flex-grow text-gray-800"
                required
              />
              <button type="submit" className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
