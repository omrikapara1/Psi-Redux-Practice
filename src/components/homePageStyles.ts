import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({ name: 'homePage' })({
    root: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        height: '73vh',
        padding: '0px 10px',
    },
    title: {
        fontSize: '3em',
        textAlign: 'center',
        marginTop: '100px',
        marginBottom: '40px',
    },
    credit: {
        fontSize: '1.2em',
        position: 'fixed',
        width: '100vw',
        bottom: 0,
        backgroundColor: 'white',
        textAlign: 'center',
    },
});
