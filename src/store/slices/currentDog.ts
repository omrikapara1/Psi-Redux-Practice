import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface DogData {
    id: string;
    image: string;
    breed: string;
}

export interface CurrentDogState {
    data?: DogData;
    loading: boolean;
    errorMessage: string;
}

const initialDogState: CurrentDogState = {
    data: undefined,
    loading: false,
    errorMessage: '',
};

// const getDogId = (dog:CurrentDogState):string=> (dog.)

const currentDog = createSlice({
    name: 'currentDog',
    initialState: initialDogState,
    reducers: {
        setCurrentData: (state, action: PayloadAction<DogData>) => {
            state.data = { ...action.payload };
            state.errorMessage = '';
        },
        currentLoadingState: (
            state,
            action: PayloadAction<Pick<CurrentDogState, 'loading'>>
        ) => {
            state.loading = action.payload.loading;
        },
        currentErrorState: (
            state,
            action: PayloadAction<Pick<CurrentDogState, 'errorMessage'>>
        ) => {
            state.errorMessage = action.payload.errorMessage;
            state.data = undefined;
        },
        resetCurrent: () => {
            return { ...initialDogState };
        },
    },
});

export const {
    setCurrentData,
    currentLoadingState,
    currentErrorState,
    resetCurrent,
} = currentDog.actions;

export default currentDog.reducer;
