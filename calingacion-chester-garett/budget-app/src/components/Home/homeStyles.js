import {makeStyles} from '@material-ui/core';


export default makeStyles(() => ({
    mainHome: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '0',
        // paddingLeft: '1rem',
    },
    homeCard: {
        width: '35rem',
        marginBottom: '3rem',
    },
    homeStatus: {
        width: '35rem',
        display: 'flex',
        flexDirection: 'column',
        padding: '.5rem',
        marginBottom: '2rem',
    },
    textArea:{
        width: '90%',
        borderRadius: '12px',
        [`& fieldset`]: {
            borderRadius: '8px',
          },
    },
    boxGroup:{
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'space-between',
    }
  }
));
  