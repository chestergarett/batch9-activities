import john_young from '../../assets/john_young.png';
import pau_riosa from '../../assets/pau_riosa.png';
import victor_rivera from '../../assets/victor_rivera.png';
import classes from './SidebarEndorsements.module.css'
import {v4} from 'uuid';

const endorsees =[
    {
        id: v4(),
        name: "Endorser 1",
        position: "Endorser Position",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices justo at nisi pharetra, eget elementum felis lobortis. Que Sera Sera whatever will be will be.",
        img: pau_riosa,
    },
    {
        id: v4(),
        name: "Endorser 2",
        position: "Endorser Position",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices justo at nisi pharetra, eget elementum felis lobortis. Que Sera Sera whatever will be will be.",
        img: john_young,
    },
    {
        id: v4(),
        name: "Endorser 3",
        position: "Endorser Position",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices justo at nisi pharetra, eget elementum felis lobortis. Que Sera Sera whatever will be will be.",
        img: victor_rivera,
    },
]
const SidebarEndorsements = () => {
    return(
        <ul className={classes.endorsements}>
            {endorsees.map((item) =>{
                return (
                <li key={item.id}>
                    <div>
                        <div className={classes.labels}>
                            <div className={classes.imgDiv}><img src={item.img} alt={item.name}/></div>
                            <div className={classes.innerLabels}>
                                <span>{item.name}</span>
                                <span>{item.position}</span>
                            </div>
                        </div>
                        <div className={classes.detailLabels}>
                            {item.message}
                        </div>
                    </div>
                </li>
                )}
             )}
        </ul>
    )
}

export default SidebarEndorsements;