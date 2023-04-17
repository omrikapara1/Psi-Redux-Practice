import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({
    name: 'dogCard',
})({
    root: {
        // minWidth: 500,
        // minHeight: 500,
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%',
    },
    image: {
        height: 0,
        paddingTop: '0%',
    },
    img: {
        width: '50vmin',
        height: '50vmin',
        // '--b': '5px',
        padding: 10,
        background:
            'conic-gradient(from 90deg at top 5px left 5px, #0000 90deg, #b96920 0) 0 0',
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
    },
    breed: {
        fontSize: '2em',
    },
});
