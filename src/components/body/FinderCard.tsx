import { useState } from 'react';
import Button from '@mui/material/Button';
import { Select, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useStyles } from './FinderCardStyles';

const RANDOM_DOG_VALUE = 'Random'
const breeds = [RANDOM_DOG_VALUE, 'error', 'basenji', "affenpinscher", "african", "airedale", "akita", "appenzeller"];


export const ExampleCard = () => {
  const { classes } = useStyles();
  const [dogName, setDogName] = useState(RANDOM_DOG_VALUE);

  const getDogBreed = (message: string) => {
  };

  const getDog = async () => {
  };

  const dogSelectChange = (event: any) => {
    setDogName(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5" component="h2">Find Doggo</Typography>
      </div>
      <div className={classes.content}>
        <Select
          value={dogName}
          className={classes.input}
          label="Select dog name..."
          onChange={dogSelectChange}
        >
          {
            breeds.map((breed) => (
              <MenuItem key={breed} value={breed}>{breed}</MenuItem>
            )
            )
          }
        </Select>
        <Button
          onClick={getDog}
          className={classes.button}
          variant="contained"
          size="large"
          color="primary"
        >
          {
              dogName ?
                <Typography>get {dogName} doggo</Typography> :
                <Typography>get random doggo</Typography>
          }
        </Button>
      </div>
    </div>
  );
};
