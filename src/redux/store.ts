import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from './features/counter'
import walletReducer from './features/wallet.slice'

export const parentReducer = combineReducers({
    counter: counterReducer,
    wallet: walletReducer,

})

const store = configureStore({
    reducer: parentReducer,
    middleware: getDefaultMiddleware({ serializableCheck: false }),
})

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof parentReducer>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

