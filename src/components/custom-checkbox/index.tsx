import { memo } from 'react';
import cls from './index.module.scss';

type TProps = {
    isChecked: boolean;
    disabled?: boolean;
    onChange: () => void;
}

export const CustomCheckbox = memo(({ isChecked, onChange, disabled }: TProps) =>  (
  <label className={cls.CustomCheckbox}>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      disabled={disabled}
    />
    <span></span>
  </label>
));
