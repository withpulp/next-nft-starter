import type { ImageProps } from 'next/image';

import type { BoxProps } from '@/components/Box/types';

export type MediaPattern = 'audio' | 'image' | 'video';

export interface MediaProps extends BoxProps {
  alt?: string;
  imageProps?: Omit<ImageProps, 'src'>;
  is?: MediaPattern;
  spring?: any;
  src?: string;
}
