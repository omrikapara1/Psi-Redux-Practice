import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IDogState {
    image: string;
    breed: string;
    loading: boolean;
    errorMessage: string;
}

const initialDogState: IDogState = {
    image: '',
    breed: '',
    loading: false,
    errorMessage: '',
};

const currentDog = createSlice({
    name: 'currentDog',
    initialState: initialDogState,
    reducers: {
        currentImage: (
            state,
            action: PayloadAction<Pick<IDogState, 'image'>>
        ) => {
            state.image = action.payload.image;
            state.errorMessage = '';
        },
        currentLoadingState: (
            state,
            action: PayloadAction<Pick<IDogState, 'loading'>>
        ) => {
            state.loading = action.payload.loading;
        },
        currentErrorState: (
            state,
            action: PayloadAction<Pick<IDogState, 'errorMessage'>>
        ) => {
            state.errorMessage = action.payload.errorMessage;
            state.image = '';
        },
        currentBreed: (
            state,
            action: PayloadAction<Pick<IDogState, 'breed'>>
        ) => {
            state.breed = action.payload.breed;
        },
        resetCurrent: () => {
            return { ...initialDogState };
        },
    },
});

export const {
    currentImage,
    currentLoadingState,
    currentErrorState,
    currentBreed,
    resetCurrent,
} = currentDog.actions;

export default currentDog.reducer;
