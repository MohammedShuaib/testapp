import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';

import { accountReducer, experienceReducer } from './reducers';

// const client = axios.create({ //all axios can be used, shown in axios documentation
//     baseURL: 'http://34.70.55.152/api/v1/',
//     responseType: 'json'
// });

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

const store = createStore(reducers, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };