import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'semantic-ui-css/semantic.min.css';
import DefaultLayout from './Container/DefaultLayout';
import './App.css';

// Imports: Redux Persist Persister
import { store, persistor } from './Helper/Store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DefaultLayout />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;