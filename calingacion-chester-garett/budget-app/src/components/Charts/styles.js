import {makeStyles} from '@material-ui/core';

export default makeStyles(()=> ({
    main:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
        width: '90%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
        alignItems: 'center',
    },
    expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
        width: '90%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
        alignItems: 'center',
    }
}
));