import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const CartIcon = () => {
  const { cartItems, cartCount } = useCart();
  
  if (cartCount === 0) return null;
  
  return (
    <Link 
      to="/donation-cart" 
      className="fixed z-40 flex items-center justify-center p-3 text-white rounded-full shadow-lg bottom-6 right-6 bg-primary-600 hover:bg-primary-700"
      aria-label="View donation cart"
    >
      <FaShoppingCart className="text-xl" />
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1"
          >
            {cartCount}
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default CartIcon;
