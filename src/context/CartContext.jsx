import { createContext, useState, useEffect, useContext } from 'react';

// Create context
const CartContext = createContext();

// Create provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('donationCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('donationCart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.id === item.id
    );
    
    if (existingItemIndex >= 0) {
      // Update existing item
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        amount: updatedCart[existingItemIndex].amount + item.amount
      };
      setCartItems(updatedCart);
    } else {
      // Add new item
      setCartItems([...cartItems, item]);
    }
    
    // Open cart when adding items
    setIsCartOpen(true);
  };
  
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };
  
  const updateCartItem = (itemId, newAmount) => {
    setCartItems(
      cartItems.map(item => 
        item.id === itemId ? { ...item, amount: newAmount } : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const cartTotal = cartItems.reduce((total, item) => total + item.amount, 0);
  
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItem,
      clearCart,
      cartTotal,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
