import { Link } from 'react-router';

export default function CommonSectionHeader({  description, title, rating, locationPage }) {
  return (
    <div className="py-8 px-4  rounded-lg my-6">
      <nav className="text-xs text-gray-500 mb-2 flex items-center gap-1">
        <Link to="/" className="hover:text-black transition">
          الرئيسية
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-800">{locationPage}</span>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">إجمالي {locationPage}:
            
          </span>
          <span className="text-xs font-bold bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full">
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}
