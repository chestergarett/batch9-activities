import classes from './Details.module.css';
import prc_logo from '../../assets/school/prc_logo.jpeg';
import data_integration from '../../assets/school/data_integration.png';
import data_strategy from '../../assets/school/data_strategy.png';
import Avatar from '@material-ui/core/Avatar';


const Licenses = () => {

    const licenses = [
        {logo: prc_logo, title: "Certified Public Accountant", link: "https://www.linkedin.com/in/chester-garett-calingacion-cpa-033284170/"},
        {logo: data_integration, title: "EY Analytics - Data Integration - Bronze", link: "https://www.credly.com/badges/c647015a-d368-48d8-a803-ebb36eeeabd8?source=linked_in_profile"},
        {logo: data_strategy, title: "EY Data Strategy - Information Strategy - Bronze", link: "https://www.credly.com/badges/eed978cf-9806-48f4-9936-8ffe38b73149?source=linked_in_profile"},
    ]

    return (
        <div className={classes.container2}>
                <h2 className={classes.heading}>Licenses & Certifications</h2>
                <div className={classes.horizontalContentRule}></div>
                <div>
                    <div>
                        {licenses.map( license =>{
                            return (
                                <a href={license.link} target="_blank" className={classes.licenseBlock}>
                                    <Avatar src={license.logo} alt={license.title} variant="square" className={classes.licenseItem}/>
                                    <span>{license.title}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
        </div>
    )
}

export default Licenses;