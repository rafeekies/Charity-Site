import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { DonationCartContext } from '../../App';
import { toast } from 'react-toastify';

const AddToDonationCart = ({ project }) => {
  const { addToCart } = useContext(DonationCartContext);
  
  const handleAddToCart = () => {
    const donationItem = {
      id: project.id,
      name: project.title,
      category: project.category,
      amount: 50 // Default donation amount
    };
    
    addToCart(donationItem);
    
    toast.success(`Added ${project.title} to your donation cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  
  return (
    <button 
      onClick={handleAddToCart}
      className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-primary-600 transition-colors border border-primary-600 rounded-md hover:bg-primary-50"
    >
      <FaCartPlus className="mr-2" />
      Add to Donation Cart
    </button>
  );
};

export default AddToDonationCart;
