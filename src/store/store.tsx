import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import currentDog from './slices/currentDog';
import dogHistory from './slices/dogHistory';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  currentDog: currentDog,
  dogHistory: dogHistory,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],

})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
