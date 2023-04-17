import {
  CircularProgress,
  Select,
  MenuItem
} from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
  currentErrorState,
  currentImage,
  currentLoadingState,
  currentBreed
} from '../reducers/currentDog';
import { useStyles } from './FinderCardStyles';
import { addDogToHistory } from '../reducers/dogHistory';
import { useAppDispatch, useAppSelector } from '../store/store';

const RANDOM_DOG_VALUE = 'Random'
const breeds = [RANDOM_DOG_VALUE, 'error', 'basenji', "affenpinscher", "african", "airedale", "akita", "appenzeller"];


export const ExampleCard = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const [dogName, setDogName] = useState(RANDOM_DOG_VALUE);
  const isLoading = useAppSelector((state) => state.currentDog.loading);

  const getDogBreed = (message: string) => {
    return message.split('/')[4]
  };

  const getDog = async () => {
    dispatch(currentLoadingState({ loading: true }));

    let url;
    if (dogName !== RANDOM_DOG_VALUE) {
      url = `https://dog.ceo/api/breed/${dogName}/images/random`;
    }
    else {
      url = `https://dog.ceo/api/breeds/image/random`;
    }
    await (await fetch(url)).json()
      .then((result) => {
        if (result.status === 'success') {
          const dogBreed = getDogBreed(result.message);
          dispatch(currentImage({ image: result.message }));
          dispatch(currentBreed({ breed: dogBreed }))
          dispatch(addDogToHistory({ breedName: dogBreed, photoLink: result.message }))
        }
        else {
          dispatch(currentErrorState({ errorMessage: result.message }));
          dispatch(currentLoadingState({ loading: false }));
        }
      })
  };

  const dogSelectChange = (event: any) => {
    setDogName(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5" component="h2">Find Doggo</Typography>
      </div>
      <div className={classes.content}>
        <Select
          value={dogName}
          className={classes.input}
          label="Select dog name..."
          onChange={dogSelectChange}
        >
          {
            breeds.map((breed) => (
              <MenuItem key={breed} value={breed}>{breed}</MenuItem>
            )
            )
          }
        </Select>
        <Button
          onClick={getDog}
          className={classes.button}
          variant="contained"
          size="large"
          color="primary"
        >
          {
            isLoading ?
              <CircularProgress color="secondary"></CircularProgress> :
              dogName ?
                <Typography>get {dogName} doggo</Typography> :
                <Typography>get random doggo</Typography>
          }
        </Button>
      </div>
    </div>
  );
};
