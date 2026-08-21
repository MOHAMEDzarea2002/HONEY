
// components
import SectionBanner from '../components/products/SectionBanner';
import PriceSlider from '../components/products/PriceSlider';
import Category from '../components/products/Category';
import Products from '../components/products/ProductsList';
import CommonSectionHeader from '../components/common/CommonSectionHeader';

// redux Thunk
import { fetchProducts } from '../features/products/productThunk';
// redux
import { useDispatch, useSelector } from 'react-redux';
// hooks react
import { useEffect } from 'react';
// router
import { useSearchParams  } from 'react-router';



export default function ProductsPage() {
const dispatch = useDispatch()
//destructure
const [searchParams] = useSearchParams();
// get params Category
const category = searchParams.get('category');

useEffect(() => {
  dispatch(fetchProducts({ limit: 10, category: category }));
}, [dispatch, category]);
const { product } = useSelector((state) => state?.product);
  return (
    <div>
      <SectionBanner />
      {/* container */}
      <div className="container mx-auto">
        {/* Header Secrion */}
        <CommonSectionHeader
          locationPage="المتجر"
          title="تسوق منتجاتنا"
          description="اكتشف مجموعتنا من المنتجات المختارة بعناية، وابحث عن ما يناسبك بسهولة."
          rating={`${product?.length} في الصفحة`}
        />

        {/* filter */}
        <div className="grid md:grid-cols-[300px_minmax(900px,_1fr)]  overflow-hidden ">
          <div>
            <PriceSlider />
            <Category />
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
}
