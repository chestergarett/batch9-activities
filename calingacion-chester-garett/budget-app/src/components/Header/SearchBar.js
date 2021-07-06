import {FaSearch} from 'react-icons/fa';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <form className={classes.form}>
            <button type="submit"><FaSearch/></button>
            <input type="text" placeholder="Search" name="search" data-testid="searchbar"/>
        </form>
    )
}

export default SearchBar;