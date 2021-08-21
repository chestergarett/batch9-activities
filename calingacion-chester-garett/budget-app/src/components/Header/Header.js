

import SearchBar from './SearchBar';
import ShortcutPane from './ShortcutPane';
import InfoPane from './InfoPane';

import classes from './Header.module.css'
import { FaCuttlefish } from "react-icons/fa";

import {Link} from 'react-router-dom';

const Header = () => {
    return (
    <header className={classes.header}>
        <div className={classes['header-left']}>
            <Link to='/'>
                <FaCuttlefish className={classes['header-logo']}/>
            </Link>
            <SearchBar/>
        </div>
        <ShortcutPane />
        <InfoPane/>
    </header>    
    )
};


export default Header;

