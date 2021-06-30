
import { TableCell, TableRow  } from '@material-ui/core';

const Coin = ({name, image, symbol, price, priceChange,}) => {
    return(
        <TableRow key={name}>
        <TableCell align="right"> <img src={image} alt='crypto' style={{width: '3rem'}}/> </TableCell>
        <TableCell align="right"> {name} </TableCell>
        <TableCell align="right"> {symbol.toUpperCase()}</TableCell>
        <TableCell align="right">${price.toLocaleString()}</TableCell>  
        {priceChange < 0 ? (
            <TableCell align="right" style={{color: 'red'}}>{priceChange.toFixed(2)}%</TableCell>
          ) : (
            <TableCell align="right" style={{color: 'green'}}>{priceChange.toFixed(2)}%</TableCell>
          )}
        </TableRow>
    )
}

export default Coin;