
// shadcn ui
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
// Hooks Redux
import { useDispatch, useSelector } from 'react-redux';
// redux action
import { setRangePrice } from '../../features/products/productSlice';
// redux Thunk
import { fetchProducts } from '../../features/products/productThunk';

export default function PriceSlider() {
  const dispatch = useDispatch();
  // extract priceRange and Category filters from Redux state
  const {  Category, min, max } = useSelector((state) => state.product.filters);

// update product state
  const handleFilter = () => {
    dispatch(fetchProducts({ limit: 10, category: Category, minPrice: min, maxPrice: max }));
  };

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3  ">
      <Label htmlFor="" className={'text-lg'}>
        Price Filter
      </Label>
      <Slider
        value={[min, max]}
        onValueChange={(value) =>    dispatch(setRangePrice(value))}
        min={0}
        w
        max={1000}
        step={10}
      />

      {/* Button Filter And Show Range Price */}
      <div className="flex items-center justify-between gap-2 my-2">
        <button
          className="bg-gray-100 px-2  text-lg cursor-pointer hover:text-white hover:bg-black transition-all duration-300 border-2"
          onClick={handleFilter}
        >
          Filter
        </button>
        <span className="text-sm text-muted-foreground"> {`${min}_${max}`}ج </span>
      </div>
    </div>
  );
}
