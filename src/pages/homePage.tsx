import { Container } from '@mui/material';

import { useStyles } from './homePageStyles';
import { DogCard } from '../components/DogCard';
import { ExampleCard } from '../components/ExampleCard';
import { HistoryCard } from '../components/HistoryCard';



const HomePage = () => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.title}>
        Doggo Finder
      </div>
      <div className={classes.root}>
        <ExampleCard />
        <HistoryCard />
        <DogCard />
      </div>
    </div>
  );
}

export default HomePage;