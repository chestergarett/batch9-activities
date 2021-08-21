import MainContainer from "../UI/MainContainer";
import classes from "./Profile.module.css";

import About from "./About";
import Experience from './Experience';
import Education from './Education';
import Licenses from './Licenses';

const Profile = () => {

    return (
        <MainContainer>
            <div className={classes.mainProfile}>
                <div className={classes.banner}>
                    <div className={classes.coverPhoto}/>
                    <div className={classes.profilePic}/>
                    <h2 className={classes.heading}>Chester Garett A. Calingacion</h2>
                    <p className={classes.subHeading}>Everything you ever wanted is on the other side of fear.</p>
                </div>
                <div className={classes.about}>
                    <About/>
                </div>
                <div className={classes.about}>
                    <Experience/>
                </div>
                <div className={classes.education}>
                    <Education/>
                </div>
                <div className={classes.about}>
                    <Licenses/>
                </div>
            </div>
        </MainContainer>
    )
}

export default Profile;