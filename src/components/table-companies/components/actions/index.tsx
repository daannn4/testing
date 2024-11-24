import { getCompaniesSelector } from 'src/_redux/companies/selectors';
import { useAppDispatch, useAppSelector } from 'src/_utils/hooks/redux';
import cls from './index.module.scss';
import { addDeleteIds } from 'src/_redux/modal-delete';

export const Actions = () => {
  const selectedCompanies = useAppSelector(getCompaniesSelector).filter(({ isSelected }) => isSelected);
  const dispatch = useAppDispatch();

  const onDeleteCompanies = () => {
    dispatch(addDeleteIds(selectedCompanies.map(({ id }) => id)));
  };

  const isHasSelectedCompanies = selectedCompanies.length > 0;

  return (
    <div className={cls.Actions}>
      <button
        disabled={!isHasSelectedCompanies}
        onClick={onDeleteCompanies}
      >
        Удалить ({selectedCompanies.length})
      </button>
      <button>
        Создать
      </button>
    </div>
  );
};
