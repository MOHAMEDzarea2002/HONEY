import { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartContext };
