import * as React from 'react';
import * as T from './Button.types';
import { StringsDict } from 'src/types';

const classNames: StringsDict = {
  darkMode: 'button-dark',
};

const Button: React.FC<T.ButtonProps> = ({ isDarkMode }) => {
  return <div className={isDarkMode ? classNames.darkMode : ''}>My button</div>;
};

export default Button;
