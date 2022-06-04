import clsx from 'clsx';
import React from 'react';

import { CTACard } from '../../Card/CTA';
import { Hero } from '..';
import type { PageHeroProps } from './types';

export const PageHero = ({
  caption,
  children,
  className,
  container,
  cta,
  hero = 'page',
  is,
  ...rest
}: PageHeroProps) => {
  return (
    <Hero
      is={hero}
      {...rest}
      caption={{
        ...caption,
        className: clsx('order-1 my-4 md:my-8 xl:my-12', caption?.className),
        headingProps: {
          as: 'h1',
          is: 'heading',
          ...caption?.headingProps,
        },
        subheadingProps: {
          as: 'h2',
          is: 'subheading',
          ...caption?.subheadingProps,
          className: clsx(
            'mt-4 md:mt-5 xl:mt-6',
            'font-thin',
            caption?.subheadingProps?.className
          ),
        },
      }}
      container={{
        ...container,
        is: is === 'content' ? 'content' : 'default',
      }}
      className={clsx(
        'min-h-screen-3/4 md:min-h-screen-2/3 xl:min-h-screen-3/5',
        className
      )}
    >
      {cta && <CTACard {...cta} />}
      {children}
    </Hero>
  );
};
