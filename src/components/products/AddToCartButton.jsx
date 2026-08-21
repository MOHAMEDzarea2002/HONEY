
// react Icons
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlineDownloadDone } from 'react-icons/md';

export default function AddToCartButton({ isInCart, onAddToCart }) {

  return (
    <button
      className="bg-yellow-600/90 text-white px-4 py-2 rounded hover:bg-amber-700 transition  text-center cursor-pointer  duration-300 hover:-translate-y-0.5"
      onClick={onAddToCart}
    >
      <div className="flex items-center gap-2 text-sm ">
        <span className="text-lg">{isInCart ? <MdOutlineDownloadDone /> : <FaCartShopping />}</span>
        <span>{isInCart ? 'في السلة' : ' إضافة إلى السلة'}</span>
      </div>
    </button>
  );
}
