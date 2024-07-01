import { container, word } from '@/framer/variants';
import { motion } from 'framer-motion';

export default function ParagraphContainer() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="animate"
      className="w-[70%]"
    >
      <p>
        At volutpat diam ut venenatis tellus in metus vulputate. Odio morbi{' '}
        <motion.span variants={word}>quis</motion.span>
        <motion.span variants={word}> commodo </motion.span>
        <motion.span variants={word}> odio </motion.span>
        <motion.span variants={word}> aenean </motion.span> sed adipiscing diam
        donec. Leo vel orci porta non pulvinar neque laoreet.
      </p>
    </motion.div>
  );
}
