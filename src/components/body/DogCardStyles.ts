import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
  name: 'dogCard'
})({
    root: {
      minWidth: 500,
      minHeight: 500,
    },
    cardContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '40%'
    },
    image: {
      height: 0,
      paddingTop: '0%'
    },
    img: {
      width: 500,
      height: 500
    },
    breed: {
      fontSize: '2em'
    }
  });