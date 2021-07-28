import classes from './BodyInput.module.css';
import {GrEmoji} from 'react-icons/gr';
import {RiFileGifFill} from 'react-icons/ri'
import {IoDocumentAttachOutline} from 'react-icons/io5'
import Picker from 'emoji-picker-react';

const BodyInput = () => {

    return(
        <div className={classes.editor}>
            <input type='text' className={classes.input} placeholder="Message channel"/>
            <div className={classes.richText}>
                <IoDocumentAttachOutline size={30} className="icons"/>
                <RiFileGifFill size={30} className="icons"/>
                <GrEmoji size={30} className="icons"/>
                {/* <Picker/> */}
            </div>
        </div>
    )
}

export default BodyInput;
