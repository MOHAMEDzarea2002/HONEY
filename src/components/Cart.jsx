// Icons
import { FaShoppingBag } from 'react-icons/fa';

// Hooks React
import { useEffect, useMemo, useRef, useState } from 'react';
// Components
import CartCard from './CartCard';
import MdShoppingCartCheckout from './MdShoppingCartCheckout';
import MessageDon from './MessageDon';

// Hooks
import { useCart } from '../Hooks/useCart';
// Service Firebase

import axios from 'axios';

export default function Cart() {
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);
  //
  const [messageDon, setMessageDon] = useState(false);

  // context
  const {
    isCartOpen,
    setCartOpen,
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    removingIDd,
  } = useCart();

  // ref for cart element
  const RefCart = useRef();
  // close cart when click outside
  useEffect(() => {
    const handleclickouteside = (event) => {
      if (RefCart.current && !RefCart.current.contains(event.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleclickouteside);
    return () => document.removeEventListener('pointerdown', handleclickouteside);
  });
const submitOrder = async (orderData) =>{
  const response = await axios.post('http://localhost:5000/api/orders', orderData);
  return response.data
}
  // Handel Order
  const handleOrderSubmit = async (e) => {
    try {
      setCartOpen(false);
      await submitOrder({
        name: e.name,
        phone: e.phone,
        address: e.address,
        product: cart,
        orderedAt: new Date().toLocaleString('ar-EG'),
      });
      setMessageDon(true);
      setTimeout(() => {
        setMessageDon(false);
      }, 3000);
    } catch (err) {
      console.log(`Error Submit data to Firebase ${err}`);
    }
  };

  // useMemo Price Cart
  const { totalPrice ,subtotalPrice ,discount} = useMemo(() => {
    // totalPrice
    const totalPrice = cart.reduce((total, prod) => {
      const price = prod.discounts
        ? (prod.price - prod.discounts) * prod.quantity
        : prod.price * prod.quantity;
      return total + price;
    }, 0);
    // subtotalPrice
    const subtotalPrice = cart.reduce((total,prod) => {
      return total + prod.price * prod.quantity
    },0);
    // discount
    const discount = cart
      ?.map((prod) => prod?.quantity * prod?.discounts)
      .filter((pro) => pro >= 10);
    return { totalPrice, subtotalPrice, discount };
  },[cart]);

console.log(cart.map((prod) => prod));



  return (
    <div
      ref={RefCart}
      className={`
    cart fixed top-18 ${isCartOpen ? 'left-2' : '-left-100'}  bg-gray-300  rounded-lg  z-10 text-black  h-[calc(100%_-_80px)] overflow-y-auto transform transition-all duration-300 ease-in-out flex flex-col justify-between pt-2 w-90 shadow-2xl shadow-gray-950 `}
    >
      {/* icon Card */}
      <div className="  px-4">
        <h1 className="text-2xl font-bold mb-4 text-center ">
          <FaShoppingBag className="inline-block mx-3 text-2xl primary  " />
          سلة التسوق الخاصة بك
        </h1>
        {cart?.length == 0 ? (
          <div className="flex justify-center items-center">
            <p className="text-center text-gray-500">سلة التسوق الخاصة بك فارغة.</p>
          </div>
        ) : (
          <div className="box-card ">
            {cart?.map((product, index) => (
              <CartCard
                key={index}
                isRemoving={removingIDd == product.id}
                product={product}
                onRemove={removeFromCart}
                onIncrement={incrementQuantity}
                onDecrement={decrementQuantity}
              />
            ))}
          </div>
        )}
      </div>

      {/* Checkout  summary*/}
      <div className="bg-white border border-gray-100 rounded-xl p-4">
        {/* details products  */}
        <div className="space-y-1.5">
          {/* subTotalPrice */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>المنتجات ({cart?.length} عناصر)</span>
            <span className="text-gray-900 font-medium">
              {subtotalPrice?.toLocaleString('ar-EG')} ج
            </span>
          </div>
          {/* discount */}
          {discount > 0 && (
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>الخصم</span>
              <span className="text-green-600 font-medium">
                −{discount?.toLocaleString('ar-EG')} ج
              </span>
            </div>
          )}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>الشحن</span>
            <span className="text-gray-400">يُحدد لاحقاً</span>
          </div>
        </div>

        {/* TotalPrice */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
          <span className="text-base font-medium text-gray-900">الإجمالي</span>
          <span className="text-xl font-medium text-gray-900">
            {totalPrice?.toLocaleString('ar-EG')}
            <span className="text-sm font-normal text-gray-500 mr-1">ج</span>
          </span>
        </div>

        {cart?.length >= 1 && (
          <p className="text-[11px] text-gray-400 leading-relaxed mt-3 mb-4 bg-gray-50 rounded-lg px-3 py-2 border-r-2 border-gray-200">
            الأسعار لا تشمل تكلفة الشحن. سيتم التواصل معك بعد الطلب لتأكيده وإبلاغك بتكلفة الشحن حسب
            منطقتك.
          </p>
        )}
        {/* Button Checkout */}
        <button
          className="w-full py-3 rounded-lg mt-1 flex items-center justify-center gap-2 text-[15px] font-medium transition-opacity
      bg-gray-900 text-white hover:opacity-85
      disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
          onClick={() => setIsModalOpen(true)}
          disabled={cart.length === 0}
        >
          تأكيد الطلب
        </button>
      </div>
      {/* Checkout */}
      <MdShoppingCartCheckout
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitAction={handleOrderSubmit}
      />
      {messageDon ? <MessageDon /> : null}
    </div>
  );
}
