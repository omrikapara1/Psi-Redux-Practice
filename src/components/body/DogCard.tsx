import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

import { currentLoadingState } from 'store/slices/currentDog';
import { useAppDispatch, useAppSelector } from 'store/store';

import { useStyles } from './DogCardStyles';

export const DogCard = () => {
    const { classes } = useStyles();
    const dogPic = useAppSelector((state) => state.currentDog.image);
    const loading = useAppSelector((state) => state.currentDog.loading);
    const errorMessage = useAppSelector(
        (state) => state.currentDog.errorMessage
    );
    const dogBreed = useAppSelector((state) => state.currentDog.breed);
    const dispatch = useAppDispatch();

    return (
        <div className={classes.root}>
            <Typography className={classes.breed}>
                {loading
                    ? 'loading...'
                    : dogBreed && !errorMessage
                    ? dogBreed
                    : 'No breed...'}
            </Typography>
            {dogPic && (
                <div className={classes.image}>
                    <img
                        alt='doggo'
                        className={classes.img}
                        onLoad={() => {
                            dispatch(currentLoadingState({ loading: false }));
                        }}
                        src={dogPic}
                    />
                </div>
            )}
            <div className={classes.cardContent}>
                {loading && <CircularProgress size='80px' color='primary' />}
                {!dogPic &&
                    !loading &&
                    (errorMessage ? (
                        <Typography>{errorMessage}</Typography>
                    ) : (
                        <Typography>Waiting for doggo search...</Typography>
                    ))}
            </div>
        </div>
    );
};
