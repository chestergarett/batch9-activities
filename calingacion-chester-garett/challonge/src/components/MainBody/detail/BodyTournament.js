import classes from './BodyTournament.module.css';
import BodyInput from './BodyInput';

const BodyTournament = () => {

    return(
        <div className={classes.body}>
            <div className={classes.mainStream}>
                livestream here
            </div>
            <div className={classes.richText}>
                <BodyInput/>
            </div>
        </div>
    )
}

export default BodyTournament;