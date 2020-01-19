import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';

import accountReducer from './reducers/accountReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const reducers = persistReducer(persistConfig, accountReducer);

const store = createStore(reducers);

const persistor = persistStore(store);

export { store, persistor };