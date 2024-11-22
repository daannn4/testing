import ReactDOM from 'react-dom/client';
import { App } from './_app';
import { Provider } from 'react-redux';
import { store } from './_redux';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
