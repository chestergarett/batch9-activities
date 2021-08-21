import classes from "./Details.module.css";

const About = () => {
    
    const message = "I am currently a Data Analyst at Ernst & Young Philippines. Majority of my work revolves around data cleansing, data integrity checks and audit analytics. Although I am a Certified Public Accountant, I am interested in emerging technologies and passionate in coding."    
    
    return(
        <div className={classes.container}>
            <h2 className={classes.heading}>About</h2>
            <div className={classes.horizontalContentRule}></div>
            <div className={classes.subHeading}>
                {message}
            </div>
        </div>
    )
}

export default About;