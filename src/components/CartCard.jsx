
import { MdDelete } from 'react-icons/md';

const CartCard = ({ product, onRemove, onIncrement, onDecrement, isRemoving }) => {
  const handleRemove = () => {
    onRemove(product);
  };

  const subtotalSingleProduct = (
    product.discounts
      ? product.price * product.quantity - product.discounts * product.quantity
      : product.price * product.quantity
  ).toLocaleString('ar-EG');

  return (
    <div className={`transition-opacity duration-200 ${isRemoving ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex items-center justify-between bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors p-3 gap-3">
        {/* image product */}
        <img
          src={product.image}
          alt={product.title}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />

        {/* information Product*/}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
          <div className="flex items-center gap-2 mt-1">
            {product.discounts && (
              <>
                <p className="text-xs text-gray-400 line-through">
                  {product.price.toLocaleString('ar-EG')} ج
                </p>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-green-50 text-green-700">
                  {Math.round(product.price - product.discounts)}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          {/* Delete*/}
          <button
            onClick={handleRemove}
            className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md p-1 transition-colors cursor-pointer"
            aria-label="حذف المنتج"
          >
            <MdDelete className="text-lg" />
          </button>

          {/*  CNumber control */}
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-gray-50">
            <button
              className="w-7 h-7 flex items-center justify-center text-gray-700 hover:bg-white transition-colors text-base cursor-pointer"
              onClick={() => (product.quantity <= 1 ? onRemove(product) : onDecrement(product))}
            >
              −
            </button>
            <span className="text-sm font-medium w-6 text-center text-gray-900">
              {product.quantity}
            </span>
            <button
              className="w-7 h-7 flex items-center justify-center text-gray-700 hover:bg-white transition-colors text-base cursor-pointer"
              onClick={() => onIncrement(product)}
            >
              +
            </button>
          </div>

          <p className="text-xs text-gray-400">
            المجموع: <span className="font-medium text-gray-700">{subtotalSingleProduct} ج</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
