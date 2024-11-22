import { getCompaniesSelector } from 'src/_redux/companies/selectors';
import { useAppSelector } from 'src/_utils/hooks/redux';
import { companiesApi } from 'src/api/requests/companies/api';
import cls from './index.module.scss';

export const Actions = () => {
  const selectedCompanies = useAppSelector(getCompaniesSelector).filter(({ isSelected }) => isSelected);
  const [fetchDelete, { isLoading }] = companiesApi.useDeleteCompaniesMutation();

  const onDeleteCompanies = () => {
    fetchDelete({
      ids: selectedCompanies.map(({ id }) => id)
    });
  };

  const isHasSelectedCompanies = selectedCompanies.length > 0;

  return (
    <div className={cls.Actions}>
      <button
        disabled={!isHasSelectedCompanies || isLoading}
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
