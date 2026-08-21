// Card Product
import CardProduct from './CardProduct';
import CursorProducts from './CursorProducts';
// Hooks
import { useSelector } from 'react-redux';
// motion
import {  motion } from 'motion/react';
// redux thunk

export default function Products() {
  // get data from Slice
  const { product } = useSelector((state) => state.product);


  return (
    <div>
      <div className="products  flex flex-wrap justify-center gap-6 overflow-hidden ">
        {product?.map((product, index) => {
          const isEven = index % 2 === 0;
          const initialX = isEven ? 100 : -100;
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: initialX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="py-2"
            >
              <CardProduct key={index} product={product} />
            </motion.div>
          );
        })}
      </div>
<CursorProducts/>
    </div>
  );
}
