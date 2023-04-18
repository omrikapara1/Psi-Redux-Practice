import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DogData } from 'models/interfaces/DogData';

export interface historyDogData extends DogData {
    timestamp: number;
}

export interface DogHistoryState {
    dogs: historyDogData[];
}

const initialState: DogHistoryState = {
    dogs: [],
};

const dogHistory = createSlice({
    name: 'dogHistory',
    initialState,
    reducers: {
        addDogToHistory: (
            state,
            action: PayloadAction<Omit<DogData, 'timeStamp'>>
        ) => {
            state.dogs.push({
                ...action.payload,
                timestamp: Date.now(),
            });
        },
        resetHistory: (state) => {
            state.dogs = [];
        },
    },
});

export const { addDogToHistory, resetHistory } = dogHistory.actions;

export default dogHistory.reducer;
