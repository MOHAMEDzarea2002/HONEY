// redux thunk
import { fetchProducts } from '../../features/products/productThunk';
// redux actions
import { setHistoryCursor } from '../../features/products/productSlice.js';
// react redux
import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/button';

export default function CursorProducts() {
  const dispatch = useDispatch();
  // data from Slice
  const { nextCursor, historyCursor, hasMore } = useSelector((state) => state.product);
  // next Cursor
  const handleNextPage = () => {
    dispatch(fetchProducts({ limit: 10, cursor: nextCursor }));
    dispatch(setHistoryCursor(nextCursor));
  };
  // Previous Cursor
  const handlePreviousPage = () => {
    dispatch(fetchProducts({ limit: 10, cursor: new Set(historyCursor) }));
  };

  return (
    <div className="flex justify-center gap-3 py-2 text-lg text-white">
      <Button

        disabled={!hasMore}
        children={'Next'}
        onClick={handleNextPage}
      />
      <Button disabled={hasMore} children={'prev'} onClick={handlePreviousPage} />
    </div>
  );
}
