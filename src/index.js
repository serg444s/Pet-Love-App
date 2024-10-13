import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/camper/store';
import App from 'components/App/App';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
</style>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Pet-Love-App">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
