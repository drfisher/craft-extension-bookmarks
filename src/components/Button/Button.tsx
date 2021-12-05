import * as React from 'react';
import * as T from './Button.types';
import { StringsDict } from 'src/types';
import classnames from 'classnames';

const css: StringsDict = {
  button: 'button-component',
  darkMode: 'button-component-dark',
  disabled: 'button-component-disabled',
  main: 'button-component-main',
};

const Button: React.FC<T.ButtonProps> = ({
  isDarkMode,
  isDisabled,
  isMain,
  label,
  onClick,
}) => {
  const className = classnames(css.button, {
    [css.darkMode]: isDarkMode,
    [css.disabled]: isDisabled,
    [css.main]: isMain,
  });
  return (
    <div className={className} onClick={isDisabled ? undefined : onClick}>
      {label}
    </div>
  );
};

export default Button;
