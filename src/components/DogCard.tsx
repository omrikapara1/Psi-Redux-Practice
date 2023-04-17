import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/store';
import { useStyles } from './DogCardStyles';
import { currentLoadingState } from '../reducers/currentDog';


export const DogCard = () => {
  const { classes } = useStyles();
  const dogPic = useAppSelector((state) => state.currentDog.image);
  const loading = useAppSelector((state) => state.currentDog.loading);
  const errorMessage = useAppSelector((state) => state.currentDog.errorMessage);
  const dogBreed = useAppSelector((state) => state.currentDog.breed);
  const dispatch = useAppDispatch();

  const cardImage = (src: string) =>
    <CardMedia className={classes.image}>
      <img
        alt="doggo"
        className={classes.img}
        onLoad={() => dispatch(currentLoadingState({ loading: false }))}
        src={src}
      >
      </img>
    </CardMedia>

  const cardError = (message: string) => <Typography>{message}</Typography>

  const cardBreed = (message: string) => <Typography className={classes.breed}>{message}</Typography>

  return (
    <Card className={classes.root}>
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
      <CardContent className={classes.cardContent}>
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
      </CardContent>
    </Card>
  );
}
