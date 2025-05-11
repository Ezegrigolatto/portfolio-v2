'use client';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutMePageComponent = () => {
  const sectionOneRef = useRef<HTMLDivElement>(null);
  const isSectionOneInView = useInView(sectionOneRef, { once: true, margin: '-100px' });
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const isSectionTwoInView = useInView(sectionTwoRef, { once: true, margin: '-100px' });
  const t = useTranslations();

  const variants = {
    initial: {
      y: 80,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.section
        className="flex flex-col items-start justify-center h-full mb-20"
        ref={sectionOneRef}
        initial="initial"
        animate={isSectionOneInView ? 'animate' : 'initial'}
        variants={variants}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="text-4xl font-bold"> {t('AboutMePage.title1')}</h1>
        <p className="mt-4 text-lg">{t('AboutMePage.paragraph1')}</p>
        <motion.div className="flex items-center justify-between w-full my-4">
          <div className="flex flex-col items-start justify-center">
            <p className="mt-4 text-lg">{t('AboutMePage.paragraph2')}</p>
            <p className="mt-4 text-lg">{t('AboutMePage.paragraph3')}</p>
          </div>
          <DotLottieReact
            loop
            className="w-[100%] hidden md:flex"
            src="https://lottie.host/1f2105c6-b40c-4683-93c9-3c202eab85b6/PDRuQKotUD.lottie"
            autoplay
            speed={1.1}
          />
        </motion.div>
        <motion.div className="flex items-center justify-between w-full my-4">
          <DotLottieReact
            loop
            className="w-[100%] hidden md:flex"
            src="https://lottie.host/d684f94e-67e5-45c6-913f-48a702d10e09/uBRti8hQW4.lottie"
            autoplay
            speed={1.1}
          />
          <p className="mt-4 text-lg">{t('AboutMePage.paragraph4')}</p>
        </motion.div>
      </motion.section>
      <motion.section
        className="flex flex-col items-start justify-center h-full mt-10"
        ref={sectionTwoRef}
        initial="initial"
        animate={isSectionTwoInView ? 'animate' : 'initial'}
        variants={variants}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="text-4xl font-bold">{
          t('AboutMePage.title2')
          }</h1>
        <motion.div className="flex items-center justify-between w-full my-4">
          <div className="flex flex-col items-start justify-center">
            <p className="mt-4 text-lg ">
              {t('AboutMePage.paragraph5')}
            </p>
            <p className="mt-4 text-lg">
              {t('AboutMePage.paragraph6')}
            </p>
          </div>
          <DotLottieReact
            loop
            className="w-[100%] hidden md:flex"
            src="https://lottie.host/10917ac1-5c55-4ab2-828b-6111a171895b/JliqNWfVLK.lottie"
            autoplay
            speed={1.1}
          />
        </motion.div>
        <motion.div className="flex items-center justify-between w-full my-4">
          <DotLottieReact
            loop
            className="w-[100%] hidden md:flex"
            src="https://lottie.host/dc151fc7-0501-455f-b308-a637a37d6fa6/lzSOJKcnWg.lottie"
            autoplay
            segment={[0, 200]}
            speed={1.1}
          />
          <p className="mt-4 text-lg">
            {t('AboutMePage.paragraph7')}
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};
export default AboutMePageComponent;
