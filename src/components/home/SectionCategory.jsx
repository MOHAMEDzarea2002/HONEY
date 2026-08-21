
// component
import CategoryCard from '../category/CategoryCard';
import { useSelector } from 'react-redux';
// ui component
import LinkButton from '../ui/linkButton';

export default function SectionCategory() {
  // Get category from Redux store
  const { category } = useSelector((state) => state.category);

  return (
    <div className="py-10 bg-black text-white" id="category">
      {/* Header */}
      <div className="text-center relative">
        <h3 className="text-3xl">تسوق حسب الفئة</h3>
        <p className="relative w-full after:absolute after:content-[''] after:h-2 after:rounded-2xl after:w-20 after:bg-yellow-600 after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
          استكشف مجموعتنا من أجود أنواع العسل والمنتجات الطبيعية
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 flex-wrap gap-3  container py-10">
        {category.map((item) => <CategoryCard Category={item} />).slice(0, 3)}
      </div>

      <LinkButton to={'category'} children={'اكتشف المنتجات'} />
    </div>
  );
}
