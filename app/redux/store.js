import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';

import { accountReducer, experienceReducer } from './reducers';

const accountPersistConfig = {
    key: 'account',
    storage: AsyncStorage
}

const experiencePersistConfig = {
    key: 'experience',
    storage: AsyncStorage
}

const reducers = combineReducers({
    account: persistReducer(accountPersistConfig, accountReducer),
    experience: persistReducer(experiencePersistConfig, experienceReducer)
});

const store = createStore(reducers);

const persistor = persistStore(store);

export { store, persistor };