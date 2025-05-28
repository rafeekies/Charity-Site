import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import AddToDonationCart from '../donation/AddToDonationCart';

const ProjectCard = ({ project, index }) => {
  const percentage = Math.round((project.raised / project.goal) * 100);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden bg-white rounded-lg shadow-md"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 px-3 py-1 m-3 text-xs font-medium text-white rounded-full bg-primary-600">
          {project.category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center mb-2 text-sm text-gray-500">
          <FaMapMarkerAlt className="mr-1" />
          <span>{project.location}</span>
        </div>
        
        <h3 className="mb-2 text-xl font-bold">
          <Link to={`/projects/${project.id}`} className="transition-colors hover:text-primary-600">
            {project.title}
          </Link>
        </h3>
        
        <p className="mb-4 text-gray-600 line-clamp-2">
          {project.description}
        </p>
        
        {/* Progress bar */}
        <div className="w-full h-2 mb-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 rounded-full bg-primary-500" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="font-medium text-gray-600">Raised: ${project.raised.toLocaleString()}</span>
          <span className="font-medium text-gray-800">Goal: ${project.goal.toLocaleString()}</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <Link 
            to={`/projects/${project.id}`} 
            className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-white transition-colors rounded-md bg-primary-600 hover:bg-primary-700"
          >
            View Project
            <FaArrowRight className="ml-2" />
          </Link>
          
          <AddToDonationCart project={project} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
