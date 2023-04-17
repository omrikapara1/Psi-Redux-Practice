import { Container } from '@mui/material';

import { useStyles } from './homePageStyles';
import { DogCard } from './body/DogCard';
import { FinderCard } from './body/FinderCard';
import { HistoryCard } from './body/HistoryCard';

const HomePage = () => {
    const { classes } = useStyles();

    return (
        <div>
            <div className={classes.title}>Doggo Finder</div>
            <div className={classes.root}>
                <FinderCard />
                <DogCard />
                <HistoryCard />
            </div>
            <div className={classes.credit}>
                {'© Omri Kapara & Eran Tagansky'}
            </div>
        </div>
    );
};

export default HomePage;
