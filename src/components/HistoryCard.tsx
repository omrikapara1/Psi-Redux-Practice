import React, { useEffect, useMemo, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { CardActions } from '@mui/material';
import { useStyles } from './HistoryStyles';
import { useAppDispatch, useAppSelector } from '../store/store';
import { DogHistoryData, resetHistory } from '../reducers/dogHistory';
import { currentImage, resetCurrent } from '../reducers/currentDog';
import { currentBreed } from '../reducers/currentDog';

export const HistoryCard = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const dogHistory = useAppSelector((state) => state.dogHistory.dogs)

  const onRowClick = ({ breedName, photoLink, timeStamp }: DogHistoryData) => {
    dispatch(currentImage({image: photoLink}))
    dispatch(currentBreed({breed: breedName}))
  };

  const onReset = () => {
    dispatch(resetHistory())
    dispatch(resetCurrent())
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={<Typography variant="h5" component="h2">History</Typography>}>
      </CardHeader>
      <CardContent className={classes.cardContent}>
        {
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.cell}>TimeStamp</th>
                <th className={classes.cell}>Breed</th>
                <th className={classes.cell}>Link</th>
              </tr>
            </thead>
            <tbody>
              {
                dogHistory.map(({ breedName, photoLink, timeStamp }) => (
                  <tr key={timeStamp} className={classes.row} onClick={()=>onRowClick({ breedName, photoLink, timeStamp })}>
                    <td className={classes.cell}>{new Date(timeStamp).toString()}</td>
                    <td className={classes.cell}>{breedName}</td>
                    <td className={classes.cell}>
                      <a href={photoLink} target="_blank">open img</a>
                      </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </CardContent>
      <CardActions className={classes.actions}>
        <button onClick={onReset}>Reset History</button>
      </CardActions>
    </Card>
  );
};
