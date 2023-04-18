import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Select, MenuItem } from '@mui/material';

import { useStyles } from './FinderCardStyles';

const RANDOM_DOG_VALUE = 'Random';
const breeds = [
    RANDOM_DOG_VALUE,
    'error',
    'basenji',
    'affenpinscher',
    'african',
    'airedale',
    'akita',
    'appenzeller',
];

export const FinderCard = () => {
    const { classes } = useStyles();
    const [dogName, setDogName] = useState(RANDOM_DOG_VALUE);

    const getDog = async () => {};

    const dogSelectChange = (event: any) => {
        setDogName(event.target.value);
    };

    const ButtonText = () => <>get ... doggo</>;

    return (
        <div className={classes.root}>
            <div>
                <Typography variant='h5' component='h2'>
                    Find Doggo
                </Typography>
            </div>
            <div className={classes.content}>
                <Select
                    value={dogName}
                    className={classes.input}
                    onChange={dogSelectChange}
                >
                    {breeds.map((breed) => (
                        <MenuItem key={breed} value={breed}>
                            {breed}
                        </MenuItem>
                    ))}
                </Select>
                <Button
                    onClick={getDog}
                    className={classes.button}
                    variant='contained'
                    size='large'
                    color='primary'
                >
                    <ButtonText />
                </Button>
            </div>
        </div>
    );
};
