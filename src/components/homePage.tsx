import { Container } from '@mui/material';

import { useStyles } from './homePageStyles';
import { DogCard } from './DogCard/DogCard';
import { FinderCard } from './FinderCard/FinderCard';
import { HistoryCard } from './HistoryCard/HistoryCard';

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
