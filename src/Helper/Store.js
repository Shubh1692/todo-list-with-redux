import { createStore,compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import {todoReducer} from '../Reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// use this for logs only for development purpose
const loggerMiddleware = createLogger();
const persistConfig = {
    key: 'list',
    storage: storage
  };

const pReducer = persistReducer(persistConfig, todoReducer);
const middlewares = [];
middlewares.push(loggerMiddleware);

const store = createStore(
    pReducer,
    compose(
        applyMiddleware(...middlewares)
    ),
);

const persistor = persistStore(store);
export { persistor, store };