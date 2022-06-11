import clsx from 'clsx';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';

import { Box } from '@/components/Box';
import { Text } from '@/components/Text';

import type { CardProps } from './types';

export const Card = ({
  children,
  className,
  header,
  is = 'default',
  spring,
  subtitle,
  subtitleProps,
  title,
  titleProps,
  ...rest
}: CardProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Box
      as={animated.div}
      innerRef={ref}
      style={useSpring({
        from: { opacity: 0 },
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
        ...spring,
      })}
      {...rest}
      className={clsx(
        is === 'default' && 'inline-flex flex-col flex-nowrap',
        className
      )}
    >
      {header}
      {title && (
        <Text
          as="h4"
          is="title"
          {...titleProps}
          className={clsx('my-2 md:my-3 xl:my-4', titleProps?.className)}
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text
          as="h5"
          is="subtitle"
          {...subtitleProps}
          className={clsx('my-2 md:my-3 xl:my-4', subtitleProps?.className)}
        >
          {subtitle}
        </Text>
      )}
      {children}
    </Box>
  );
};
