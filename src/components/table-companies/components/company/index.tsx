import { CustomCheckbox } from 'src/components/custom-checkbox';
import cls from './index.module.scss';
import { memo } from 'react';
import { useAppDispatch } from 'src/_utils/hooks/redux';
import { toggleSelectCompany } from 'src/_redux/companies';
import { addDeleteIds } from 'src/_redux/modal-delete';

type TProps = {
  id: number;
  isSelected: boolean;
  isDisabled: boolean;
  name: string;
  address: string;
}

export const Company = memo(({
  id,
  isSelected,
  name,
  address,
  isDisabled
}: TProps) => {
  const dispatch = useAppDispatch();

  const handleChangeSelect = () => {
    dispatch(toggleSelectCompany(id));
  };

  const handleDelete = () => {
    dispatch(addDeleteIds([id]));
  };

  return (
    <tr className={cls.Company}>
      <td>
        <CustomCheckbox
          isChecked={isSelected}
          onChange={handleChangeSelect}
          disabled={isDisabled}
        />
      </td>
      <td title={name}>
        {name}
      </td>
      <td title={address}>
        {address}
      </td>
      <td title={address}>
        <button disabled={isDisabled} onClick={handleDelete}>Удалить</button>
        <button className={cls.Edit}>Редактировать</button>
      </td>
    </tr>
  );
});
