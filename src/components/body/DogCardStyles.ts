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
        border: '1px solid #dddddd',
        minWidth: '50vmin',
        minHeight: '50vmin',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageLoading: {
        position: 'absolute',
        top: 'calc(25vmin - 40px)',
        left: 'calc(25vmin - 40px)',
    },
    img: {
        width: '50vmin',
        height: '50vmin',
        position: 'absolute',
        transition: 'transform 100000s ease',
        // transition: 'transform 100000s cubic-bezier(0.4, 0, 0.55, 0.11)',
        '&:hover': {
            transform: 'scale(100)',
        },
    },
    breed: {
        fontSize: '1.5em',
    },
    waitText: {
        position: 'absolute',
    },
    waitImg: {
        opacity: 0.1
    }
});
