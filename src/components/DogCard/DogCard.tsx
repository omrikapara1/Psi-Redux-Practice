import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

import { DogData, currentLoadingState } from 'store/slices/currentDog';
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

    const Title = () => (
        <>
            {loading
                ? 'loading...'
                : currentDogData && !errorMessage
                ? currentDogData.breed
                : 'No breed...'}
        </>
    );

    const Image = ({ currentDogData }: { currentDogData: DogData }) => (
        <img
            alt='doggo'
            className={classes.img}
            onLoad={() => {
                dispatch(currentLoadingState({ loading: false }));
            }}
            src={currentDogData.image}
        />
    );

    const MyCircularProgress = () => (
        <CircularProgress
            size='80px'
            color='primary'
            className={classes.imageLoading}
        />
    );

    const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => (
        <Typography>{errorMessage}</Typography>
    );

    const Wait = () => (
        <>
            <img
                className={cx(classes.img, classes.waitImg)}
                src={'https://media.tenor.com/13VnwKt5qS0AAAAd/waiting.gif'}
            />
            <Typography className={classes.waitText}>
                Waiting for doggo search...
            </Typography>
        </>
    );

    return (
        <div className={classes.root}>
            <Typography className={classes.breed}>
                <Title />
            </Typography>
            <div className={classes.image}>
                {currentDogData ? (
                    <>
                        <Image currentDogData={currentDogData} />
                        {loading && <MyCircularProgress />}
                    </>
                ) : errorMessage ? (
                    <ErrorMessage errorMessage={errorMessage} />
                ) : (
                    <Wait />
                )}
            </div>
        </div>
    );
};
