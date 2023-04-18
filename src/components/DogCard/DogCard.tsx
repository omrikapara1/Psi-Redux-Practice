import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

import { useStyles } from './DogCardStyles';

export const DogCard = () => {
    const { classes, cx } = useStyles();

    const Title = () => <>*BREED NAME*</>;

    const Image = ({}: {}) => (
        <img
            alt='doggo'
            className={classes.img}
            onLoad={() => {}}
            // src={}
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
            <div className={classes.image}></div>
        </div>
    );
};
