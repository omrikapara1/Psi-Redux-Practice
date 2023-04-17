import React from 'react';
import { Container } from '@mui/material';

import { DogCard } from '../components/DogCard';
import { useStyles } from './homePageStyles';
import { ExampleCard } from '../components/ExampleCard';
import { HistoryCard } from '../components/HistoryCard';



const HomePage = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <ExampleCard />
      <HistoryCard />
      <DogCard />
    </Container>
  );
}

export default HomePage;