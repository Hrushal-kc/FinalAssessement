import {combineReducers, configureStore} from '@reduxjs/toolkit';
import itemListReducer from './slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducers = combineReducers({
  slice: itemListReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
