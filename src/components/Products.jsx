// useHooks
import { getProducts } from '../services/Product.Service';
import { useFetch } from '../Hooks/useFetch';
// component
import CardProduct from './CardProduct';
export default function Products() {
  const { data: product } = useFetch(getProducts);

  return (
    <section
      id="منتجاتنا"
      className="dark:bg-amber-950/15 py-10 dark:text-black bg-black text-white"
    >
      <h1 className="text-2xl text-center  dark:text-white">منتجاتنا</h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
        اكتشف تشكيلتنا المتنوعة من منتجات العسل الطبيعية والصحية
      </p>
      {/*  */}
      <div className="products container mx-auto mt-6 flex flex-wrap justify-center gap-6">
        {product?.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
