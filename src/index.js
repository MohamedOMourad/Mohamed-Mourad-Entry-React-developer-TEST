//React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//CSS
import './index.css';

//Apollo
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

//React-redux
import { store } from './redux/app/store'
import { Provider } from 'react-redux'

//React-router
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
