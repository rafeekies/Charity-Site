import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('donationCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [coverFees, setCoverFees] = useState(false);
  const [donationFor, setDonationFor] = useState({
    type: 'self', // 'self', 'behalf', 'memory'
    name: ''
  });
  const [employerMatch, setEmployerMatch] = useState({
    enabled: false,
    company: '',
    email: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('donationCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item) => {
    // Ensure item has all required properties
    if (!item.id || !item.title || !item.amount) {
      console.error('Invalid item format:', item);
      return;
    }

    // Ensure amount is a number
    const amount = parseFloat(item.amount);
    if (isNaN(amount) || amount <= 0) {
      console.error('Invalid amount:', item.amount);
      return;
    }

    // Create a new item with validated data
    const validatedItem = {
      ...item,
      id: item.id,
      title: item.title,
      type: item.type || 'General',
      amount: amount
    };

    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.id === validatedItem.id && cartItem.type === validatedItem.type
    );

    if (existingItemIndex >= 0) {
      // Update existing item
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        amount: updatedCart[existingItemIndex].amount + validatedItem.amount
      };
      setCartItems(updatedCart);
    } else {
      // Add new item
      setCartItems(prevItems => [...prevItems, validatedItem]);
    }
    
    toast.success(`${validatedItem.title} added to your donation cart`);
  };

  // Update item quantity
  const updateItemAmount = (id, type, amount) => {
    const updatedCart = cartItems.map(item => 
      item.id === id && item.type === type 
        ? { ...item, amount: parseFloat(amount) } 
        : item
    );
    setCartItems(updatedCart);
  };

  // Remove item from cart
  const removeFromCart = (id, type) => {
    const updatedCart = cartItems.filter(
      item => !(item.id === id && item.type === type)
    );
    setCartItems(updatedCart);
    toast.info("Item removed from donation cart");
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setCoverFees(false);
    setDonationFor({ type: 'self', name: '' });
    setEmployerMatch({ enabled: false, company: '', email: '' });
    toast.info("Donation cart cleared");
  };

  // Calculate cart totals
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.amount, 0);
    
    // Calculate processing fee (typically 2.9% + $0.30 for credit cards)
    const processingFee = paymentMethod === 'zelle' ? 0 : (subtotal * 0.029 + 0.30);
    
    const total = coverFees ? subtotal + processingFee : subtotal;
    
    return {
      subtotal,
      processingFee: coverFees ? processingFee : 0,
      total: parseFloat(total.toFixed(2))
    };
  };

  const value = {
    cartItems,
    coverFees,
    setCoverFees,
    donationFor,
    setDonationFor,
    employerMatch,
    setEmployerMatch,
    paymentMethod,
    setPaymentMethod,
    addToCart,
    updateItemAmount,
    removeFromCart,
    clearCart,
    calculateTotals,
    cartCount: cartItems.length
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
