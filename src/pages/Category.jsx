// component
import CategoryCard from '../components/category/CategoryCard';
// redux hooks
import { useSelector } from 'react-redux';

import CommonSectionHeader from '../components/common/CommonSectionHeader';
export default function Category() {
  // Get category from Redux store
  const { category } = useSelector((state) => state.category);

  return (
    <div className="min-h-screen container">
      {/* Header section */}
      <CommonSectionHeader
        description="استكشف المجموعات المختارة بعناية لتناسب احتياجاتك"
        title="جميع التصنيفات"
        rating={category.length}
        locationPage="التصنيفات"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 flex-wrap gap-3  container py-10">
        {category.map((item) => (
          <CategoryCard Category={item} />
        ))}
      </div>
    </div>
  );
}
