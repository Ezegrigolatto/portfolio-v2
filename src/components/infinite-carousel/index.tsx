import { JSX } from 'react';
import { cn } from '@/utils/twMerge';

interface InfiniteCarouselProps {
  elements: JSX.Element[];
  gap?: string;
  direction?: 'left' | 'up';
  reverse?: boolean;
  className?: string;
}
const range = (length: number): number[] => Array.from({ length }, (_, i) => i);
const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  elements,
  gap = '4px',
  reverse = false,
  className,
}) => {
  return (
    <div
      className={cn('group flex overflow-hidden h-full', className)}
      style={{
        gap,
      }}
    >
      {range(2).map((n) => (
        <div
          key={n}
          style={
            {
              '--gap': gap,
            } as React.CSSProperties
          }
          className={cn(
            'flex shrink-0 justify-around gap-[var(--gap)]',
            'animate-marquee-left flex-row py-4',
            'group-hover:[animation-play-state:running]',
            reverse && 'direction-reverse'
          )}
        >
          {elements}
        </div>
      ))}
    </div>
  );
};

export default InfiniteCarousel;
