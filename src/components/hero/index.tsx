import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const t = useTranslations();

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const backgroundZ = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <motion.div
      layout
      ref={ref}
      className={`w-full h-[70vh] flex items-end justify-center overflow-hidden relative ${className}`}
    >
      <motion.div
        className="w-full h-full absolute top-0 left-0"
        style={{ y: backgroundY, scale: backgroundZ }}
      >
        <motion.img
          src="/images/hero/hero-banner.jpg"
          alt="hero"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <motion.div
        className="flex flex-col items-center z-10 mb-16"
        style={{ y: textY, opacity }}
      >
        <motion.h1
          className="text-5xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-white">
            <motion.p animate={{ scale: [0.8, 1, 0.8] }} transition={{ duration: 1 }}>
              {t('HomePage.hero.title')}
            </motion.p>
          </span>
        </motion.h1>
        <motion.h3
          className="text-2xl font-bold text-center text-white mt-4 w-2/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-white">
            {t('HomePage.hero.content-p1')}{' '}
            <b className="text-yellow-300 capitalize">{t('HomePage.hero.content-p2')} </b>
            {t('HomePage.hero.content-p3')}{' '}
            <b className="text-yellow-300 capitalize">{t('HomePage.hero.content-p4')} </b>
            {t('HomePage.hero.content-p5')}{' '}
            <b className="text-yellow-300 capitalize">{t('HomePage.hero.content-p6')} </b>
            {t('HomePage.hero.content-p7')}
          </span>
        </motion.h3>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            className="z-10 text-white font-bold cursor-pointer mt-4 bg-black/30 hover:bg-black/40"
            size="lg"
          >
            <Link href="/about-me">{t('HomePage.hero.cta-button')}</Link>
            <motion.div
              className="flex items-center justify-center"
              initial={{ x: 10 }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            >
              <ArrowRight className="ml-1" size={16} />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
