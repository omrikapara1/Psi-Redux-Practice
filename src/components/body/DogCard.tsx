import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

import { useStyles } from './DogCardStyles';
import { currentLoadingState } from '../../store/slices/currentDog';
import { useAppDispatch, useAppSelector } from '../../store/store';


export const DogCard = () => {
  const { classes } = useStyles();
  const dogPic = useAppSelector((state) => state.currentDog.image);
  const loading = useAppSelector((state) => state.currentDog.loading);
  const errorMessage = useAppSelector((state) => state.currentDog.errorMessage);
  const dogBreed = useAppSelector((state) => state.currentDog.breed);
  const dispatch = useAppDispatch();

  const cardImage = (src: string) =>
    <div className={classes.image}>
      <img
        alt="doggo"
        className={classes.img}
        onLoad={() => dispatch(currentLoadingState({ loading: false }))}
        src={src}
      >
      </img>
    </div>

  const cardError = (message: string) => <Typography>{message}</Typography>

  const cardBreed = (message: string) => <Typography className={classes.breed}>{message}</Typography>

  return (
    <div className={classes.root}>
      {
        dogBreed && !errorMessage ?
        cardBreed(dogBreed) :
        cardBreed('No breed...')
      }
      {
        dogPic ?
          cardImage(dogPic) :
          ''
      }
      <div className={classes.cardContent}>
        {
          !loading && !dogPic && !errorMessage ?
            <Typography>Waiting for doggo search...</Typography> :
            ''
        }
        {
          loading ?
            <CircularProgress size="80px" color="primary"></CircularProgress> :
            ''
        }
        {
          errorMessage && !dogPic && !loading ?
            cardError(errorMessage) :
            ''
        }
      </div>
    </div>
  );
}
