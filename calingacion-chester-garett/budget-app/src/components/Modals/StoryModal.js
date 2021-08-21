import Modal from '../UI/Modal';
import classes from './StoryModal.module.css';

const StoryModal = (props) => {
    return (
        <Modal onClose={props.onClose} message={props.message}>
            <div className={classes.stories}>
            {props.message ? props.message : 'This feature is not yet available. Stay tuned!'}
            </div>
        </Modal>
    )
}

export default StoryModal;
