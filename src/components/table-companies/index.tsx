import { getCompaniesLastCursorSelector, getCompaniesSelector, getIsLoadingManyDeletesSelector, getIsSelectedAllCompaniesSelector } from 'src/_redux/companies/selectors';
import { useAppDispatch, useAppSelector } from 'src/_utils/hooks/redux';
import { Company } from './components/company';
import { companiesApi } from 'src/api/requests/companies/api';
import { useEffect, useRef } from 'react';
import { DEFAULT_COMPANIES_LIMIT } from './constants/companies';
import cls from './index.module.scss';
import { CustomCheckbox } from '../custom-checkbox';
import { toggleSelectAllCompanies } from 'src/_redux/companies';
import { Actions } from './components/actions';

export const TableCompanies = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(getCompaniesSelector);
  const lastCursorCompanies = useAppSelector(getCompaniesLastCursorSelector);
  const isSelectedAllCompanies = useAppSelector(getIsSelectedAllCompaniesSelector);
  const isLoadingManyDeletes = useAppSelector(getIsLoadingManyDeletesSelector);
  const [fetchCompanies, { isLoading }] = companiesApi.useLazyGetCompaniesQuery();
  const containerRef = useRef<HTMLDivElement>(null);

  const onScrollContainer = () => {
    const container = containerRef?.current;

    if (!container || isLoading || lastCursorCompanies === -1) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = container;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      fetchCompanies({
        limit: DEFAULT_COMPANIES_LIMIT,
        lastCursor: lastCursorCompanies
      });
    }
  };

  const toggleSelectedAllCompanies = () => {
    dispatch(toggleSelectAllCompanies());
  };

  useEffect(() => {
    fetchCompanies({
      limit: DEFAULT_COMPANIES_LIMIT,
      lastCursor: lastCursorCompanies
    });
  }, []);

  if(isLoading) {
    return <div className={cls.Loader}>Загрузка...</div>;
  }

  return (
    <div className={cls.TableCompaniesContainer} onScroll={onScrollContainer} ref={containerRef}>
      <Actions />
      <table className={cls.TableCompanies}>
        <thead>
          <tr>
            <th>
              <CustomCheckbox isChecked={isSelectedAllCompanies} onChange={toggleSelectedAllCompanies} />
            </th>
            <th>Название компании</th>
            <th>Адрес компании</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(({ id, name, address, isSelected }) => (
            <Company
              key={id}
              name={name}
              address={address}
              isSelected={isSelected}
              isDisabled={isLoadingManyDeletes}
              id={id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
