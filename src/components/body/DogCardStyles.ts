import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
    name: 'dogCard',
})({
    root: {
        // minWidth: 500,
        // minHeight: 500,
        minWidth: '50vmin',
        minHeight: '50vmin',
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '40%',
    },
    image: {
        minWidth: '50vmin',
        minHeight: '50vmin',
        position: 'relative',
    },
    imageLoading: {
        position: 'absolute',
        top: 'calc(25vmin - 40px)',
        left: 'calc(25vmin - 40px)',
    },
    img: {
        width: '50vmin',
        height: '50vmin',
        transition: 'transform 100000s ease',
        // transition: 'transform 100000s cubic-bezier(0.4, 0, 0.55, 0.11)',
        '&:hover': {
            transform: 'scale(100)',
        },
    },
    breed: {
        fontSize: '2em',
    },
});
