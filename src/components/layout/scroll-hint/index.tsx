import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

const ScrollHint: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: 20 }}
      transition={{
        delay: 0.5,
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    >
      <ArrowDown className="text-gray-500 dark:text-gray-400" size={48} />
    </motion.div>
  );
};
export default ScrollHint;
