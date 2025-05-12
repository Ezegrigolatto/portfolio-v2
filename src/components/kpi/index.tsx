import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import React, { JSX } from 'react';
interface KpiProps {
  data: {
    label: string;
    value: string;
    icon: JSX.Element;
    animation: JSX.Element;
  };
}

const Kpi: React.FC<KpiProps> = ({ data }) => {
  const t = useTranslations();
  return (
    <motion.div
      className="rounded-xl p-6 border shadow-lg dark:shadow-zinc-800/50 cursor-pointer w-full md:w-84 h-48 relative"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex gap-4 items-center overflow-hidden h-auto w-full">
        {data.icon}
        <h6 className="text-typography font-semibold text-2xl text-zinc-600 text-ellipsis">
          {t(data.label)}
        </h6>
      </div>
      <div className="pt-8">
        <h4 className="font-bold text-4xl">{data.value}</h4>
        {data.animation}
      </div>
    </motion.div>
  );
};
export default Kpi;
