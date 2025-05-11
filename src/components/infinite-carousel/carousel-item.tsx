import React, { JSX, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  item: {
    label: string;
    icon: JSX.Element;
    url: string;
  };
}

const CarouselItem: React.FC<CardProps> = ({ item }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize); // Check on resize

    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    }; // Cleanup
  }, []);

  return (
    <motion.div
      className="relative h-20 w-20 md:h-40 md:w-40 shadow-lg dark:shadow-zinc-800 border rounded-xl flex justify-center items-center"
      key={item.label}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      onClick={() => {
        if (isMobile) {
          window.open(item.url, '_blank');
        }
      }}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 right-0 z-10 justify-center items-center p-4 hidden md:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Link href={item.url} target="_blank" className="w-full h-full">
              <motion.h1
                className="bg-foreground text-background font-semibold text-xs z-10 text-center rounded-xl flex items-center justify-center gap-[0.5ch] cursor-pointer w-full h-full px-4"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4" />
              </motion.h1>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      {item.icon}
    </motion.div>
  );
};

export default CarouselItem;
