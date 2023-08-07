import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '../providers/store/StateSchema';
import { counterReducer } from './counter/slice/counterSlice';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
