import type { BrandProps } from '../../containers/Brand/types';
import type { HeaderMenuProps } from '../../containers/Menu/Header/types';
import type { BoxColor } from '../Box/types';
import type { LinkColor } from '../Link/types';
import type { SplitSectionProps } from '../Section/Split/types';

export type HeaderPattern = 'dashboard' | 'default' | 'page';

export interface HeaderProps extends Omit<SplitSectionProps, 'color' | 'is'> {
  brand?: BrandProps;
  color?: BoxColor | LinkColor;
  is?: HeaderPattern;
  isFixed?: boolean;
  menu?: HeaderMenuProps;
  showBrand?: boolean;
  showMenu?: boolean;
}
