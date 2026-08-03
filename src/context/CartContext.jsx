import { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [removingIDd, setRemovingID] = useState(null);
  const [isCartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    const productIncCart = cart.find((pro) => pro.id === product.id);
    let updateCart;
    if (productIncCart) {
      updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updateCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updateCart);
  };

  const removeFromCart = (product) => {
    setRemovingID(product.id);
    setTimeout(() => {
      const updatedCart = cart.filter((prod) => prod.id !== product.id);
      setCart(updatedCart);
      setRemovingID(null);
    }, 300);
  };

  const incrementQuantity = (product) => {
    const updateQuantity = cart.map((prod) =>
      prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
    );
    setCart(updateQuantity);
  };

  const decrementQuantity = (product) => {
    const productIncCart = cart.map((prod) =>
      prod.id === product.id ? { ...prod, quantity: prod.quantity - 1 } : prod
    );
    setCart(productIncCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isCartOpen,
        setCartOpen,
        incrementQuantity,
        decrementQuantity,
        removingIDd,
        setCart,
      }}
    >
      {children}

    </CartContext.Provider>
  );
}
export { CartContext };
