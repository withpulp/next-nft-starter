import type {
  LinkColor,
  NextLinkProps as LinkProps,
} from '../../../components/Link/types';
import type { NavProps } from '../../../components/Nav/types';
import type { ThemeSwitchProps } from '../../../contexts/Theme/types';

export type HeaderMenuPattern = 'default' | 'mobile';

export interface HeaderMenuProps extends Omit<NavProps, 'color' | 'is'> {
  color?: LinkColor;
  is?: HeaderMenuPattern;
  link?: LinkProps;
  showNavLinks?: boolean;
  showThemeSwitch?: boolean;
  themeSwitch?: ThemeSwitchProps;
}
