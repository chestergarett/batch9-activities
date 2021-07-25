import classes from './MainBody.module.css';

import BodyHeader from './BodyHeader';
import BodyDetail from './BodyDetail';

const MainBody = () => {

    return (
        <div className={classes.mainBody}>
            <div className={classes.mainHeader}>
                <BodyHeader />
            </div>
            <div className ={classes.mainDetail}>
                <BodyDetail/>
            </div>
        </div>
    )
}

export default MainBody;