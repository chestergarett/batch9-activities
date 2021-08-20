import { Link } from "react-router-dom";
import { FcBriefcase } from "react-icons/fc"; //Enroll Accounts
import {FcMoneyTransfer} from "react-icons/fc"; //Transfer Money
import {FcBullish} from "react-icons/fc"; //Investments
import {FcGlobe} from "react-icons/fc"; //Gforest
import {FcBarChart} from "react-icons/fc"; //Analytics
import {FcReading} from "react-icons/fc"; //Analytics
import {FcOnlineSupport} from "react-icons/fc" //Account maintenance
import {IoArrowDownCircle} from 'react-icons/io5'; //See more



import classes from './Navigation.module.css'

const Navigation = () => {
    
    return <ul className={classes.navigation}>
        <li key='1'>
            <Link to='/Income' className={classes.navigationItem}>
                <FcMoneyTransfer className={classes.icons}/><span>Budget App</span>
            </Link>
        </li>
        <li key='5'>
            <Link to='/chartsCompiled' className={classes.navigationItem}>
                <FcBarChart className={classes.icons}/><span>Analytics</span>
            </Link>
        </li>
        <li key='3'>
            <Link to='/Investments' className={classes.navigationItem}>
                <FcBullish className={classes.icons}/><span>Coin Tracker</span>
            </Link>
        </li>
        <li key='4'>
            <Link to='/Forest' className={classes.navigationItem}>
                <FcGlobe className={classes.icons}/><span>Blogs</span>
            </Link>
        </li>
        <li key='2'>
            <Link to='/' className={classes.navigationItem}>
                <FcBriefcase className={classes.icons}/><span>Journals</span>
            </Link>
        </li>
        <li key='6'>
            <Link to='/NewsCompiled' className={classes.navigationItem}>
                <FcReading className={classes.icons}/><span>News</span>
            </Link>
        </li>
        <li key='7'>
            <Link to ='/Messenger' className={classes.navigationItem}>
                <FcOnlineSupport className={classes.icons}/><span>Messenger</span>
            </Link>
        </li>
        <li key='8'>
            <div className={classes.navigationItem}>
                <IoArrowDownCircle className={classes.icons}/><span>See more</span>
            </div>
        </li>
    </ul>
};

export default Navigation;