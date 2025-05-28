import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const AddToDonationCart = ({ project, category = 'general' }) => {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const { addToCart } = useCart();

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleAmountClick = (value) => {
    setAmount(value);
    setIsCustom(false);
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setAmount(0);
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setAmount(Number(value));
    }
  };

  const handleIncrement = () => {
    if (isCustom) {
      const newAmount = Number(customAmount) + 5;
      setCustomAmount(newAmount.toString());
      setAmount(newAmount);
    } else {
      setAmount(amount + 5);
    }
  };

  const handleDecrement = () => {
    if (isCustom) {
      const newAmount = Math.max(5, Number(customAmount) - 5);
      setCustomAmount(newAmount.toString());
      setAmount(newAmount);
    } else {
      setAmount(Math.max(5, amount - 5));
    }
  };

  const handleAddToCart = () => {
    if (amount > 0) {
      addToCart({
        id: project.id,
        title: project.title,
        image: project.image,
        amount: amount,
        category: category
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-primary">Make a Donation</h3>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {presetAmounts.map((value) => (
          <button
            key={value}
            onClick={() => handleAmountClick(value)}
            className={`py-2 px-4 rounded-md transition-colors ${
              !isCustom && amount === value
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            ${value}
          </button>
        ))}
        <button
          onClick={handleCustomClick}
          className={`py-2 px-4 rounded-md transition-colors ${
            isCustom
              ? 'bg-primary text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          Custom
        </button>
      </div>

      {isCustom && (
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-lg mr-2">$</span>
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter amount"
              autoFocus
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleDecrement}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
          aria-label="Decrease amount"
        >
          <FaMinus />
        </button>
        <span className="text-2xl font-bold">${amount}</span>
        <button
          onClick={handleIncrement}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
          aria-label="Increase amount"
        >
          <FaPlus />
        </button>
      </div>

      <motion.button
        onClick={handleAddToCart}
        className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md font-semibold transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={amount <= 0}
      >
        Add to Donation Cart
      </motion.button>
    </div>
  );
};

export default AddToDonationCart;
