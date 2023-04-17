import Typography from '@mui/material/Typography';

import { useStyles } from './HistoryStyles';

export const HistoryCard = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5" component="h2">History</Typography>
      </div>
      <div className={classes.cardContent}>
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
            </tbody>
          </table>
        }
      </div>
      <div className={classes.actions}>
        <button>Reset History</button>
      </div>
    </div>
  );
};
