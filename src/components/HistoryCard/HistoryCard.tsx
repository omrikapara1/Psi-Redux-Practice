import Typography from '@mui/material/Typography';

import { useStyles } from './HistoryCardStyles';
import { HistoryDogData } from 'models/interfaces/HistoryDogData';

const mockHistoryDogs: HistoryDogData[] = [
    {
        id: '3',
        breed: 'ridgeback-rhodesian',
        image: 'https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_4147.jpg',
        timestamp: new Date(300000).getTime(),
    },
    {
        id: '2',
        breed: 'coonhound',
        image: 'https://images.dog.ceo/breeds/coonhound/n02089078_80.jpg',
        timestamp: new Date(200000).getTime(),
    },
    {
        id: '1',
        breed: 'spaniel-cocker',
        image: 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_1983.jpg',
        timestamp: new Date(100000).getTime(),
    },
];

export const HistoryCard = () => {
    const { classes, cx } = useStyles();

    const onRowClick = (historyDog: HistoryDogData) => {};

    const onReset = () => {};

    return (
        <div className={classes.root}>
            <div>
                <Typography variant='h5' component='h2'>
                    History
                </Typography>
            </div>
            <div className={classes.cardContent}>
                {
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th className={classes.cell}>TimeStamp</th>
                                <th className={classes.cell}>Breed</th>
                                <th className={classes.cell}>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockHistoryDogs.map((historyDog) => (
                                <tr
                                    key={historyDog.id}
                                    className={cx(classes.row)}
                                    onClick={() => onRowClick(historyDog)}
                                >
                                    <td className={classes.cell}>
                                        {new Date(historyDog.timestamp)
                                            .toString()
                                            .substring(0, 24)}
                                    </td>
                                    <td className={classes.cell}>
                                        {historyDog.breed}
                                    </td>
                                    <td className={classes.cell}>
                                        <img
                                            src={historyDog.image}
                                            className={classes.previewImage}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
            <div className={classes.actions}>
                <button onClick={onReset}>Reset History</button>
            </div>
        </div>
    );
};
