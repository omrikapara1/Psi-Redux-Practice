import Tooltip from '@mui/material/Tooltip';

import { useStyles } from './AppStyles';
import { DogCard } from './DogCard/DogCard';
import { FinderCard } from './FinderCard/FinderCard';
import { HistoryCard } from './HistoryCard/HistoryCard';

const App = () => {
    const { classes } = useStyles();

    return (
        <div>
            <div className={classes.title}>Doggo Finder</div>
            <div className={classes.root}>
                <FinderCard />
                <DogCard />
                <HistoryCard />
            </div>
            <Tooltip title='good luck 👍'>
                <div className={classes.credit}>
                    {'© Omri Kapara & Eran Tagansky'}
                </div>
            </Tooltip>
        </div>
    );
};

export default App;
