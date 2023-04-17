import { Container } from '@mui/material';

import { useStyles } from './homePageStyles';
import { DogCard } from './body/DogCard';
import { ExampleCard } from './body/FinderCard';
import { HistoryCard } from './body/HistoryCard';



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
      <div className={classes.credit}>
      {'© Omri Kapara & Eran Tagansky'}
      </div>
    </div>
  );
}

export default HomePage;