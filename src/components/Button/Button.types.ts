import { VoidFunction } from '@src/types';

export interface ButtonProps {
  isDarkMode: boolean;
  isDisabled?: boolean;
  isMain?: boolean;
  label: string;
  onClick?: VoidFunction;
}
