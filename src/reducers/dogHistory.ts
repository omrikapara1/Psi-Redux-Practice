import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface DogHistoryData {
  breedName: string;
  photoLink: string;
  timeStamp: number;
}

const InitialState: { [dogs: string]: DogHistoryData[] } = {
  dogs: []
};

const dogHistory = createSlice({
  name: 'dogHistory',
  initialState: InitialState,
  reducers: {
    addDogToHistory: (state, action: PayloadAction<Omit<DogHistoryData, "timeStamp">>) => {
      state.dogs.push({
        breedName: action.payload.breedName,
        photoLink: action.payload.photoLink,
        timeStamp: Date.now()
      })
    },
    resetHistory: (state) => {
      state.dogs = []
    },
  },
});

export const { addDogToHistory, resetHistory } = dogHistory.actions;

export default dogHistory.reducer;
