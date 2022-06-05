import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';

import { Box } from '@/components/Box';

import type { MediaProps } from './types';

export const Media = ({
  alt,
  children,
  className,
  imageProps,
  is = 'image',
  spring,
  src,
  ...rest
}: MediaProps) => {
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
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50%, 0)',
        ...spring,
      })}
      {...rest}
      className={clsx(
        'flex flex-1 flex-col flex-nowrap content-center justify-center',
        className
      )}
    >
      {is === 'image' && src && (
        <Image
          alt={alt}
          src={src}
          layout="responsive"
          width={1200}
          height={800}
          {...imageProps}
        />
      )}
      {children}
    </Box>
  );
};
