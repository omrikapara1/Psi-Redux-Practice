import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress, Select, MenuItem } from '@mui/material';

import {
    currentErrorState,
    setCurrentData,
    currentLoadingState,
} from 'store/slices/currentDog';
import { addDogToHistory } from 'store/slices/dogHistory';
import { useAppDispatch, useAppSelector } from 'store/store';

import { useStyles } from './FinderCardStyles';

const RANDOM_DOG_VALUE = 'Random';
const breeds = [
    RANDOM_DOG_VALUE,
    'error',
    'basenji',
    'affenpinscher',
    'african',
    'airedale',
    'akita',
    'appenzeller',
];

export const FinderCard = () => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const [dogName, setDogName] = useState(RANDOM_DOG_VALUE);
    const isLoading = useAppSelector((state) => state.currentDog.loading);

    const getDogBreed = (message: string) => {
        return message.split('/')[4];
    };

    const getDog = async () => {
        dispatch(currentLoadingState({ loading: true }));

        let url;
        if (dogName !== RANDOM_DOG_VALUE) {
            url = `https://dog.ceo/api/breed/${dogName}/images/random`;
        } else {
            url = `https://dog.ceo/api/breeds/image/random`;
        }
        await (await fetch(url)).json().then((result) => {
            if (result.status === 'success') {
                const dogBreed = getDogBreed(result.message);
                const id = uuidv4();
                const dogData = { image: result.message, breed: dogBreed, id };

                dispatch(setCurrentData(dogData));
                dispatch(addDogToHistory(dogData));
            } else {
                dispatch(currentErrorState({ errorMessage: result.message }));
                dispatch(currentLoadingState({ loading: false }));
            }
        });
    };

    const dogSelectChange = (event: any) => {
        setDogName(event.target.value);
    };

    const ButtonText = () =>
        isLoading ? (
            <CircularProgress color='secondary' />
        ) : dogName ? (
            <Typography>get {dogName} doggo</Typography>
        ) : (
            <Typography>get random doggo</Typography>
        );

    return (
        <div className={classes.root}>
            <div>
                <Typography variant='h5' component='h2'>
                    Find Doggo
                </Typography>
            </div>
            <div className={classes.content}>
                <Select
                    value={dogName}
                    className={classes.input}
                    onChange={dogSelectChange}
                >
                    {breeds.map((breed) => (
                        <MenuItem key={breed} value={breed}>
                            {breed}
                        </MenuItem>
                    ))}
                </Select>
                <Button
                    onClick={getDog}
                    className={classes.button}
                    variant='contained'
                    size='large'
                    color='primary'
                >
                    <ButtonText />
                </Button>
            </div>
        </div>
    );
};
