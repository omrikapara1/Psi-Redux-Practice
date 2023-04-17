import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
    root: {
      textAlign: "center",
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'center',
      height: '77vh',
      width: '100%',
      gap: '30px'
    },
    title: {
      fontSize: '3em',
      textAlign: 'center',
      marginTop: '100px',
      marginBottom: '40px',
    }
  });