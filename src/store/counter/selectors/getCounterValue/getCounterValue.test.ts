import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import { StateSchema } from 'providers/store/StateSchema';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
