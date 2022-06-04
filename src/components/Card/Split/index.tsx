import clsx from 'clsx';

import { FlexBox } from '@/components/Box/Flex';

import { Card } from '..';
import styles from './SplitCard.module.scss';
import type { SplitCardProps } from './types';

export const SplitCard = ({
  children,
  className,
  is = 'responsive',
  isReversed,
  left,
  leftProps,
  right,
  rightProps,
  split,
  ...rest
}: SplitCardProps) => (
  <Card
    className={clsx(
      'flex gap-4 md:gap-6 xl:gap-8',
      is === 'responsive' &&
        'flex-col flex-nowrap items-start md:flex-row md:flex-wrap md:items-center',
      is === 'static' && 'flex-row flex-wrap items-center',
      className
    )}
    {...rest}
  >
    {isReversed
      ? right && (
          <FlexBox
            {...split}
            {...rightProps}
            className={clsx(
              styles.cardBox,
              split?.className,
              rightProps?.className
            )}
          >
            {right}
          </FlexBox>
        )
      : left && (
          <FlexBox
            {...split}
            {...leftProps}
            className={clsx(
              styles.cardBox,
              split?.className,
              leftProps?.className
            )}
          >
            {left}
          </FlexBox>
        )}
    {children}
    {isReversed
      ? left && (
          <FlexBox
            {...split}
            {...leftProps}
            className={clsx(
              styles.cardBox,
              split?.className,
              leftProps?.className
            )}
          >
            {left}
          </FlexBox>
        )
      : right && (
          <FlexBox
            {...split}
            {...rightProps}
            className={clsx(
              styles.cardBox,
              split?.className,
              rightProps?.className
            )}
          >
            {right}
          </FlexBox>
        )}
  </Card>
);
