import { TableCompanies } from 'src/components/table-companies';
import './style/index.scss';
import { AppHeader } from 'src/components/app-header';
import { ModalDelete } from 'src/components/modal-delete';

export const App = () =>  (
  <div className='App'>
    <AppHeader />
    <TableCompanies />
    <ModalDelete />
  </div>
);
