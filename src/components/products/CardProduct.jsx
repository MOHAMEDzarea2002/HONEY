// component
import MessageToCart from '../cart/AddToCartMessage';
import AddToCartButton from '../products/AddToCartButton';

// redux Hooks
import { useDispatch, useSelector } from 'react-redux';
// react
import { useState } from 'react';
// redux action
import { AddToCart } from '../../features/cart/cartSlice';

export default function CardProduct({ product }) {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  // state Message Add Product To Cart
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handelAddToCart = async () => {
    await dispatch(AddToCart(product));
    setShowAddedMessage(true);
    // tim hidden Add message after 1500 second
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 1500);
  };
  const isInCart = cartList?.some((prod) => prod.id === product.id);
  return (
    <div className="flex justify-center items-center ">
      <div className="product-card w-[300px] bg-white   rounded-lg  shadow-md overflow-hidden relative ">
        {/* message Add Product In cart */}
        <div>{showAddedMessage && <MessageToCart />}</div>

        {/* Image product */}
        <img
          src={product.image}
          loading="lazy"
          alt="منتج العسل"
          className="w-full h-[180px] max-h-[180px] object-cover"
        />

        {/* Information product */}
        <div className="p-4 ">
          {/* title */}
          <span className="text-sm  ">{product?.category}</span>
          <h2 className="text-md font-bold ">{product?.name}</h2>
          {/* description */}
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm leading-6 line-clamp-3">
            {product?.description}
          </p>
          {/*Button Add Product & Price*/}
          <div className="flex items-center justify-around">
            <AddToCartButton onAddToCart={handelAddToCart} isInCart={isInCart} />
            <div className="   text-center cursor-pointer ">{product?.price}ج</div>
          </div>

        </div>

      </div>
    </div>
  );
}
