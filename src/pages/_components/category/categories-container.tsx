import { useInView, motion, easeIn } from 'framer-motion';
import React, { useRef } from 'react';

export default function CategoriesContainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all' });
  return (
    <div ref={ref} className="flex gap-x-5 relative">
      <motion.div
        className="h-[300px] w-[200px] bg-rose-400"
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s ease',
        }}
      ></motion.div>
      <motion.div
        className="h-[300px] w-[200px] bg-sky-400 absolute -z-10 ml-5"
        style={{
          x: isInView ? '100%' : '0%',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
        }}
      ></motion.div>
      <motion.div
        className="h-[300px] w-[200px] bg-slate-400 absolute -z-10 mr-5"
        style={{
          x: isInView ? '-110%' : '0%',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
        }}
      ></motion.div>
    </div>
  );
}
