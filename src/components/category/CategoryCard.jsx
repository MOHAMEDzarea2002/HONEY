import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router';

export default function CategoryCard({ Category }) {
  return (
    <Link to={`/products?category=${Category.slug}`}>
      <div className="bg-white text-black p-2 rounded-sm">
        <img
          src={Category.image}
          className="md:max-h-[250px] md:w-[300px] w-[300px] h-[250px] object-cover"
        />
        <div className="mt-4 flex items-center gap-2.5">
          <span>{Category.name}</span>
          <span className=" animate-pulse ">
            <FaLongArrowAltLeft />
          </span>
        </div>
      </div>
    </Link>
  );
}
