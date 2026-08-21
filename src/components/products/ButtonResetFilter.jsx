import { fetchProducts } from '../../features/products/productThunk';
import { setCategory, setRangePrice } from '../../features/products/productSlice';
import { useDispatch } from 'react-redux';

export default function ButtonResetFilter() {
  const dispatch = useDispatch();

    const handleReset = () => {
      dispatch(setRangePrice([0, 1000]));
      dispatch(setCategory(''));

      dispatch(
        fetchProducts({
          limit: 10,
        })
      );
    };
  return (
    <div>
      <button className="border-2 px-2 cursor-pointer mt-3" onClick={handleReset}>Reset Filter </button>
    </div>
  );
}
