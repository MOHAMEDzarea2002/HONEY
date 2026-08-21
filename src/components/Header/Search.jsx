// Context 
import { useCart } from '../../Hooks/useCart';
// react Icons
import { FaBagShopping } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { useSelector } from 'react-redux';

export default function Search() {
  // redux Store
  const { cartList } = useSelector((state) => state.cart);
  // context Cart
  const { setCartOpen, isCartOpen } = useCart();

  return (
    <div className="icons flex space-x-4 items-center text-2xl text-black cursor-pointer ">
      <div
        className={`${isCartOpen ? 'hidden ' : 'block'} relative`}
        onClick={() => setCartOpen(!isCartOpen)}
      >
        <FaBagShopping className="primary" />
        {cartList.length >= 1 ? (
          <span className="absolute -top-2  text-sm left-5 bg-neutral-400 rounded-full h-5 w-5 flex justify-center items-center">
            {cartList.length}
          </span>
        ) : null}
      </div>
      <IoSearch />
    </div>
  );
}
