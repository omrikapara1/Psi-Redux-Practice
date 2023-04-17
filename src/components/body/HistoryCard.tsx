import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from 'store/store';
import { historyDogData, resetHistory } from 'store/slices/dogHistory';
import { resetCurrent, setCurrentData } from 'store/slices/currentDog';

import { useStyles } from './HistoryStyles';

export const HistoryCard = () => {
    const { classes, cx } = useStyles();
    const dispatch = useAppDispatch();
    const dogHistory = useAppSelector((state) => state.dogHistory.dogs);
    const currentDogId = useAppSelector((state) => state.currentDog.data?.id);

    const onRowClick = ({ timestamp, ...dog }: historyDogData) => {
        dispatch(setCurrentData(dog));
    };

    const onReset = () => {
        dispatch(resetHistory());
        dispatch(resetCurrent());
    };

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
                            {dogHistory
                                .slice()
                                .reverse()
                                .map((historyDog) => (
                                    <tr
                                        key={historyDog.id}
                                        className={cx(classes.row, {
                                            [classes.selectedRow]:
                                                currentDogId === historyDog.id,
                                        })}
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
