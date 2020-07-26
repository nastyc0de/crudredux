import React from 'react';
// redux
import {Provider} from 'react-redux';
import { store } from './store.jsx';
import { AppRouter } from './routes/AppRouter.jsx';

function App() {
  return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
  );
}

export default App;
