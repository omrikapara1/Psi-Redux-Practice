import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
  root: {
    minWidth: 500,
    minHeight: 500,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    height: '50vh'
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    height: '100%'
  },
  row: {
    cursor: 'pointer'
  },
  cell: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});