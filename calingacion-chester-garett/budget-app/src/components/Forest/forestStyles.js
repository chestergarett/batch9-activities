import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card:{
        width: '30rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        "& img": {
            width: '100%',
            height: '40rem',
        }
    }
}));