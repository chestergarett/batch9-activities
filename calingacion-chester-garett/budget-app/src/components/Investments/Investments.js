
import { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import {FormControl, InputLabel, Table, Input, InputAdornment, TableHead, TableRow, TableCell, TableBody,TableContainer} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

import MainContainer from '../UI/MainContainer';
import Coin from './Coin'

const Investments = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data)
        })
        .catch(error => console.error('Error fetching data from API'));
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin=>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    console.log(filteredCoins)

    return(
        <MainContainer>
            <FormControl style={{margin: '1rem'}}>
                <InputLabel htmlFor="input-with-icon-adornment">Search Coin</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    }
                    onChange={handleChange}
                    />        
            </FormControl>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead style={{backgroundColor: '#FEFEFA'}}>
                <TableRow>
                    <TableCell align="right" style={{fontWeight: 'bold'}}>Symbol</TableCell>
                    <TableCell align="right" style={{fontWeight: 'bold'}}>Coin</TableCell>
                    <TableCell align="right" style={{fontWeight: 'bold'}}>Ticker</TableCell>
                    <TableCell align="right" style={{fontWeight: 'bold'}}>Price</TableCell>
                    <TableCell align="right" style={{fontWeight: 'bold'}}> % Change</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {filteredCoins ? filteredCoins.map(coin => {
                    return (
                        <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    /> 
                    )
                }) : 
                <TableRow key="0">
                    <TableCell>Error loading API. Please try again later</TableCell>
                </TableRow>}
                </TableBody>
            </Table>
            </TableContainer>
        </MainContainer>    
    )
}

export default Investments;