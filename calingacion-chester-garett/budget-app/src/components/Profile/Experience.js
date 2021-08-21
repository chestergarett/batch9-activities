import classes from './Details.module.css';
import python from  '../../assets/icons8-python-48.png';
import sql from '../../assets/icons8-sql-64.png';
import powerBI from '../../assets/icons8-power-bi-48.png';
import powerApps from '../../assets/power_apps.png';
import powerAutomate from '../../assets/power_automate.png';
import sharepoint from '../../assets/ms_sharepoint.png';
import azure from '../../assets/ms_azure.png';
import alteryx from '../../assets/alteryx_logo.png';
import acl from '../../assets/acl_logo.jpeg';
import {v4} from 'uuid';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';


const Experience = () => {

    const experiences = [
        {id: v4(),
        position: "Senior Associate - Data/Audit Analytics", 
        company: "Ernst & Young - Global Delivery Services",
        date: "August 2020 to present", 
        responsibilities: [
            "I am responsible for the cleansing,transformation and reconciliation of raw financial data via SQL to assist and hasten audit procedures.",
            "I developed a script via Python to automate 90% of the team's documentation process.",
            "I do low code automation using Microsoft Power Platform technologies to make the completion of admin tasks faster. These tasks include automated emails to seniors when documents are ready for review and automated emails to clients when documents are ready for release.",
            "I create dashboards using Microsoft Power BI for faster and efficient tracking of team KPIs."
        ],
        tools: [{label: "SQL", tool: sql},{label: "Python", tool: python}, {label: "PowerApps", tool: powerApps}, {label: "PowerAutomate", tool: powerAutomate}, {label: "PowerBI", tool: powerBI}, {label: "SharePoint", tool: sharepoint}, {label: "Azure", tool: azure}]
        },
        {id: v4(),
        position: "Senior Associate - Business Consulting", 
        company: "SGV & Co.",
        date: "October 2019 to September 2020", 
        responsibilities: [
            "I am responsible for making scripts via SQL or Alteryx to assist the team in performing consulting processes and derive insights from client data.",
            "I make dashboards via Microsoft PowerBI to present to the client during discussion of findings.",
            "I assist associates in the development of scripts to hasten consulting processes.",
            "I developed a collaboration tool to be used by different teams during the audit cycle using Microsoft Power Platform technologies."
        ],
        tools: [{label: "SQL", tool: sql},{label: "Alteryx", tool:alteryx}, {label: "PowerApps", tool:powerApps}, {label: "PowerAutomate", tool:powerAutomate}, {label: "PowerBI", tool:powerBI}, {label: "Sharepoint", tool:sharepoint}]
        },
        {id: v4(),
        position: "Associate - Business Consulting", 
        company: "SGV & Co.",
        date: "December 2016 to October 2019", 
        responsibilities: [
            "I am responsible for reconciling financial data of different clients using Audit Command Language or Alteryx to hasten audit procedures.",
        ],
        tools: [{label: "ACL", tool: acl},{label: "Alteryx", tool: alteryx}]
        },
    ];
    return (
        <div className={classes.container}>
            <h2 className={classes.heading}>Experience</h2>
            <div className={classes.horizontalContentRule}></div>
            {experiences.map(
                item => {
                    return (
                        <div>
                            <h4 style={{marginBottom: '0'}}>{item.position}</h4>
                            <div>{item.company}</div>
                            <div style={{fontSize: '12px'}}>{item.date}</div>
                            <div className={classes.techStack}>
                                {item.tools.map(
                                    tool => {
                                        return (
                                            <Tooltip title={tool.label}>
                                                <Avatar src={tool.tool} alt="tech-stack" variant="square" className={classes.techItem}/>
                                            </Tooltip>
                                        )
                                    }
                                )}
                            </div>
                            <ul>
                                {item.responsibilities.map(
                                    responsibility => {
                                        return (
                                            <li key={v4()} id={v4()} className={classes.responsibility}>{responsibility}</li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                )}
            )}
        </div>
    )
}

export default Experience;