import {useCart} from "../Hooks/useCart"
import { FaCartShopping } from 'react-icons/fa6';

export default function ProductCart({product}) {
  const { addToCart } = useCart();

  return (
    <div>
      <div className="product-card w-[300px] bg-white dark:bg-amber-100/5  rounded-lg shadow-md overflow-hidden">
        <img src={product.image} alt="منتج العسل" className="w-full h-[250px] object-cover" />

        <div className="p-4 ">
          <h2 className="text-md font-bold text-black dark:text-white mb-2">{product.title}</h2>

          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm leading-6 line-clamp-3">
            {product.description}
          </p>

          <a
            rel="noopener noreferrer"
            className="bg-yellow-600/90 text-white px-4 py-2 rounded hover:bg-amber-700 transition w-full flex items-center justify-center text-center cursor-pointer"
            onClick={() => {
              addToCart(product);
            }}
          >
            <div className="flex items-center gap-2 text-sm ">
              <span>إضافة إلى السلة</span>
              <span className="text-lg">
                <FaCartShopping />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
