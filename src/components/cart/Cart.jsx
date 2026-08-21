// Icons
import { FaShoppingBag } from 'react-icons/fa';

// Hooks React
import { useEffect, useMemo, useRef, useState } from 'react';
// Components
import CartCard from './CardCart';
import CheckoutForm from '../checkout/CheckoutForm';
import OrderSuccess from '../checkout/OrderSuccess';

// Hooks
import { useCart } from '../../Hooks/useCart';

import { useSelector } from 'react-redux';
import { Link } from 'react-router';

export default function Cart() {
  const { cartList } = useSelector((state) => state.cart);

  // state
  const [isModalOpen, setIsModalOpen] = useState(false);
  //
  const [orderSuccess, setOrderSuccess] = useState(false);

  // context
  const { isCartOpen, setCartOpen   } =
    useCart();

  // ref for cart element
  const RefCart = useRef();
  // close cart when click outside
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (RefCart.current && !RefCart.current.contains(e.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleClickOutSide);
    return () => document.removeEventListener('pointerdown', handleClickOutSide);
  });

  // useMemo Price Cart
  const { totalPrice, subtotalPrice, discount } = useMemo(() => {
    // totalPrice
    const totalPrice = cartList.reduce((total, prod) => {
      const price = prod.discounts
        ? (prod.price - prod.discounts) * prod.quantity
        : prod.price * prod.quantity;
      return total + price;
    }, 0);
    // subtotalPrice
    const subtotalPrice = cartList.reduce((total, prod) => {
      return total + prod.price * prod.quantity;
    }, 0);
    // discount
    const discount = cartList
      ?.map((prod) => prod?.quantity * prod?.discounts)
      .filter((pro) => pro >= 10);
    return { totalPrice, subtotalPrice, discount };
  }, [cartList]);


  return (
    <div
      ref={RefCart}
      className={`
    cart fixed top-18 ${isCartOpen ? 'left-2' : '-left-100'}  bg-white  rounded-lg  z-10 text-black   h-[calc(100%-80px)]  overflow-hidden  transform transition-all duration-300 ease-in-out flex flex-col  pt-2 w-90 shadow-2xl shadow-gray-950 `}
    >
      <h1 className="text-2xl font-bold mb-4 text-center ">
        <FaShoppingBag className="inline-block mx-3 text-2xl primary  " />
        عربة التسوق
      </h1>
      {/* icon Card */}
      <div className=" flex-1 overflow-y-auto px-4  ">
        {cartList?.length == 0 ? (
          <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center">
            <p className=" text-gray-500 my-2">سلة التسوق الخاصة بك فارغة.</p>
            <Link to={'/products'} className="border-2 px-2" onClick={() => setCartOpen(false)}>
              تسوق الأن
            </Link>
          </div>
        ) : (
          <div className="box-card  ">
            {cartList?.map((product, index) => (
              <CartCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
      {/* Checkout  summary*/}
      <div className=" flex-shrink-0 bg-white border border-gray-100 rounded-xl p-4">
        {/* details products  */}
        <div className="space-y-1.5">
          {/* subTotalPrice */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>المنتجات ({cartList?.length} عناصر)</span>
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

        {cartList?.length >= 1 && (
          <p className="text-[11px] text-gray-400 leading-relaxed mt-3 mb-4 bg-gray-50 rounded-lg px-3 py-2 border-r-2 border-gray-200">
            الأسعار لا تشمل تكلفة الشحن. سيتم التواصل معك بعد الطلب لتأكيده وإبلاغك بتكلفة الشحن حسب
            منطقتك.
          </p>
        )}
        {/* Checkout Button  */}
        <button
          className="w-full py-3 rounded-lg mt-1 flex items-center justify-center gap-2 text-[15px] font-medium transition-opacity
      bg-gray-900 text-white hover:opacity-85
      disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
          onClick={() => setIsModalOpen(true)}
          disabled={cartList.length === 0}
        >
          تأكيد الطلب
        </button>
      </div>
      {
        <CheckoutForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          setOrderSuccess={setOrderSuccess}
        />
      }

      {orderSuccess && <OrderSuccess />}
    </div>
  );
}
