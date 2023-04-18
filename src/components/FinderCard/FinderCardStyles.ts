import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({ name: 'finderCard' })({
    root: {
        width: 275,
        height: 275,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2vh',
    },
    button: {
        marginTop: '10px',
    },
    input: {
        width: '90%',
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
