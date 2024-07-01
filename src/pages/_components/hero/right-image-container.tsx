import { motion } from 'framer-motion';

export default function RightImageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0, 0.55, 0.45, 1] }}
      className="flex flex-col lg:justify-end"
    >
      {children}
    </motion.div>
  );
}
