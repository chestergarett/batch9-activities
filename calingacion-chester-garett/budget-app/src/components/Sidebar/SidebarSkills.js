import python from  '../../assets/icons8-python-48.png';
import js from  '../../assets/icons8-javascript-48.png';
import react from  '../../assets/icons8-react-40.png';
import ruby from  '../../assets/icons8-ruby-programming-language-48.png';
import sql from '../../assets/icons8-sql-64.png';
import powerBI from '../../assets/icons8-power-bi-48.png';
import {v4} from 'uuid'

import classes from './SidebarSkills.module.css';

const skills = [
    {
        id: v4(),
        title: 'Python',
        icon: {python}
    },
    {
        id: v4(),
        title: 'Javascript',
        icon: {js}
    },
    {
        id: v4(),
        title: 'SQL Server Studio',
        icon: {sql}
    },
    {
        id: v4(),
        title: 'Power BI',
        icon: {powerBI}
    },
    {
        id: v4(),
        title: 'React JS',
        icon: {react}
    },
    {
        id: v4(),
        title: 'Ruby on Rails',
        icon: {ruby}
    },
]

const SidebarSkills = () => {
    
    return (
        <ul className={classes.skillsList}>
            <li key={skills[0].id}>
                <div>
                    <div><img src={python} alt={skills[0].title}/></div>
                    <div>{skills[0].title}</div>
                </div>
            </li>
            <li key={skills[1].id}>
            <div>
                <div><img src={js} alt={skills[1].title}/></div>
                <div>{skills[1].title}</div>
            </div>
            </li>
            <li key={skills[2].id}>
            <div>
                <div><img src={sql} alt={skills[2].title}/></div>
                <div>{skills[2].title}</div>
            </div>
            </li>
            <li key={skills[3].id}>
            <div>
                <div><img src={powerBI} alt={skills[3].title}/></div>
                <div>{skills[3].title}</div>
            </div>
            </li>
            <li key={skills[4].id}>
            <div>
                <div><img src={react} alt={skills[4].title}/></div>
                <div>{skills[4].title}</div>
            </div>
            </li>
            <li key={skills[5].id}>
            <div>
                <div><img src={ruby} alt={skills[5].title}/></div>
                <div>{skills[5].title}</div>
            </div>
            </li>
        </ul>
    )
}

export default SidebarSkills;