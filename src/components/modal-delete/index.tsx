import { useAppDispatch, useAppSelector } from 'src/_utils/hooks/redux';
import { Modal } from '../modal';
import { getDeleteIdsSelector } from 'src/_redux/modal-delete/selectors';
import { clearDeleteIds } from 'src/_redux/modal-delete';
import cls from './index.module.scss';
import { companiesApi } from 'src/api/requests/companies/api';

export const ModalDelete = () => {
  const deleteIds = useAppSelector(getDeleteIdsSelector);
  const dispatch = useAppDispatch();
  const [fetchDelete, { isLoading }] = companiesApi.useDeleteCompaniesMutation();

  const onCloseModal = () => {
    dispatch(clearDeleteIds());
  };

  const onDeleteCompanies = async () => {
    fetchDelete({
      ids: deleteIds
    }).then(() => {
      onCloseModal();
    });
  };

  const isOpened = deleteIds.length > 0;

  return (
    <Modal onClose={onCloseModal} isOpened={isOpened}>
      <div className={cls.ModalDelete}>
        <span className={cls.Title}>Вы уверены что хотите удалить компании?</span>
        <div className={cls.Actions}>
          <button disabled={isLoading} className={cls.Delete} onClick={onDeleteCompanies}>Удалить</button>
          <button onClick={onCloseModal}>Отмена</button>
        </div>
      </div>
    </Modal>
  );
};
