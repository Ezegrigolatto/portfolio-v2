'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { useParams } from 'next/navigation';
import { cn } from '@/utils/twMerge';
import { buttonVariants } from '@/components/ui/button';

const LOCAL_DICTIONARY: Record<
  'en' | 'es',
  Record<'not-found', Record<string, string>>
> = {
  en: {
    'not-found': {
      title: 'Oops!',
      description: 'It seems that our cat hid the page you are looking for.',
      button: 'Go back to home',
    },
  },
  es: {
    'not-found': {
      title: '¡Oops!',
      description: 'Parece que nuestro gato escondió la pagina que buscas.',
      button: 'Volver al inicio',
    },
  },
};

export default function NotFound() {
  const params = useParams();
  const { locale } = params as { locale: 'en' | 'es' };
  const t = LOCAL_DICTIONARY[locale || 'en']['not-found'];

  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen w-screen bg-background text-foreground flex flex-col items-center justify-center relative">
            <div className="flex flex-col items-center justify-center mt-20 px-4 text-center">
              <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
              <p className="text-gray-400 mb-6">{t.description}</p>

              <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: 'outline',
                    }),
                    'rounded-xl'
                  )}
                >
                  {t.button}
                </Link>
              </div>
            </div>
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mt-20 w-[70%] z-0"
            >
              <DotLottieReact
                src="https://lottie.host/adcc2a7b-0f8c-4b27-9cdd-1669f0dd9107/0jiHv3wIHO.lottie"
                loop
                autoplay
                segment={[30, 300]}
                speed={1.1}
              />
            </motion.div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
