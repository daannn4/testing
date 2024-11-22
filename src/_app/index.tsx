import { TableCompanies } from 'src/components/table-companies';
import './style/index.scss';
import { AppHeader } from 'src/components/app-header';

export const App = () =>  (
  <div className='App'>
    <AppHeader />
    <TableCompanies />
  </div>
);
