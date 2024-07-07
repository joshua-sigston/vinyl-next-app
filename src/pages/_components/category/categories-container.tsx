import { useInView, motion, easeIn } from 'framer-motion';
import React, { useRef } from 'react';

export default function CategoriesContainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all' });
  return (
    <div ref={ref} className="flex gap-x-5">
      <div className="relative">
        <motion.div
          className="h-[300px] w-[200px] bg-rose-400"
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'all 0.3s ease',
          }}
        >
          Records
        </motion.div>
        <motion.div
          className="h-[300px] w-[200px] bg-white absolute top-0 left-0"
          style={{
            scaleY: isInView ? 0 : 1,
            transformOrigin: 'top',
            transition: 'all 0.8s ease',
          }}
        ></motion.div>
      </div>
    </div>
  );
}
