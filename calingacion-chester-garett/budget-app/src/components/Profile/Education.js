import avionschool from '../../assets/school/avion_school.png';
import silliman_u from '../../assets/school/su_logo.png';
import spu_u from '../../assets/school/spud_logo.png';
import classes from './Details.module.css';
import Avatar from '@material-ui/core/Avatar';

const Education = () => {

    const education = [ 
        {logo: avionschool, year: "April to Nov 2020", school: "Avion School", course: "Full Stack Web Development", achievement: ""},
        {logo: silliman_u, year: "June 2011 to Mar 2016", school: "Silliman University", course: "Bachelor of Science in Accountancy", achievement: ""},
        {logo: spu_u, year: "June 2006 to March 2011", school: "St. Paul University Dumaguete", course: "High School", achievement: "Class Valedictorian"},
        {logo: spu_u, year: "June 2000 to March 2006", school: "St. Paul University Dumaguete", course: "Grade School", achievement: "Class Valedictorian"},
    ]

    return (
            <div className={classes.container2}>
                <h2 className={classes.heading}>Education</h2>
                <div className={classes.horizontalContentRule}></div>
                {education.map( item =>{
                    return (
                        <div className={classes.set}>
                            <div className={classes.school}>
                                <Avatar src={item.logo} alt={item.school} style={{marginRight: '.5rem'}}/>
                                <span>{item.school}</span>
                            </div>
                            <div className={classes.details}>
                                <span>{item.course}</span>
                                <span>{item.year}</span>
                                <span>{item.achievement}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}

export default Education;