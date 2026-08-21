import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../features/products/productThunk';
import { setCategory } from '../../features/products/productSlice';
import ButtonResetFilter from './ButtonResetFilter'
export default function Category() {
  const dispatch = useDispatch();
  // Get category from Redux store
  const { category } = useSelector((state) => state.category);

  const handelCategory = (slug)=>{
        dispatch(fetchProducts({ limit: 10, category: slug}));
  }

  return (
    <RadioGroup
      aria-label="Density"
      // defaultValue=""
      className="w-fit my-4"
      onValueChange={(value) => dispatch(setCategory(value))}
    >
      {category?.map((prod, index) => (
        <div
          key={index}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handelCategory(prod.slug)}
        >
          <RadioGroupItem className={' border-amber-950'} value={prod.slug} id={prod.slug} />
          <Label htmlFor={prod.slug} className={'cursor-pointer'}>
            {prod.name}
          </Label>
        </div>
      ))}
<ButtonResetFilter/>
    </RadioGroup>
  );
}
