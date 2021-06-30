

import SearchBar from './SearchBar';
import ShortcutPane from './ShortcutPane';
import InfoPane from './InfoPane';

import classes from './Header.module.css'
import { FaCuttlefish } from "react-icons/fa";



const Header = () => {
    return (
    <header className={classes.header}>
        <div className={classes['header-left']}>
            <FaCuttlefish className={classes['header-logo']}/>
            <SearchBar/>
        </div>
        <ShortcutPane/>
        <InfoPane/>
    </header>    
    )
};


export default Header;

