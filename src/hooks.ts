import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


//useSelector reads a value from the store state and subscribes to updates,
// while useDispatch returns the store's dispatch method to let you dispatch actions.
