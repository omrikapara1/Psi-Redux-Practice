import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

import { currentLoadingState } from 'store/slices/currentDog';
import { useAppDispatch, useAppSelector } from 'store/store';

import { useStyles } from './DogCardStyles';

export const DogCard = () => {
    const { classes, cx } = useStyles();
    const currentDogData = useAppSelector((state) => state.currentDog.data);
    const loading = useAppSelector((state) => state.currentDog.loading);
    const errorMessage = useAppSelector(
        (state) => state.currentDog.errorMessage
    );
    const dispatch = useAppDispatch();

    return (
        <div className={classes.root}>
            <Typography className={classes.breed}>
                {loading
                    ? 'loading...'
                    : currentDogData && !errorMessage
                    ? currentDogData.breed
                    : 'No breed...'}
            </Typography>
            <div className={classes.image}>
                {currentDogData ? (
                    <>
                        <img
                            alt='doggo'
                            className={classes.img}
                            onLoad={() => {
                                dispatch(
                                    currentLoadingState({ loading: false })
                                );
                            }}
                            src={currentDogData.image}
                        />
                        {loading && (
                            <CircularProgress
                                size='80px'
                                color='primary'
                                className={classes.imageLoading}
                            />
                        )}
                    </>
                ) : errorMessage ? (
                    <Typography>{errorMessage}</Typography>
                ) : (
                    <>
                        <img
                            className={cx(classes.img, classes.waitImg)}
                            src={
                                'https://media.tenor.com/13VnwKt5qS0AAAAd/waiting.gif'
                            }
                        />
                        <Typography className={classes.waitText}>
                            Waiting for doggo search...
                        </Typography>
                    </>
                )}
            </div>
        </div>
    );
};
