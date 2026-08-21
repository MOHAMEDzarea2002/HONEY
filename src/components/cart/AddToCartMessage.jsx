
import { AnimatePresence, motion } from 'motion/react';

export default function AddToCartMessage() {
  return (
    <div className="text-white w-full left-0 top-10 absolute bg-yellow-600/50 p-2 rounded-lg">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -400, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="added-message"
        >
          ✓ تم إضافة المنتج إلى السلة
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

