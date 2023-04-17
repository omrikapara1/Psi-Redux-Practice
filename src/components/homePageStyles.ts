import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
    root: {
      textAlign: "center",
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'center',
      height: '73vh',
      width: '100%',
      gap: '30px'
    },
    title: {
      fontSize: '3em',
      textAlign: 'center',
      marginTop: '100px',
      marginBottom: '40px',
    },
    credit: {
      fontSize: '1.8em',
      textAlign: 'center'
    }
  });