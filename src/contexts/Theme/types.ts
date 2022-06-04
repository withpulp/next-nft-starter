import type { ReactNode } from 'react';

import type { SwitchProps } from '../../components/Switch/types';

export type Theme = 'dark' | 'light';

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (event: MouseEvent | boolean) => void;
}

export interface ThemeSwitchProps extends SwitchProps {}

export interface ThemeProviderProps {
  children?: ReactNode;
}
