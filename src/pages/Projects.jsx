import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    // In a real app, this would be an API call
    // For demo purposes, we'll use mock data
    const projectsData = [
      {
        id: 'water-well-somalia',
        title: 'Water Well in Somalia',
        category: 'water',
        description: 'Provide clean drinking water to a village of 500 people in Somalia by building a deep water well.',
        image: 'https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg',
        goal: 5000,
        raised: 3750,
        featured: true
      },
      {
        id: 'orphan-care-syria',
        title: 'Orphan Care in Syria',
        category: 'orphans',
        description: 'Support orphaned children in Syria with food, shelter, education, and psychological care.',
        image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg',
        goal: 10000,
        raised: 4200,
        featured: false
      },
      {
        id: 'food-packages-yemen',
        title: 'Food Packages for Yemen',
        category: 'food',
        description: 'Provide emergency food packages to families suffering from famine in Yemen.',
        image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
        goal: 7500,
        raised: 6800,
        featured: false
      },
      {
        id: 'housing-gaza',
        title: 'Housing Reconstruction in Gaza',
        category: 'housing',
        description: 'Help rebuild homes for families who lost their houses due to conflict in Gaza.',
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        goal: 25000,
        raised: 12000,
        featured: false
      },
      {
        id: 'mosque-mali',
        title: 'Mosque Construction in Mali',
        category: 'mosques',
        description: 'Build a mosque that will serve as a community center and place of worship for a village in Mali.',
        image: 'https://images.pexels.com/photos/1537086/pexels-photo-1537086.jpeg',
        goal: 15000,
        raised: 9000,
        featured: false
      },
      {
        id: 'water-well-pakistan',
        title: 'Water Well in Pakistan',
        category: 'water',
        description: 'Provide clean water access to a rural community in Pakistan through a sustainable well project.',
        image: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg',
        goal: 4000,
        raised: 2800,
        featured: false
      },
      {
        id: 'food-bank-lebanon',
        title: 'Food Bank in Lebanon',
        category: 'food',
        description: 'Establish a food bank to provide regular meals to refugees and vulnerable families in Lebanon.',
        image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg',
        goal: 12000,
        raised: 5500,
        featured: false
      },
      {
        id: 'orphan-education-bangladesh',
        title: 'Orphan Education in Bangladesh',
        category: 'orphans',
        description: 'Provide educational scholarships and support for orphaned children in Bangladesh.',
        image: 'https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg',
        goal: 8000,
        raised: 3200,
        featured: false
      },
      {
        id: 'housing-indonesia',
        title: 'Housing for Tsunami Victims',
        category: 'housing',
        description: 'Build sustainable housing for families affected by the tsunami in Indonesia.',
        image: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg',
        goal: 20000,
        raised: 15000,
        featured: false
      }
    ];
    
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);
  
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
    
    // Scroll to the section if it's a hash link
    if (category !== 'all') {
      const element = document.getElementById(category);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
            backgroundImage: "url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg')"
          }}
        ></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-200">
              Explore our ongoing humanitarian projects around the world and see how your support makes a difference.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filter Tabs */}
      <section className="py-8 bg-gray-100 sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => handleFilterChange('food')}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'food' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Food Programs
            </button>
            <button 
              onClick={() => handleFilterChange('water')}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'water' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Clean Water
            </button>
            <button 
              onClick={() => handleFilterChange('housing')}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'housing' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Housing
            </button>
            <button 
              onClick={() => handleFilterChange('orphans')}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'orphans' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Orphan Care
            </button>
            <button 
              onClick={() => handleFilterChange('mosques')}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'mosques' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              Mosque Construction
            </button>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {activeFilter === 'all' ? (
            <>
              {/* Food Programs Section */}
              <div id="food" className="mb-16">
                <h2 className="section-title">Food Programs</h2>
                <p className="text-gray-600 mb-8">
                  Our food programs provide nutritious meals to families suffering from hunger and food insecurity in crisis regions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.filter(project => project.category === 'food').map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
              
              {/* Clean Water Section */}
              <div id="water" className="mb-16">
                <h2 className="section-title">Clean Water</h2>
                <p className="text-gray-600 mb-8">
                  Our water projects provide access to clean, safe drinking water through wells, filtration systems, and sustainable water management.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.filter(project => project.category === 'water').map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
              
              {/* Housing Section */}
              <div id="housing" className="mb-16">
                <h2 className="section-title">Housing Projects</h2>
                <p className="text-gray-600 mb-8">
                  Our housing initiatives provide safe, durable homes for families displaced by conflict, natural disasters, or extreme poverty.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.filter(project => project.category === 'housing').map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
              
              {/* Orphan Care Section */}
              <div id="orphans" className="mb-16">
                <h2 className="section-title">Orphan Care</h2>
                <p className="text-gray-600 mb-8">
                  Our orphan care programs provide holistic support including shelter, nutrition, education, and emotional care for vulnerable children.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.filter(project => project.category === 'orphans').map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
              
              {/* Mosque Construction Section */}
              <div id="mosques" className="mb-16">
                <h2 className="section-title">Mosque Construction</h2>
                <p className="text-gray-600 mb-8">
                  Our mosque projects build centers for worship, education, and community gathering in underserved areas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.filter(project => project.category === 'mosques').map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Projects</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your generous donation can help us continue these vital projects and expand our reach to more communities in need.
          </p>
          <a href="/donate" className="btn-accent inline-block">
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
