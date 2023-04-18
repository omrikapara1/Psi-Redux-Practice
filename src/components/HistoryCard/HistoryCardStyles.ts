import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({ name: 'historyPage' })({
    root: {
        minWidth: 500,
        minHeight: 500,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto',
        height: '50vh',
    },
    table: {
        borderCollapse: 'collapse',
        width: '100%',
        height: '100%',
        border: '1px solid #dddddd',
    },
    row: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(244,244,244,0.5)',
        },
        transition: 'background-color 200ms ease-in-out',
    },
    selectedRow: {
        backgroundColor: 'rgb(244,244,244)!important',
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
    },
    previewImage: {
        height: 25,
        width: 25,
    },
});
