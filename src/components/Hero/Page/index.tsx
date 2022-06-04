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
            'mt-4 pt-4',
            'border-t-4 border-solid border-accent',
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
        'min-h-screen-3/4 md:min-h-screen-3/5 xl:min-h-screen-1/2',
        className
      )}
    >
      {cta && <CTACard {...cta} />}
      {children}
    </Hero>
  );
};
