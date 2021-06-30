import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    marginRight: '8px',
    '&:hover':{
      backgroundColor: 'darkgrey',
      color: 'black',
    }
  }
}));