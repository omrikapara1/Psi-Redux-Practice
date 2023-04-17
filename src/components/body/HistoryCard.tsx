import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from 'store/store';
import { DogHistoryData, resetHistory } from 'store/slices/dogHistory';
import {
    currentImage,
    resetCurrent,
    currentBreed,
} from 'store/slices/currentDog';

import { useStyles } from './HistoryStyles';

export const HistoryCard = () => {
    const { classes, cx } = useStyles();
    const dispatch = useAppDispatch();
    const dogHistory = useAppSelector((state) => state.dogHistory.dogs);
    const currentDogImage = useAppSelector((state) => state.currentDog.image);

    const onRowClick = ({
        breedName,
        photoLink,
    }: Pick<DogHistoryData, 'breedName' | 'photoLink'>) => {
        dispatch(currentImage({ image: photoLink }));
        dispatch(currentBreed({ breed: breedName }));
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
                                .map(({ breedName, photoLink, timeStamp }) => (
                                    <tr
                                        key={photoLink + timeStamp}
                                        className={cx(classes.row, {
                                            [classes.selectedRow]:
                                                photoLink === currentDogImage,
                                        })}
                                        onClick={() =>
                                            onRowClick({
                                                breedName,
                                                photoLink,
                                            })
                                        }
                                    >
                                        <td className={classes.cell}>
                                            {new Date(timeStamp)
                                                .toString()
                                                .substring(0, 24)}
                                        </td>
                                        <td className={classes.cell}>
                                            {breedName}
                                        </td>
                                        <td className={classes.cell}>
                                            <img
                                                src={photoLink}
                                                style={{
                                                    height: 25,
                                                    width: 25,
                                                }}
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
