import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { currentLoadingState } from 'store/slices/currentDog';
import { useAppDispatch, useAppSelector } from 'store/store';

import { useStyles } from './DogCardStyles';

export const DogCard = () => {
  const { classes } = useStyles();

  const cardImage = (src: string) =>
    <div className={classes.image}>
      <img
        alt="doggo"
        className={classes.img}
        onLoad={() => { }}
        src={src}
      >
      </img>
    </div>

  const cardError = (message: string) => <Typography>{message}</Typography>

  const cardBreed = (message: string) => <Typography className={classes.breed}>{message}</Typography>

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
      </CardContent>
    </Card>
  );
}
