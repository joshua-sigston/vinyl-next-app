import { motion } from 'framer-motion';

export default function LeftImageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="overflow-hidden flex flex-col lg:justify-center"
    >
      {children}
    </motion.div>
  );
}
