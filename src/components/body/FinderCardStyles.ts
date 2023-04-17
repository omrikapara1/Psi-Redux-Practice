import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
    root: {
      width: 275,
      height: 275,
      alignSelf: 'middle',
      justifySelf: 'start',
    },
    content: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2vh'
    },
    button: {
      marginTop: '10px',
      // height: '7vh',
      // width: '90%'
    },
    input: {
      width: '90%'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });